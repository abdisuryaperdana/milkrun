import Image from "next/image";
import Link from "next/link";
import {AiFillHome} from "react-icons/ai"
import {FaRoute} from "react-icons/fa"
import {BiTimeFive} from "react-icons/bi"
import {FaHistory} from "react-icons/fa"
import {MdArrowBackIos} from "react-icons/md"
import {FaRunning} from "react-icons/fa"
import {MdStorage} from "react-icons/md"
import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";


export default function Sidebar(){
    const {isCollabsed,toggleSidebarCollapse} = useContext(SidebarContext)

    return(
        <div className="sidebar_wrapper">
            <button className="btn" onClick={toggleSidebarCollapse}>
            <MdArrowBackIos/>
            </button>
            <aside className="sidebar" data-collapse={isCollabsed}>
                <div className="sidebar_top">
                <FaRunning
                width={80}
                height={80}
                className="sidebar_logo"/>
                <div className="sidebar_title">Milk Run</div>
                </div>
                <ul className="sidebar_list">
                    <li className="sidebar_item">
                        <Link href="/" className="sidebar_link">
                            <div className="sidebar_icon">
                                <AiFillHome/>
                            </div>
                            <span className="sidebar_name">Dashboard</span>
                        </Link>
                        <Link href="/Rute" className="sidebar_link">
                            <div className="sidebar_icon">
                                <FaRoute/>
                            </div>
                            <span className="sidebar_name">Rute</span>
                        </Link>
                        <Link href="/Jadwal" className="sidebar_link">
                            <div className="sidebar_icon">
                                <BiTimeFive/>
                            </div>
                            <span className="sidebar_name">Jadwal</span>
                        </Link>
                        <Link href="/Asset" className="sidebar_link">
                            <div className="sidebar_icon">
                                <MdStorage/>
                            </div>
                            <span className="sidebar_name">Asset</span>
                        </Link>
                        <Link href="/History" className="sidebar_link">
                            <div className="sidebar_icon">
                                <FaHistory/>
                            </div>
                            <span className="sidebar_name">History</span>
                        </Link>
                        
                    </li>
                </ul>
            </aside>
        </div>
    )
}