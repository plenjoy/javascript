import X2JS from 'x2js'

export function xmlToJs(xml){
	var x2js = new X2JS();
	return x2js.xml2js(xml);
}