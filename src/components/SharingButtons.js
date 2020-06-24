import React from 'react';
import { Facebook, Twitter } from 'react-sharingbuttons';

const SharingButtons = ({ title, url }) => {
  return (
    <>
      <Twitter url={url} shareText={title} />
      <Facebook url={url} />
    </>
  );
};

export default SharingButtons;

