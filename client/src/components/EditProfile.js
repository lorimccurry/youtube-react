// @ts-nocheck
import React from 'react';
import Button from '../styles/Button';
import Wrapper from '../styles/EditProfile';
import EditProfileModal from './EditProfileModal';

function EditProfile({ profile }) {
  const [showModal, setShowModal] = React.useState(false);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <Wrapper>
        <div>
          <Button grey onClick={() => setShowModal(true)}>
            Edit Profile
          </Button>
        </div>
        {showModal && (
          <EditProfileModal profile={profile} closeModal={closeModal} />
        )}
      </Wrapper>
    </>
  );
}
export default EditProfile;
