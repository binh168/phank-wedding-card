import Image from 'next/image'
import styles from './page.module.css'

import Event from "@/components/card/event";
import GalleryCard from "@/components/card/gallery";
import Confirm from "@/components/card/confirm";
import Map from "@/components/card/map";
import Comment from "@/components/card/comment";

export default function Home() {
  return (
      <div className="page-content">
        <div className="div">
          <div className="ww-home-page" id="home">
            <div className="ww-wedding-announcement d-flex align-items-center justify-content-start">
              <div className="container ww-announcement-container">
                <p className="ww-couple-name ww-title">Phank & Chồng</p>
                <p className="h2 mt-5 ww-title">
                  | WE ARE GETTING MARRIED |
                </p>
                <p className="h2 mt-5 ww-title">
                  <b>2024. 01. 06. SAT PM 16:00</b>
                  <br/>Địa chỉ tổ chức tiệc cưới _ Biệt phủ Thái Nguyên :=))))
                </p>
              </div>
            </div>
          </div>
          <div className="ww-nav-bar sticky-top bg-light">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <button aria-controls="ww-navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#ww-navbarNav" data-toggle="collapse" type="button">
                  <span className="navbar-toggler-icon"></span>
                </button>
                {/*<div className="collapse navbar-collapse text-uppercase" id="ww-navbarNav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link smooth-scroll" href="@/pages/index#home">Home</a>
                    </li>
                    <li className="nav-item"><a className="nav-link smooth-scroll"
                                                href="@/pages/index#couple">Couple</a></li>
                    <li className="nav-item"><a className="nav-link smooth-scroll"
                                                href="@/pages/index#events">Events</a></li>
                    <li className="nav-item"><a className="nav-link smooth-scroll"
                                                href="@/pages/index#gallery">Gallery</a></li>
                  </ul>
                </div>*/}
              </div>
            </nav>
          </div>
          <div className="ww-section" id="couple">
            <div className="container">
              <h2 className="h1 text-center pb-3 ww-title">Cô dâu & Chú rể</h2>
              <div className="row text-center">
                <div className="col-md-6">
                  <div className="mt-3">
                    <h3 className="h2 ww-title">Phank</h3>
                    <Image
                        alt="Groom"
                        className="img-fluid"
                        src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic8.jpeg`}
                        width={500}
                        height={500}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mt-3">
                    <h3 className="h2 ww-title">Chồng</h3>
                    <Image alt="Bride" className="img-fluid" width={500}
                           height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic9.jpeg`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Event />
          <GalleryCard />
          <Confirm />
          <Map />
          <Comment />
        </div>
      </div>
  )
}
