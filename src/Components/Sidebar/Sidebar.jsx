import React from 'react'
import Logo from './Logo'
import Section from './Section'
import Tile from './Tile'
import { RiFlashlightLine, RiHeadphoneLine, RiHome2Fill, RiHome2Line, RiNotionLine, RiSettings2Line } from "react-icons/ri";
import { HiAcademicCap, HiCog, HiCog8Tooth, HiCursorArrowRipple, HiMiniHome } from "react-icons/hi2";
import Account from './Account';

const Sidebar = () => {
    return (
        <div className='col-span-2 flex flex-col pb-3 items-center h-screen bg-secondary text-primary space-y-2'>
            <Logo />
            <Section>
                <Tile name={"Dashboard"} icon={<HiMiniHome />} active />
                <Tile name={"Permissions"} icon={<HiCursorArrowRipple />} />
                <Tile name={"Management"} icon={<HiAcademicCap />} />
                <Tile name={"Settings"} icon={<HiCog8Tooth />} />
            </Section>
            <Section name={'teams'}>
                <Tile name={"Permissions"} icon={<HiCursorArrowRipple />} />
                <Tile name={"Management"} icon={<HiAcademicCap />} />
                <Tile name={"Settings"} icon={<HiCog8Tooth />} />
            </Section>
            <div className="grow"></div>
            <Account name={"punit verma"} email={"punit@email.com"} avatarUrl={"https://source.unsplash.com/50x50/?avatar"} />
        </div>
    )
}

export default Sidebar
