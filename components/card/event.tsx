import Image from "next/image";

export default function Event() {
    return(
        <div className="ww-section bg-light" id="events">
            <div className="container ww-wedding-event">
                <h2 className="h1 text-center pb-3 ww-title">Địa điểm</h2>
                {/*<div className="col text-center mb-5">*/}
                {/*    <h6>200<br/>*/}
                {/*        */}
                {/*    </h6>*/}
                {/*</div>*/}
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="my-3">
                            <div className="h4">Lễ cưới chính</div>
                            <ul>
                                <li>
                                    <i className="text-muted fas fa-map-marker-alt"></i>
                                    <span className="pl-2 text-muted">Tầng ..., Trung tâm tiệc</span>
                                </li>
                                <li className="pt-2">
                                    <i className="text-muted far fa-calendar-alt"></i>
                                    <span className="pl-2 text-muted">Ngày 06/01/2024</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div className="my-3">
                            <Image alt="Wedding Party" className="img-fluid" width={500}
                                   height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/wedding-party.jpg`} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="my-3">
                            <div className="h4">Tiệc</div>
                            <ul>
                                <li>
                                    <i className="text-muted fas fa-map-marker-alt "></i>
                                    <span className="pl-2 text-muted">Khách sạn ...</span>
                                </li>
                                <li className="pt-2">
                                    <i className="text-muted far fa-calendar-alt "></i>
                                    <span className="pl-2 text-muted">Ngày 06, tháng 01, năm 2024, 16h30</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div className="my-3">
                            <Image
                                alt="Reception"
                                className="img-fluid"
                                width={500}
                                height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/reception.jpg`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}