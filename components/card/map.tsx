import Image from "next/image";

export default function Map() {
    <div className="ww-section ww-rsvp-detail" id="map">
        <div className="container">
            <div className="col text-center">
                <h2 className="h1 text-center pb-3 ww-title">오시는 길</h2>
                <div>
                    <h5>센텀사이언스파크웨딩홀 23층 스카이홀</h5>
                    <h6>(부산 해운대구 센텀중앙로 79)</h6>
                </div>
            </div>

            <div className="form-group">
                <div className="col-md-12">
                    <div className="my-3 text-center">
                        <a href="http://naver.me/5pTy3HCa">
                            <Image alt="naver-map" className="map-icon" id="naver-map"
                                   width={500}
                                   height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/map/naver-map.png`} />
                        </a>
                        <a href="http://dmaps.kr/2bms8">
                            <Image alt="kakao-map" className="map-icon" id="kakao-map"
                                   width={500}
                                   height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/map/kakao-map.png`} />
                        </a>
                        <a href="https://maps.app.goo.gl/jfDxw">
                            <Image alt="google-map" className="map-icon" id="google-map"
                                   width={500}
                                   height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/map/google-map.png`} />
                        </a>
                    </div>
                    <div className="col text-center">
                        <label>
                            셔틀버스 - 센텀시티역 4번출구앞에서 15분 간격으로 운행
                        </label>
                    </div>
                    <div className="my-3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.297439052569!2d129.1238775160104!3d35.1741384652207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356892c2513ecf5d%3A0x7d362ece2091e2f8!2z7IS87YWA7IKs7J207Ja47Iqk7YyM7YGsIOy7qOuypOyFmO2ZgA!5e0!3m2!1sko!2skr!4v1554092125630!5m2!1sko!2skr"
                            width="100%" height="400"></iframe>
                    </div>
                </div>
            </div>


        </div>
    </div>
}