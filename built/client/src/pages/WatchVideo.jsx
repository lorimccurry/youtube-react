"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var api_client_1 = require("../utils/api-client");
var react_query_1 = require("react-query");
var react_router_dom_1 = require("react-router-dom");
var AddComment_1 = require("../components/AddComment");
var Icons_1 = require("../components/Icons");
var NoResults_1 = require("../components/NoResults");
var VideoPlayer_1 = require("../components/VideoPlayer");
var Button_1 = require("../styles/Button");
var WatchVideo_1 = require("../styles/WatchVideo");
var WatchVideoSkeleton_1 = require("../skeletons/WatchVideoSkeleton");
var date_1 = require("../utils/date");
var VideoCard_1 = require("../components/VideoCard");
var use_auth_action_1 = require("../hooks/use-auth-action");
function WatchVideo() {
    var videoId = react_router_dom_1.useParams().videoId;
    var handleAuthAction = use_auth_action_1.default();
    var _a = react_query_1.useQuery(['WatchVideo', videoId], function () { return api_client_1.client.get("/videos/" + videoId).then(function (res) { return res.data.video; }); }), video = _a.data, isLoadingVideo = _a.isLoading;
    var _b = react_query_1.useQuery(['WatchVideo', 'Up Next'], function () { return api_client_1.client.get('/videos').then(function (res) { return res.data.videos; }); }), next = _b.data, isLoadingNext = _b.isLoading;
    if (isLoadingVideo || isLoadingNext) {
        return <WatchVideoSkeleton_1.default />;
    }
    if (!isLoadingVideo && !video) {
        return (<NoResults_1.default title="Page not found" text="The page you are looking for is not found or it may have been removed"/>);
    }
    function handleLikeVideo() {
        handleAuthAction(api_client_1.likeVideo, video.id);
    }
    function handleDislikeVideo() {
        handleAuthAction(api_client_1.dislikeVideo, video.id);
    }
    function handleToggleSubscribe() {
        handleAuthAction(api_client_1.toggleSubscribeUser, video.user.id);
    }
    return (<WatchVideo_1.default filledLike={video && video.isLiked} filledDislike={video && video.isDisliked}>
      <div className="video-container">
        <div className="video">
          {!isLoadingVideo && <VideoPlayer_1.default video={video}/>}
        </div>

        <div className="video-info">
          <h3>{video.title}</h3>

          <div className="video-info-stats">
            <p>
              <span>{video.views} views</span> <span>•</span>{' '}
              <span>Premiered {date_1.formatCreatedAt(video.createdAt)}</span>
            </p>

            <div className="likes-dislikes flex-row">
              <p className="flex-row like">
                <Icons_1.LikeIcon onClick={handleLikeVideo}/>
                <span>{video.likesCount}</span>
              </p>
              <p className="flex-row dislike" style={{ marginLeft: '1rem' }}>
                <Icons_1.DislikeIcon onClick={handleDislikeVideo}/>
                <span>{video.dislikesCount}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="channel-info-description">
          <div className="channel-info-flex">
            <div className="channel-info flex-row">
              <img className="avatar md" src={video.user.avatar} alt={video.user.userName + " channel avatar"}/>
              <div className="channel-info-meta">
                <h4>
                  <react_router_dom_1.Link to={"/channel/" + video.user.id}>
                    {video.user.username}
                  </react_router_dom_1.Link>
                </h4>
                <span className="secondary small">
                  {video.subscribersCount} subscribers
                </span>
              </div>
            </div>

            {!video.isVideoMine && !video.isSubscribed && (<Button_1.default onClick={handleToggleSubscribe}>Subscribe</Button_1.default>)}

            {!video.isVideoMine && video.isSubscribed && (<Button_1.default grey onClick={handleToggleSubscribe}>
                Subscribed
              </Button_1.default>)}
          </div>

          <p>{video.description}</p>
        </div>

        <AddComment_1.default video={video}/>
      </div>

      <div className="related-videos">
        <h3 className="up-next">Up Next</h3>
        {next
        .filter(function (v) { return v.id !== video.id; })
        .slice(0, 10)
        .map(function (video) { return (<VideoCard_1.default key={video.id} hideAvatar video={video}/>); })}
      </div>
    </WatchVideo_1.default>);
}
exports.default = WatchVideo;
