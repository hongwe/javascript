function myAddEvent(obj, ev, fn) {
    if (obj.attachEvent) {
        obj.attachEvent("on" + ev, fn);
    } else {
        obj.addEventListens(ev, fn, false);
    }
}
