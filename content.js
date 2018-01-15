const allowCutCopyAndPaste = function(e){
  e.stopImmediatePropagation();
  return true;
};

chrome.storage.sync.get(window.defaultValues, function({exclude, include}) {
  const excludes = new RegExp(exclude.split('\n').join('|'));
  const includes = new RegExp(include.split('\n').join('|'));
  const location = window.location.href;

  if (includes.test(location) && !excludes.test(location)) {
    document.addEventListener('copy', allowCutCopyAndPaste, true);
    document.addEventListener('paste', allowCutCopyAndPaste, true);
    document.addEventListener('cut', allowCutCopyAndPaste, true);
    document.addEventListener('beforeChange',allowCutCopyAndPaste,true);
  }
});
