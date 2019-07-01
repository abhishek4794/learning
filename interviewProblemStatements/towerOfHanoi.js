
function towerOfHanoi(noOfDiscs,fromDisc,auxDisc,toDisc) {
    if(noOfDiscs>0) {
        towerOfHanoi(noOfDiscs - 1, fromDisc, toDisc, auxDisc);
        console.log(`Moving ${fromDisc} -----> ${toDisc} `);
        towerOfHanoi(noOfDiscs - 1, auxDisc, fromDisc, toDisc)
    }
}

towerOfHanoi(3,'A','B','C');