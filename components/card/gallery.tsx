import Image from "next/image";

export default function GalleryCard() {
    return (
        <div className="ww-section" id="gallery">
            <div className="ww-photo-gallery">
                <div className="container">
                    <h2 className="h1 text-center pb-3 ww-title">Ảnh cưới</h2>
                    <div className="ww-gallery">
                        <div className="card-columns">
                            <div className="card" data-groups="[&quot;party&quot;,&quot;wedding&quot;]">
                                <a data-gallery="ww-gallery" data-toggle="lightbox">
                                    <Image alt="Gallery Pic 2" className="img-fluid" width={500}
                                           height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic2.jpeg`} />
                                </a>
                            </div>
                            <div className="card" data-groups="[&quot;vacation&quot;]">
                                <a data-gallery="ww-gallery" data-toggle="lightbox">
                                    <Image alt="Gallery Pic 3" className="img-fluid" width={500}
                                           height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic3.jpeg`} />
                                </a>
                            </div>
                            <div className="card" data-groups="[&quot;party&quot;,&quot;vacation&quot;]">
                                <a data-gallery="ww-gallery" data-toggle="lightbox">
                                    <Image alt="Gallery Pic 4" className="img-fluid" width={500}
                                           height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic4.jpeg`} />
                                </a>
                            </div>
                            <div className="card" data-groups="[&quot;vacation&quot;]">
                                <a data-gallery="ww-gallery" data-toggle="lightbox">
                                    <Image alt="Gallery Pic 5" className="img-fluid" width={500}
                                           height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic6.jpeg`} />
                                </a>
                            </div>
                            <div className="card"
                                 data-groups="[&quot;wedding&quot;,&quot;ceremony&quot;,&quot;party&quot;]">
                                <a data-gallery="ww-gallery" data-toggle="lightbox">
                                    <Image alt="Gallery Pic 6" className="img-fluid" width={500}
                                           height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic7.jpeg`} />
                                </a>
                            </div>
                            <div className="card" data-groups="[&quot;vacation&quot;]">
                                <a data-gallery="ww-gallery" data-toggle="lightbox">
                                    <Image alt="Gallery Pic 7" className="img-fluid" width={500}
                                           height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic5.jpeg`} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}