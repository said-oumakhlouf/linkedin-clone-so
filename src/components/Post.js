import { Avatar } from '@material-ui/core';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import React from 'react';
import InputOption from './InputOption';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = ({name, description, message, photoUrl}) => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" />
                <InputOption Icon={SendOutlinedIcon} title="Send" />
            </div>
        </div>
    );
};

export default Post;