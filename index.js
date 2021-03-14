const fs = require("fs");
const puppeteer = require("puppeteer");
const clear = require("./clear")

const main = async () => {

    await clear;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // pokemon image download
    // https://www.cpokemon.com/pokes/animated/ds/
    for (let i = 1; i < 11 ; i++) {

        const viewSource = await page.goto(`https://www.cpokemon.com/pokes/animated/ds/${i}.gif`);
        fs.writeFile(`./dist/${i}.gif`, await viewSource.buffer(), function(err) {
            if(err) {
                return console.log(err);
            }

            console.log(`The file${i} was saved!`);
        });

    }
    await browser.close();
}

main();