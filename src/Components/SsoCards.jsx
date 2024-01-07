import React from 'react';
import { HiClipboard, HiEye, HiEyeSlash, HiPencil, HiTrash } from 'react-icons/hi2';

const SsoCards = () => {
    return (
        <div className="card rounded-lg transition-flex duration-300 text-secondary/75 flex flex-col col-span-6 row-span-4 relative bg-secondary p-4">
            <div className="flex justify-between items-center flex-grow font-black py-6">
                <p className='text-5xl'>UNICON</p>
                <div className="flex gap-4">
                    <div className="text-secondary cursor-pointer bg-primary p-3 rounded-lg">
                        <HiTrash className='text-xl' />
                    </div>
                    <div className="text-secondary cursor-pointer bg-primary p-3 rounded-lg">
                        <HiPencil className='text-xl' />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 space-y-2">
                    <p className="text-sm font-semibold">Apps</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="app bg-primary p-3 rounded-lg flex items-center justify-center">
                            <p>Shopify</p>
                        </div>
                        <div className="app bg-primary p-3 rounded-lg flex items-center justify-center">
                            <p>Walmart</p>
                        </div>
                        <div className="app bg-primary p-3 rounded-lg flex items-center justify-center">
                            <p>Etsy</p>
                        </div>
                        <div className="app bg-primary p-3 rounded-lg flex items-center justify-center text-center hover:bg-accent cursor-pointer">
                            <p>+2</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 space-y-2">
                    <p className="text-sm font-semibold">Scopes</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="app bg-primary p-3 rounded-lg flex items-center justify-center">
                            <p>remote_basics</p>
                        </div>
                        <div className="app bg-primary p-3 rounded-lg flex items-center justify-center">
                            <p>external_apis</p>
                        </div>
                        <div className="app bg-primary p-3 rounded-lg flex items-center justify-center text-center hover:bg-accent cursor-pointer">
                            <p>+6</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 space-y-4">
                    <div className="client_id space-y-2">
                        <p className="text-sm text-primary/50 tracking-wide capitalize">Client Id</p>
                        <div className="bg-primary p-3 flex rounded-lg items-center justify-between">
                            <input
                                type="text"
                                readOnly
                                className="bg-transparent w-full rounded-md outline-none italic"
                                value={'3498dcj83998dsiel32889s8'}
                            />
                            <div className="flex gap-2">
                                <HiEyeSlash className="text-xl cursor-pointer hover:text-white" />
                                <HiClipboard className="text-xl cursor-pointer hover:text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="client_secret space-y-2">
                        <p className="text-sm text-primary/50 tracking-wide capitalize">Client Secret</p>
                        <div className="bg-primary p-3 flex rounded-lg items-center justify-between">
                            <input
                                type="password"
                                readOnly
                                className="bg-transparent w-full rounded-md outline-none italic"
                                value={'3498dcj83998dsiel32889s83498dcj83998dsiel32889s8'}
                            />
                            <div className="flex gap-2">
                                <HiEye className="text-xl cursor-pointer hover:text-white" />
                                <HiClipboard className="text-xl cursor-pointer hover:text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SsoCards;
