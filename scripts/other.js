hexo.extend.tag.register('mood', function(args, content){

	date = args[0]
	time = args[1]
	logo = args[2]
	var result = '';

	result += '<blockquote>';
	logo = '<span class="fa-stack fa-lg"><i class="fa ' + logo + ' fa-stack-1x"></i></span>';
	result += hexo.render.renderSync({text: logo + content, engine: 'markdown'});
	footer = '<span>' + date + ' ' + time + '</span>'
	result += '<footer>' + footer + '</footer>';
	result += '</blockquote>';

	return result;
}, {ends: true});

var pinyin = require("pinyin");

hexo.extend.tag.register('ruby', function(args) {

  var splited = args.join(' ').split('|');

  var origin = splited[0].trim();

  var ruby = origin;
  if (splited.length > 1) {
    ruby = splited[1].trim();
  }

  var pinyinic_ruby = [].concat.apply([],pinyin(ruby, {
    segment: true
  }));

  var ruby_result = "<ruby>" + origin + "<rp> (</rp><rt>" + pinyinic_ruby.join(' ') + "</rt><rp>) </rp></ruby>"
  
  return ruby_result;
});

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