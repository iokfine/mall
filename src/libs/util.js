let util = {

};
util.title = function (title) {
    title = title ? title  : 'iokfine';
    window.document.title = title;
};

export default util;