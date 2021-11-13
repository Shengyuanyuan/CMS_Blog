import React from 'react';
import Image from 'next/image';

const Author = ({author}) => {
    return (
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
            <div className="absolute left-0 right-0 -top-12">
                <Image className="align-middle rounded-full"
                    unoptimized
                    alt={author.name}
                    src={author.photo.url}
                    height="100px"
                    width="100px"
                />
            </div>
                <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
                <p className="text-lg text-white">{author.bio}</p>
        </div>
    )
}

export default Author
