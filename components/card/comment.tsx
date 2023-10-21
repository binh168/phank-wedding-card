export default function Comment() {
    return (
        <div className="ww-section bg-light" id="comment">
            <div className="ww-photo-gallery">
                <div className="container">
                    <div className="col text-center">
                        <h2 className="h1 text-center pb-3 ww-title">Tin nhắn chúc mừng</h2><br/>
                        <div id="comments"></div>
                        <br/>
                        <div className="row">
                            <div className="col text-center">
                                <form
                                    action="https://github.com/AndersonChoi/wedding-card/blob/master/README.md">
                                    <button className="btn btn-primary btn-submit" type="submit">
                                        Để lại lời nhắn
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}