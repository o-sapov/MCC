

document.addEventListener("DOMContentLoaded", (event) => {
    verovio.module.onRuntimeInitialized = () => {
        const tk = new verovio.toolkit();
        console.log("Verovio has loaded!");

        const notation = document.getElementById("svg_output");


        options1 = {
            scale: 30,
            landscape: true,
            adjustPageWidth: true
        };

        
        let zoom = 10;
        let pageHeight = document.body.clientHeight * 100 / zoom;
        let pageWidth = document.body.clientWidth * 100 / zoom;

        options2 = {
            pageHeight: pageHeight,
            pageWidth: pageWidth,
            // Add an option to pass note@pname and note@oct as svg @data-*
            svgAdditionalAttribute: ["note@pname", "note@oct"]
        };
       

        // Verovio Options
        tk.setOptions(options1);



        fetch("./data/dmeref_457-003_5490.xml")
            // fetch("https://www.verovio.org/examples/downloads/Schubert_Lindenbaum.mei")
            .then((response) => response.text())
            .then((meiXML) => {
                let svg = tk.renderData(meiXML, {});
                document.getElementById("notation").innerHTML = svg;
            });


        // var meiXML = "";
        // Options for SaxonJS
        //   var options = {
        //     location: "./data/dmeref_457-003_5490.xml",
        //     type: "text"
        // };
        // meiFile = SaxonJS.getResource(options);    
        // meiFile.then(function (result) {

        //   meiXML = result;
        // });
        // console.log(meiXML);
        // let svg = tk.renderData(meiXML, {});
        // document.getElementById("notation").innerHTML = svg;



        // console.log("Verovio options:", tk.getOptions());
        // console.log("Verovio dafault options:", tk.getDefaultOptions());

    }
});
