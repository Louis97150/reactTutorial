function Entry(){
    return(
        <div id="fujiGlobal">
            <div id="main-image-container">
                <img src="./images/mtFuji.jpg" alt="Mont Fuji" id="montagne"/>
            </div>

            <div id="location">
                <div id="position">
                    {/* Don't forget the alt */}
                    <div id="image-container-loca">
                        <img src="./images/marker.png" alt="Marker symbole" id="loca"/>
                    </div>
                    <h3>JAPAN</h3>
                    <a href="https://maps.app.goo.gl/mbco93iGbgwzxaxQ9" id="link-map">View on Google Maps</a>
                </div>
        
                <h1>Mont Fuji</h1>
                <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
                <p>
                    Mount Fuji is the tallest mountain in Japan, standing
                    at 3776 meter (12,380 feet). Mount Fuji is the single
                    most popular tourist site in Japan, for both
                    Japanese and foreign tourists
                </p>
            </div>
        </div>

    )
}

export default Entry