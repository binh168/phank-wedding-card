export default function Confirm() {
    return (
        <div className="ww-section" id="confirm">
            <div className="col text-center container">
                <div id="fh5co-started" className="fh5co-section-gray">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="h1 text-center pb-3 ww-title">
                            {/*<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">*/}
                                <p className="sub-title sub-title__wedding">Để chúng mình chuẩn bị chu đáo nhất</p>
                                <h2 className="main-font">{`Bạn vui lòng xác nhận tham dự`}</h2>
                                {/*<div onClick={onSelect(options.YES)}>*/}
                                <div>
                                    <input
                                        style={{marginRight: 8, marginTop: 16}}
                                        type="radio"
                                        id="ok"
                                        name="drone"
                                        // value={options.YES}
                                        // checked={selected === options.YES}
                                    />
                                    <label style={{fontSize: 18, fontWeight: 'normal'}} htmlFor="ok">
                                        {' '}
                                        Mình chắc chắn sẽ tham dự
                                    </label>
                                </div>
                                {/*<div onClick={onSelect(options.NO)}>*/}
                                <div>
                                    <input
                                        style={{marginRight: 8}}
                                        type="radio"
                                        id="no"
                                        name="drone"
                                        // value={options.NO}
                                        // checked={selected === options.NO}
                                    />
                                    <label style={{fontSize: 18, fontWeight: 'normal'}} htmlFor="no">
                                        {' '}
                                        Xin lỗi, mình không thể tham dự
                                    </label>
                                </div>
                            {/*</div>*/}
                        </div>
                        {/*<div className="row" css={styFlex}>*/}
                        {/*<div className="row">*/}
                        {/*    <div className="col-md-3">*/}
                        {/*        /!*<button onClick={submit} className="btn btn-default btn-block">*!/*/}
                        {/*        <button className="btn btn-default btn-block">*/}
                        {/*            /!*{submitting ? 'Đang gửi...' : 'Gửi'}*!/*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>

            </div>

        </div>
    )
}