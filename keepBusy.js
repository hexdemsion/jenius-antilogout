// This function is doing some activity in page.
// That will clicks Jenius logo in every 5seconds.
// So the active timeout interval will never down.
function keepBusy() {
    setTimeout(function () {
    	document.getElementsByClassName("rn-1p0dtai rn-1pi2tsx rn-1d2f490 rn-1272l3b rn-u8s1d rn-zchlnj rn-ipm5af rn-13qz1uu rn-1wyyakw")[0].click()
        keepBusy()
    }, 30000)
}keepBusy()