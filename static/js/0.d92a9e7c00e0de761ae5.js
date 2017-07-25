webpackJsonp([0],{810:function(e,r,t){var n;/*! showdown 02-06-2017 */
(function(){function s(e){"use strict";var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Specify a prefix to generated header ids",type:"string"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,description:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,description:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,description:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,description:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",description:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,description:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,description:"Open all links in new windows",type:"boolean"}};if(!1===e)return JSON.parse(JSON.stringify(r));var t={};for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n].defaultValue);return t}function a(e,r){"use strict";var t=r?"Error in "+r+" extension->":"Error in unnamed extension",n={valid:!0,error:""};o.helper.isArray(e)||(e=[e]);for(var s=0;s<e.length;++s){var a=t+" sub-extension "+s+": ",i=e[s];if("object"!=typeof i)return n.valid=!1,n.error=a+"must be an object, but "+typeof i+" given",n;if(!o.helper.isString(i.type))return n.valid=!1,n.error=a+'property "type" must be a string, but '+typeof i.type+" given",n;var c=i.type=i.type.toLowerCase();if("language"===c&&(c=i.type="lang"),"html"===c&&(c=i.type="output"),"lang"!==c&&"output"!==c&&"listener"!==c)return n.valid=!1,n.error=a+"type "+c+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',n;if("listener"===c){if(o.helper.isUndefined(i.listeners))return n.valid=!1,n.error=a+'. Extensions of type "listener" must have a property called "listeners"',n}else if(o.helper.isUndefined(i.filter)&&o.helper.isUndefined(i.regex))return n.valid=!1,n.error=a+c+' extensions must define either a "regex" property or a "filter" method',n;if(i.listeners){if("object"!=typeof i.listeners)return n.valid=!1,n.error=a+'"listeners" property must be an object but '+typeof i.listeners+" given",n;for(var l in i.listeners)if(i.listeners.hasOwnProperty(l)&&"function"!=typeof i.listeners[l])return n.valid=!1,n.error=a+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+l+" must be a function but "+typeof i.listeners[l]+" given",n}if(i.filter){if("function"!=typeof i.filter)return n.valid=!1,n.error=a+'"filter" must be a function, but '+typeof i.filter+" given",n}else if(i.regex){if(o.helper.isString(i.regex)&&(i.regex=new RegExp(i.regex,"g")),!(i.regex instanceof RegExp))return n.valid=!1,n.error=a+'"regex" property must either be a string or a RegExp object, but '+typeof i.regex+" given",n;if(o.helper.isUndefined(i.replace))return n.valid=!1,n.error=a+'"regex" extensions must implement a replace string or function',n}}return n}function i(e,r){"use strict";return"¨E"+r.charCodeAt(0)+"E"}var o={},c={},l={},u=s(!0),p="vanilla",h={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:s(!0),allOn:function(){"use strict";var e=s(!0),r={};for(var t in e)e.hasOwnProperty(t)&&(r[t]=!0);return r}()};o.helper={},o.extensions={},o.setOption=function(e,r){"use strict";return u[e]=r,this},o.getOption=function(e){"use strict";return u[e]},o.getOptions=function(){"use strict";return u},o.resetOptions=function(){"use strict";u=s(!0)},o.setFlavor=function(e){"use strict";if(!h.hasOwnProperty(e))throw Error(e+" flavor was not found");o.resetOptions();var r=h[e];p=e;for(var t in r)r.hasOwnProperty(t)&&(u[t]=r[t])},o.getFlavor=function(){"use strict";return p},o.getFlavorOptions=function(e){"use strict";if(h.hasOwnProperty(e))return h[e]},o.getDefaultOptions=function(e){"use strict";return s(e)},o.subParser=function(e,r){"use strict";if(o.helper.isString(e)){if(void 0===r){if(c.hasOwnProperty(e))return c[e];throw Error("SubParser named "+e+" not registered!")}c[e]=r}},o.extension=function(e,r){"use strict";if(!o.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=o.helper.stdExtName(e),o.helper.isUndefined(r)){if(!l.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return l[e]}"function"==typeof r&&(r=r()),o.helper.isArray(r)||(r=[r]);var t=a(r,e);if(!t.valid)throw Error(t.error);l[e]=r},o.getAllExtensions=function(){"use strict";return l},o.removeExtension=function(e){"use strict";delete l[e]},o.resetExtensions=function(){"use strict";l={}},o.validateExtension=function(e){"use strict";var r=a(e,null);return!!r.valid||(console.warn(r.error),!1)},o.hasOwnProperty("helper")||(o.helper={}),o.helper.isString=function(e){"use strict";return"string"==typeof e||e instanceof String},o.helper.isFunction=function(e){"use strict";var r={};return e&&"[object Function]"===r.toString.call(e)},o.helper.isArray=function(e){"use strict";return e.constructor===Array},o.helper.isUndefined=function(e){"use strict";return void 0===e},o.helper.forEach=function(e,r){"use strict";if(o.helper.isUndefined(e))throw new Error("obj param is required");if(o.helper.isUndefined(r))throw new Error("callback param is required");if(!o.helper.isFunction(r))throw new Error("callback param must be a function/closure");if("function"==typeof e.forEach)e.forEach(r);else if(o.helper.isArray(e))for(var t=0;t<e.length;t++)r(e[t],t,e);else{if("object"!=typeof e)throw new Error("obj does not seem to be an array or an iterable object");for(var n in e)e.hasOwnProperty(n)&&r(e[n],n,e)}},o.helper.stdExtName=function(e){"use strict";return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()},o.helper.escapeCharactersCallback=i,o.helper.escapeCharacters=function(e,r,t){"use strict";var n="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])";t&&(n="\\\\"+n);var s=new RegExp(n,"g");return e=e.replace(s,i)};var d=function(e,r,t,n){"use strict";var s,a,i,o,c,l=n||"",u=l.indexOf("g")>-1,p=new RegExp(r+"|"+t,"g"+l.replace(/g/g,"")),h=new RegExp(r,l.replace(/g/g,"")),d=[];do{for(s=0;i=p.exec(e);)if(h.test(i[0]))s++||(a=p.lastIndex,o=a-i[0].length);else if(s&&!--s){c=i.index+i[0].length;var f={left:{start:o,end:a},match:{start:a,end:i.index},right:{start:i.index,end:c},wholeMatch:{start:o,end:c}};if(d.push(f),!u)return d}}while(s&&(p.lastIndex=a));return d};o.helper.matchRecursiveRegExp=function(e,r,t,n){"use strict";for(var s=d(e,r,t,n),a=[],i=0;i<s.length;++i)a.push([e.slice(s[i].wholeMatch.start,s[i].wholeMatch.end),e.slice(s[i].match.start,s[i].match.end),e.slice(s[i].left.start,s[i].left.end),e.slice(s[i].right.start,s[i].right.end)]);return a},o.helper.replaceRecursiveRegExp=function(e,r,t,n,s){"use strict";if(!o.helper.isFunction(r)){var a=r;r=function(){return a}}var i=d(e,t,n,s),c=e,l=i.length;if(l>0){var u=[];0!==i[0].wholeMatch.start&&u.push(e.slice(0,i[0].wholeMatch.start));for(var p=0;p<l;++p)u.push(r(e.slice(i[p].wholeMatch.start,i[p].wholeMatch.end),e.slice(i[p].match.start,i[p].match.end),e.slice(i[p].left.start,i[p].left.end),e.slice(i[p].right.start,i[p].right.end))),p<l-1&&u.push(e.slice(i[p].wholeMatch.end,i[p+1].wholeMatch.start));i[l-1].wholeMatch.end<e.length&&u.push(e.slice(i[l-1].wholeMatch.end)),c=u.join("")}return c},o.helper.regexIndexOf=function(e,r,t){"use strict";if(!o.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(r instanceof RegExp==!1)throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var n=e.substring(t||0).search(r);return n>=0?n+(t||0):n},o.helper.splitAtIndex=function(e,r){"use strict";if(!o.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[e.substring(0,r),e.substring(r)]},o.helper.encodeEmailAddress=function(e){"use strict";var r=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e=e.replace(/./g,function(e){if("@"===e)e=r[Math.floor(2*Math.random())](e);else{var t=Math.random();e=t>.9?r[2](e):t>.45?r[1](e):r[0](e)}return e})},"undefined"==typeof console&&(console={warn:function(e){"use strict";alert(e)},log:function(e){"use strict";alert(e)},error:function(e){"use strict";throw e}}),o.helper.regexes={asteriskAndDash:/([*_])/g},o.Converter=function(e){"use strict";function r(e,r){if(r=r||null,o.helper.isString(e)){if(e=o.helper.stdExtName(e),r=e,o.extensions[e])return console.warn("DEPRECATION WARNING: "+e+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void t(o.extensions[e],e);if(o.helper.isUndefined(l[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.');e=l[e]}"function"==typeof e&&(e=e()),o.helper.isArray(e)||(e=[e]);var s=a(e,r);if(!s.valid)throw Error(s.error);for(var i=0;i<e.length;++i){switch(e[i].type){case"lang":c.push(e[i]);break;case"output":d.push(e[i])}if(e[i].hasOwnProperty("listeners"))for(var u in e[i].listeners)e[i].listeners.hasOwnProperty(u)&&n(u,e[i].listeners[u])}}function t(e,r){"function"==typeof e&&(e=e(new o.Converter)),o.helper.isArray(e)||(e=[e]);var t=a(e,r);if(!t.valid)throw Error(t.error);for(var n=0;n<e.length;++n)switch(e[n].type){case"lang":c.push(e[n]);break;case"output":d.push(e[n]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function n(e,r){if(!o.helper.isString(e))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof e+" given");if("function"!=typeof r)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof r+" given");f.hasOwnProperty(e)||(f[e]=[]),f[e].push(r)}function s(e){var r=e.match(/^\s*/)[0].length,t=new RegExp("^\\s{0,"+r+"}","gm");return e.replace(t,"")}var i={},c=[],d=[],f={},g=p;!function(){e=e||{};for(var t in u)u.hasOwnProperty(t)&&(i[t]=u[t]);if("object"!=typeof e)throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");for(var n in e)e.hasOwnProperty(n)&&(i[n]=e[n]);i.extensions&&o.helper.forEach(i.extensions,r)}(),this._dispatch=function(e,r,t,n){if(f.hasOwnProperty(e))for(var s=0;s<f[e].length;++s){var a=f[e][s](e,r,this,t,n);a&&void 0!==a&&(r=a)}return r},this.listen=function(e,r){return n(e,r),this},this.makeHtml=function(e){if(!e)return e;var r={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:c,outputModifiers:d,converter:this,ghCodeBlocks:[]};return e=e.replace(/¨/g,"¨T"),e=e.replace(/\$/g,"¨D"),e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n"),e=e.replace(/\u00A0/g," "),i.smartIndentationFix&&(e=s(e)),e="\n\n"+e+"\n\n",e=o.subParser("detab")(e,i,r),e=e.replace(/^[ \t]+$/gm,""),o.helper.forEach(c,function(t){e=o.subParser("runExtension")(t,e,i,r)}),e=o.subParser("hashPreCodeTags")(e,i,r),e=o.subParser("githubCodeBlocks")(e,i,r),e=o.subParser("hashHTMLBlocks")(e,i,r),e=o.subParser("hashCodeTags")(e,i,r),e=o.subParser("stripLinkDefinitions")(e,i,r),e=o.subParser("blockGamut")(e,i,r),e=o.subParser("unhashHTMLSpans")(e,i,r),e=o.subParser("unescapeSpecialChars")(e,i,r),e=e.replace(/¨D/g,"$$"),e=e.replace(/¨T/g,"¨"),o.helper.forEach(d,function(t){e=o.subParser("runExtension")(t,e,i,r)}),e},this.setOption=function(e,r){i[e]=r},this.getOption=function(e){return i[e]},this.getOptions=function(){return i},this.addExtension=function(e,t){t=t||null,r(e,t)},this.useExtension=function(e){r(e)},this.setFlavor=function(e){if(!h.hasOwnProperty(e))throw Error(e+" flavor was not found");var r=h[e];g=e;for(var t in r)r.hasOwnProperty(t)&&(i[t]=r[t])},this.getFlavor=function(){return g},this.removeExtension=function(e){o.helper.isArray(e)||(e=[e]);for(var r=0;r<e.length;++r){for(var t=e[r],n=0;n<c.length;++n)c[n]===t&&c[n].splice(n,1);for(;0<d.length;++n)d[0]===t&&d[0].splice(n,1)}},this.getAllExtensions=function(){return{language:c,output:d}}},o.subParser("anchors",function(e,r,t){"use strict";e=t.converter._dispatch("anchors.before",e,r,t);var n=function(e,n,s,a,i,c,l){if(o.helper.isUndefined(l)&&(l=""),s=s.toLowerCase(),e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)a="";else if(!a){if(s||(s=n.toLowerCase().replace(/ ?\n/g," ")),a="#"+s,o.helper.isUndefined(t.gUrls[s]))return e;a=t.gUrls[s],o.helper.isUndefined(t.gTitles[s])||(l=t.gTitles[s])}a=a.replace(o.helper.regexes.asteriskAndDash,o.helper.escapeCharactersCallback);var u='<a href="'+a+'"';return""!==l&&null!==l&&(l=l.replace(/"/g,"&quot;"),l=l.replace(o.helper.regexes.asteriskAndDash,o.helper.escapeCharactersCallback),u+=' title="'+l+'"'),r.openLinksInNewWindow&&(u+=' target="¨E95Eblank"'),u+=">"+n+"</a>"};return e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,n),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,n),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,n),e=e.replace(/\[([^\[\]]+)]()()()()()/g,n),r.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gim,function(e,t,n,s,a){if("\\"===n)return t+s;if(!o.helper.isString(r.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");return t+'<a href="'+r.ghMentionsLink.replace(/\{u}/g,a)+'">'+s+"</a>"})),e=t.converter._dispatch("anchors.after",e,r,t)});var f=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)()(?=\s|$)(?!["<>])/gi,g=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]]?)(?=\s|$)(?!["<>])/gi,b=/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>/gi,m=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-\/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,v=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,k=function(e){"use strict";return function(r,t,n,s,a){var i=t,o="",c="";return/^www\./i.test(t)&&(t=t.replace(/^www\./i,"http://www.")),e.excludeTrailingPunctuationFromURLs&&a&&(o=a),e.openLinksInNewWindow&&(c=' target="¨E95Eblank"'),'<a href="'+t+'"'+c+">"+i+"</a>"+o}},x=function(e,r){"use strict";return function(t,n,s){var a="mailto:";return n=n||"",s=o.subParser("unescapeSpecialChars")(s,e,r),e.encodeEmails?(a=o.helper.encodeEmailAddress(a+s),s=o.helper.encodeEmailAddress(s)):a+=s,n+'<a href="'+a+'">'+s+"</a>"}};o.subParser("autoLinks",function(e,r,t){"use strict";return e=t.converter._dispatch("autoLinks.before",e,r,t),e=e.replace(b,k(r)),e=e.replace(v,x(r,t)),e=t.converter._dispatch("autoLinks.after",e,r,t)}),o.subParser("simplifiedAutoLinks",function(e,r,t){"use strict";return r.simplifiedAutoLink?(e=t.converter._dispatch("simplifiedAutoLinks.before",e,r,t),e=r.excludeTrailingPunctuationFromURLs?e.replace(g,k(r)):e.replace(f,k(r)),e=e.replace(m,x(r,t)),e=t.converter._dispatch("simplifiedAutoLinks.after",e,r,t)):e}),o.subParser("blockGamut",function(e,r,t){"use strict";return e=t.converter._dispatch("blockGamut.before",e,r,t),e=o.subParser("blockQuotes")(e,r,t),e=o.subParser("headers")(e,r,t),e=o.subParser("horizontalRule")(e,r,t),e=o.subParser("lists")(e,r,t),e=o.subParser("codeBlocks")(e,r,t),e=o.subParser("tables")(e,r,t),e=o.subParser("hashHTMLBlocks")(e,r,t),e=o.subParser("paragraphs")(e,r,t),e=t.converter._dispatch("blockGamut.after",e,r,t)}),o.subParser("blockQuotes",function(e,r,t){"use strict";return e=t.converter._dispatch("blockQuotes.before",e,r,t),e=e.replace(/((^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,n){var s=n;return s=s.replace(/^[ \t]*>[ \t]?/gm,"¨0"),s=s.replace(/¨0/g,""),s=s.replace(/^[ \t]+$/gm,""),s=o.subParser("githubCodeBlocks")(s,r,t),s=o.subParser("blockGamut")(s,r,t),s=s.replace(/(^|\n)/g,"$1  "),s=s.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,r){var t=r;return t=t.replace(/^  /gm,"¨0"),t=t.replace(/¨0/g,"")}),o.subParser("hashBlock")("<blockquote>\n"+s+"\n</blockquote>",r,t)}),e=t.converter._dispatch("blockQuotes.after",e,r,t)}),o.subParser("codeBlocks",function(e,r,t){"use strict";e=t.converter._dispatch("codeBlocks.before",e,r,t),e+="¨0";var n=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return e=e.replace(n,function(e,n,s){var a=n,i=s,c="\n";return a=o.subParser("outdent")(a,r,t),a=o.subParser("encodeCode")(a,r,t),a=o.subParser("detab")(a,r,t),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),r.omitExtraWLInCodeBlocks&&(c=""),a="<pre><code>"+a+c+"</code></pre>",o.subParser("hashBlock")(a,r,t)+i}),e=e.replace(/¨0/,""),e=t.converter._dispatch("codeBlocks.after",e,r,t)}),o.subParser("codeSpans",function(e,r,t){"use strict";return e=t.converter._dispatch("codeSpans.before",e,r,t),void 0===e&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,n,s,a){var i=a;return i=i.replace(/^([ \t]*)/g,""),i=i.replace(/[ \t]*$/g,""),i=o.subParser("encodeCode")(i,r,t),n+"<code>"+i+"</code>"}),e=t.converter._dispatch("codeSpans.after",e,r,t)}),o.subParser("detab",function(e,r,t){"use strict";return e=t.converter._dispatch("detab.before",e,r,t),e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"¨A¨B"),e=e.replace(/¨B(.+?)¨A/g,function(e,r){for(var t=r,n=4-t.length%4,s=0;s<n;s++)t+=" ";return t}),e=e.replace(/¨A/g,"    "),e=e.replace(/¨B/g,""),e=t.converter._dispatch("detab.after",e,r,t)}),o.subParser("encodeAmpsAndAngles",function(e,r,t){"use strict";return e=t.converter._dispatch("encodeAmpsAndAngles.before",e,r,t),e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?$!])/gi,"&lt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=t.converter._dispatch("encodeAmpsAndAngles.after",e,r,t)}),o.subParser("encodeBackslashEscapes",function(e,r,t){"use strict";return e=t.converter._dispatch("encodeBackslashEscapes.before",e,r,t),e=e.replace(/\\(\\)/g,o.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g,o.helper.escapeCharactersCallback),e=t.converter._dispatch("encodeBackslashEscapes.after",e,r,t)}),o.subParser("encodeCode",function(e,r,t){"use strict";return e=t.converter._dispatch("encodeCode.before",e,r,t),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,o.helper.escapeCharactersCallback),e=t.converter._dispatch("encodeCode.after",e,r,t)}),o.subParser("escapeSpecialCharsWithinTagAttributes",function(e,r,t){"use strict";e=t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,r,t);var n=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return e=e.replace(n,function(e){return e.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,o.helper.escapeCharactersCallback)}),e=t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,r,t)}),o.subParser("githubCodeBlocks",function(e,r,t){"use strict";return r.ghCodeBlocks?(e=t.converter._dispatch("githubCodeBlocks.before",e,r,t),e+="¨0",e=e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(e,n,s){var a=r.omitExtraWLInCodeBlocks?"":"\n";return s=o.subParser("encodeCode")(s,r,t),s=o.subParser("detab")(s,r,t),s=s.replace(/^\n+/g,""),s=s.replace(/\n+$/g,""),s="<pre><code"+(n?' class="'+n+" language-"+n+'"':"")+">"+s+a+"</code></pre>",s=o.subParser("hashBlock")(s,r,t),"\n\n¨G"+(t.ghCodeBlocks.push({text:e,codeblock:s})-1)+"G\n\n"}),e=e.replace(/¨0/,""),t.converter._dispatch("githubCodeBlocks.after",e,r,t)):e}),o.subParser("hashBlock",function(e,r,t){"use strict";return e=t.converter._dispatch("hashBlock.before",e,r,t),e=e.replace(/(^\n+|\n+$)/g,""),e="\n\n¨K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n",e=t.converter._dispatch("hashBlock.after",e,r,t)}),o.subParser("hashCodeTags",function(e,r,t){"use strict";e=t.converter._dispatch("hashCodeTags.before",e,r,t);var n=function(e,n,s,a){var i=s+o.subParser("encodeCode")(n,r,t)+a;return"¨C"+(t.gHtmlSpans.push(i)-1)+"C"};return e=o.helper.replaceRecursiveRegExp(e,n,"<code\\b[^>]*>","</code>","gim"),e=t.converter._dispatch("hashCodeTags.after",e,r,t)}),o.subParser("hashElement",function(e,r,t){"use strict";return function(e,r){var n=r;return n=n.replace(/\n\n/g,"\n"),n=n.replace(/^\n/,""),n=n.replace(/\n+$/g,""),n="\n\n¨K"+(t.gHtmlBlocks.push(n)-1)+"K\n\n"}}),o.subParser("hashHTMLBlocks",function(e,r,t){"use strict";e=t.converter._dispatch("hashHTMLBlocks.before",e,r,t);for(var n=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],s=function(e,r,n,s){var a=e;return-1!==n.search(/\bmarkdown\b/)&&(a=n+t.converter.makeHtml(r)+s),"\n\n¨K"+(t.gHtmlBlocks.push(a)-1)+"K\n\n"},a=0;a<n.length;++a)for(var i,c=new RegExp("^ {0,3}<"+n[a]+"\\b[^>]*>","im"),l="<"+n[a]+"\\b[^>]*>",u="</"+n[a]+">";-1!==(i=o.helper.regexIndexOf(e,c));){var p=o.helper.splitAtIndex(e,i),h=o.helper.replaceRecursiveRegExp(p[1],s,l,u,"im");if(h===p[1])break;e=p[0].concat(h)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,o.subParser("hashElement")(e,r,t)),e=o.helper.replaceRecursiveRegExp(e,function(e){return"\n\n¨K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n"},"^ {0,3}\x3c!--","--\x3e","gm"),e=e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,o.subParser("hashElement")(e,r,t)),e=t.converter._dispatch("hashHTMLBlocks.after",e,r,t)}),o.subParser("hashHTMLSpans",function(e,r,t){"use strict";function n(e){return"¨C"+(t.gHtmlSpans.push(e)-1)+"C"}return e=t.converter._dispatch("hashHTMLSpans.before",e,r,t),e=e.replace(/<[^>]+?\/>/gi,function(e){return n(e)}),e=e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(e){return n(e)}),e=e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(e){return n(e)}),e=e.replace(/<[^>]+?>/gi,function(e){return n(e)}),e=t.converter._dispatch("hashHTMLSpans.after",e,r,t)}),o.subParser("unhashHTMLSpans",function(e,r,t){"use strict";e=t.converter._dispatch("unhashHTMLSpans.before",e,r,t);for(var n=0;n<t.gHtmlSpans.length;++n){for(var s=t.gHtmlSpans[n],a=0;/¨C(\d+)C/.test(s);){var i=RegExp.$1;if(s=s.replace("¨C"+i+"C",t.gHtmlSpans[i]),10===a)break;++a}e=e.replace("¨C"+n+"C",s)}return e=t.converter._dispatch("unhashHTMLSpans.after",e,r,t)}),o.subParser("hashPreCodeTags",function(e,r,t){"use strict";e=t.converter._dispatch("hashPreCodeTags.before",e,r,t);var n=function(e,n,s,a){var i=s+o.subParser("encodeCode")(n,r,t)+a;return"\n\n¨G"+(t.ghCodeBlocks.push({text:e,codeblock:i})-1)+"G\n\n"};return e=o.helper.replaceRecursiveRegExp(e,n,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=t.converter._dispatch("hashPreCodeTags.after",e,r,t)}),o.subParser("headers",function(e,r,t){"use strict";function n(e){var n;if(r.customizedHeaderId){var s=e.match(/\{([^{]+?)}\s*$/);s&&s[1]&&(e=s[1])}return n=o.helper.isString(r.prefixHeaderId)?r.prefixHeaderId+e:!0===r.prefixHeaderId?"section "+e:e,n=a?n.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():n.replace(/[^\w]/g,"").toLowerCase(),t.hashLinkCounts[n]?n=n+"-"+t.hashLinkCounts[n]++:t.hashLinkCounts[n]=1,n}e=t.converter._dispatch("headers.before",e,r,t);var s=isNaN(parseInt(r.headerLevelStart))?1:parseInt(r.headerLevelStart),a=r.ghCompatibleHeaderId,i=r.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,c=r.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;e=e.replace(i,function(e,a){var i=o.subParser("spanGamut")(a,r,t),c=r.noHeaderId?"":' id="'+n(a)+'"',l=s,u="<h"+l+c+">"+i+"</h"+l+">";return o.subParser("hashBlock")(u,r,t)}),e=e.replace(c,function(e,a){var i=o.subParser("spanGamut")(a,r,t),c=r.noHeaderId?"":' id="'+n(a)+'"',l=s+1,u="<h"+l+c+">"+i+"</h"+l+">";return o.subParser("hashBlock")(u,r,t)});var l=r.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;return e=e.replace(l,function(e,a,i){var c=i;r.customizedHeaderId&&(c=i.replace(/\s?\{([^{]+?)}\s*$/,""));var l=o.subParser("spanGamut")(c,r,t),u=r.noHeaderId?"":' id="'+n(i)+'"',p=s-1+a.length,h="<h"+p+u+">"+l+"</h"+p+">";return o.subParser("hashBlock")(h,r,t)}),e=t.converter._dispatch("headers.after",e,r,t)}),o.subParser("horizontalRule",function(e,r,t){"use strict";e=t.converter._dispatch("horizontalRule.before",e,r,t);var n=o.subParser("hashBlock")("<hr />",r,t);return e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,n),e=e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,n),e=e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,n),e=t.converter._dispatch("horizontalRule.after",e,r,t)}),o.subParser("images",function(e,r,t){"use strict";function n(e,r,n,s,a,i,c,l){var u=t.gUrls,p=t.gTitles,h=t.gDimensions;if(n=n.toLowerCase(),l||(l=""),e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)s="";else if(""===s||null===s){if(""!==n&&null!==n||(n=r.toLowerCase().replace(/ ?\n/g," ")),s="#"+n,o.helper.isUndefined(u[n]))return e;s=u[n],o.helper.isUndefined(p[n])||(l=p[n]),o.helper.isUndefined(h[n])||(a=h[n].width,i=h[n].height)}r=r.replace(/"/g,"&quot;").replace(o.helper.regexes.asteriskAndDash,o.helper.escapeCharactersCallback),s=s.replace(o.helper.regexes.asteriskAndDash,o.helper.escapeCharactersCallback);var d='<img src="'+s+'" alt="'+r+'"';return l&&(l=l.replace(/"/g,"&quot;").replace(o.helper.regexes.asteriskAndDash,o.helper.escapeCharactersCallback),d+=' title="'+l+'"'),a&&i&&(a="*"===a?"auto":a,i="*"===i?"auto":i,d+=' width="'+a+'"',d+=' height="'+i+'"'),d+=" />"}e=t.converter._dispatch("images.before",e,r,t);var s=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,a=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,i=/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g,c=/!\[([^\[\]]+)]()()()()()/g;return e=e.replace(i,n),e=e.replace(a,n),e=e.replace(s,n),e=e.replace(c,n),e=t.converter._dispatch("images.after",e,r,t)}),o.subParser("italicsAndBold",function(e,r,t){"use strict";function n(e,n,s){return r.simplifiedAutoLink&&(e=o.subParser("simplifiedAutoLinks")(e,r,t)),n+e+s}return e=t.converter._dispatch("italicsAndBold.before",e,r,t),r.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*)___\b/g,function(e,r){return n(r,"<strong><em>","</em></strong>")}),e=e.replace(/\b__(\S[\s\S]*)__\b/g,function(e,r){return n(r,"<strong>","</strong>")}),e=e.replace(/\b_(\S[\s\S]*?)_\b/g,function(e,r){return n(r,"<em>","</em>")})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(e,r){return/\S$/.test(r)?n(r,"<strong><em>","</em></strong>"):e}),e=e.replace(/__(\S[\s\S]*?)__/g,function(e,r){return/\S$/.test(r)?n(r,"<strong>","</strong>"):e}),e=e.replace(/_([^\s_][\s\S]*?)_/g,function(e,r){return/\S$/.test(r)?n(r,"<em>","</em>"):e})),r.literalMidWordAsterisks?(e=e.trim().replace(/(?:^| +)\*{3}(\S[\s\S]*?)\*{3}(?: +|$)/g,function(e,r){return n(r," <strong><em>","</em></strong> ")}),e=e.trim().replace(/(?:^| +)\*{2}(\S[\s\S]*?)\*{2}(?: +|$)/g,function(e,r){return n(r," <strong>","</strong> ")}),e=e.trim().replace(/(?:^| +)\*{1}(\S[\s\S]*?)\*{1}(?: +|$)/g,function(e,r){return n(r," <em>","</em>"+(" "===e.slice(-1)?" ":""))})):(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(e,r){return/\S$/.test(r)?n(r,"<strong><em>","</em></strong>"):e}),e=e.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(e,r){return/\S$/.test(r)?n(r,"<strong>","</strong>"):e}),e=e.replace(/\*([^\s*][\s\S]*?)\*/g,function(e,r){return/\S$/.test(r)?n(r,"<em>","</em>"):e})),e=t.converter._dispatch("italicsAndBold.after",e,r,t)}),o.subParser("lists",function(e,r,t){"use strict";function n(e,n){t.gListLevel++,e=e.replace(/\n{2,}$/,"\n"),e+="¨0";var s=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,a=/\n[ \t]*\n(?!¨0)/.test(e);return r.disableForced4SpacesIndentedSublists&&(s=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),e=e.replace(s,function(e,n,s,i,c,l,u){u=u&&""!==u.trim();var p=o.subParser("outdent")(c,r,t),h="";return l&&r.tasklists&&(h=' class="task-list-item" style="list-style-type: none;"',p=p.replace(/^[ \t]*\[(x|X| )?]/m,function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return u&&(e+=" checked"),e+=">"})),p=p.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(e){return"¨A"+e}),n||p.search(/\n{2,}/)>-1?(p=o.subParser("githubCodeBlocks")(p,r,t),p=o.subParser("blockGamut")(p,r,t)):(p=o.subParser("lists")(p,r,t),p=p.replace(/\n$/,""),p=o.subParser("hashHTMLBlocks")(p,r,t),p=p.replace(/\n\n+/g,"\n\n"),p=p.replace(/\n\n/g,"¨B"),p=a?o.subParser("paragraphs")(p,r,t):o.subParser("spanGamut")(p,r,t),p=p.replace(/¨B/g,"\n\n")),p=p.replace("¨A",""),p="<li"+h+">"+p+"</li>\n"}),e=e.replace(/¨0/g,""),t.gListLevel--,n&&(e=e.replace(/\s+$/,"")),e}function s(e,t,s){var a=r.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,i=r.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,o="ul"===t?a:i,c="";return-1!==e.search(o)?function e(r){var l=r.search(o);-1!==l?(c+="\n<"+t+">\n"+n(r.slice(0,l),!!s)+"</"+t+">\n",t="ul"===t?"ol":"ul",o="ul"===t?a:i,e(r.slice(l))):c+="\n<"+t+">\n"+n(r,!!s)+"</"+t+">\n"}(e):c="\n<"+t+">\n"+n(e,!!s)+"</"+t+">\n",c}return e=t.converter._dispatch("lists.before",e,r,t),e+="¨0",e=t.gListLevel?e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(e,r,t){return s(r,t.search(/[*+-]/g)>-1?"ul":"ol",!0)}):e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(e,r,t,n){return s(t,n.search(/[*+-]/g)>-1?"ul":"ol",!1)}),e=e.replace(/¨0/,""),e=t.converter._dispatch("lists.after",e,r,t)}),o.subParser("outdent",function(e,r,t){"use strict";return e=t.converter._dispatch("outdent.before",e,r,t),e=e.replace(/^(\t|[ ]{1,4})/gm,"¨0"),e=e.replace(/¨0/g,""),e=t.converter._dispatch("outdent.after",e,r,t)}),o.subParser("paragraphs",function(e,r,t){"use strict";e=t.converter._dispatch("paragraphs.before",e,r,t),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var n=e.split(/\n{2,}/g),s=[],a=n.length,i=0;i<a;i++){var c=n[i];c.search(/¨(K|G)(\d+)\1/g)>=0?s.push(c):c.search(/\S/)>=0&&(c=o.subParser("spanGamut")(c,r,t),c=c.replace(/^([ \t]*)/g,"<p>"),c+="</p>",s.push(c))}for(a=s.length,i=0;i<a;i++){for(var l="",u=s[i],p=!1;/¨(K|G)(\d+)\1/.test(u);){var h=RegExp.$1,d=RegExp.$2;l="K"===h?t.gHtmlBlocks[d]:p?o.subParser("encodeCode")(t.ghCodeBlocks[d].text,r,t):t.ghCodeBlocks[d].codeblock,l=l.replace(/\$/g,"$$$$"),u=u.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,l),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u)&&(p=!0)}s[i]=u}return e=s.join("\n"),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),t.converter._dispatch("paragraphs.after",e,r,t)}),o.subParser("runExtension",function(e,r,t,n){"use strict";if(e.filter)r=e.filter(r,n.converter,t);else if(e.regex){var s=e.regex;s instanceof RegExp||(s=new RegExp(s,"g")),r=r.replace(s,e.replace)}return r}),o.subParser("spanGamut",function(e,r,t){"use strict";return e=t.converter._dispatch("spanGamut.before",e,r,t),e=o.subParser("codeSpans")(e,r,t),e=o.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,t),e=o.subParser("encodeBackslashEscapes")(e,r,t),e=o.subParser("images")(e,r,t),e=o.subParser("anchors")(e,r,t),e=o.subParser("autoLinks")(e,r,t),e=o.subParser("italicsAndBold")(e,r,t),e=o.subParser("strikethrough")(e,r,t),e=o.subParser("simplifiedAutoLinks")(e,r,t),e=o.subParser("hashHTMLSpans")(e,r,t),e=o.subParser("encodeAmpsAndAngles")(e,r,t),e=r.simpleLineBreaks?e.replace(/\n/g,"<br />\n"):e.replace(/  +\n/g,"<br />\n"),e=t.converter._dispatch("spanGamut.after",e,r,t)}),o.subParser("strikethrough",function(e,r,t){"use strict";function n(e){return r.simplifiedAutoLink&&(e=o.subParser("simplifiedAutoLinks")(e,r,t)),"<del>"+e+"</del>"}return r.strikethrough&&(e=t.converter._dispatch("strikethrough.before",e,r,t),e=e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(e,r){return n(r)}),e=t.converter._dispatch("strikethrough.after",e,r,t)),e}),o.subParser("stripLinkDefinitions",function(e,r,t){"use strict";var n=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm;return e+="¨0",e=e.replace(n,function(e,n,s,a,i,c,l){return n=n.toLowerCase(),t.gUrls[n]=o.subParser("encodeAmpsAndAngles")(s,r,t),c?c+l:(l&&(t.gTitles[n]=l.replace(/"|'/g,"&quot;")),r.parseImgDimensions&&a&&i&&(t.gDimensions[n]={width:a,height:i}),"")}),e=e.replace(/¨0/,"")}),o.subParser("tables",function(e,r,t){"use strict";function n(e){return/^:[ \t]*--*$/.test(e)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(e)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(e)?' style="text-align:center;"':""}function s(e,n){var s="";return e=e.trim(),r.tableHeaderId&&(s=' id="'+e.replace(/ /g,"_").toLowerCase()+'"'),e=o.subParser("spanGamut")(e,r,t),"<th"+s+n+">"+e+"</th>\n"}function a(e,n){return"<td"+n+">"+o.subParser("spanGamut")(e,r,t)+"</td>\n"}function i(e,r){for(var t="<table>\n<thead>\n<tr>\n",n=e.length,s=0;s<n;++s)t+=e[s];for(t+="</tr>\n</thead>\n<tbody>\n",s=0;s<r.length;++s){t+="<tr>\n";for(var a=0;a<n;++a)t+=r[s][a];t+="</tr>\n"}return t+="</tbody>\n</table>\n"}if(!r.tables)return e;var c=/^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|¨0)/gm;return e=t.converter._dispatch("tables.before",e,r,t),e=e.replace(/\\(\|)/g,o.helper.escapeCharactersCallback),e=e.replace(c,function(e){var r,t=e.split("\n");for(r=0;r<t.length;++r)/^ {0,3}\|/.test(t[r])&&(t[r]=t[r].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(t[r])&&(t[r]=t[r].replace(/\|[ \t]*$/,""));var c=t[0].split("|").map(function(e){return e.trim()}),l=t[1].split("|").map(function(e){return e.trim()}),u=[],p=[],h=[],d=[];for(t.shift(),t.shift(),r=0;r<t.length;++r)""!==t[r].trim()&&u.push(t[r].split("|").map(function(e){return e.trim()}));if(c.length<l.length)return e;for(r=0;r<l.length;++r)h.push(n(l[r]));for(r=0;r<c.length;++r)o.helper.isUndefined(h[r])&&(h[r]=""),p.push(s(c[r],h[r]));for(r=0;r<u.length;++r){for(var f=[],g=0;g<p.length;++g)o.helper.isUndefined(u[r][g]),f.push(a(u[r][g],h[g]));d.push(f)}return i(p,d)}),e=t.converter._dispatch("tables.after",e,r,t)}),o.subParser("unescapeSpecialChars",function(e,r,t){"use strict";return e=t.converter._dispatch("unescapeSpecialChars.before",e,r,t),e=e.replace(/¨E(\d+)E/g,function(e,r){var t=parseInt(r);return String.fromCharCode(t)}),e=t.converter._dispatch("unescapeSpecialChars.after",e,r,t)});void 0!==e&&e.exports?e.exports=o:void 0!==(n=function(){"use strict";return o}.call(r,t,r,e))&&(e.exports=n)}).call(this)}});
//# sourceMappingURL=0.d92a9e7c00e0de761ae5.js.map