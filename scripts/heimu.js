hexo.extend.tag.register('heimu', function(args) {

  var splited = args.join(' ').split('|');

  var content = splited[0].trim();
  var title = '你知道的太多了';
  if (splited.length > 1) {
    title = splited[1].trim();
  }

  var result = '';

  result += '<span class="heimu" title="';
  result += title;
  result += '">';
  result += content;
  result += '</span>';
  
  return result;
});