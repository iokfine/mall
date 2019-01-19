let util = {

};
util.title = function (title) {
    title = title ? title  : 'PATU';
    window.document.title = title;
};

export default util;