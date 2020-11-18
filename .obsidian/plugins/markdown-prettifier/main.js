'use strict';

var obsidian = require('obsidian');
var util = require('util');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var util__default = /*#__PURE__*/_interopDefaultLegacy(util);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var cjs = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

// List of valid entities
//
// Generate with ./support/entities.js script
//

/*eslint quotes:0*/
var entities = {
  "Aacute":"\u00C1",
  "aacute":"\u00E1",
  "Abreve":"\u0102",
  "abreve":"\u0103",
  "ac":"\u223E",
  "acd":"\u223F",
  "acE":"\u223E\u0333",
  "Acirc":"\u00C2",
  "acirc":"\u00E2",
  "acute":"\u00B4",
  "Acy":"\u0410",
  "acy":"\u0430",
  "AElig":"\u00C6",
  "aelig":"\u00E6",
  "af":"\u2061",
  "Afr":"\uD835\uDD04",
  "afr":"\uD835\uDD1E",
  "Agrave":"\u00C0",
  "agrave":"\u00E0",
  "alefsym":"\u2135",
  "aleph":"\u2135",
  "Alpha":"\u0391",
  "alpha":"\u03B1",
  "Amacr":"\u0100",
  "amacr":"\u0101",
  "amalg":"\u2A3F",
  "AMP":"\u0026",
  "amp":"\u0026",
  "And":"\u2A53",
  "and":"\u2227",
  "andand":"\u2A55",
  "andd":"\u2A5C",
  "andslope":"\u2A58",
  "andv":"\u2A5A",
  "ang":"\u2220",
  "ange":"\u29A4",
  "angle":"\u2220",
  "angmsd":"\u2221",
  "angmsdaa":"\u29A8",
  "angmsdab":"\u29A9",
  "angmsdac":"\u29AA",
  "angmsdad":"\u29AB",
  "angmsdae":"\u29AC",
  "angmsdaf":"\u29AD",
  "angmsdag":"\u29AE",
  "angmsdah":"\u29AF",
  "angrt":"\u221F",
  "angrtvb":"\u22BE",
  "angrtvbd":"\u299D",
  "angsph":"\u2222",
  "angst":"\u00C5",
  "angzarr":"\u237C",
  "Aogon":"\u0104",
  "aogon":"\u0105",
  "Aopf":"\uD835\uDD38",
  "aopf":"\uD835\uDD52",
  "ap":"\u2248",
  "apacir":"\u2A6F",
  "apE":"\u2A70",
  "ape":"\u224A",
  "apid":"\u224B",
  "apos":"\u0027",
  "ApplyFunction":"\u2061",
  "approx":"\u2248",
  "approxeq":"\u224A",
  "Aring":"\u00C5",
  "aring":"\u00E5",
  "Ascr":"\uD835\uDC9C",
  "ascr":"\uD835\uDCB6",
  "Assign":"\u2254",
  "ast":"\u002A",
  "asymp":"\u2248",
  "asympeq":"\u224D",
  "Atilde":"\u00C3",
  "atilde":"\u00E3",
  "Auml":"\u00C4",
  "auml":"\u00E4",
  "awconint":"\u2233",
  "awint":"\u2A11",
  "backcong":"\u224C",
  "backepsilon":"\u03F6",
  "backprime":"\u2035",
  "backsim":"\u223D",
  "backsimeq":"\u22CD",
  "Backslash":"\u2216",
  "Barv":"\u2AE7",
  "barvee":"\u22BD",
  "Barwed":"\u2306",
  "barwed":"\u2305",
  "barwedge":"\u2305",
  "bbrk":"\u23B5",
  "bbrktbrk":"\u23B6",
  "bcong":"\u224C",
  "Bcy":"\u0411",
  "bcy":"\u0431",
  "bdquo":"\u201E",
  "becaus":"\u2235",
  "Because":"\u2235",
  "because":"\u2235",
  "bemptyv":"\u29B0",
  "bepsi":"\u03F6",
  "bernou":"\u212C",
  "Bernoullis":"\u212C",
  "Beta":"\u0392",
  "beta":"\u03B2",
  "beth":"\u2136",
  "between":"\u226C",
  "Bfr":"\uD835\uDD05",
  "bfr":"\uD835\uDD1F",
  "bigcap":"\u22C2",
  "bigcirc":"\u25EF",
  "bigcup":"\u22C3",
  "bigodot":"\u2A00",
  "bigoplus":"\u2A01",
  "bigotimes":"\u2A02",
  "bigsqcup":"\u2A06",
  "bigstar":"\u2605",
  "bigtriangledown":"\u25BD",
  "bigtriangleup":"\u25B3",
  "biguplus":"\u2A04",
  "bigvee":"\u22C1",
  "bigwedge":"\u22C0",
  "bkarow":"\u290D",
  "blacklozenge":"\u29EB",
  "blacksquare":"\u25AA",
  "blacktriangle":"\u25B4",
  "blacktriangledown":"\u25BE",
  "blacktriangleleft":"\u25C2",
  "blacktriangleright":"\u25B8",
  "blank":"\u2423",
  "blk12":"\u2592",
  "blk14":"\u2591",
  "blk34":"\u2593",
  "block":"\u2588",
  "bne":"\u003D\u20E5",
  "bnequiv":"\u2261\u20E5",
  "bNot":"\u2AED",
  "bnot":"\u2310",
  "Bopf":"\uD835\uDD39",
  "bopf":"\uD835\uDD53",
  "bot":"\u22A5",
  "bottom":"\u22A5",
  "bowtie":"\u22C8",
  "boxbox":"\u29C9",
  "boxDL":"\u2557",
  "boxDl":"\u2556",
  "boxdL":"\u2555",
  "boxdl":"\u2510",
  "boxDR":"\u2554",
  "boxDr":"\u2553",
  "boxdR":"\u2552",
  "boxdr":"\u250C",
  "boxH":"\u2550",
  "boxh":"\u2500",
  "boxHD":"\u2566",
  "boxHd":"\u2564",
  "boxhD":"\u2565",
  "boxhd":"\u252C",
  "boxHU":"\u2569",
  "boxHu":"\u2567",
  "boxhU":"\u2568",
  "boxhu":"\u2534",
  "boxminus":"\u229F",
  "boxplus":"\u229E",
  "boxtimes":"\u22A0",
  "boxUL":"\u255D",
  "boxUl":"\u255C",
  "boxuL":"\u255B",
  "boxul":"\u2518",
  "boxUR":"\u255A",
  "boxUr":"\u2559",
  "boxuR":"\u2558",
  "boxur":"\u2514",
  "boxV":"\u2551",
  "boxv":"\u2502",
  "boxVH":"\u256C",
  "boxVh":"\u256B",
  "boxvH":"\u256A",
  "boxvh":"\u253C",
  "boxVL":"\u2563",
  "boxVl":"\u2562",
  "boxvL":"\u2561",
  "boxvl":"\u2524",
  "boxVR":"\u2560",
  "boxVr":"\u255F",
  "boxvR":"\u255E",
  "boxvr":"\u251C",
  "bprime":"\u2035",
  "Breve":"\u02D8",
  "breve":"\u02D8",
  "brvbar":"\u00A6",
  "Bscr":"\u212C",
  "bscr":"\uD835\uDCB7",
  "bsemi":"\u204F",
  "bsim":"\u223D",
  "bsime":"\u22CD",
  "bsol":"\u005C",
  "bsolb":"\u29C5",
  "bsolhsub":"\u27C8",
  "bull":"\u2022",
  "bullet":"\u2022",
  "bump":"\u224E",
  "bumpE":"\u2AAE",
  "bumpe":"\u224F",
  "Bumpeq":"\u224E",
  "bumpeq":"\u224F",
  "Cacute":"\u0106",
  "cacute":"\u0107",
  "Cap":"\u22D2",
  "cap":"\u2229",
  "capand":"\u2A44",
  "capbrcup":"\u2A49",
  "capcap":"\u2A4B",
  "capcup":"\u2A47",
  "capdot":"\u2A40",
  "CapitalDifferentialD":"\u2145",
  "caps":"\u2229\uFE00",
  "caret":"\u2041",
  "caron":"\u02C7",
  "Cayleys":"\u212D",
  "ccaps":"\u2A4D",
  "Ccaron":"\u010C",
  "ccaron":"\u010D",
  "Ccedil":"\u00C7",
  "ccedil":"\u00E7",
  "Ccirc":"\u0108",
  "ccirc":"\u0109",
  "Cconint":"\u2230",
  "ccups":"\u2A4C",
  "ccupssm":"\u2A50",
  "Cdot":"\u010A",
  "cdot":"\u010B",
  "cedil":"\u00B8",
  "Cedilla":"\u00B8",
  "cemptyv":"\u29B2",
  "cent":"\u00A2",
  "CenterDot":"\u00B7",
  "centerdot":"\u00B7",
  "Cfr":"\u212D",
  "cfr":"\uD835\uDD20",
  "CHcy":"\u0427",
  "chcy":"\u0447",
  "check":"\u2713",
  "checkmark":"\u2713",
  "Chi":"\u03A7",
  "chi":"\u03C7",
  "cir":"\u25CB",
  "circ":"\u02C6",
  "circeq":"\u2257",
  "circlearrowleft":"\u21BA",
  "circlearrowright":"\u21BB",
  "circledast":"\u229B",
  "circledcirc":"\u229A",
  "circleddash":"\u229D",
  "CircleDot":"\u2299",
  "circledR":"\u00AE",
  "circledS":"\u24C8",
  "CircleMinus":"\u2296",
  "CirclePlus":"\u2295",
  "CircleTimes":"\u2297",
  "cirE":"\u29C3",
  "cire":"\u2257",
  "cirfnint":"\u2A10",
  "cirmid":"\u2AEF",
  "cirscir":"\u29C2",
  "ClockwiseContourIntegral":"\u2232",
  "CloseCurlyDoubleQuote":"\u201D",
  "CloseCurlyQuote":"\u2019",
  "clubs":"\u2663",
  "clubsuit":"\u2663",
  "Colon":"\u2237",
  "colon":"\u003A",
  "Colone":"\u2A74",
  "colone":"\u2254",
  "coloneq":"\u2254",
  "comma":"\u002C",
  "commat":"\u0040",
  "comp":"\u2201",
  "compfn":"\u2218",
  "complement":"\u2201",
  "complexes":"\u2102",
  "cong":"\u2245",
  "congdot":"\u2A6D",
  "Congruent":"\u2261",
  "Conint":"\u222F",
  "conint":"\u222E",
  "ContourIntegral":"\u222E",
  "Copf":"\u2102",
  "copf":"\uD835\uDD54",
  "coprod":"\u2210",
  "Coproduct":"\u2210",
  "COPY":"\u00A9",
  "copy":"\u00A9",
  "copysr":"\u2117",
  "CounterClockwiseContourIntegral":"\u2233",
  "crarr":"\u21B5",
  "Cross":"\u2A2F",
  "cross":"\u2717",
  "Cscr":"\uD835\uDC9E",
  "cscr":"\uD835\uDCB8",
  "csub":"\u2ACF",
  "csube":"\u2AD1",
  "csup":"\u2AD0",
  "csupe":"\u2AD2",
  "ctdot":"\u22EF",
  "cudarrl":"\u2938",
  "cudarrr":"\u2935",
  "cuepr":"\u22DE",
  "cuesc":"\u22DF",
  "cularr":"\u21B6",
  "cularrp":"\u293D",
  "Cup":"\u22D3",
  "cup":"\u222A",
  "cupbrcap":"\u2A48",
  "CupCap":"\u224D",
  "cupcap":"\u2A46",
  "cupcup":"\u2A4A",
  "cupdot":"\u228D",
  "cupor":"\u2A45",
  "cups":"\u222A\uFE00",
  "curarr":"\u21B7",
  "curarrm":"\u293C",
  "curlyeqprec":"\u22DE",
  "curlyeqsucc":"\u22DF",
  "curlyvee":"\u22CE",
  "curlywedge":"\u22CF",
  "curren":"\u00A4",
  "curvearrowleft":"\u21B6",
  "curvearrowright":"\u21B7",
  "cuvee":"\u22CE",
  "cuwed":"\u22CF",
  "cwconint":"\u2232",
  "cwint":"\u2231",
  "cylcty":"\u232D",
  "Dagger":"\u2021",
  "dagger":"\u2020",
  "daleth":"\u2138",
  "Darr":"\u21A1",
  "dArr":"\u21D3",
  "darr":"\u2193",
  "dash":"\u2010",
  "Dashv":"\u2AE4",
  "dashv":"\u22A3",
  "dbkarow":"\u290F",
  "dblac":"\u02DD",
  "Dcaron":"\u010E",
  "dcaron":"\u010F",
  "Dcy":"\u0414",
  "dcy":"\u0434",
  "DD":"\u2145",
  "dd":"\u2146",
  "ddagger":"\u2021",
  "ddarr":"\u21CA",
  "DDotrahd":"\u2911",
  "ddotseq":"\u2A77",
  "deg":"\u00B0",
  "Del":"\u2207",
  "Delta":"\u0394",
  "delta":"\u03B4",
  "demptyv":"\u29B1",
  "dfisht":"\u297F",
  "Dfr":"\uD835\uDD07",
  "dfr":"\uD835\uDD21",
  "dHar":"\u2965",
  "dharl":"\u21C3",
  "dharr":"\u21C2",
  "DiacriticalAcute":"\u00B4",
  "DiacriticalDot":"\u02D9",
  "DiacriticalDoubleAcute":"\u02DD",
  "DiacriticalGrave":"\u0060",
  "DiacriticalTilde":"\u02DC",
  "diam":"\u22C4",
  "Diamond":"\u22C4",
  "diamond":"\u22C4",
  "diamondsuit":"\u2666",
  "diams":"\u2666",
  "die":"\u00A8",
  "DifferentialD":"\u2146",
  "digamma":"\u03DD",
  "disin":"\u22F2",
  "div":"\u00F7",
  "divide":"\u00F7",
  "divideontimes":"\u22C7",
  "divonx":"\u22C7",
  "DJcy":"\u0402",
  "djcy":"\u0452",
  "dlcorn":"\u231E",
  "dlcrop":"\u230D",
  "dollar":"\u0024",
  "Dopf":"\uD835\uDD3B",
  "dopf":"\uD835\uDD55",
  "Dot":"\u00A8",
  "dot":"\u02D9",
  "DotDot":"\u20DC",
  "doteq":"\u2250",
  "doteqdot":"\u2251",
  "DotEqual":"\u2250",
  "dotminus":"\u2238",
  "dotplus":"\u2214",
  "dotsquare":"\u22A1",
  "doublebarwedge":"\u2306",
  "DoubleContourIntegral":"\u222F",
  "DoubleDot":"\u00A8",
  "DoubleDownArrow":"\u21D3",
  "DoubleLeftArrow":"\u21D0",
  "DoubleLeftRightArrow":"\u21D4",
  "DoubleLeftTee":"\u2AE4",
  "DoubleLongLeftArrow":"\u27F8",
  "DoubleLongLeftRightArrow":"\u27FA",
  "DoubleLongRightArrow":"\u27F9",
  "DoubleRightArrow":"\u21D2",
  "DoubleRightTee":"\u22A8",
  "DoubleUpArrow":"\u21D1",
  "DoubleUpDownArrow":"\u21D5",
  "DoubleVerticalBar":"\u2225",
  "DownArrow":"\u2193",
  "Downarrow":"\u21D3",
  "downarrow":"\u2193",
  "DownArrowBar":"\u2913",
  "DownArrowUpArrow":"\u21F5",
  "DownBreve":"\u0311",
  "downdownarrows":"\u21CA",
  "downharpoonleft":"\u21C3",
  "downharpoonright":"\u21C2",
  "DownLeftRightVector":"\u2950",
  "DownLeftTeeVector":"\u295E",
  "DownLeftVector":"\u21BD",
  "DownLeftVectorBar":"\u2956",
  "DownRightTeeVector":"\u295F",
  "DownRightVector":"\u21C1",
  "DownRightVectorBar":"\u2957",
  "DownTee":"\u22A4",
  "DownTeeArrow":"\u21A7",
  "drbkarow":"\u2910",
  "drcorn":"\u231F",
  "drcrop":"\u230C",
  "Dscr":"\uD835\uDC9F",
  "dscr":"\uD835\uDCB9",
  "DScy":"\u0405",
  "dscy":"\u0455",
  "dsol":"\u29F6",
  "Dstrok":"\u0110",
  "dstrok":"\u0111",
  "dtdot":"\u22F1",
  "dtri":"\u25BF",
  "dtrif":"\u25BE",
  "duarr":"\u21F5",
  "duhar":"\u296F",
  "dwangle":"\u29A6",
  "DZcy":"\u040F",
  "dzcy":"\u045F",
  "dzigrarr":"\u27FF",
  "Eacute":"\u00C9",
  "eacute":"\u00E9",
  "easter":"\u2A6E",
  "Ecaron":"\u011A",
  "ecaron":"\u011B",
  "ecir":"\u2256",
  "Ecirc":"\u00CA",
  "ecirc":"\u00EA",
  "ecolon":"\u2255",
  "Ecy":"\u042D",
  "ecy":"\u044D",
  "eDDot":"\u2A77",
  "Edot":"\u0116",
  "eDot":"\u2251",
  "edot":"\u0117",
  "ee":"\u2147",
  "efDot":"\u2252",
  "Efr":"\uD835\uDD08",
  "efr":"\uD835\uDD22",
  "eg":"\u2A9A",
  "Egrave":"\u00C8",
  "egrave":"\u00E8",
  "egs":"\u2A96",
  "egsdot":"\u2A98",
  "el":"\u2A99",
  "Element":"\u2208",
  "elinters":"\u23E7",
  "ell":"\u2113",
  "els":"\u2A95",
  "elsdot":"\u2A97",
  "Emacr":"\u0112",
  "emacr":"\u0113",
  "empty":"\u2205",
  "emptyset":"\u2205",
  "EmptySmallSquare":"\u25FB",
  "emptyv":"\u2205",
  "EmptyVerySmallSquare":"\u25AB",
  "emsp":"\u2003",
  "emsp13":"\u2004",
  "emsp14":"\u2005",
  "ENG":"\u014A",
  "eng":"\u014B",
  "ensp":"\u2002",
  "Eogon":"\u0118",
  "eogon":"\u0119",
  "Eopf":"\uD835\uDD3C",
  "eopf":"\uD835\uDD56",
  "epar":"\u22D5",
  "eparsl":"\u29E3",
  "eplus":"\u2A71",
  "epsi":"\u03B5",
  "Epsilon":"\u0395",
  "epsilon":"\u03B5",
  "epsiv":"\u03F5",
  "eqcirc":"\u2256",
  "eqcolon":"\u2255",
  "eqsim":"\u2242",
  "eqslantgtr":"\u2A96",
  "eqslantless":"\u2A95",
  "Equal":"\u2A75",
  "equals":"\u003D",
  "EqualTilde":"\u2242",
  "equest":"\u225F",
  "Equilibrium":"\u21CC",
  "equiv":"\u2261",
  "equivDD":"\u2A78",
  "eqvparsl":"\u29E5",
  "erarr":"\u2971",
  "erDot":"\u2253",
  "Escr":"\u2130",
  "escr":"\u212F",
  "esdot":"\u2250",
  "Esim":"\u2A73",
  "esim":"\u2242",
  "Eta":"\u0397",
  "eta":"\u03B7",
  "ETH":"\u00D0",
  "eth":"\u00F0",
  "Euml":"\u00CB",
  "euml":"\u00EB",
  "euro":"\u20AC",
  "excl":"\u0021",
  "exist":"\u2203",
  "Exists":"\u2203",
  "expectation":"\u2130",
  "ExponentialE":"\u2147",
  "exponentiale":"\u2147",
  "fallingdotseq":"\u2252",
  "Fcy":"\u0424",
  "fcy":"\u0444",
  "female":"\u2640",
  "ffilig":"\uFB03",
  "fflig":"\uFB00",
  "ffllig":"\uFB04",
  "Ffr":"\uD835\uDD09",
  "ffr":"\uD835\uDD23",
  "filig":"\uFB01",
  "FilledSmallSquare":"\u25FC",
  "FilledVerySmallSquare":"\u25AA",
  "fjlig":"\u0066\u006A",
  "flat":"\u266D",
  "fllig":"\uFB02",
  "fltns":"\u25B1",
  "fnof":"\u0192",
  "Fopf":"\uD835\uDD3D",
  "fopf":"\uD835\uDD57",
  "ForAll":"\u2200",
  "forall":"\u2200",
  "fork":"\u22D4",
  "forkv":"\u2AD9",
  "Fouriertrf":"\u2131",
  "fpartint":"\u2A0D",
  "frac12":"\u00BD",
  "frac13":"\u2153",
  "frac14":"\u00BC",
  "frac15":"\u2155",
  "frac16":"\u2159",
  "frac18":"\u215B",
  "frac23":"\u2154",
  "frac25":"\u2156",
  "frac34":"\u00BE",
  "frac35":"\u2157",
  "frac38":"\u215C",
  "frac45":"\u2158",
  "frac56":"\u215A",
  "frac58":"\u215D",
  "frac78":"\u215E",
  "frasl":"\u2044",
  "frown":"\u2322",
  "Fscr":"\u2131",
  "fscr":"\uD835\uDCBB",
  "gacute":"\u01F5",
  "Gamma":"\u0393",
  "gamma":"\u03B3",
  "Gammad":"\u03DC",
  "gammad":"\u03DD",
  "gap":"\u2A86",
  "Gbreve":"\u011E",
  "gbreve":"\u011F",
  "Gcedil":"\u0122",
  "Gcirc":"\u011C",
  "gcirc":"\u011D",
  "Gcy":"\u0413",
  "gcy":"\u0433",
  "Gdot":"\u0120",
  "gdot":"\u0121",
  "gE":"\u2267",
  "ge":"\u2265",
  "gEl":"\u2A8C",
  "gel":"\u22DB",
  "geq":"\u2265",
  "geqq":"\u2267",
  "geqslant":"\u2A7E",
  "ges":"\u2A7E",
  "gescc":"\u2AA9",
  "gesdot":"\u2A80",
  "gesdoto":"\u2A82",
  "gesdotol":"\u2A84",
  "gesl":"\u22DB\uFE00",
  "gesles":"\u2A94",
  "Gfr":"\uD835\uDD0A",
  "gfr":"\uD835\uDD24",
  "Gg":"\u22D9",
  "gg":"\u226B",
  "ggg":"\u22D9",
  "gimel":"\u2137",
  "GJcy":"\u0403",
  "gjcy":"\u0453",
  "gl":"\u2277",
  "gla":"\u2AA5",
  "glE":"\u2A92",
  "glj":"\u2AA4",
  "gnap":"\u2A8A",
  "gnapprox":"\u2A8A",
  "gnE":"\u2269",
  "gne":"\u2A88",
  "gneq":"\u2A88",
  "gneqq":"\u2269",
  "gnsim":"\u22E7",
  "Gopf":"\uD835\uDD3E",
  "gopf":"\uD835\uDD58",
  "grave":"\u0060",
  "GreaterEqual":"\u2265",
  "GreaterEqualLess":"\u22DB",
  "GreaterFullEqual":"\u2267",
  "GreaterGreater":"\u2AA2",
  "GreaterLess":"\u2277",
  "GreaterSlantEqual":"\u2A7E",
  "GreaterTilde":"\u2273",
  "Gscr":"\uD835\uDCA2",
  "gscr":"\u210A",
  "gsim":"\u2273",
  "gsime":"\u2A8E",
  "gsiml":"\u2A90",
  "GT":"\u003E",
  "Gt":"\u226B",
  "gt":"\u003E",
  "gtcc":"\u2AA7",
  "gtcir":"\u2A7A",
  "gtdot":"\u22D7",
  "gtlPar":"\u2995",
  "gtquest":"\u2A7C",
  "gtrapprox":"\u2A86",
  "gtrarr":"\u2978",
  "gtrdot":"\u22D7",
  "gtreqless":"\u22DB",
  "gtreqqless":"\u2A8C",
  "gtrless":"\u2277",
  "gtrsim":"\u2273",
  "gvertneqq":"\u2269\uFE00",
  "gvnE":"\u2269\uFE00",
  "Hacek":"\u02C7",
  "hairsp":"\u200A",
  "half":"\u00BD",
  "hamilt":"\u210B",
  "HARDcy":"\u042A",
  "hardcy":"\u044A",
  "hArr":"\u21D4",
  "harr":"\u2194",
  "harrcir":"\u2948",
  "harrw":"\u21AD",
  "Hat":"\u005E",
  "hbar":"\u210F",
  "Hcirc":"\u0124",
  "hcirc":"\u0125",
  "hearts":"\u2665",
  "heartsuit":"\u2665",
  "hellip":"\u2026",
  "hercon":"\u22B9",
  "Hfr":"\u210C",
  "hfr":"\uD835\uDD25",
  "HilbertSpace":"\u210B",
  "hksearow":"\u2925",
  "hkswarow":"\u2926",
  "hoarr":"\u21FF",
  "homtht":"\u223B",
  "hookleftarrow":"\u21A9",
  "hookrightarrow":"\u21AA",
  "Hopf":"\u210D",
  "hopf":"\uD835\uDD59",
  "horbar":"\u2015",
  "HorizontalLine":"\u2500",
  "Hscr":"\u210B",
  "hscr":"\uD835\uDCBD",
  "hslash":"\u210F",
  "Hstrok":"\u0126",
  "hstrok":"\u0127",
  "HumpDownHump":"\u224E",
  "HumpEqual":"\u224F",
  "hybull":"\u2043",
  "hyphen":"\u2010",
  "Iacute":"\u00CD",
  "iacute":"\u00ED",
  "ic":"\u2063",
  "Icirc":"\u00CE",
  "icirc":"\u00EE",
  "Icy":"\u0418",
  "icy":"\u0438",
  "Idot":"\u0130",
  "IEcy":"\u0415",
  "iecy":"\u0435",
  "iexcl":"\u00A1",
  "iff":"\u21D4",
  "Ifr":"\u2111",
  "ifr":"\uD835\uDD26",
  "Igrave":"\u00CC",
  "igrave":"\u00EC",
  "ii":"\u2148",
  "iiiint":"\u2A0C",
  "iiint":"\u222D",
  "iinfin":"\u29DC",
  "iiota":"\u2129",
  "IJlig":"\u0132",
  "ijlig":"\u0133",
  "Im":"\u2111",
  "Imacr":"\u012A",
  "imacr":"\u012B",
  "image":"\u2111",
  "ImaginaryI":"\u2148",
  "imagline":"\u2110",
  "imagpart":"\u2111",
  "imath":"\u0131",
  "imof":"\u22B7",
  "imped":"\u01B5",
  "Implies":"\u21D2",
  "in":"\u2208",
  "incare":"\u2105",
  "infin":"\u221E",
  "infintie":"\u29DD",
  "inodot":"\u0131",
  "Int":"\u222C",
  "int":"\u222B",
  "intcal":"\u22BA",
  "integers":"\u2124",
  "Integral":"\u222B",
  "intercal":"\u22BA",
  "Intersection":"\u22C2",
  "intlarhk":"\u2A17",
  "intprod":"\u2A3C",
  "InvisibleComma":"\u2063",
  "InvisibleTimes":"\u2062",
  "IOcy":"\u0401",
  "iocy":"\u0451",
  "Iogon":"\u012E",
  "iogon":"\u012F",
  "Iopf":"\uD835\uDD40",
  "iopf":"\uD835\uDD5A",
  "Iota":"\u0399",
  "iota":"\u03B9",
  "iprod":"\u2A3C",
  "iquest":"\u00BF",
  "Iscr":"\u2110",
  "iscr":"\uD835\uDCBE",
  "isin":"\u2208",
  "isindot":"\u22F5",
  "isinE":"\u22F9",
  "isins":"\u22F4",
  "isinsv":"\u22F3",
  "isinv":"\u2208",
  "it":"\u2062",
  "Itilde":"\u0128",
  "itilde":"\u0129",
  "Iukcy":"\u0406",
  "iukcy":"\u0456",
  "Iuml":"\u00CF",
  "iuml":"\u00EF",
  "Jcirc":"\u0134",
  "jcirc":"\u0135",
  "Jcy":"\u0419",
  "jcy":"\u0439",
  "Jfr":"\uD835\uDD0D",
  "jfr":"\uD835\uDD27",
  "jmath":"\u0237",
  "Jopf":"\uD835\uDD41",
  "jopf":"\uD835\uDD5B",
  "Jscr":"\uD835\uDCA5",
  "jscr":"\uD835\uDCBF",
  "Jsercy":"\u0408",
  "jsercy":"\u0458",
  "Jukcy":"\u0404",
  "jukcy":"\u0454",
  "Kappa":"\u039A",
  "kappa":"\u03BA",
  "kappav":"\u03F0",
  "Kcedil":"\u0136",
  "kcedil":"\u0137",
  "Kcy":"\u041A",
  "kcy":"\u043A",
  "Kfr":"\uD835\uDD0E",
  "kfr":"\uD835\uDD28",
  "kgreen":"\u0138",
  "KHcy":"\u0425",
  "khcy":"\u0445",
  "KJcy":"\u040C",
  "kjcy":"\u045C",
  "Kopf":"\uD835\uDD42",
  "kopf":"\uD835\uDD5C",
  "Kscr":"\uD835\uDCA6",
  "kscr":"\uD835\uDCC0",
  "lAarr":"\u21DA",
  "Lacute":"\u0139",
  "lacute":"\u013A",
  "laemptyv":"\u29B4",
  "lagran":"\u2112",
  "Lambda":"\u039B",
  "lambda":"\u03BB",
  "Lang":"\u27EA",
  "lang":"\u27E8",
  "langd":"\u2991",
  "langle":"\u27E8",
  "lap":"\u2A85",
  "Laplacetrf":"\u2112",
  "laquo":"\u00AB",
  "Larr":"\u219E",
  "lArr":"\u21D0",
  "larr":"\u2190",
  "larrb":"\u21E4",
  "larrbfs":"\u291F",
  "larrfs":"\u291D",
  "larrhk":"\u21A9",
  "larrlp":"\u21AB",
  "larrpl":"\u2939",
  "larrsim":"\u2973",
  "larrtl":"\u21A2",
  "lat":"\u2AAB",
  "lAtail":"\u291B",
  "latail":"\u2919",
  "late":"\u2AAD",
  "lates":"\u2AAD\uFE00",
  "lBarr":"\u290E",
  "lbarr":"\u290C",
  "lbbrk":"\u2772",
  "lbrace":"\u007B",
  "lbrack":"\u005B",
  "lbrke":"\u298B",
  "lbrksld":"\u298F",
  "lbrkslu":"\u298D",
  "Lcaron":"\u013D",
  "lcaron":"\u013E",
  "Lcedil":"\u013B",
  "lcedil":"\u013C",
  "lceil":"\u2308",
  "lcub":"\u007B",
  "Lcy":"\u041B",
  "lcy":"\u043B",
  "ldca":"\u2936",
  "ldquo":"\u201C",
  "ldquor":"\u201E",
  "ldrdhar":"\u2967",
  "ldrushar":"\u294B",
  "ldsh":"\u21B2",
  "lE":"\u2266",
  "le":"\u2264",
  "LeftAngleBracket":"\u27E8",
  "LeftArrow":"\u2190",
  "Leftarrow":"\u21D0",
  "leftarrow":"\u2190",
  "LeftArrowBar":"\u21E4",
  "LeftArrowRightArrow":"\u21C6",
  "leftarrowtail":"\u21A2",
  "LeftCeiling":"\u2308",
  "LeftDoubleBracket":"\u27E6",
  "LeftDownTeeVector":"\u2961",
  "LeftDownVector":"\u21C3",
  "LeftDownVectorBar":"\u2959",
  "LeftFloor":"\u230A",
  "leftharpoondown":"\u21BD",
  "leftharpoonup":"\u21BC",
  "leftleftarrows":"\u21C7",
  "LeftRightArrow":"\u2194",
  "Leftrightarrow":"\u21D4",
  "leftrightarrow":"\u2194",
  "leftrightarrows":"\u21C6",
  "leftrightharpoons":"\u21CB",
  "leftrightsquigarrow":"\u21AD",
  "LeftRightVector":"\u294E",
  "LeftTee":"\u22A3",
  "LeftTeeArrow":"\u21A4",
  "LeftTeeVector":"\u295A",
  "leftthreetimes":"\u22CB",
  "LeftTriangle":"\u22B2",
  "LeftTriangleBar":"\u29CF",
  "LeftTriangleEqual":"\u22B4",
  "LeftUpDownVector":"\u2951",
  "LeftUpTeeVector":"\u2960",
  "LeftUpVector":"\u21BF",
  "LeftUpVectorBar":"\u2958",
  "LeftVector":"\u21BC",
  "LeftVectorBar":"\u2952",
  "lEg":"\u2A8B",
  "leg":"\u22DA",
  "leq":"\u2264",
  "leqq":"\u2266",
  "leqslant":"\u2A7D",
  "les":"\u2A7D",
  "lescc":"\u2AA8",
  "lesdot":"\u2A7F",
  "lesdoto":"\u2A81",
  "lesdotor":"\u2A83",
  "lesg":"\u22DA\uFE00",
  "lesges":"\u2A93",
  "lessapprox":"\u2A85",
  "lessdot":"\u22D6",
  "lesseqgtr":"\u22DA",
  "lesseqqgtr":"\u2A8B",
  "LessEqualGreater":"\u22DA",
  "LessFullEqual":"\u2266",
  "LessGreater":"\u2276",
  "lessgtr":"\u2276",
  "LessLess":"\u2AA1",
  "lesssim":"\u2272",
  "LessSlantEqual":"\u2A7D",
  "LessTilde":"\u2272",
  "lfisht":"\u297C",
  "lfloor":"\u230A",
  "Lfr":"\uD835\uDD0F",
  "lfr":"\uD835\uDD29",
  "lg":"\u2276",
  "lgE":"\u2A91",
  "lHar":"\u2962",
  "lhard":"\u21BD",
  "lharu":"\u21BC",
  "lharul":"\u296A",
  "lhblk":"\u2584",
  "LJcy":"\u0409",
  "ljcy":"\u0459",
  "Ll":"\u22D8",
  "ll":"\u226A",
  "llarr":"\u21C7",
  "llcorner":"\u231E",
  "Lleftarrow":"\u21DA",
  "llhard":"\u296B",
  "lltri":"\u25FA",
  "Lmidot":"\u013F",
  "lmidot":"\u0140",
  "lmoust":"\u23B0",
  "lmoustache":"\u23B0",
  "lnap":"\u2A89",
  "lnapprox":"\u2A89",
  "lnE":"\u2268",
  "lne":"\u2A87",
  "lneq":"\u2A87",
  "lneqq":"\u2268",
  "lnsim":"\u22E6",
  "loang":"\u27EC",
  "loarr":"\u21FD",
  "lobrk":"\u27E6",
  "LongLeftArrow":"\u27F5",
  "Longleftarrow":"\u27F8",
  "longleftarrow":"\u27F5",
  "LongLeftRightArrow":"\u27F7",
  "Longleftrightarrow":"\u27FA",
  "longleftrightarrow":"\u27F7",
  "longmapsto":"\u27FC",
  "LongRightArrow":"\u27F6",
  "Longrightarrow":"\u27F9",
  "longrightarrow":"\u27F6",
  "looparrowleft":"\u21AB",
  "looparrowright":"\u21AC",
  "lopar":"\u2985",
  "Lopf":"\uD835\uDD43",
  "lopf":"\uD835\uDD5D",
  "loplus":"\u2A2D",
  "lotimes":"\u2A34",
  "lowast":"\u2217",
  "lowbar":"\u005F",
  "LowerLeftArrow":"\u2199",
  "LowerRightArrow":"\u2198",
  "loz":"\u25CA",
  "lozenge":"\u25CA",
  "lozf":"\u29EB",
  "lpar":"\u0028",
  "lparlt":"\u2993",
  "lrarr":"\u21C6",
  "lrcorner":"\u231F",
  "lrhar":"\u21CB",
  "lrhard":"\u296D",
  "lrm":"\u200E",
  "lrtri":"\u22BF",
  "lsaquo":"\u2039",
  "Lscr":"\u2112",
  "lscr":"\uD835\uDCC1",
  "Lsh":"\u21B0",
  "lsh":"\u21B0",
  "lsim":"\u2272",
  "lsime":"\u2A8D",
  "lsimg":"\u2A8F",
  "lsqb":"\u005B",
  "lsquo":"\u2018",
  "lsquor":"\u201A",
  "Lstrok":"\u0141",
  "lstrok":"\u0142",
  "LT":"\u003C",
  "Lt":"\u226A",
  "lt":"\u003C",
  "ltcc":"\u2AA6",
  "ltcir":"\u2A79",
  "ltdot":"\u22D6",
  "lthree":"\u22CB",
  "ltimes":"\u22C9",
  "ltlarr":"\u2976",
  "ltquest":"\u2A7B",
  "ltri":"\u25C3",
  "ltrie":"\u22B4",
  "ltrif":"\u25C2",
  "ltrPar":"\u2996",
  "lurdshar":"\u294A",
  "luruhar":"\u2966",
  "lvertneqq":"\u2268\uFE00",
  "lvnE":"\u2268\uFE00",
  "macr":"\u00AF",
  "male":"\u2642",
  "malt":"\u2720",
  "maltese":"\u2720",
  "Map":"\u2905",
  "map":"\u21A6",
  "mapsto":"\u21A6",
  "mapstodown":"\u21A7",
  "mapstoleft":"\u21A4",
  "mapstoup":"\u21A5",
  "marker":"\u25AE",
  "mcomma":"\u2A29",
  "Mcy":"\u041C",
  "mcy":"\u043C",
  "mdash":"\u2014",
  "mDDot":"\u223A",
  "measuredangle":"\u2221",
  "MediumSpace":"\u205F",
  "Mellintrf":"\u2133",
  "Mfr":"\uD835\uDD10",
  "mfr":"\uD835\uDD2A",
  "mho":"\u2127",
  "micro":"\u00B5",
  "mid":"\u2223",
  "midast":"\u002A",
  "midcir":"\u2AF0",
  "middot":"\u00B7",
  "minus":"\u2212",
  "minusb":"\u229F",
  "minusd":"\u2238",
  "minusdu":"\u2A2A",
  "MinusPlus":"\u2213",
  "mlcp":"\u2ADB",
  "mldr":"\u2026",
  "mnplus":"\u2213",
  "models":"\u22A7",
  "Mopf":"\uD835\uDD44",
  "mopf":"\uD835\uDD5E",
  "mp":"\u2213",
  "Mscr":"\u2133",
  "mscr":"\uD835\uDCC2",
  "mstpos":"\u223E",
  "Mu":"\u039C",
  "mu":"\u03BC",
  "multimap":"\u22B8",
  "mumap":"\u22B8",
  "nabla":"\u2207",
  "Nacute":"\u0143",
  "nacute":"\u0144",
  "nang":"\u2220\u20D2",
  "nap":"\u2249",
  "napE":"\u2A70\u0338",
  "napid":"\u224B\u0338",
  "napos":"\u0149",
  "napprox":"\u2249",
  "natur":"\u266E",
  "natural":"\u266E",
  "naturals":"\u2115",
  "nbsp":"\u00A0",
  "nbump":"\u224E\u0338",
  "nbumpe":"\u224F\u0338",
  "ncap":"\u2A43",
  "Ncaron":"\u0147",
  "ncaron":"\u0148",
  "Ncedil":"\u0145",
  "ncedil":"\u0146",
  "ncong":"\u2247",
  "ncongdot":"\u2A6D\u0338",
  "ncup":"\u2A42",
  "Ncy":"\u041D",
  "ncy":"\u043D",
  "ndash":"\u2013",
  "ne":"\u2260",
  "nearhk":"\u2924",
  "neArr":"\u21D7",
  "nearr":"\u2197",
  "nearrow":"\u2197",
  "nedot":"\u2250\u0338",
  "NegativeMediumSpace":"\u200B",
  "NegativeThickSpace":"\u200B",
  "NegativeThinSpace":"\u200B",
  "NegativeVeryThinSpace":"\u200B",
  "nequiv":"\u2262",
  "nesear":"\u2928",
  "nesim":"\u2242\u0338",
  "NestedGreaterGreater":"\u226B",
  "NestedLessLess":"\u226A",
  "NewLine":"\u000A",
  "nexist":"\u2204",
  "nexists":"\u2204",
  "Nfr":"\uD835\uDD11",
  "nfr":"\uD835\uDD2B",
  "ngE":"\u2267\u0338",
  "nge":"\u2271",
  "ngeq":"\u2271",
  "ngeqq":"\u2267\u0338",
  "ngeqslant":"\u2A7E\u0338",
  "nges":"\u2A7E\u0338",
  "nGg":"\u22D9\u0338",
  "ngsim":"\u2275",
  "nGt":"\u226B\u20D2",
  "ngt":"\u226F",
  "ngtr":"\u226F",
  "nGtv":"\u226B\u0338",
  "nhArr":"\u21CE",
  "nharr":"\u21AE",
  "nhpar":"\u2AF2",
  "ni":"\u220B",
  "nis":"\u22FC",
  "nisd":"\u22FA",
  "niv":"\u220B",
  "NJcy":"\u040A",
  "njcy":"\u045A",
  "nlArr":"\u21CD",
  "nlarr":"\u219A",
  "nldr":"\u2025",
  "nlE":"\u2266\u0338",
  "nle":"\u2270",
  "nLeftarrow":"\u21CD",
  "nleftarrow":"\u219A",
  "nLeftrightarrow":"\u21CE",
  "nleftrightarrow":"\u21AE",
  "nleq":"\u2270",
  "nleqq":"\u2266\u0338",
  "nleqslant":"\u2A7D\u0338",
  "nles":"\u2A7D\u0338",
  "nless":"\u226E",
  "nLl":"\u22D8\u0338",
  "nlsim":"\u2274",
  "nLt":"\u226A\u20D2",
  "nlt":"\u226E",
  "nltri":"\u22EA",
  "nltrie":"\u22EC",
  "nLtv":"\u226A\u0338",
  "nmid":"\u2224",
  "NoBreak":"\u2060",
  "NonBreakingSpace":"\u00A0",
  "Nopf":"\u2115",
  "nopf":"\uD835\uDD5F",
  "Not":"\u2AEC",
  "not":"\u00AC",
  "NotCongruent":"\u2262",
  "NotCupCap":"\u226D",
  "NotDoubleVerticalBar":"\u2226",
  "NotElement":"\u2209",
  "NotEqual":"\u2260",
  "NotEqualTilde":"\u2242\u0338",
  "NotExists":"\u2204",
  "NotGreater":"\u226F",
  "NotGreaterEqual":"\u2271",
  "NotGreaterFullEqual":"\u2267\u0338",
  "NotGreaterGreater":"\u226B\u0338",
  "NotGreaterLess":"\u2279",
  "NotGreaterSlantEqual":"\u2A7E\u0338",
  "NotGreaterTilde":"\u2275",
  "NotHumpDownHump":"\u224E\u0338",
  "NotHumpEqual":"\u224F\u0338",
  "notin":"\u2209",
  "notindot":"\u22F5\u0338",
  "notinE":"\u22F9\u0338",
  "notinva":"\u2209",
  "notinvb":"\u22F7",
  "notinvc":"\u22F6",
  "NotLeftTriangle":"\u22EA",
  "NotLeftTriangleBar":"\u29CF\u0338",
  "NotLeftTriangleEqual":"\u22EC",
  "NotLess":"\u226E",
  "NotLessEqual":"\u2270",
  "NotLessGreater":"\u2278",
  "NotLessLess":"\u226A\u0338",
  "NotLessSlantEqual":"\u2A7D\u0338",
  "NotLessTilde":"\u2274",
  "NotNestedGreaterGreater":"\u2AA2\u0338",
  "NotNestedLessLess":"\u2AA1\u0338",
  "notni":"\u220C",
  "notniva":"\u220C",
  "notnivb":"\u22FE",
  "notnivc":"\u22FD",
  "NotPrecedes":"\u2280",
  "NotPrecedesEqual":"\u2AAF\u0338",
  "NotPrecedesSlantEqual":"\u22E0",
  "NotReverseElement":"\u220C",
  "NotRightTriangle":"\u22EB",
  "NotRightTriangleBar":"\u29D0\u0338",
  "NotRightTriangleEqual":"\u22ED",
  "NotSquareSubset":"\u228F\u0338",
  "NotSquareSubsetEqual":"\u22E2",
  "NotSquareSuperset":"\u2290\u0338",
  "NotSquareSupersetEqual":"\u22E3",
  "NotSubset":"\u2282\u20D2",
  "NotSubsetEqual":"\u2288",
  "NotSucceeds":"\u2281",
  "NotSucceedsEqual":"\u2AB0\u0338",
  "NotSucceedsSlantEqual":"\u22E1",
  "NotSucceedsTilde":"\u227F\u0338",
  "NotSuperset":"\u2283\u20D2",
  "NotSupersetEqual":"\u2289",
  "NotTilde":"\u2241",
  "NotTildeEqual":"\u2244",
  "NotTildeFullEqual":"\u2247",
  "NotTildeTilde":"\u2249",
  "NotVerticalBar":"\u2224",
  "npar":"\u2226",
  "nparallel":"\u2226",
  "nparsl":"\u2AFD\u20E5",
  "npart":"\u2202\u0338",
  "npolint":"\u2A14",
  "npr":"\u2280",
  "nprcue":"\u22E0",
  "npre":"\u2AAF\u0338",
  "nprec":"\u2280",
  "npreceq":"\u2AAF\u0338",
  "nrArr":"\u21CF",
  "nrarr":"\u219B",
  "nrarrc":"\u2933\u0338",
  "nrarrw":"\u219D\u0338",
  "nRightarrow":"\u21CF",
  "nrightarrow":"\u219B",
  "nrtri":"\u22EB",
  "nrtrie":"\u22ED",
  "nsc":"\u2281",
  "nsccue":"\u22E1",
  "nsce":"\u2AB0\u0338",
  "Nscr":"\uD835\uDCA9",
  "nscr":"\uD835\uDCC3",
  "nshortmid":"\u2224",
  "nshortparallel":"\u2226",
  "nsim":"\u2241",
  "nsime":"\u2244",
  "nsimeq":"\u2244",
  "nsmid":"\u2224",
  "nspar":"\u2226",
  "nsqsube":"\u22E2",
  "nsqsupe":"\u22E3",
  "nsub":"\u2284",
  "nsubE":"\u2AC5\u0338",
  "nsube":"\u2288",
  "nsubset":"\u2282\u20D2",
  "nsubseteq":"\u2288",
  "nsubseteqq":"\u2AC5\u0338",
  "nsucc":"\u2281",
  "nsucceq":"\u2AB0\u0338",
  "nsup":"\u2285",
  "nsupE":"\u2AC6\u0338",
  "nsupe":"\u2289",
  "nsupset":"\u2283\u20D2",
  "nsupseteq":"\u2289",
  "nsupseteqq":"\u2AC6\u0338",
  "ntgl":"\u2279",
  "Ntilde":"\u00D1",
  "ntilde":"\u00F1",
  "ntlg":"\u2278",
  "ntriangleleft":"\u22EA",
  "ntrianglelefteq":"\u22EC",
  "ntriangleright":"\u22EB",
  "ntrianglerighteq":"\u22ED",
  "Nu":"\u039D",
  "nu":"\u03BD",
  "num":"\u0023",
  "numero":"\u2116",
  "numsp":"\u2007",
  "nvap":"\u224D\u20D2",
  "nVDash":"\u22AF",
  "nVdash":"\u22AE",
  "nvDash":"\u22AD",
  "nvdash":"\u22AC",
  "nvge":"\u2265\u20D2",
  "nvgt":"\u003E\u20D2",
  "nvHarr":"\u2904",
  "nvinfin":"\u29DE",
  "nvlArr":"\u2902",
  "nvle":"\u2264\u20D2",
  "nvlt":"\u003C\u20D2",
  "nvltrie":"\u22B4\u20D2",
  "nvrArr":"\u2903",
  "nvrtrie":"\u22B5\u20D2",
  "nvsim":"\u223C\u20D2",
  "nwarhk":"\u2923",
  "nwArr":"\u21D6",
  "nwarr":"\u2196",
  "nwarrow":"\u2196",
  "nwnear":"\u2927",
  "Oacute":"\u00D3",
  "oacute":"\u00F3",
  "oast":"\u229B",
  "ocir":"\u229A",
  "Ocirc":"\u00D4",
  "ocirc":"\u00F4",
  "Ocy":"\u041E",
  "ocy":"\u043E",
  "odash":"\u229D",
  "Odblac":"\u0150",
  "odblac":"\u0151",
  "odiv":"\u2A38",
  "odot":"\u2299",
  "odsold":"\u29BC",
  "OElig":"\u0152",
  "oelig":"\u0153",
  "ofcir":"\u29BF",
  "Ofr":"\uD835\uDD12",
  "ofr":"\uD835\uDD2C",
  "ogon":"\u02DB",
  "Ograve":"\u00D2",
  "ograve":"\u00F2",
  "ogt":"\u29C1",
  "ohbar":"\u29B5",
  "ohm":"\u03A9",
  "oint":"\u222E",
  "olarr":"\u21BA",
  "olcir":"\u29BE",
  "olcross":"\u29BB",
  "oline":"\u203E",
  "olt":"\u29C0",
  "Omacr":"\u014C",
  "omacr":"\u014D",
  "Omega":"\u03A9",
  "omega":"\u03C9",
  "Omicron":"\u039F",
  "omicron":"\u03BF",
  "omid":"\u29B6",
  "ominus":"\u2296",
  "Oopf":"\uD835\uDD46",
  "oopf":"\uD835\uDD60",
  "opar":"\u29B7",
  "OpenCurlyDoubleQuote":"\u201C",
  "OpenCurlyQuote":"\u2018",
  "operp":"\u29B9",
  "oplus":"\u2295",
  "Or":"\u2A54",
  "or":"\u2228",
  "orarr":"\u21BB",
  "ord":"\u2A5D",
  "order":"\u2134",
  "orderof":"\u2134",
  "ordf":"\u00AA",
  "ordm":"\u00BA",
  "origof":"\u22B6",
  "oror":"\u2A56",
  "orslope":"\u2A57",
  "orv":"\u2A5B",
  "oS":"\u24C8",
  "Oscr":"\uD835\uDCAA",
  "oscr":"\u2134",
  "Oslash":"\u00D8",
  "oslash":"\u00F8",
  "osol":"\u2298",
  "Otilde":"\u00D5",
  "otilde":"\u00F5",
  "Otimes":"\u2A37",
  "otimes":"\u2297",
  "otimesas":"\u2A36",
  "Ouml":"\u00D6",
  "ouml":"\u00F6",
  "ovbar":"\u233D",
  "OverBar":"\u203E",
  "OverBrace":"\u23DE",
  "OverBracket":"\u23B4",
  "OverParenthesis":"\u23DC",
  "par":"\u2225",
  "para":"\u00B6",
  "parallel":"\u2225",
  "parsim":"\u2AF3",
  "parsl":"\u2AFD",
  "part":"\u2202",
  "PartialD":"\u2202",
  "Pcy":"\u041F",
  "pcy":"\u043F",
  "percnt":"\u0025",
  "period":"\u002E",
  "permil":"\u2030",
  "perp":"\u22A5",
  "pertenk":"\u2031",
  "Pfr":"\uD835\uDD13",
  "pfr":"\uD835\uDD2D",
  "Phi":"\u03A6",
  "phi":"\u03C6",
  "phiv":"\u03D5",
  "phmmat":"\u2133",
  "phone":"\u260E",
  "Pi":"\u03A0",
  "pi":"\u03C0",
  "pitchfork":"\u22D4",
  "piv":"\u03D6",
  "planck":"\u210F",
  "planckh":"\u210E",
  "plankv":"\u210F",
  "plus":"\u002B",
  "plusacir":"\u2A23",
  "plusb":"\u229E",
  "pluscir":"\u2A22",
  "plusdo":"\u2214",
  "plusdu":"\u2A25",
  "pluse":"\u2A72",
  "PlusMinus":"\u00B1",
  "plusmn":"\u00B1",
  "plussim":"\u2A26",
  "plustwo":"\u2A27",
  "pm":"\u00B1",
  "Poincareplane":"\u210C",
  "pointint":"\u2A15",
  "Popf":"\u2119",
  "popf":"\uD835\uDD61",
  "pound":"\u00A3",
  "Pr":"\u2ABB",
  "pr":"\u227A",
  "prap":"\u2AB7",
  "prcue":"\u227C",
  "prE":"\u2AB3",
  "pre":"\u2AAF",
  "prec":"\u227A",
  "precapprox":"\u2AB7",
  "preccurlyeq":"\u227C",
  "Precedes":"\u227A",
  "PrecedesEqual":"\u2AAF",
  "PrecedesSlantEqual":"\u227C",
  "PrecedesTilde":"\u227E",
  "preceq":"\u2AAF",
  "precnapprox":"\u2AB9",
  "precneqq":"\u2AB5",
  "precnsim":"\u22E8",
  "precsim":"\u227E",
  "Prime":"\u2033",
  "prime":"\u2032",
  "primes":"\u2119",
  "prnap":"\u2AB9",
  "prnE":"\u2AB5",
  "prnsim":"\u22E8",
  "prod":"\u220F",
  "Product":"\u220F",
  "profalar":"\u232E",
  "profline":"\u2312",
  "profsurf":"\u2313",
  "prop":"\u221D",
  "Proportion":"\u2237",
  "Proportional":"\u221D",
  "propto":"\u221D",
  "prsim":"\u227E",
  "prurel":"\u22B0",
  "Pscr":"\uD835\uDCAB",
  "pscr":"\uD835\uDCC5",
  "Psi":"\u03A8",
  "psi":"\u03C8",
  "puncsp":"\u2008",
  "Qfr":"\uD835\uDD14",
  "qfr":"\uD835\uDD2E",
  "qint":"\u2A0C",
  "Qopf":"\u211A",
  "qopf":"\uD835\uDD62",
  "qprime":"\u2057",
  "Qscr":"\uD835\uDCAC",
  "qscr":"\uD835\uDCC6",
  "quaternions":"\u210D",
  "quatint":"\u2A16",
  "quest":"\u003F",
  "questeq":"\u225F",
  "QUOT":"\u0022",
  "quot":"\u0022",
  "rAarr":"\u21DB",
  "race":"\u223D\u0331",
  "Racute":"\u0154",
  "racute":"\u0155",
  "radic":"\u221A",
  "raemptyv":"\u29B3",
  "Rang":"\u27EB",
  "rang":"\u27E9",
  "rangd":"\u2992",
  "range":"\u29A5",
  "rangle":"\u27E9",
  "raquo":"\u00BB",
  "Rarr":"\u21A0",
  "rArr":"\u21D2",
  "rarr":"\u2192",
  "rarrap":"\u2975",
  "rarrb":"\u21E5",
  "rarrbfs":"\u2920",
  "rarrc":"\u2933",
  "rarrfs":"\u291E",
  "rarrhk":"\u21AA",
  "rarrlp":"\u21AC",
  "rarrpl":"\u2945",
  "rarrsim":"\u2974",
  "Rarrtl":"\u2916",
  "rarrtl":"\u21A3",
  "rarrw":"\u219D",
  "rAtail":"\u291C",
  "ratail":"\u291A",
  "ratio":"\u2236",
  "rationals":"\u211A",
  "RBarr":"\u2910",
  "rBarr":"\u290F",
  "rbarr":"\u290D",
  "rbbrk":"\u2773",
  "rbrace":"\u007D",
  "rbrack":"\u005D",
  "rbrke":"\u298C",
  "rbrksld":"\u298E",
  "rbrkslu":"\u2990",
  "Rcaron":"\u0158",
  "rcaron":"\u0159",
  "Rcedil":"\u0156",
  "rcedil":"\u0157",
  "rceil":"\u2309",
  "rcub":"\u007D",
  "Rcy":"\u0420",
  "rcy":"\u0440",
  "rdca":"\u2937",
  "rdldhar":"\u2969",
  "rdquo":"\u201D",
  "rdquor":"\u201D",
  "rdsh":"\u21B3",
  "Re":"\u211C",
  "real":"\u211C",
  "realine":"\u211B",
  "realpart":"\u211C",
  "reals":"\u211D",
  "rect":"\u25AD",
  "REG":"\u00AE",
  "reg":"\u00AE",
  "ReverseElement":"\u220B",
  "ReverseEquilibrium":"\u21CB",
  "ReverseUpEquilibrium":"\u296F",
  "rfisht":"\u297D",
  "rfloor":"\u230B",
  "Rfr":"\u211C",
  "rfr":"\uD835\uDD2F",
  "rHar":"\u2964",
  "rhard":"\u21C1",
  "rharu":"\u21C0",
  "rharul":"\u296C",
  "Rho":"\u03A1",
  "rho":"\u03C1",
  "rhov":"\u03F1",
  "RightAngleBracket":"\u27E9",
  "RightArrow":"\u2192",
  "Rightarrow":"\u21D2",
  "rightarrow":"\u2192",
  "RightArrowBar":"\u21E5",
  "RightArrowLeftArrow":"\u21C4",
  "rightarrowtail":"\u21A3",
  "RightCeiling":"\u2309",
  "RightDoubleBracket":"\u27E7",
  "RightDownTeeVector":"\u295D",
  "RightDownVector":"\u21C2",
  "RightDownVectorBar":"\u2955",
  "RightFloor":"\u230B",
  "rightharpoondown":"\u21C1",
  "rightharpoonup":"\u21C0",
  "rightleftarrows":"\u21C4",
  "rightleftharpoons":"\u21CC",
  "rightrightarrows":"\u21C9",
  "rightsquigarrow":"\u219D",
  "RightTee":"\u22A2",
  "RightTeeArrow":"\u21A6",
  "RightTeeVector":"\u295B",
  "rightthreetimes":"\u22CC",
  "RightTriangle":"\u22B3",
  "RightTriangleBar":"\u29D0",
  "RightTriangleEqual":"\u22B5",
  "RightUpDownVector":"\u294F",
  "RightUpTeeVector":"\u295C",
  "RightUpVector":"\u21BE",
  "RightUpVectorBar":"\u2954",
  "RightVector":"\u21C0",
  "RightVectorBar":"\u2953",
  "ring":"\u02DA",
  "risingdotseq":"\u2253",
  "rlarr":"\u21C4",
  "rlhar":"\u21CC",
  "rlm":"\u200F",
  "rmoust":"\u23B1",
  "rmoustache":"\u23B1",
  "rnmid":"\u2AEE",
  "roang":"\u27ED",
  "roarr":"\u21FE",
  "robrk":"\u27E7",
  "ropar":"\u2986",
  "Ropf":"\u211D",
  "ropf":"\uD835\uDD63",
  "roplus":"\u2A2E",
  "rotimes":"\u2A35",
  "RoundImplies":"\u2970",
  "rpar":"\u0029",
  "rpargt":"\u2994",
  "rppolint":"\u2A12",
  "rrarr":"\u21C9",
  "Rrightarrow":"\u21DB",
  "rsaquo":"\u203A",
  "Rscr":"\u211B",
  "rscr":"\uD835\uDCC7",
  "Rsh":"\u21B1",
  "rsh":"\u21B1",
  "rsqb":"\u005D",
  "rsquo":"\u2019",
  "rsquor":"\u2019",
  "rthree":"\u22CC",
  "rtimes":"\u22CA",
  "rtri":"\u25B9",
  "rtrie":"\u22B5",
  "rtrif":"\u25B8",
  "rtriltri":"\u29CE",
  "RuleDelayed":"\u29F4",
  "ruluhar":"\u2968",
  "rx":"\u211E",
  "Sacute":"\u015A",
  "sacute":"\u015B",
  "sbquo":"\u201A",
  "Sc":"\u2ABC",
  "sc":"\u227B",
  "scap":"\u2AB8",
  "Scaron":"\u0160",
  "scaron":"\u0161",
  "sccue":"\u227D",
  "scE":"\u2AB4",
  "sce":"\u2AB0",
  "Scedil":"\u015E",
  "scedil":"\u015F",
  "Scirc":"\u015C",
  "scirc":"\u015D",
  "scnap":"\u2ABA",
  "scnE":"\u2AB6",
  "scnsim":"\u22E9",
  "scpolint":"\u2A13",
  "scsim":"\u227F",
  "Scy":"\u0421",
  "scy":"\u0441",
  "sdot":"\u22C5",
  "sdotb":"\u22A1",
  "sdote":"\u2A66",
  "searhk":"\u2925",
  "seArr":"\u21D8",
  "searr":"\u2198",
  "searrow":"\u2198",
  "sect":"\u00A7",
  "semi":"\u003B",
  "seswar":"\u2929",
  "setminus":"\u2216",
  "setmn":"\u2216",
  "sext":"\u2736",
  "Sfr":"\uD835\uDD16",
  "sfr":"\uD835\uDD30",
  "sfrown":"\u2322",
  "sharp":"\u266F",
  "SHCHcy":"\u0429",
  "shchcy":"\u0449",
  "SHcy":"\u0428",
  "shcy":"\u0448",
  "ShortDownArrow":"\u2193",
  "ShortLeftArrow":"\u2190",
  "shortmid":"\u2223",
  "shortparallel":"\u2225",
  "ShortRightArrow":"\u2192",
  "ShortUpArrow":"\u2191",
  "shy":"\u00AD",
  "Sigma":"\u03A3",
  "sigma":"\u03C3",
  "sigmaf":"\u03C2",
  "sigmav":"\u03C2",
  "sim":"\u223C",
  "simdot":"\u2A6A",
  "sime":"\u2243",
  "simeq":"\u2243",
  "simg":"\u2A9E",
  "simgE":"\u2AA0",
  "siml":"\u2A9D",
  "simlE":"\u2A9F",
  "simne":"\u2246",
  "simplus":"\u2A24",
  "simrarr":"\u2972",
  "slarr":"\u2190",
  "SmallCircle":"\u2218",
  "smallsetminus":"\u2216",
  "smashp":"\u2A33",
  "smeparsl":"\u29E4",
  "smid":"\u2223",
  "smile":"\u2323",
  "smt":"\u2AAA",
  "smte":"\u2AAC",
  "smtes":"\u2AAC\uFE00",
  "SOFTcy":"\u042C",
  "softcy":"\u044C",
  "sol":"\u002F",
  "solb":"\u29C4",
  "solbar":"\u233F",
  "Sopf":"\uD835\uDD4A",
  "sopf":"\uD835\uDD64",
  "spades":"\u2660",
  "spadesuit":"\u2660",
  "spar":"\u2225",
  "sqcap":"\u2293",
  "sqcaps":"\u2293\uFE00",
  "sqcup":"\u2294",
  "sqcups":"\u2294\uFE00",
  "Sqrt":"\u221A",
  "sqsub":"\u228F",
  "sqsube":"\u2291",
  "sqsubset":"\u228F",
  "sqsubseteq":"\u2291",
  "sqsup":"\u2290",
  "sqsupe":"\u2292",
  "sqsupset":"\u2290",
  "sqsupseteq":"\u2292",
  "squ":"\u25A1",
  "Square":"\u25A1",
  "square":"\u25A1",
  "SquareIntersection":"\u2293",
  "SquareSubset":"\u228F",
  "SquareSubsetEqual":"\u2291",
  "SquareSuperset":"\u2290",
  "SquareSupersetEqual":"\u2292",
  "SquareUnion":"\u2294",
  "squarf":"\u25AA",
  "squf":"\u25AA",
  "srarr":"\u2192",
  "Sscr":"\uD835\uDCAE",
  "sscr":"\uD835\uDCC8",
  "ssetmn":"\u2216",
  "ssmile":"\u2323",
  "sstarf":"\u22C6",
  "Star":"\u22C6",
  "star":"\u2606",
  "starf":"\u2605",
  "straightepsilon":"\u03F5",
  "straightphi":"\u03D5",
  "strns":"\u00AF",
  "Sub":"\u22D0",
  "sub":"\u2282",
  "subdot":"\u2ABD",
  "subE":"\u2AC5",
  "sube":"\u2286",
  "subedot":"\u2AC3",
  "submult":"\u2AC1",
  "subnE":"\u2ACB",
  "subne":"\u228A",
  "subplus":"\u2ABF",
  "subrarr":"\u2979",
  "Subset":"\u22D0",
  "subset":"\u2282",
  "subseteq":"\u2286",
  "subseteqq":"\u2AC5",
  "SubsetEqual":"\u2286",
  "subsetneq":"\u228A",
  "subsetneqq":"\u2ACB",
  "subsim":"\u2AC7",
  "subsub":"\u2AD5",
  "subsup":"\u2AD3",
  "succ":"\u227B",
  "succapprox":"\u2AB8",
  "succcurlyeq":"\u227D",
  "Succeeds":"\u227B",
  "SucceedsEqual":"\u2AB0",
  "SucceedsSlantEqual":"\u227D",
  "SucceedsTilde":"\u227F",
  "succeq":"\u2AB0",
  "succnapprox":"\u2ABA",
  "succneqq":"\u2AB6",
  "succnsim":"\u22E9",
  "succsim":"\u227F",
  "SuchThat":"\u220B",
  "Sum":"\u2211",
  "sum":"\u2211",
  "sung":"\u266A",
  "Sup":"\u22D1",
  "sup":"\u2283",
  "sup1":"\u00B9",
  "sup2":"\u00B2",
  "sup3":"\u00B3",
  "supdot":"\u2ABE",
  "supdsub":"\u2AD8",
  "supE":"\u2AC6",
  "supe":"\u2287",
  "supedot":"\u2AC4",
  "Superset":"\u2283",
  "SupersetEqual":"\u2287",
  "suphsol":"\u27C9",
  "suphsub":"\u2AD7",
  "suplarr":"\u297B",
  "supmult":"\u2AC2",
  "supnE":"\u2ACC",
  "supne":"\u228B",
  "supplus":"\u2AC0",
  "Supset":"\u22D1",
  "supset":"\u2283",
  "supseteq":"\u2287",
  "supseteqq":"\u2AC6",
  "supsetneq":"\u228B",
  "supsetneqq":"\u2ACC",
  "supsim":"\u2AC8",
  "supsub":"\u2AD4",
  "supsup":"\u2AD6",
  "swarhk":"\u2926",
  "swArr":"\u21D9",
  "swarr":"\u2199",
  "swarrow":"\u2199",
  "swnwar":"\u292A",
  "szlig":"\u00DF",
  "Tab":"\u0009",
  "target":"\u2316",
  "Tau":"\u03A4",
  "tau":"\u03C4",
  "tbrk":"\u23B4",
  "Tcaron":"\u0164",
  "tcaron":"\u0165",
  "Tcedil":"\u0162",
  "tcedil":"\u0163",
  "Tcy":"\u0422",
  "tcy":"\u0442",
  "tdot":"\u20DB",
  "telrec":"\u2315",
  "Tfr":"\uD835\uDD17",
  "tfr":"\uD835\uDD31",
  "there4":"\u2234",
  "Therefore":"\u2234",
  "therefore":"\u2234",
  "Theta":"\u0398",
  "theta":"\u03B8",
  "thetasym":"\u03D1",
  "thetav":"\u03D1",
  "thickapprox":"\u2248",
  "thicksim":"\u223C",
  "ThickSpace":"\u205F\u200A",
  "thinsp":"\u2009",
  "ThinSpace":"\u2009",
  "thkap":"\u2248",
  "thksim":"\u223C",
  "THORN":"\u00DE",
  "thorn":"\u00FE",
  "Tilde":"\u223C",
  "tilde":"\u02DC",
  "TildeEqual":"\u2243",
  "TildeFullEqual":"\u2245",
  "TildeTilde":"\u2248",
  "times":"\u00D7",
  "timesb":"\u22A0",
  "timesbar":"\u2A31",
  "timesd":"\u2A30",
  "tint":"\u222D",
  "toea":"\u2928",
  "top":"\u22A4",
  "topbot":"\u2336",
  "topcir":"\u2AF1",
  "Topf":"\uD835\uDD4B",
  "topf":"\uD835\uDD65",
  "topfork":"\u2ADA",
  "tosa":"\u2929",
  "tprime":"\u2034",
  "TRADE":"\u2122",
  "trade":"\u2122",
  "triangle":"\u25B5",
  "triangledown":"\u25BF",
  "triangleleft":"\u25C3",
  "trianglelefteq":"\u22B4",
  "triangleq":"\u225C",
  "triangleright":"\u25B9",
  "trianglerighteq":"\u22B5",
  "tridot":"\u25EC",
  "trie":"\u225C",
  "triminus":"\u2A3A",
  "TripleDot":"\u20DB",
  "triplus":"\u2A39",
  "trisb":"\u29CD",
  "tritime":"\u2A3B",
  "trpezium":"\u23E2",
  "Tscr":"\uD835\uDCAF",
  "tscr":"\uD835\uDCC9",
  "TScy":"\u0426",
  "tscy":"\u0446",
  "TSHcy":"\u040B",
  "tshcy":"\u045B",
  "Tstrok":"\u0166",
  "tstrok":"\u0167",
  "twixt":"\u226C",
  "twoheadleftarrow":"\u219E",
  "twoheadrightarrow":"\u21A0",
  "Uacute":"\u00DA",
  "uacute":"\u00FA",
  "Uarr":"\u219F",
  "uArr":"\u21D1",
  "uarr":"\u2191",
  "Uarrocir":"\u2949",
  "Ubrcy":"\u040E",
  "ubrcy":"\u045E",
  "Ubreve":"\u016C",
  "ubreve":"\u016D",
  "Ucirc":"\u00DB",
  "ucirc":"\u00FB",
  "Ucy":"\u0423",
  "ucy":"\u0443",
  "udarr":"\u21C5",
  "Udblac":"\u0170",
  "udblac":"\u0171",
  "udhar":"\u296E",
  "ufisht":"\u297E",
  "Ufr":"\uD835\uDD18",
  "ufr":"\uD835\uDD32",
  "Ugrave":"\u00D9",
  "ugrave":"\u00F9",
  "uHar":"\u2963",
  "uharl":"\u21BF",
  "uharr":"\u21BE",
  "uhblk":"\u2580",
  "ulcorn":"\u231C",
  "ulcorner":"\u231C",
  "ulcrop":"\u230F",
  "ultri":"\u25F8",
  "Umacr":"\u016A",
  "umacr":"\u016B",
  "uml":"\u00A8",
  "UnderBar":"\u005F",
  "UnderBrace":"\u23DF",
  "UnderBracket":"\u23B5",
  "UnderParenthesis":"\u23DD",
  "Union":"\u22C3",
  "UnionPlus":"\u228E",
  "Uogon":"\u0172",
  "uogon":"\u0173",
  "Uopf":"\uD835\uDD4C",
  "uopf":"\uD835\uDD66",
  "UpArrow":"\u2191",
  "Uparrow":"\u21D1",
  "uparrow":"\u2191",
  "UpArrowBar":"\u2912",
  "UpArrowDownArrow":"\u21C5",
  "UpDownArrow":"\u2195",
  "Updownarrow":"\u21D5",
  "updownarrow":"\u2195",
  "UpEquilibrium":"\u296E",
  "upharpoonleft":"\u21BF",
  "upharpoonright":"\u21BE",
  "uplus":"\u228E",
  "UpperLeftArrow":"\u2196",
  "UpperRightArrow":"\u2197",
  "Upsi":"\u03D2",
  "upsi":"\u03C5",
  "upsih":"\u03D2",
  "Upsilon":"\u03A5",
  "upsilon":"\u03C5",
  "UpTee":"\u22A5",
  "UpTeeArrow":"\u21A5",
  "upuparrows":"\u21C8",
  "urcorn":"\u231D",
  "urcorner":"\u231D",
  "urcrop":"\u230E",
  "Uring":"\u016E",
  "uring":"\u016F",
  "urtri":"\u25F9",
  "Uscr":"\uD835\uDCB0",
  "uscr":"\uD835\uDCCA",
  "utdot":"\u22F0",
  "Utilde":"\u0168",
  "utilde":"\u0169",
  "utri":"\u25B5",
  "utrif":"\u25B4",
  "uuarr":"\u21C8",
  "Uuml":"\u00DC",
  "uuml":"\u00FC",
  "uwangle":"\u29A7",
  "vangrt":"\u299C",
  "varepsilon":"\u03F5",
  "varkappa":"\u03F0",
  "varnothing":"\u2205",
  "varphi":"\u03D5",
  "varpi":"\u03D6",
  "varpropto":"\u221D",
  "vArr":"\u21D5",
  "varr":"\u2195",
  "varrho":"\u03F1",
  "varsigma":"\u03C2",
  "varsubsetneq":"\u228A\uFE00",
  "varsubsetneqq":"\u2ACB\uFE00",
  "varsupsetneq":"\u228B\uFE00",
  "varsupsetneqq":"\u2ACC\uFE00",
  "vartheta":"\u03D1",
  "vartriangleleft":"\u22B2",
  "vartriangleright":"\u22B3",
  "Vbar":"\u2AEB",
  "vBar":"\u2AE8",
  "vBarv":"\u2AE9",
  "Vcy":"\u0412",
  "vcy":"\u0432",
  "VDash":"\u22AB",
  "Vdash":"\u22A9",
  "vDash":"\u22A8",
  "vdash":"\u22A2",
  "Vdashl":"\u2AE6",
  "Vee":"\u22C1",
  "vee":"\u2228",
  "veebar":"\u22BB",
  "veeeq":"\u225A",
  "vellip":"\u22EE",
  "Verbar":"\u2016",
  "verbar":"\u007C",
  "Vert":"\u2016",
  "vert":"\u007C",
  "VerticalBar":"\u2223",
  "VerticalLine":"\u007C",
  "VerticalSeparator":"\u2758",
  "VerticalTilde":"\u2240",
  "VeryThinSpace":"\u200A",
  "Vfr":"\uD835\uDD19",
  "vfr":"\uD835\uDD33",
  "vltri":"\u22B2",
  "vnsub":"\u2282\u20D2",
  "vnsup":"\u2283\u20D2",
  "Vopf":"\uD835\uDD4D",
  "vopf":"\uD835\uDD67",
  "vprop":"\u221D",
  "vrtri":"\u22B3",
  "Vscr":"\uD835\uDCB1",
  "vscr":"\uD835\uDCCB",
  "vsubnE":"\u2ACB\uFE00",
  "vsubne":"\u228A\uFE00",
  "vsupnE":"\u2ACC\uFE00",
  "vsupne":"\u228B\uFE00",
  "Vvdash":"\u22AA",
  "vzigzag":"\u299A",
  "Wcirc":"\u0174",
  "wcirc":"\u0175",
  "wedbar":"\u2A5F",
  "Wedge":"\u22C0",
  "wedge":"\u2227",
  "wedgeq":"\u2259",
  "weierp":"\u2118",
  "Wfr":"\uD835\uDD1A",
  "wfr":"\uD835\uDD34",
  "Wopf":"\uD835\uDD4E",
  "wopf":"\uD835\uDD68",
  "wp":"\u2118",
  "wr":"\u2240",
  "wreath":"\u2240",
  "Wscr":"\uD835\uDCB2",
  "wscr":"\uD835\uDCCC",
  "xcap":"\u22C2",
  "xcirc":"\u25EF",
  "xcup":"\u22C3",
  "xdtri":"\u25BD",
  "Xfr":"\uD835\uDD1B",
  "xfr":"\uD835\uDD35",
  "xhArr":"\u27FA",
  "xharr":"\u27F7",
  "Xi":"\u039E",
  "xi":"\u03BE",
  "xlArr":"\u27F8",
  "xlarr":"\u27F5",
  "xmap":"\u27FC",
  "xnis":"\u22FB",
  "xodot":"\u2A00",
  "Xopf":"\uD835\uDD4F",
  "xopf":"\uD835\uDD69",
  "xoplus":"\u2A01",
  "xotime":"\u2A02",
  "xrArr":"\u27F9",
  "xrarr":"\u27F6",
  "Xscr":"\uD835\uDCB3",
  "xscr":"\uD835\uDCCD",
  "xsqcup":"\u2A06",
  "xuplus":"\u2A04",
  "xutri":"\u25B3",
  "xvee":"\u22C1",
  "xwedge":"\u22C0",
  "Yacute":"\u00DD",
  "yacute":"\u00FD",
  "YAcy":"\u042F",
  "yacy":"\u044F",
  "Ycirc":"\u0176",
  "ycirc":"\u0177",
  "Ycy":"\u042B",
  "ycy":"\u044B",
  "yen":"\u00A5",
  "Yfr":"\uD835\uDD1C",
  "yfr":"\uD835\uDD36",
  "YIcy":"\u0407",
  "yicy":"\u0457",
  "Yopf":"\uD835\uDD50",
  "yopf":"\uD835\uDD6A",
  "Yscr":"\uD835\uDCB4",
  "yscr":"\uD835\uDCCE",
  "YUcy":"\u042E",
  "yucy":"\u044E",
  "Yuml":"\u0178",
  "yuml":"\u00FF",
  "Zacute":"\u0179",
  "zacute":"\u017A",
  "Zcaron":"\u017D",
  "zcaron":"\u017E",
  "Zcy":"\u0417",
  "zcy":"\u0437",
  "Zdot":"\u017B",
  "zdot":"\u017C",
  "zeetrf":"\u2128",
  "ZeroWidthSpace":"\u200B",
  "Zeta":"\u0396",
  "zeta":"\u03B6",
  "Zfr":"\u2128",
  "zfr":"\uD835\uDD37",
  "ZHcy":"\u0416",
  "zhcy":"\u0436",
  "zigrarr":"\u21DD",
  "Zopf":"\u2124",
  "zopf":"\uD835\uDD6B",
  "Zscr":"\uD835\uDCB5",
  "zscr":"\uD835\uDCCF",
  "zwj":"\u200D",
  "zwnj":"\u200C"
};

var hasOwn = Object.prototype.hasOwnProperty;

function has(object, key) {
  return object
    ? hasOwn.call(object, key)
    : false;
}

function decodeEntity(name) {
  if (has(entities, name)) {
    return entities[name]
  } else {
    return name;
  }
}

/**
 * Utility functions
 */

function typeOf(obj) {
  return Object.prototype.toString.call(obj);
}

function isString(obj) {
  return typeOf(obj) === '[object String]';
}

var hasOwn$1 = Object.prototype.hasOwnProperty;

function has$1(object, key) {
  return object
    ? hasOwn$1.call(object, key)
    : false;
}

// Extend objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = [].slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be object');
    }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

////////////////////////////////////////////////////////////////////////////////

var UNESCAPE_MD_RE = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

function unescapeMd(str) {
  if (str.indexOf('\\') < 0) { return str; }
  return str.replace(UNESCAPE_MD_RE, '$1');
}

////////////////////////////////////////////////////////////////////////////////

function isValidEntityCode(c) {
  /*eslint no-bitwise:0*/
  // broken sequence
  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
  // never used
  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
  // control codes
  if (c >= 0x00 && c <= 0x08) { return false; }
  if (c === 0x0B) { return false; }
  if (c >= 0x0E && c <= 0x1F) { return false; }
  if (c >= 0x7F && c <= 0x9F) { return false; }
  // out of range
  if (c > 0x10FFFF) { return false; }
  return true;
}

function fromCodePoint(c) {
  /*eslint no-bitwise:0*/
  if (c > 0xffff) {
    c -= 0x10000;
    var surrogate1 = 0xd800 + (c >> 10),
        surrogate2 = 0xdc00 + (c & 0x3ff);

    return String.fromCharCode(surrogate1, surrogate2);
  }
  return String.fromCharCode(c);
}

var NAMED_ENTITY_RE   = /&([a-z#][a-z0-9]{1,31});/gi;
var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;

function replaceEntityPattern(match, name) {
  var code = 0;
  var decoded = decodeEntity(name);

  if (name !== decoded) {
    return decoded;
  } else if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
    code = name[1].toLowerCase() === 'x' ?
      parseInt(name.slice(2), 16)
    :
      parseInt(name.slice(1), 10);
    if (isValidEntityCode(code)) {
      return fromCodePoint(code);
    }
  }
  return match;
}

function replaceEntities(str) {
  if (str.indexOf('&') < 0) { return str; }

  return str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
}

////////////////////////////////////////////////////////////////////////////////

var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}

function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
}

var utils = /*#__PURE__*/Object.freeze({
  isString: isString,
  has: has$1,
  assign: assign,
  unescapeMd: unescapeMd,
  isValidEntityCode: isValidEntityCode,
  fromCodePoint: fromCodePoint,
  replaceEntities: replaceEntities,
  escapeHtml: escapeHtml
});

/**
 * Renderer rules cache
 */

var rules = {};

/**
 * Blockquotes
 */

rules.blockquote_open = function(/* tokens, idx, options, env */) {
  return '<blockquote>\n';
};

rules.blockquote_close = function(tokens, idx /*, options, env */) {
  return '</blockquote>' + getBreak(tokens, idx);
};

/**
 * Code
 */

rules.code = function(tokens, idx /*, options, env */) {
  if (tokens[idx].block) {
    return '<pre><code>' + escapeHtml(tokens[idx].content) + '</code></pre>' + getBreak(tokens, idx);
  }
  return '<code>' + escapeHtml(tokens[idx].content) + '</code>';
};

/**
 * Fenced code blocks
 */

rules.fence = function(tokens, idx, options, env, instance) {
  var token = tokens[idx];
  var langClass = '';
  var langPrefix = options.langPrefix;
  var langName = '', fences, fenceName;
  var highlighted;

  if (token.params) {

    //
    // ```foo bar
    //
    // Try custom renderer "foo" first. That will simplify overwrite
    // for diagrams, latex, and any other fenced block with custom look
    //

    fences = token.params.split(/\s+/g);
    fenceName = fences.join(' ');

    if (has$1(instance.rules.fence_custom, fences[0])) {
      return instance.rules.fence_custom[fences[0]](tokens, idx, options, env, instance);
    }

    langName = escapeHtml(replaceEntities(unescapeMd(fenceName)));
    langClass = ' class="' + langPrefix + langName + '"';
  }

  if (options.highlight) {
    highlighted = options.highlight.apply(options.highlight, [ token.content ].concat(fences))
      || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }

  return '<pre><code' + langClass + '>'
        + highlighted
        + '</code></pre>'
        + getBreak(tokens, idx);
};

rules.fence_custom = {};

/**
 * Headings
 */

rules.heading_open = function(tokens, idx /*, options, env */) {
  return '<h' + tokens[idx].hLevel + '>';
};
rules.heading_close = function(tokens, idx /*, options, env */) {
  return '</h' + tokens[idx].hLevel + '>\n';
};

/**
 * Horizontal rules
 */

rules.hr = function(tokens, idx, options /*, env */) {
  return (options.xhtmlOut ? '<hr />' : '<hr>') + getBreak(tokens, idx);
};

/**
 * Bullets
 */

rules.bullet_list_open = function(/* tokens, idx, options, env */) {
  return '<ul>\n';
};
rules.bullet_list_close = function(tokens, idx /*, options, env */) {
  return '</ul>' + getBreak(tokens, idx);
};

/**
 * List items
 */

rules.list_item_open = function(/* tokens, idx, options, env */) {
  return '<li>';
};
rules.list_item_close = function(/* tokens, idx, options, env */) {
  return '</li>\n';
};

/**
 * Ordered list items
 */

rules.ordered_list_open = function(tokens, idx /*, options, env */) {
  var token = tokens[idx];
  var order = token.order > 1 ? ' start="' + token.order + '"' : '';
  return '<ol' + order + '>\n';
};
rules.ordered_list_close = function(tokens, idx /*, options, env */) {
  return '</ol>' + getBreak(tokens, idx);
};

/**
 * Paragraphs
 */

rules.paragraph_open = function(tokens, idx /*, options, env */) {
  return tokens[idx].tight ? '' : '<p>';
};
rules.paragraph_close = function(tokens, idx /*, options, env */) {
  var addBreak = !(tokens[idx].tight && idx && tokens[idx - 1].type === 'inline' && !tokens[idx - 1].content);
  return (tokens[idx].tight ? '' : '</p>') + (addBreak ? getBreak(tokens, idx) : '');
};

/**
 * Links
 */

rules.link_open = function(tokens, idx, options /* env */) {
  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
  var target = options.linkTarget ? (' target="' + options.linkTarget + '"') : '';
  return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + target + '>';
};
rules.link_close = function(/* tokens, idx, options, env */) {
  return '</a>';
};

/**
 * Images
 */

rules.image = function(tokens, idx, options /*, env */) {
  var src = ' src="' + escapeHtml(tokens[idx].src) + '"';
  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
  var alt = ' alt="' + (tokens[idx].alt ? escapeHtml(replaceEntities(unescapeMd(tokens[idx].alt))) : '') + '"';
  var suffix = options.xhtmlOut ? ' /' : '';
  return '<img' + src + alt + title + suffix + '>';
};

/**
 * Tables
 */

rules.table_open = function(/* tokens, idx, options, env */) {
  return '<table>\n';
};
rules.table_close = function(/* tokens, idx, options, env */) {
  return '</table>\n';
};
rules.thead_open = function(/* tokens, idx, options, env */) {
  return '<thead>\n';
};
rules.thead_close = function(/* tokens, idx, options, env */) {
  return '</thead>\n';
};
rules.tbody_open = function(/* tokens, idx, options, env */) {
  return '<tbody>\n';
};
rules.tbody_close = function(/* tokens, idx, options, env */) {
  return '</tbody>\n';
};
rules.tr_open = function(/* tokens, idx, options, env */) {
  return '<tr>';
};
rules.tr_close = function(/* tokens, idx, options, env */) {
  return '</tr>\n';
};
rules.th_open = function(tokens, idx /*, options, env */) {
  var token = tokens[idx];
  return '<th'
    + (token.align ? ' style="text-align:' + token.align + '"' : '')
    + '>';
};
rules.th_close = function(/* tokens, idx, options, env */) {
  return '</th>';
};
rules.td_open = function(tokens, idx /*, options, env */) {
  var token = tokens[idx];
  return '<td'
    + (token.align ? ' style="text-align:' + token.align + '"' : '')
    + '>';
};
rules.td_close = function(/* tokens, idx, options, env */) {
  return '</td>';
};

/**
 * Bold
 */

rules.strong_open = function(/* tokens, idx, options, env */) {
  return '<strong>';
};
rules.strong_close = function(/* tokens, idx, options, env */) {
  return '</strong>';
};

/**
 * Italicize
 */

rules.em_open = function(/* tokens, idx, options, env */) {
  return '<em>';
};
rules.em_close = function(/* tokens, idx, options, env */) {
  return '</em>';
};

/**
 * Strikethrough
 */

rules.del_open = function(/* tokens, idx, options, env */) {
  return '<del>';
};
rules.del_close = function(/* tokens, idx, options, env */) {
  return '</del>';
};

/**
 * Insert
 */

rules.ins_open = function(/* tokens, idx, options, env */) {
  return '<ins>';
};
rules.ins_close = function(/* tokens, idx, options, env */) {
  return '</ins>';
};

/**
 * Highlight
 */

rules.mark_open = function(/* tokens, idx, options, env */) {
  return '<mark>';
};
rules.mark_close = function(/* tokens, idx, options, env */) {
  return '</mark>';
};

/**
 * Super- and sub-script
 */

rules.sub = function(tokens, idx /*, options, env */) {
  return '<sub>' + escapeHtml(tokens[idx].content) + '</sub>';
};
rules.sup = function(tokens, idx /*, options, env */) {
  return '<sup>' + escapeHtml(tokens[idx].content) + '</sup>';
};

/**
 * Breaks
 */

rules.hardbreak = function(tokens, idx, options /*, env */) {
  return options.xhtmlOut ? '<br />\n' : '<br>\n';
};
rules.softbreak = function(tokens, idx, options /*, env */) {
  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
};

/**
 * Text
 */

rules.text = function(tokens, idx /*, options, env */) {
  return escapeHtml(tokens[idx].content);
};

/**
 * Content
 */

rules.htmlblock = function(tokens, idx /*, options, env */) {
  return tokens[idx].content;
};
rules.htmltag = function(tokens, idx /*, options, env */) {
  return tokens[idx].content;
};

/**
 * Abbreviations, initialism
 */

rules.abbr_open = function(tokens, idx /*, options, env */) {
  return '<abbr title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '">';
};
rules.abbr_close = function(/* tokens, idx, options, env */) {
  return '</abbr>';
};

/**
 * Footnotes
 */

rules.footnote_ref = function(tokens, idx) {
  var n = Number(tokens[idx].id + 1).toString();
  var id = 'fnref' + n;
  if (tokens[idx].subId > 0) {
    id += ':' + tokens[idx].subId;
  }
  return '<sup class="footnote-ref"><a href="#fn' + n + '" id="' + id + '">[' + n + ']</a></sup>';
};
rules.footnote_block_open = function(tokens, idx, options) {
  var hr = options.xhtmlOut
    ? '<hr class="footnotes-sep" />\n'
    : '<hr class="footnotes-sep">\n';
  return hr + '<section class="footnotes">\n<ol class="footnotes-list">\n';
};
rules.footnote_block_close = function() {
  return '</ol>\n</section>\n';
};
rules.footnote_open = function(tokens, idx) {
  var id = Number(tokens[idx].id + 1).toString();
  return '<li id="fn' + id + '"  class="footnote-item">';
};
rules.footnote_close = function() {
  return '</li>\n';
};
rules.footnote_anchor = function(tokens, idx) {
  var n = Number(tokens[idx].id + 1).toString();
  var id = 'fnref' + n;
  if (tokens[idx].subId > 0) {
    id += ':' + tokens[idx].subId;
  }
  return ' <a href="#' + id + '" class="footnote-backref">↩</a>';
};

/**
 * Definition lists
 */

rules.dl_open = function() {
  return '<dl>\n';
};
rules.dt_open = function() {
  return '<dt>';
};
rules.dd_open = function() {
  return '<dd>';
};
rules.dl_close = function() {
  return '</dl>\n';
};
rules.dt_close = function() {
  return '</dt>\n';
};
rules.dd_close = function() {
  return '</dd>\n';
};

/**
 * Helper functions
 */

function nextToken(tokens, idx) {
  if (++idx >= tokens.length - 2) {
    return idx;
  }
  if ((tokens[idx].type === 'paragraph_open' && tokens[idx].tight) &&
      (tokens[idx + 1].type === 'inline' && tokens[idx + 1].content.length === 0) &&
      (tokens[idx + 2].type === 'paragraph_close' && tokens[idx + 2].tight)) {
    return nextToken(tokens, idx + 2);
  }
  return idx;
}

/**
 * Check to see if `\n` is needed before the next token.
 *
 * @param  {Array} `tokens`
 * @param  {Number} `idx`
 * @return {String} Empty string or newline
 * @api private
 */

var getBreak = rules.getBreak = function getBreak(tokens, idx) {
  idx = nextToken(tokens, idx);
  if (idx < tokens.length && tokens[idx].type === 'list_item_close') {
    return '';
  }
  return '\n';
};

/**
 * Renderer class. Renders HTML and exposes `rules` to allow
 * local modifications.
 */

function Renderer() {
  this.rules = assign({}, rules);

  // exported helper, for custom rules only
  this.getBreak = rules.getBreak;
}

/**
 * Render a string of inline HTML with the given `tokens` and
 * `options`.
 *
 * @param  {Array} `tokens`
 * @param  {Object} `options`
 * @param  {Object} `env`
 * @return {String}
 * @api public
 */

Renderer.prototype.renderInline = function (tokens, options, env) {
  var _rules = this.rules;
  var len = tokens.length, i = 0;
  var result = '';

  while (len--) {
    result += _rules[tokens[i].type](tokens, i++, options, env, this);
  }

  return result;
};

/**
 * Render a string of HTML with the given `tokens` and
 * `options`.
 *
 * @param  {Array} `tokens`
 * @param  {Object} `options`
 * @param  {Object} `env`
 * @return {String}
 * @api public
 */

Renderer.prototype.render = function (tokens, options, env) {
  var _rules = this.rules;
  var len = tokens.length, i = -1;
  var result = '';

  while (++i < len) {
    if (tokens[i].type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else {
      result += _rules[tokens[i].type](tokens, i, options, env, this);
    }
  }
  return result;
};

/**
 * Ruler is a helper class for building responsibility chains from
 * parse rules. It allows:
 *
 *   - easy stack rules chains
 *   - getting main chain and named chains content (as arrays of functions)
 *
 * Helper methods, should not be used directly.
 * @api private
 */

function Ruler() {
  // List of added rules. Each element is:
  //
  // { name: XXX,
  //   enabled: Boolean,
  //   fn: Function(),
  //   alt: [ name2, name3 ] }
  //
  this.__rules__ = [];

  // Cached rule chains.
  //
  // First level - chain name, '' for default.
  // Second level - digital anchor for fast filtering by charcodes.
  //
  this.__cache__ = null;
}

/**
 * Find the index of a rule by `name`.
 *
 * @param  {String} `name`
 * @return {Number} Index of the given `name`
 * @api private
 */

Ruler.prototype.__find__ = function (name) {
  var len = this.__rules__.length;
  var i = -1;

  while (len--) {
    if (this.__rules__[++i].name === name) {
      return i;
    }
  }
  return -1;
};

/**
 * Build the rules lookup cache
 *
 * @api private
 */

Ruler.prototype.__compile__ = function () {
  var self = this;
  var chains = [ '' ];

  // collect unique names
  self.__rules__.forEach(function (rule) {
    if (!rule.enabled) {
      return;
    }

    rule.alt.forEach(function (altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });

  self.__cache__ = {};

  chains.forEach(function (chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) {
        return;
      }

      if (chain && rule.alt.indexOf(chain) < 0) {
        return;
      }
      self.__cache__[chain].push(rule.fn);
    });
  });
};

/**
 * Ruler public methods
 * ------------------------------------------------
 */

/**
 * Replace rule function
 *
 * @param  {String} `name` Rule name
 * @param  {Function `fn`
 * @param  {Object} `options`
 * @api private
 */

Ruler.prototype.at = function (name, fn, options) {
  var idx = this.__find__(name);
  var opt = options || {};

  if (idx === -1) {
    throw new Error('Parser rule not found: ' + name);
  }

  this.__rules__[idx].fn = fn;
  this.__rules__[idx].alt = opt.alt || [];
  this.__cache__ = null;
};

/**
 * Add a rule to the chain before given the `ruleName`.
 *
 * @param  {String}   `beforeName`
 * @param  {String}   `ruleName`
 * @param  {Function} `fn`
 * @param  {Object}   `options`
 * @api private
 */

Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
  var idx = this.__find__(beforeName);
  var opt = options || {};

  if (idx === -1) {
    throw new Error('Parser rule not found: ' + beforeName);
  }

  this.__rules__.splice(idx, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};

/**
 * Add a rule to the chain after the given `ruleName`.
 *
 * @param  {String}   `afterName`
 * @param  {String}   `ruleName`
 * @param  {Function} `fn`
 * @param  {Object}   `options`
 * @api private
 */

Ruler.prototype.after = function (afterName, ruleName, fn, options) {
  var idx = this.__find__(afterName);
  var opt = options || {};

  if (idx === -1) {
    throw new Error('Parser rule not found: ' + afterName);
  }

  this.__rules__.splice(idx + 1, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};

/**
 * Add a rule to the end of chain.
 *
 * @param  {String}   `ruleName`
 * @param  {Function} `fn`
 * @param  {Object}   `options`
 * @return {String}
 */

Ruler.prototype.push = function (ruleName, fn, options) {
  var opt = options || {};

  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};

/**
 * Enable a rule or list of rules.
 *
 * @param  {String|Array} `list` Name or array of rule names to enable
 * @param  {Boolean} `strict` If `true`, all non listed rules will be disabled.
 * @api private
 */

Ruler.prototype.enable = function (list, strict) {
  list = !Array.isArray(list)
    ? [ list ]
    : list;

  // In strict mode disable all existing rules first
  if (strict) {
    this.__rules__.forEach(function (rule) {
      rule.enabled = false;
    });
  }

  // Search by name and enable
  list.forEach(function (name) {
    var idx = this.__find__(name);
    if (idx < 0) {
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = true;
  }, this);

  this.__cache__ = null;
};


/**
 * Disable a rule or list of rules.
 *
 * @param  {String|Array} `list` Name or array of rule names to disable
 * @api private
 */

Ruler.prototype.disable = function (list) {
  list = !Array.isArray(list)
    ? [ list ]
    : list;

  // Search by name and disable
  list.forEach(function (name) {
    var idx = this.__find__(name);
    if (idx < 0) {
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = false;
  }, this);

  this.__cache__ = null;
};

/**
 * Get a rules list as an array of functions.
 *
 * @param  {String} `chainName`
 * @return {Object}
 * @api private
 */

Ruler.prototype.getRules = function (chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }
  return this.__cache__[chainName] || [];
};

function block(state) {

  if (state.inlineMode) {
    state.tokens.push({
      type: 'inline',
      content: state.src.replace(/\n/g, ' ').trim(),
      level: 0,
      lines: [ 0, 1 ],
      children: []
    });

  } else {
    state.block.parse(state.src, state.options, state.env, state.tokens);
  }
}

// Inline parser state

function StateInline(src, parserInline, options, env, outTokens) {
  this.src = src;
  this.env = env;
  this.options = options;
  this.parser = parserInline;
  this.tokens = outTokens;
  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = '';
  this.pendingLevel = 0;

  this.cache = [];        // Stores { start: end } pairs. Useful for backtrack
                          // optimization of pairs parse (emphasis, strikes).

  // Link parser state vars

  this.isInLabel = false; // Set true when seek link label - we should disable
                          // "paired" rules (emphasis, strikes) to not skip
                          // tailing `]`

  this.linkLevel = 0;     // Increment for each nesting link. Used to prevent
                          // nesting in definitions

  this.linkContent = '';  // Temporary storage for link url

  this.labelUnmatchedScopes = 0; // Track unpaired `[` for link labels
                                 // (backtrack optimization)
}

// Flush pending text
//
StateInline.prototype.pushPending = function () {
  this.tokens.push({
    type: 'text',
    content: this.pending,
    level: this.pendingLevel
  });
  this.pending = '';
};

// Push new token to "stream".
// If pending text exists - flush it as text token
//
StateInline.prototype.push = function (token) {
  if (this.pending) {
    this.pushPending();
  }

  this.tokens.push(token);
  this.pendingLevel = this.level;
};

// Store value to cache.
// !!! Implementation has parser-specific optimizations
// !!! keys MUST be integer, >= 0; values MUST be integer, > 0
//
StateInline.prototype.cacheSet = function (key, val) {
  for (var i = this.cache.length; i <= key; i++) {
    this.cache.push(0);
  }

  this.cache[key] = val;
};

// Get cache value
//
StateInline.prototype.cacheGet = function (key) {
  return key < this.cache.length ? this.cache[key] : 0;
};

/**
 * Parse link labels
 *
 * This function assumes that first character (`[`) already matches;
 * returns the end of the label.
 *
 * @param  {Object} state
 * @param  {Number} start
 * @api private
 */

function parseLinkLabel(state, start) {
  var level, found, marker,
      labelEnd = -1,
      max = state.posMax,
      oldPos = state.pos,
      oldFlag = state.isInLabel;

  if (state.isInLabel) { return -1; }

  if (state.labelUnmatchedScopes) {
    state.labelUnmatchedScopes--;
    return -1;
  }

  state.pos = start + 1;
  state.isInLabel = true;
  level = 1;

  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos);
    if (marker === 0x5B /* [ */) {
      level++;
    } else if (marker === 0x5D /* ] */) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }

    state.parser.skipToken(state);
  }

  if (found) {
    labelEnd = state.pos;
    state.labelUnmatchedScopes = 0;
  } else {
    state.labelUnmatchedScopes = level - 1;
  }

  // restore old state
  state.pos = oldPos;
  state.isInLabel = oldFlag;

  return labelEnd;
}

// Parse abbreviation definitions, i.e. `*[abbr]: description`


function parseAbbr(str, parserInline, options, env) {
  var state, labelEnd, pos, max, label, title;

  if (str.charCodeAt(0) !== 0x2A/* * */) { return -1; }
  if (str.charCodeAt(1) !== 0x5B/* [ */) { return -1; }

  if (str.indexOf(']:') === -1) { return -1; }

  state = new StateInline(str, parserInline, options, env, []);
  labelEnd = parseLinkLabel(state, 1);

  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }

  max = state.posMax;

  // abbr title is always one line, so looking for ending "\n" here
  for (pos = labelEnd + 2; pos < max; pos++) {
    if (state.src.charCodeAt(pos) === 0x0A) { break; }
  }

  label = str.slice(2, labelEnd);
  title = str.slice(labelEnd + 2, pos).trim();
  if (title.length === 0) { return -1; }
  if (!env.abbreviations) { env.abbreviations = {}; }
  // prepend ':' to avoid conflict with Object.prototype members
  if (typeof env.abbreviations[':' + label] === 'undefined') {
    env.abbreviations[':' + label] = title;
  }

  return pos;
}

function abbr(state) {
  var tokens = state.tokens, i, l, content, pos;

  if (state.inlineMode) {
    return;
  }

  // Parse inlines
  for (i = 1, l = tokens.length - 1; i < l; i++) {
    if (tokens[i - 1].type === 'paragraph_open' &&
        tokens[i].type === 'inline' &&
        tokens[i + 1].type === 'paragraph_close') {

      content = tokens[i].content;
      while (content.length) {
        pos = parseAbbr(content, state.inline, state.options, state.env);
        if (pos < 0) { break; }
        content = content.slice(pos).trim();
      }

      tokens[i].content = content;
      if (!content.length) {
        tokens[i - 1].tight = true;
        tokens[i + 1].tight = true;
      }
    }
  }
}

function normalizeLink(url) {
  var normalized = replaceEntities(url);
  // We shouldn't care about the result of malformed URIs,
  // and should not throw an exception.
  try {
    normalized = decodeURI(normalized);
  } catch (err) {}
  return encodeURI(normalized);
}

/**
 * Parse link destination
 *
 *   - on success it returns a string and updates state.pos;
 *   - on failure it returns null
 *
 * @param  {Object} state
 * @param  {Number} pos
 * @api private
 */

function parseLinkDestination(state, pos) {
  var code, level, link,
      start = pos,
      max = state.posMax;

  if (state.src.charCodeAt(pos) === 0x3C /* < */) {
    pos++;
    while (pos < max) {
      code = state.src.charCodeAt(pos);
      if (code === 0x0A /* \n */) { return false; }
      if (code === 0x3E /* > */) {
        link = normalizeLink(unescapeMd(state.src.slice(start + 1, pos)));
        if (!state.parser.validateLink(link)) { return false; }
        state.pos = pos + 1;
        state.linkContent = link;
        return true;
      }
      if (code === 0x5C /* \ */ && pos + 1 < max) {
        pos += 2;
        continue;
      }

      pos++;
    }

    // no closing '>'
    return false;
  }

  // this should be ... } else { ... branch

  level = 0;
  while (pos < max) {
    code = state.src.charCodeAt(pos);

    if (code === 0x20) { break; }

    // ascii control chars
    if (code < 0x20 || code === 0x7F) { break; }

    if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos += 2;
      continue;
    }

    if (code === 0x28 /* ( */) {
      level++;
      if (level > 1) { break; }
    }

    if (code === 0x29 /* ) */) {
      level--;
      if (level < 0) { break; }
    }

    pos++;
  }

  if (start === pos) { return false; }

  link = unescapeMd(state.src.slice(start, pos));
  if (!state.parser.validateLink(link)) { return false; }

  state.linkContent = link;
  state.pos = pos;
  return true;
}

/**
 * Parse link title
 *
 *   - on success it returns a string and updates state.pos;
 *   - on failure it returns null
 *
 * @param  {Object} state
 * @param  {Number} pos
 * @api private
 */

function parseLinkTitle(state, pos) {
  var code,
      start = pos,
      max = state.posMax,
      marker = state.src.charCodeAt(pos);

  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return false; }

  pos++;

  // if opening marker is "(", switch it to closing marker ")"
  if (marker === 0x28) { marker = 0x29; }

  while (pos < max) {
    code = state.src.charCodeAt(pos);
    if (code === marker) {
      state.pos = pos + 1;
      state.linkContent = unescapeMd(state.src.slice(start + 1, pos));
      return true;
    }
    if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos += 2;
      continue;
    }

    pos++;
  }

  return false;
}

function normalizeReference(str) {
  // use .toUpperCase() instead of .toLowerCase()
  // here to avoid a conflict with Object.prototype
  // members (most notably, `__proto__`)
  return str.trim().replace(/\s+/g, ' ').toUpperCase();
}

function parseReference(str, parser, options, env) {
  var state, labelEnd, pos, max, code, start, href, title, label;

  if (str.charCodeAt(0) !== 0x5B/* [ */) { return -1; }

  if (str.indexOf(']:') === -1) { return -1; }

  state = new StateInline(str, parser, options, env, []);
  labelEnd = parseLinkLabel(state, 0);

  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }

  max = state.posMax;

  // [label]:   destination   'title'
  //         ^^^ skip optional whitespace here
  for (pos = labelEnd + 2; pos < max; pos++) {
    code = state.src.charCodeAt(pos);
    if (code !== 0x20 && code !== 0x0A) { break; }
  }

  // [label]:   destination   'title'
  //            ^^^^^^^^^^^ parse this
  if (!parseLinkDestination(state, pos)) { return -1; }
  href = state.linkContent;
  pos = state.pos;

  // [label]:   destination   'title'
  //                       ^^^ skipping those spaces
  start = pos;
  for (pos = pos + 1; pos < max; pos++) {
    code = state.src.charCodeAt(pos);
    if (code !== 0x20 && code !== 0x0A) { break; }
  }

  // [label]:   destination   'title'
  //                          ^^^^^^^ parse this
  if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
    title = state.linkContent;
    pos = state.pos;
  } else {
    title = '';
    pos = start;
  }

  // ensure that the end of the line is empty
  while (pos < max && state.src.charCodeAt(pos) === 0x20/* space */) { pos++; }
  if (pos < max && state.src.charCodeAt(pos) !== 0x0A) { return -1; }

  label = normalizeReference(str.slice(1, labelEnd));
  if (typeof env.references[label] === 'undefined') {
    env.references[label] = { title: title, href: href };
  }

  return pos;
}


function references(state) {
  var tokens = state.tokens, i, l, content, pos;

  state.env.references = state.env.references || {};

  if (state.inlineMode) {
    return;
  }

  // Scan definitions in paragraph inlines
  for (i = 1, l = tokens.length - 1; i < l; i++) {
    if (tokens[i].type === 'inline' &&
        tokens[i - 1].type === 'paragraph_open' &&
        tokens[i + 1].type === 'paragraph_close') {

      content = tokens[i].content;
      while (content.length) {
        pos = parseReference(content, state.inline, state.options, state.env);
        if (pos < 0) { break; }
        content = content.slice(pos).trim();
      }

      tokens[i].content = content;
      if (!content.length) {
        tokens[i - 1].tight = true;
        tokens[i + 1].tight = true;
      }
    }
  }
}

function inline(state) {
  var tokens = state.tokens, tok, i, l;

  // Parse inlines
  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];
    if (tok.type === 'inline') {
      state.inline.parse(tok.content, state.options, state.env, tok.children);
    }
  }
}

function footnote_block(state) {
  var i, l, j, t, lastParagraph, list, tokens, current, currentLabel,
      level = 0,
      insideRef = false,
      refTokens = {};

  if (!state.env.footnotes) { return; }

  state.tokens = state.tokens.filter(function(tok) {
    if (tok.type === 'footnote_reference_open') {
      insideRef = true;
      current = [];
      currentLabel = tok.label;
      return false;
    }
    if (tok.type === 'footnote_reference_close') {
      insideRef = false;
      // prepend ':' to avoid conflict with Object.prototype members
      refTokens[':' + currentLabel] = current;
      return false;
    }
    if (insideRef) { current.push(tok); }
    return !insideRef;
  });

  if (!state.env.footnotes.list) { return; }
  list = state.env.footnotes.list;

  state.tokens.push({
    type: 'footnote_block_open',
    level: level++
  });
  for (i = 0, l = list.length; i < l; i++) {
    state.tokens.push({
      type: 'footnote_open',
      id: i,
      level: level++
    });

    if (list[i].tokens) {
      tokens = [];
      tokens.push({
        type: 'paragraph_open',
        tight: false,
        level: level++
      });
      tokens.push({
        type: 'inline',
        content: '',
        level: level,
        children: list[i].tokens
      });
      tokens.push({
        type: 'paragraph_close',
        tight: false,
        level: --level
      });
    } else if (list[i].label) {
      tokens = refTokens[':' + list[i].label];
    }

    state.tokens = state.tokens.concat(tokens);
    if (state.tokens[state.tokens.length - 1].type === 'paragraph_close') {
      lastParagraph = state.tokens.pop();
    } else {
      lastParagraph = null;
    }

    t = list[i].count > 0 ? list[i].count : 1;
    for (j = 0; j < t; j++) {
      state.tokens.push({
        type: 'footnote_anchor',
        id: i,
        subId: j,
        level: level
      });
    }

    if (lastParagraph) {
      state.tokens.push(lastParagraph);
    }

    state.tokens.push({
      type: 'footnote_close',
      level: --level
    });
  }
  state.tokens.push({
    type: 'footnote_block_close',
    level: --level
  });
}

// Enclose abbreviations in <abbr> tags
//

var PUNCT_CHARS = ' \n()[]\'".,!?-';


// from Google closure library
// http://closure-library.googlecode.com/git-history/docs/local_closure_goog_string_string.js.source.html#line1021
function regEscape(s) {
  return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1');
}


function abbr2(state) {
  var i, j, l, tokens, token, text, nodes, pos, level, reg, m, regText,
      blockTokens = state.tokens;

  if (!state.env.abbreviations) { return; }
  if (!state.env.abbrRegExp) {
    regText = '(^|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])'
            + '(' + Object.keys(state.env.abbreviations).map(function (x) {
                      return x.substr(1);
                    }).sort(function (a, b) {
                      return b.length - a.length;
                    }).map(regEscape).join('|') + ')'
            + '($|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])';
    state.env.abbrRegExp = new RegExp(regText, 'g');
  }
  reg = state.env.abbrRegExp;

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline') { continue; }
    tokens = blockTokens[j].children;

    // We scan from the end, to keep position when new tags added.
    for (i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i];
      if (token.type !== 'text') { continue; }

      pos = 0;
      text = token.content;
      reg.lastIndex = 0;
      level = token.level;
      nodes = [];

      while ((m = reg.exec(text))) {
        if (reg.lastIndex > pos) {
          nodes.push({
            type: 'text',
            content: text.slice(pos, m.index + m[1].length),
            level: level
          });
        }

        nodes.push({
          type: 'abbr_open',
          title: state.env.abbreviations[':' + m[2]],
          level: level++
        });
        nodes.push({
          type: 'text',
          content: m[2],
          level: level
        });
        nodes.push({
          type: 'abbr_close',
          level: --level
        });
        pos = reg.lastIndex - m[3].length;
      }

      if (!nodes.length) { continue; }

      if (pos < text.length) {
        nodes.push({
          type: 'text',
          content: text.slice(pos),
          level: level
        });
      }

      // replace current node
      blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
    }
  }
}

// Simple typographical replacements
//
// TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - miltiplication 2 x 4 -> 2 × 4

var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
var SCOPED_ABBR = {
  'c': '©',
  'r': '®',
  'p': '§',
  'tm': '™'
};

function replaceScopedAbbr(str) {
  if (str.indexOf('(') < 0) { return str; }

  return str.replace(SCOPED_ABBR_RE, function(match, name) {
    return SCOPED_ABBR[name.toLowerCase()];
  });
}


function replace(state) {
  var i, token, text, inlineTokens, blkIdx;

  if (!state.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    inlineTokens = state.tokens[blkIdx].children;

    for (i = inlineTokens.length - 1; i >= 0; i--) {
      token = inlineTokens[i];
      if (token.type === 'text') {
        text = token.content;

        text = replaceScopedAbbr(text);

        if (RARE_RE.test(text)) {
          text = text
            .replace(/\+-/g, '±')
            // .., ..., ....... -> …
            // but ?..... & !..... -> ?.. & !..
            .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
            .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
            // em-dash
            .replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2')
            // en-dash
            .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2')
            .replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
        }

        token.content = text;
      }
    }
  }
}

// Convert straight quotation marks to typographic ones
//

var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var PUNCT_RE = /[-\s()\[\]]/;
var APOSTROPHE = '’';

// This function returns true if the character at `pos`
// could be inside a word.
function isLetter(str, pos) {
  if (pos < 0 || pos >= str.length) { return false; }
  return !PUNCT_RE.test(str[pos]);
}


function replaceAt(str, index, ch) {
  return str.substr(0, index) + ch + str.substr(index + 1);
}


function smartquotes(state) {
  /*eslint max-depth:0*/
  var i, token, text, t, pos, max, thisLevel, lastSpace, nextSpace, item,
      canOpen, canClose, j, isSingle, blkIdx, tokens,
      stack;

  if (!state.options.typographer) { return; }

  stack = [];

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    tokens = state.tokens[blkIdx].children;
    stack.length = 0;

    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];

      if (token.type !== 'text' || QUOTE_TEST_RE.test(token.text)) { continue; }

      thisLevel = tokens[i].level;

      for (j = stack.length - 1; j >= 0; j--) {
        if (stack[j].level <= thisLevel) { break; }
      }
      stack.length = j + 1;

      text = token.content;
      pos = 0;
      max = text.length;

      /*eslint no-labels:0,block-scoped-var:0*/
      OUTER:
      while (pos < max) {
        QUOTE_RE.lastIndex = pos;
        t = QUOTE_RE.exec(text);
        if (!t) { break; }

        lastSpace = !isLetter(text, t.index - 1);
        pos = t.index + 1;
        isSingle = (t[0] === "'");
        nextSpace = !isLetter(text, pos);

        if (!nextSpace && !lastSpace) {
          // middle of word
          if (isSingle) {
            token.content = replaceAt(token.content, t.index, APOSTROPHE);
          }
          continue;
        }

        canOpen = !nextSpace;
        canClose = !lastSpace;

        if (canClose) {
          // this could be a closing quote, rewind the stack to get a match
          for (j = stack.length - 1; j >= 0; j--) {
            item = stack[j];
            if (stack[j].level < thisLevel) { break; }
            if (item.single === isSingle && stack[j].level === thisLevel) {
              item = stack[j];
              if (isSingle) {
                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[2]);
                token.content = replaceAt(token.content, t.index, state.options.quotes[3]);
              } else {
                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[0]);
                token.content = replaceAt(token.content, t.index, state.options.quotes[1]);
              }
              stack.length = j;
              continue OUTER;
            }
          }
        }

        if (canOpen) {
          stack.push({
            token: i,
            pos: t.index,
            single: isSingle,
            level: thisLevel
          });
        } else if (canClose && isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
      }
    }
  }
}

/**
 * Core parser `rules`
 */

var _rules = [
  [ 'block',          block          ],
  [ 'abbr',           abbr           ],
  [ 'references',     references     ],
  [ 'inline',         inline         ],
  [ 'footnote_tail',  footnote_block  ],
  [ 'abbr2',          abbr2          ],
  [ 'replacements',   replace   ],
  [ 'smartquotes',    smartquotes    ],
];

/**
 * Class for top level (`core`) parser rules
 *
 * @api private
 */

function Core() {
  this.options = {};
  this.ruler = new Ruler();
  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
}

/**
 * Process rules with the given `state`
 *
 * @param  {Object} `state`
 * @api private
 */

Core.prototype.process = function (state) {
  var i, l, rules;
  rules = this.ruler.getRules('');
  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};

// Parser state class

function StateBlock(src, parser, options, env, tokens) {
  var ch, s, start, pos, len, indent, indent_found;

  this.src = src;

  // Shortcuts to simplify nested calls
  this.parser = parser;

  this.options = options;

  this.env = env;

  //
  // Internal state vartiables
  //

  this.tokens = tokens;

  this.bMarks = [];  // line begin offsets for fast jumps
  this.eMarks = [];  // line end offsets for fast jumps
  this.tShift = [];  // indent for each line

  // block parser variables
  this.blkIndent  = 0; // required block content indent
                       // (for example, if we are in list)
  this.line       = 0; // line index in src
  this.lineMax    = 0; // lines count
  this.tight      = false;  // loose/tight mode for lists
  this.parentType = 'root'; // if `list`, block parser stops on two newlines
  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)

  this.level = 0;

  // renderer
  this.result = '';

  // Create caches
  // Generate markers.
  s = this.src;
  indent = 0;
  indent_found = false;

  for (start = pos = indent = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);

    if (!indent_found) {
      if (ch === 0x20/* space */) {
        indent++;
        continue;
      } else {
        indent_found = true;
      }
    }

    if (ch === 0x0A || pos === len - 1) {
      if (ch !== 0x0A) { pos++; }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);

      indent_found = false;
      indent = 0;
      start = pos + 1;
    }
  }

  // Push fake entry to simplify cache bounds checks
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);

  this.lineMax = this.bMarks.length - 1; // don't count last fake line
}

StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};

StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};

// Skip spaces from given position.
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== 0x20/* space */) { break; }
  }
  return pos;
};

// Skip char codes from given position
StateBlock.prototype.skipChars = function skipChars(pos, code) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code) { break; }
  }
  return pos;
};

// Skip char codes reverse from given position - 1
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
  }
  return pos;
};

// cut lines range from source.
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i, first, last, queue, shift,
      line = begin;

  if (begin >= end) {
    return '';
  }

  // Opt: don't use push queue for single line;
  if (line + 1 === end) {
    first = this.bMarks[line] + Math.min(this.tShift[line], indent);
    last = keepLastLF ? this.eMarks[line] + 1 : this.eMarks[line];
    return this.src.slice(first, last);
  }

  queue = new Array(end - begin);

  for (i = 0; line < end; line++, i++) {
    shift = this.tShift[line];
    if (shift > indent) { shift = indent; }
    if (shift < 0) { shift = 0; }

    first = this.bMarks[line] + shift;

    if (line + 1 < end || keepLastLF) {
      // No need for bounds check because we have fake entry on tail.
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }

    queue[i] = this.src.slice(first, last);
  }

  return queue.join('');
};

// Code block (4 spaces padded)

function code(state, startLine, endLine/*, silent*/) {
  var nextLine, last;

  if (state.tShift[startLine] - state.blkIndent < 4) { return false; }

  last = nextLine = startLine + 1;

  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }
    if (state.tShift[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }

  state.line = nextLine;
  state.tokens.push({
    type: 'code',
    content: state.getLines(startLine, last, 4 + state.blkIndent, true),
    block: true,
    lines: [ startLine, state.line ],
    level: state.level
  });

  return true;
}

// fences (``` lang, ~~~ lang)

function fences(state, startLine, endLine, silent) {
  var marker, len, params, nextLine, mem,
      haveEndMarker = false,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos + 3 > max) { return false; }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
    return false;
  }

  // scan marker length
  mem = pos;
  pos = state.skipChars(pos, marker);

  len = pos - mem;

  if (len < 3) { return false; }

  params = state.src.slice(pos, max).trim();

  if (params.indexOf('`') >= 0) { return false; }

  // Since start is found, we can report success here in validation mode
  if (silent) { return true; }

  // search end of block
  nextLine = startLine;

  for (;;) {
    nextLine++;
    if (nextLine >= endLine) {
      // unclosed block should be autoclosed by end of document.
      // also block seems to be autoclosed by end of parent
      break;
    }

    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos < max && state.tShift[nextLine] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      // - ```
      //  test
      break;
    }

    if (state.src.charCodeAt(pos) !== marker) { continue; }

    if (state.tShift[nextLine] - state.blkIndent >= 4) {
      // closing fence should be indented less than 4 spaces
      continue;
    }

    pos = state.skipChars(pos, marker);

    // closing code fence must be at least as long as the opening one
    if (pos - mem < len) { continue; }

    // make sure tail has spaces only
    pos = state.skipSpaces(pos);

    if (pos < max) { continue; }

    haveEndMarker = true;
    // found!
    break;
  }

  // If a fence has heading spaces, they should be removed from its inner block
  len = state.tShift[startLine];

  state.line = nextLine + (haveEndMarker ? 1 : 0);
  state.tokens.push({
    type: 'fence',
    params: params,
    content: state.getLines(startLine + 1, nextLine, len, true),
    lines: [ startLine, state.line ],
    level: state.level
  });

  return true;
}

// Block quotes

function blockquote(state, startLine, endLine, silent) {
  var nextLine, lastLineEmpty, oldTShift, oldBMarks, oldIndent, oldParentType, lines,
      terminatorRules,
      i, l, terminate,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos > max) { return false; }

  // check the block quote marker
  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }

  if (state.level >= state.options.maxNesting) { return false; }

  // we know that it's going to be a valid blockquote,
  // so no point trying to find the end of it in silent mode
  if (silent) { return true; }

  // skip one optional space after '>'
  if (state.src.charCodeAt(pos) === 0x20) { pos++; }

  oldIndent = state.blkIndent;
  state.blkIndent = 0;

  oldBMarks = [ state.bMarks[startLine] ];
  state.bMarks[startLine] = pos;

  // check if we have an empty blockquote
  pos = pos < max ? state.skipSpaces(pos) : pos;
  lastLineEmpty = pos >= max;

  oldTShift = [ state.tShift[startLine] ];
  state.tShift[startLine] = pos - state.bMarks[startLine];

  terminatorRules = state.parser.ruler.getRules('blockquote');

  // Search the end of the block
  //
  // Block ends with either:
  //  1. an empty line outside:
  //     ```
  //     > test
  //
  //     ```
  //  2. an empty line inside:
  //     ```
  //     >
  //     test
  //     ```
  //  3. another tag
  //     ```
  //     > test
  //      - - -
  //     ```
  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos >= max) {
      // Case 1: line is not inside the blockquote, and this line is empty.
      break;
    }

    if (state.src.charCodeAt(pos++) === 0x3E/* > */) {
      // This line is inside the blockquote.

      // skip one optional space after '>'
      if (state.src.charCodeAt(pos) === 0x20) { pos++; }

      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;

      pos = pos < max ? state.skipSpaces(pos) : pos;
      lastLineEmpty = pos >= max;

      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }

    // Case 2: line is not inside the blockquote, and the last line was empty.
    if (lastLineEmpty) { break; }

    // Case 3: another tag found.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }

    oldBMarks.push(state.bMarks[nextLine]);
    oldTShift.push(state.tShift[nextLine]);

    // A negative number means that this is a paragraph continuation;
    //
    // Any negative number will do the job here, but it's better for it
    // to be large enough to make any bugs obvious.
    state.tShift[nextLine] = -1337;
  }

  oldParentType = state.parentType;
  state.parentType = 'blockquote';
  state.tokens.push({
    type: 'blockquote_open',
    lines: lines = [ startLine, 0 ],
    level: state.level++
  });
  state.parser.tokenize(state, startLine, nextLine);
  state.tokens.push({
    type: 'blockquote_close',
    level: --state.level
  });
  state.parentType = oldParentType;
  lines[1] = state.line;

  // Restore original tShift; this might not be necessary since the parser
  // has already been here, but just to make sure we can do that.
  for (i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
  }
  state.blkIndent = oldIndent;

  return true;
}

// Horizontal rule

function hr(state, startLine, endLine, silent) {
  var marker, cnt, ch,
      pos = state.bMarks[startLine],
      max = state.eMarks[startLine];

  pos += state.tShift[startLine];

  if (pos > max) { return false; }

  marker = state.src.charCodeAt(pos++);

  // Check hr marker
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x5F/* _ */) {
    return false;
  }

  // markers can be mixed with spaces, but there should be at least 3 one

  cnt = 1;
  while (pos < max) {
    ch = state.src.charCodeAt(pos++);
    if (ch !== marker && ch !== 0x20/* space */) { return false; }
    if (ch === marker) { cnt++; }
  }

  if (cnt < 3) { return false; }

  if (silent) { return true; }

  state.line = startLine + 1;
  state.tokens.push({
    type: 'hr',
    lines: [ startLine, state.line ],
    level: state.level
  });

  return true;
}

// Lists

// Search `[-+*][\n ]`, returns next pos arter marker on success
// or -1 on fail.
function skipBulletListMarker(state, startLine) {
  var marker, pos, max;

  pos = state.bMarks[startLine] + state.tShift[startLine];
  max = state.eMarks[startLine];

  if (pos >= max) { return -1; }

  marker = state.src.charCodeAt(pos++);
  // Check bullet
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x2B/* + */) {
    return -1;
  }

  if (pos < max && state.src.charCodeAt(pos) !== 0x20) {
    // " 1.test " - is not a list item
    return -1;
  }

  return pos;
}

// Search `\d+[.)][\n ]`, returns next pos arter marker on success
// or -1 on fail.
function skipOrderedListMarker(state, startLine) {
  var ch,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos + 1 >= max) { return -1; }

  ch = state.src.charCodeAt(pos++);

  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

  for (;;) {
    // EOL -> fail
    if (pos >= max) { return -1; }

    ch = state.src.charCodeAt(pos++);

    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {
      continue;
    }

    // found valid marker
    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
      break;
    }

    return -1;
  }


  if (pos < max && state.src.charCodeAt(pos) !== 0x20/* space */) {
    // " 1.test " - is not a list item
    return -1;
  }
  return pos;
}

function markTightParagraphs(state, idx) {
  var i, l,
      level = state.level + 2;

  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
      state.tokens[i + 2].tight = true;
      state.tokens[i].tight = true;
      i += 2;
    }
  }
}


function list(state, startLine, endLine, silent) {
  var nextLine,
      indent,
      oldTShift,
      oldIndent,
      oldTight,
      oldParentType,
      start,
      posAfterMarker,
      max,
      indentAfterMarker,
      markerValue,
      markerCharCode,
      isOrdered,
      contentStart,
      listTokIdx,
      prevEmptyEnd,
      listLines,
      itemLines,
      tight = true,
      terminatorRules,
      i, l, terminate;

  // Detect list type and position after marker
  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
    isOrdered = true;
  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
    isOrdered = false;
  } else {
    return false;
  }

  if (state.level >= state.options.maxNesting) { return false; }

  // We should terminate list on style change. Remember first one to compare.
  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

  // For validation mode we can terminate immediately
  if (silent) { return true; }

  // Start list
  listTokIdx = state.tokens.length;

  if (isOrdered) {
    start = state.bMarks[startLine] + state.tShift[startLine];
    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));

    state.tokens.push({
      type: 'ordered_list_open',
      order: markerValue,
      lines: listLines = [ startLine, 0 ],
      level: state.level++
    });

  } else {
    state.tokens.push({
      type: 'bullet_list_open',
      lines: listLines = [ startLine, 0 ],
      level: state.level++
    });
  }

  //
  // Iterate list items
  //

  nextLine = startLine;
  prevEmptyEnd = false;
  terminatorRules = state.parser.ruler.getRules('list');

  while (nextLine < endLine) {
    contentStart = state.skipSpaces(posAfterMarker);
    max = state.eMarks[nextLine];

    if (contentStart >= max) {
      // trimming space in "-    \n  3" case, indent is 1 here
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = contentStart - posAfterMarker;
    }

    // If we have more than 4 spaces, the indent is 1
    // (the rest is just indented code block)
    if (indentAfterMarker > 4) { indentAfterMarker = 1; }

    // If indent is less than 1, assume that it's one, example:
    //  "-\n  test"
    if (indentAfterMarker < 1) { indentAfterMarker = 1; }

    // "  -  test"
    //  ^^^^^ - calculating total length of this thing
    indent = (posAfterMarker - state.bMarks[nextLine]) + indentAfterMarker;

    // Run subparser & write tokens
    state.tokens.push({
      type: 'list_item_open',
      lines: itemLines = [ startLine, 0 ],
      level: state.level++
    });

    oldIndent = state.blkIndent;
    oldTight = state.tight;
    oldTShift = state.tShift[startLine];
    oldParentType = state.parentType;
    state.tShift[startLine] = contentStart - state.bMarks[startLine];
    state.blkIndent = indent;
    state.tight = true;
    state.parentType = 'list';

    state.parser.tokenize(state, startLine, endLine, true);

    // If any of list item is tight, mark list as tight
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    // Item become loose if finish with empty line,
    // but we should filter last element, because it means list finish
    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);

    state.blkIndent = oldIndent;
    state.tShift[startLine] = oldTShift;
    state.tight = oldTight;
    state.parentType = oldParentType;

    state.tokens.push({
      type: 'list_item_close',
      level: --state.level
    });

    nextLine = startLine = state.line;
    itemLines[1] = nextLine;
    contentStart = state.bMarks[startLine];

    if (nextLine >= endLine) { break; }

    if (state.isEmpty(nextLine)) {
      break;
    }

    //
    // Try to check if list is terminated or continued.
    //
    if (state.tShift[nextLine] < state.blkIndent) { break; }

    // fail if terminating block found
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }

    // fail if list has another type
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    }

    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
  }

  // Finilize list
  state.tokens.push({
    type: isOrdered ? 'ordered_list_close' : 'bullet_list_close',
    level: --state.level
  });
  listLines[1] = nextLine;

  state.line = nextLine;

  // mark paragraphs tight if needed
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }

  return true;
}

// Process footnote reference list

function footnote(state, startLine, endLine, silent) {
  var oldBMark, oldTShift, oldParentType, pos, label,
      start = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // line should be at least 5 chars - "[^x]:"
  if (start + 4 > max) { return false; }

  if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  for (pos = start + 2; pos < max; pos++) {
    if (state.src.charCodeAt(pos) === 0x20) { return false; }
    if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
      break;
    }
  }

  if (pos === start + 2) { return false; } // no empty footnote labels
  if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 0x3A /* : */) { return false; }
  if (silent) { return true; }
  pos++;

  if (!state.env.footnotes) { state.env.footnotes = {}; }
  if (!state.env.footnotes.refs) { state.env.footnotes.refs = {}; }
  label = state.src.slice(start + 2, pos - 2);
  state.env.footnotes.refs[':' + label] = -1;

  state.tokens.push({
    type: 'footnote_reference_open',
    label: label,
    level: state.level++
  });

  oldBMark = state.bMarks[startLine];
  oldTShift = state.tShift[startLine];
  oldParentType = state.parentType;
  state.tShift[startLine] = state.skipSpaces(pos) - pos;
  state.bMarks[startLine] = pos;
  state.blkIndent += 4;
  state.parentType = 'footnote';

  if (state.tShift[startLine] < state.blkIndent) {
    state.tShift[startLine] += state.blkIndent;
    state.bMarks[startLine] -= state.blkIndent;
  }

  state.parser.tokenize(state, startLine, endLine, true);

  state.parentType = oldParentType;
  state.blkIndent -= 4;
  state.tShift[startLine] = oldTShift;
  state.bMarks[startLine] = oldBMark;

  state.tokens.push({
    type: 'footnote_reference_close',
    level: --state.level
  });

  return true;
}

// heading (#, ##, ...)

function heading(state, startLine, endLine, silent) {
  var ch, level, tmp,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos >= max) { return false; }

  ch  = state.src.charCodeAt(pos);

  if (ch !== 0x23/* # */ || pos >= max) { return false; }

  // count heading level
  level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 0x23/* # */ && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }

  if (level > 6 || (pos < max && ch !== 0x20/* space */)) { return false; }

  if (silent) { return true; }

  // Let's cut tails like '    ###  ' from the end of string

  max = state.skipCharsBack(max, 0x20, pos); // space
  tmp = state.skipCharsBack(max, 0x23, pos); // #
  if (tmp > pos && state.src.charCodeAt(tmp - 1) === 0x20/* space */) {
    max = tmp;
  }

  state.line = startLine + 1;

  state.tokens.push({ type: 'heading_open',
    hLevel: level,
    lines: [ startLine, state.line ],
    level: state.level
  });

  // only if header is not empty
  if (pos < max) {
    state.tokens.push({
      type: 'inline',
      content: state.src.slice(pos, max).trim(),
      level: state.level + 1,
      lines: [ startLine, state.line ],
      children: []
    });
  }
  state.tokens.push({ type: 'heading_close', hLevel: level, level: state.level });

  return true;
}

// lheading (---, ===)

function lheading(state, startLine, endLine/*, silent*/) {
  var marker, pos, max,
      next = startLine + 1;

  if (next >= endLine) { return false; }
  if (state.tShift[next] < state.blkIndent) { return false; }

  // Scan next line

  if (state.tShift[next] - state.blkIndent > 3) { return false; }

  pos = state.bMarks[next] + state.tShift[next];
  max = state.eMarks[next];

  if (pos >= max) { return false; }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x2D/* - */ && marker !== 0x3D/* = */) { return false; }

  pos = state.skipChars(pos, marker);

  pos = state.skipSpaces(pos);

  if (pos < max) { return false; }

  pos = state.bMarks[startLine] + state.tShift[startLine];

  state.line = next + 1;
  state.tokens.push({
    type: 'heading_open',
    hLevel: marker === 0x3D/* = */ ? 1 : 2,
    lines: [ startLine, state.line ],
    level: state.level
  });
  state.tokens.push({
    type: 'inline',
    content: state.src.slice(pos, state.eMarks[startLine]).trim(),
    level: state.level + 1,
    lines: [ startLine, state.line - 1 ],
    children: []
  });
  state.tokens.push({
    type: 'heading_close',
    hLevel: marker === 0x3D/* = */ ? 1 : 2,
    level: state.level
  });

  return true;
}

// List of valid html blocks names, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#html-blocks

var html_blocks = {};

[
  'article',
  'aside',
  'button',
  'blockquote',
  'body',
  'canvas',
  'caption',
  'col',
  'colgroup',
  'dd',
  'div',
  'dl',
  'dt',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'hr',
  'iframe',
  'li',
  'map',
  'object',
  'ol',
  'output',
  'p',
  'pre',
  'progress',
  'script',
  'section',
  'style',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'tr',
  'thead',
  'ul',
  'video'
].forEach(function (name) { html_blocks[name] = true; });

// HTML block


var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;

function isLetter$1(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
}

function htmlblock(state, startLine, endLine, silent) {
  var ch, match, nextLine,
      pos = state.bMarks[startLine],
      max = state.eMarks[startLine],
      shift = state.tShift[startLine];

  pos += shift;

  if (!state.options.html) { return false; }

  if (shift > 3 || pos + 2 >= max) { return false; }

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  ch = state.src.charCodeAt(pos + 1);

  if (ch === 0x21/* ! */ || ch === 0x3F/* ? */) {
    // Directive start / comment start / processing instruction start
    if (silent) { return true; }

  } else if (ch === 0x2F/* / */ || isLetter$1(ch)) {

    // Probably start or end of tag
    if (ch === 0x2F/* \ */) {
      // closing tag
      match = state.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);
      if (!match) { return false; }
    } else {
      // opening tag
      match = state.src.slice(pos, max).match(HTML_TAG_OPEN_RE);
      if (!match) { return false; }
    }
    // Make sure tag name is valid
    if (html_blocks[match[1].toLowerCase()] !== true) { return false; }
    if (silent) { return true; }

  } else {
    return false;
  }

  // If we are here - we detected HTML block.
  // Let's roll down till empty line (block end).
  nextLine = startLine + 1;
  while (nextLine < state.lineMax && !state.isEmpty(nextLine)) {
    nextLine++;
  }

  state.line = nextLine;
  state.tokens.push({
    type: 'htmlblock',
    level: state.level,
    lines: [ startLine, state.line ],
    content: state.getLines(startLine, nextLine, 0, true)
  });

  return true;
}

// GFM table, non-standard

function getLine(state, line) {
  var pos = state.bMarks[line] + state.blkIndent,
      max = state.eMarks[line];

  return state.src.substr(pos, max - pos);
}

function table(state, startLine, endLine, silent) {
  var ch, lineText, pos, i, nextLine, rows, cell,
      aligns, t, tableLines, tbodyLines;

  // should have at least three lines
  if (startLine + 2 > endLine) { return false; }

  nextLine = startLine + 1;

  if (state.tShift[nextLine] < state.blkIndent) { return false; }

  // first character of the second line should be '|' or '-'

  pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) { return false; }

  ch = state.src.charCodeAt(pos);
  if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */) { return false; }

  lineText = getLine(state, startLine + 1);
  if (!/^[-:| ]+$/.test(lineText)) { return false; }

  rows = lineText.split('|');
  if (rows <= 2) { return false; }
  aligns = [];
  for (i = 0; i < rows.length; i++) {
    t = rows[i].trim();
    if (!t) {
      // allow empty columns before and after table, but not in between columns;
      // e.g. allow ` |---| `, disallow ` ---||--- `
      if (i === 0 || i === rows.length - 1) {
        continue;
      } else {
        return false;
      }
    }

    if (!/^:?-+:?$/.test(t)) { return false; }
    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
    } else if (t.charCodeAt(0) === 0x3A/* : */) {
      aligns.push('left');
    } else {
      aligns.push('');
    }
  }

  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf('|') === -1) { return false; }
  rows = lineText.replace(/^\||\|$/g, '').split('|');
  if (aligns.length !== rows.length) { return false; }
  if (silent) { return true; }

  state.tokens.push({
    type: 'table_open',
    lines: tableLines = [ startLine, 0 ],
    level: state.level++
  });
  state.tokens.push({
    type: 'thead_open',
    lines: [ startLine, startLine + 1 ],
    level: state.level++
  });

  state.tokens.push({
    type: 'tr_open',
    lines: [ startLine, startLine + 1 ],
    level: state.level++
  });
  for (i = 0; i < rows.length; i++) {
    state.tokens.push({
      type: 'th_open',
      align: aligns[i],
      lines: [ startLine, startLine + 1 ],
      level: state.level++
    });
    state.tokens.push({
      type: 'inline',
      content: rows[i].trim(),
      lines: [ startLine, startLine + 1 ],
      level: state.level,
      children: []
    });
    state.tokens.push({ type: 'th_close', level: --state.level });
  }
  state.tokens.push({ type: 'tr_close', level: --state.level });
  state.tokens.push({ type: 'thead_close', level: --state.level });

  state.tokens.push({
    type: 'tbody_open',
    lines: tbodyLines = [ startLine + 2, 0 ],
    level: state.level++
  });

  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.tShift[nextLine] < state.blkIndent) { break; }

    lineText = getLine(state, nextLine).trim();
    if (lineText.indexOf('|') === -1) { break; }
    rows = lineText.replace(/^\||\|$/g, '').split('|');

    state.tokens.push({ type: 'tr_open', level: state.level++ });
    for (i = 0; i < rows.length; i++) {
      state.tokens.push({ type: 'td_open', align: aligns[i], level: state.level++ });
      // 0x7c === '|'
      cell = rows[i].substring(
          rows[i].charCodeAt(0) === 0x7c ? 1 : 0,
          rows[i].charCodeAt(rows[i].length - 1) === 0x7c ? rows[i].length - 1 : rows[i].length
      ).trim();
      state.tokens.push({
        type: 'inline',
        content: cell,
        level: state.level,
        children: []
      });
      state.tokens.push({ type: 'td_close', level: --state.level });
    }
    state.tokens.push({ type: 'tr_close', level: --state.level });
  }
  state.tokens.push({ type: 'tbody_close', level: --state.level });
  state.tokens.push({ type: 'table_close', level: --state.level });

  tableLines[1] = tbodyLines[1] = nextLine;
  state.line = nextLine;
  return true;
}

// Definition lists

// Search `[:~][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipMarker(state, line) {
  var pos, marker,
      start = state.bMarks[line] + state.tShift[line],
      max = state.eMarks[line];

  if (start >= max) { return -1; }

  // Check bullet
  marker = state.src.charCodeAt(start++);
  if (marker !== 0x7E/* ~ */ && marker !== 0x3A/* : */) { return -1; }

  pos = state.skipSpaces(start);

  // require space after ":"
  if (start === pos) { return -1; }

  // no empty definitions, e.g. "  : "
  if (pos >= max) { return -1; }

  return pos;
}

function markTightParagraphs$1(state, idx) {
  var i, l,
      level = state.level + 2;

  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
      state.tokens[i + 2].tight = true;
      state.tokens[i].tight = true;
      i += 2;
    }
  }
}

function deflist(state, startLine, endLine, silent) {
  var contentStart,
      ddLine,
      dtLine,
      itemLines,
      listLines,
      listTokIdx,
      nextLine,
      oldIndent,
      oldDDIndent,
      oldParentType,
      oldTShift,
      oldTight,
      prevEmptyEnd,
      tight;

  if (silent) {
    // quirk: validation mode validates a dd block only, not a whole deflist
    if (state.ddIndent < 0) { return false; }
    return skipMarker(state, startLine) >= 0;
  }

  nextLine = startLine + 1;
  if (state.isEmpty(nextLine)) {
    if (++nextLine > endLine) { return false; }
  }

  if (state.tShift[nextLine] < state.blkIndent) { return false; }
  contentStart = skipMarker(state, nextLine);
  if (contentStart < 0) { return false; }

  if (state.level >= state.options.maxNesting) { return false; }

  // Start list
  listTokIdx = state.tokens.length;

  state.tokens.push({
    type: 'dl_open',
    lines: listLines = [ startLine, 0 ],
    level: state.level++
  });

  //
  // Iterate list items
  //

  dtLine = startLine;
  ddLine = nextLine;

  // One definition list can contain multiple DTs,
  // and one DT can be followed by multiple DDs.
  //
  // Thus, there is two loops here, and label is
  // needed to break out of the second one
  //
  /*eslint no-labels:0,block-scoped-var:0*/
  OUTER:
  for (;;) {
    tight = true;
    prevEmptyEnd = false;

    state.tokens.push({
      type: 'dt_open',
      lines: [ dtLine, dtLine ],
      level: state.level++
    });
    state.tokens.push({
      type: 'inline',
      content: state.getLines(dtLine, dtLine + 1, state.blkIndent, false).trim(),
      level: state.level + 1,
      lines: [ dtLine, dtLine ],
      children: []
    });
    state.tokens.push({
      type: 'dt_close',
      level: --state.level
    });

    for (;;) {
      state.tokens.push({
        type: 'dd_open',
        lines: itemLines = [ nextLine, 0 ],
        level: state.level++
      });

      oldTight = state.tight;
      oldDDIndent = state.ddIndent;
      oldIndent = state.blkIndent;
      oldTShift = state.tShift[ddLine];
      oldParentType = state.parentType;
      state.blkIndent = state.ddIndent = state.tShift[ddLine] + 2;
      state.tShift[ddLine] = contentStart - state.bMarks[ddLine];
      state.tight = true;
      state.parentType = 'deflist';

      state.parser.tokenize(state, ddLine, endLine, true);

      // If any of list item is tight, mark list as tight
      if (!state.tight || prevEmptyEnd) {
        tight = false;
      }
      // Item become loose if finish with empty line,
      // but we should filter last element, because it means list finish
      prevEmptyEnd = (state.line - ddLine) > 1 && state.isEmpty(state.line - 1);

      state.tShift[ddLine] = oldTShift;
      state.tight = oldTight;
      state.parentType = oldParentType;
      state.blkIndent = oldIndent;
      state.ddIndent = oldDDIndent;

      state.tokens.push({
        type: 'dd_close',
        level: --state.level
      });

      itemLines[1] = nextLine = state.line;

      if (nextLine >= endLine) { break OUTER; }

      if (state.tShift[nextLine] < state.blkIndent) { break OUTER; }
      contentStart = skipMarker(state, nextLine);
      if (contentStart < 0) { break; }

      ddLine = nextLine;

      // go to the next loop iteration:
      // insert DD tag and repeat checking
    }

    if (nextLine >= endLine) { break; }
    dtLine = nextLine;

    if (state.isEmpty(dtLine)) { break; }
    if (state.tShift[dtLine] < state.blkIndent) { break; }

    ddLine = dtLine + 1;
    if (ddLine >= endLine) { break; }
    if (state.isEmpty(ddLine)) { ddLine++; }
    if (ddLine >= endLine) { break; }

    if (state.tShift[ddLine] < state.blkIndent) { break; }
    contentStart = skipMarker(state, ddLine);
    if (contentStart < 0) { break; }

    // go to the next loop iteration:
    // insert DT and DD tags and repeat checking
  }

  // Finilize list
  state.tokens.push({
    type: 'dl_close',
    level: --state.level
  });
  listLines[1] = nextLine;

  state.line = nextLine;

  // mark paragraphs tight if needed
  if (tight) {
    markTightParagraphs$1(state, listTokIdx);
  }

  return true;
}

// Paragraph

function paragraph(state, startLine/*, endLine*/) {
  var endLine, content, terminate, i, l,
      nextLine = startLine + 1,
      terminatorRules;

  endLine = state.lineMax;

  // jump line-by-line until empty one or EOF
  if (nextLine < endLine && !state.isEmpty(nextLine)) {
    terminatorRules = state.parser.ruler.getRules('paragraph');

    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.tShift[nextLine] - state.blkIndent > 3) { continue; }

      // Some tags can terminate paragraph without empty line.
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) { break; }
    }
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine;
  if (content.length) {
    state.tokens.push({
      type: 'paragraph_open',
      tight: false,
      lines: [ startLine, state.line ],
      level: state.level
    });
    state.tokens.push({
      type: 'inline',
      content: content,
      level: state.level + 1,
      lines: [ startLine, state.line ],
      children: []
    });
    state.tokens.push({
      type: 'paragraph_close',
      tight: false,
      level: state.level
    });
  }

  return true;
}

/**
 * Parser rules
 */

var _rules$1 = [
  [ 'code',       code ],
  [ 'fences',     fences,     [ 'paragraph', 'blockquote', 'list' ] ],
  [ 'blockquote', blockquote, [ 'paragraph', 'blockquote', 'list' ] ],
  [ 'hr',         hr,         [ 'paragraph', 'blockquote', 'list' ] ],
  [ 'list',       list,       [ 'paragraph', 'blockquote' ] ],
  [ 'footnote',   footnote,   [ 'paragraph' ] ],
  [ 'heading',    heading,    [ 'paragraph', 'blockquote' ] ],
  [ 'lheading',   lheading ],
  [ 'htmlblock',  htmlblock,  [ 'paragraph', 'blockquote' ] ],
  [ 'table',      table,      [ 'paragraph' ] ],
  [ 'deflist',    deflist,    [ 'paragraph' ] ],
  [ 'paragraph',  paragraph ]
];

/**
 * Block Parser class
 *
 * @api private
 */

function ParserBlock() {
  this.ruler = new Ruler();
  for (var i = 0; i < _rules$1.length; i++) {
    this.ruler.push(_rules$1[i][0], _rules$1[i][1], {
      alt: (_rules$1[i][2] || []).slice()
    });
  }
}

/**
 * Generate tokens for the given input range.
 *
 * @param  {Object} `state` Has properties like `src`, `parser`, `options` etc
 * @param  {Number} `startLine`
 * @param  {Number} `endLine`
 * @api private
 */

ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
  var rules = this.ruler.getRules('');
  var len = rules.length;
  var line = startLine;
  var hasEmptyLines = false;
  var ok, i;

  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) {
      break;
    }

    // Termination condition for nested calls.
    // Nested calls currently used for blockquotes & lists
    if (state.tShift[line] < state.blkIndent) {
      break;
    }

    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.line`
    // - update `state.tokens`
    // - return true

    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) {
        break;
      }
    }

    // set state.tight iff we had an empty line before current tag
    // i.e. latest empty line should not count
    state.tight = !hasEmptyLines;

    // paragraph might "eat" one newline after it in nested lists
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }

    line = state.line;

    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;

      // two empty lines should stop the parser in list mode
      if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) { break; }
      state.line = line;
    }
  }
};

var TABS_SCAN_RE = /[\n\t]/g;
var NEWLINES_RE  = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
var SPACES_RE    = /\u00a0/g;

/**
 * Tokenize the given `str`.
 *
 * @param  {String} `str` Source string
 * @param  {Object} `options`
 * @param  {Object} `env`
 * @param  {Array} `outTokens`
 * @api private
 */

ParserBlock.prototype.parse = function (str, options, env, outTokens) {
  var state, lineStart = 0, lastTabPos = 0;
  if (!str) { return []; }

  // Normalize spaces
  str = str.replace(SPACES_RE, ' ');

  // Normalize newlines
  str = str.replace(NEWLINES_RE, '\n');

  // Replace tabs with proper number of spaces (1..4)
  if (str.indexOf('\t') >= 0) {
    str = str.replace(TABS_SCAN_RE, function (match, offset) {
      var result;
      if (str.charCodeAt(offset) === 0x0A) {
        lineStart = offset + 1;
        lastTabPos = 0;
        return match;
      }
      result = '    '.slice((offset - lineStart - lastTabPos) % 4);
      lastTabPos = offset - lineStart + 1;
      return result;
    });
  }

  state = new StateBlock(str, this, options, env, outTokens);
  this.tokenize(state, state.line, state.lineMax);
};

// Skip text characters for text token, place those to pending buffer
// and increment current pos

// Rule to skip pure text
// '{}$%@~+=:' reserved for extentions

function isTerminatorChar(ch) {
  switch (ch) {
    case 0x0A/* \n */:
    case 0x5C/* \ */:
    case 0x60/* ` */:
    case 0x2A/* * */:
    case 0x5F/* _ */:
    case 0x5E/* ^ */:
    case 0x5B/* [ */:
    case 0x5D/* ] */:
    case 0x21/* ! */:
    case 0x26/* & */:
    case 0x3C/* < */:
    case 0x3E/* > */:
    case 0x7B/* { */:
    case 0x7D/* } */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x40/* @ */:
    case 0x7E/* ~ */:
    case 0x2B/* + */:
    case 0x3D/* = */:
    case 0x3A/* : */:
      return true;
    default:
      return false;
  }
}

function text(state, silent) {
  var pos = state.pos;

  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }

  if (pos === state.pos) { return false; }

  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

  state.pos = pos;

  return true;
}

// Proceess '\n'

function newline(state, silent) {
  var pmax, max, pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

  pmax = state.pending.length - 1;
  max = state.posMax;

  // '  \n' -> hardbreak
  // Lookup in pending chars is bad practice! Don't copy to other rules!
  // Pending string is stored in concat mode, indexed lookups will cause
  // convertion to flat mode.
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
        // Strip out all trailing spaces on this line.
        for (var i = pmax - 2; i >= 0; i--) {
          if (state.pending.charCodeAt(i) !== 0x20) {
            state.pending = state.pending.substring(0, i + 1);
            break;
          }
        }
        state.push({
          type: 'hardbreak',
          level: state.level
        });
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push({
          type: 'softbreak',
          level: state.level
        });
      }

    } else {
      state.push({
        type: 'softbreak',
        level: state.level
      });
    }
  }

  pos++;

  // skip heading spaces for next line
  while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

  state.pos = pos;
  return true;
}

// Proceess escaped chars and hardbreaks

var ESCAPED = [];

for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
  .split('').forEach(function(ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


function escape(state, silent) {
  var ch, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }

  pos++;

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (ch < 256 && ESCAPED[ch] !== 0) {
      if (!silent) { state.pending += state.src[pos]; }
      state.pos += 2;
      return true;
    }

    if (ch === 0x0A) {
      if (!silent) {
        state.push({
          type: 'hardbreak',
          level: state.level
        });
      }

      pos++;
      // skip leading whitespaces from next line
      while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

      state.pos = pos;
      return true;
    }
  }

  if (!silent) { state.pending += '\\'; }
  state.pos++;
  return true;
}

// Parse backticks

function backticks(state, silent) {
  var start, max, marker, matchStart, matchEnd,
      pos = state.pos,
      ch = state.src.charCodeAt(pos);

  if (ch !== 0x60/* ` */) { return false; }

  start = pos;
  pos++;
  max = state.posMax;

  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

  marker = state.src.slice(start, pos);

  matchStart = matchEnd = pos;

  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
    matchEnd = matchStart + 1;

    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

    if (matchEnd - matchStart === marker.length) {
      if (!silent) {
        state.push({
          type: 'code',
          content: state.src.slice(pos, matchStart)
                              .replace(/[ \n]+/g, ' ')
                              .trim(),
          block: false,
          level: state.level
        });
      }
      state.pos = matchEnd;
      return true;
    }
  }

  if (!silent) { state.pending += marker; }
  state.pos += marker.length;
  return true;
}

// Process ~~deleted text~~

function del(state, silent) {
  var found,
      pos,
      stack,
      max = state.posMax,
      start = state.pos,
      lastChar,
      nextChar;

  if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 4 >= max) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x7E/* ~ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
  nextChar = state.src.charCodeAt(start + 2);

  if (lastChar === 0x7E/* ~ */) { return false; }
  if (nextChar === 0x7E/* ~ */) { return false; }
  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

  pos = start + 2;
  while (pos < max && state.src.charCodeAt(pos) === 0x7E/* ~ */) { pos++; }
  if (pos > start + 3) {
    // sequence of 4+ markers taking as literal, same as in a emphasis
    state.pos += pos - start;
    if (!silent) { state.pending += state.src.slice(start, pos); }
    return true;
  }

  state.pos = start + 2;
  stack = 1;

  while (state.pos + 1 < max) {
    if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
      if (state.src.charCodeAt(state.pos + 1) === 0x7E/* ~ */) {
        lastChar = state.src.charCodeAt(state.pos - 1);
        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
        if (nextChar !== 0x7E/* ~ */ && lastChar !== 0x7E/* ~ */) {
          if (lastChar !== 0x20 && lastChar !== 0x0A) {
            // closing '~~'
            stack--;
          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
            // opening '~~'
            stack++;
          } // else {
            //  // standalone ' ~~ ' indented with spaces
            // }
          if (stack <= 0) {
            found = true;
            break;
          }
        }
      }
    }

    state.parser.skipToken(state);
  }

  if (!found) {
    // parser failed to find ending tag, so it's not valid emphasis
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 2;

  if (!silent) {
    state.push({ type: 'del_open', level: state.level++ });
    state.parser.tokenize(state);
    state.push({ type: 'del_close', level: --state.level });
  }

  state.pos = state.posMax + 2;
  state.posMax = max;
  return true;
}

// Process ++inserted text++

function ins(state, silent) {
  var found,
      pos,
      stack,
      max = state.posMax,
      start = state.pos,
      lastChar,
      nextChar;

  if (state.src.charCodeAt(start) !== 0x2B/* + */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 4 >= max) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x2B/* + */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
  nextChar = state.src.charCodeAt(start + 2);

  if (lastChar === 0x2B/* + */) { return false; }
  if (nextChar === 0x2B/* + */) { return false; }
  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

  pos = start + 2;
  while (pos < max && state.src.charCodeAt(pos) === 0x2B/* + */) { pos++; }
  if (pos !== start + 2) {
    // sequence of 3+ markers taking as literal, same as in a emphasis
    state.pos += pos - start;
    if (!silent) { state.pending += state.src.slice(start, pos); }
    return true;
  }

  state.pos = start + 2;
  stack = 1;

  while (state.pos + 1 < max) {
    if (state.src.charCodeAt(state.pos) === 0x2B/* + */) {
      if (state.src.charCodeAt(state.pos + 1) === 0x2B/* + */) {
        lastChar = state.src.charCodeAt(state.pos - 1);
        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
        if (nextChar !== 0x2B/* + */ && lastChar !== 0x2B/* + */) {
          if (lastChar !== 0x20 && lastChar !== 0x0A) {
            // closing '++'
            stack--;
          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
            // opening '++'
            stack++;
          } // else {
            //  // standalone ' ++ ' indented with spaces
            // }
          if (stack <= 0) {
            found = true;
            break;
          }
        }
      }
    }

    state.parser.skipToken(state);
  }

  if (!found) {
    // parser failed to find ending tag, so it's not valid emphasis
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 2;

  if (!silent) {
    state.push({ type: 'ins_open', level: state.level++ });
    state.parser.tokenize(state);
    state.push({ type: 'ins_close', level: --state.level });
  }

  state.pos = state.posMax + 2;
  state.posMax = max;
  return true;
}

// Process ==highlighted text==

function mark(state, silent) {
  var found,
      pos,
      stack,
      max = state.posMax,
      start = state.pos,
      lastChar,
      nextChar;

  if (state.src.charCodeAt(start) !== 0x3D/* = */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 4 >= max) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x3D/* = */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
  nextChar = state.src.charCodeAt(start + 2);

  if (lastChar === 0x3D/* = */) { return false; }
  if (nextChar === 0x3D/* = */) { return false; }
  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

  pos = start + 2;
  while (pos < max && state.src.charCodeAt(pos) === 0x3D/* = */) { pos++; }
  if (pos !== start + 2) {
    // sequence of 3+ markers taking as literal, same as in a emphasis
    state.pos += pos - start;
    if (!silent) { state.pending += state.src.slice(start, pos); }
    return true;
  }

  state.pos = start + 2;
  stack = 1;

  while (state.pos + 1 < max) {
    if (state.src.charCodeAt(state.pos) === 0x3D/* = */) {
      if (state.src.charCodeAt(state.pos + 1) === 0x3D/* = */) {
        lastChar = state.src.charCodeAt(state.pos - 1);
        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
        if (nextChar !== 0x3D/* = */ && lastChar !== 0x3D/* = */) {
          if (lastChar !== 0x20 && lastChar !== 0x0A) {
            // closing '=='
            stack--;
          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
            // opening '=='
            stack++;
          } // else {
            //  // standalone ' == ' indented with spaces
            // }
          if (stack <= 0) {
            found = true;
            break;
          }
        }
      }
    }

    state.parser.skipToken(state);
  }

  if (!found) {
    // parser failed to find ending tag, so it's not valid emphasis
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 2;

  if (!silent) {
    state.push({ type: 'mark_open', level: state.level++ });
    state.parser.tokenize(state);
    state.push({ type: 'mark_close', level: --state.level });
  }

  state.pos = state.posMax + 2;
  state.posMax = max;
  return true;
}

// Process *this* and _that_

function isAlphaNum(code) {
  return (code >= 0x30 /* 0 */ && code <= 0x39 /* 9 */) ||
         (code >= 0x41 /* A */ && code <= 0x5A /* Z */) ||
         (code >= 0x61 /* a */ && code <= 0x7A /* z */);
}

// parse sequence of emphasis markers,
// "start" should point at a valid marker
function scanDelims(state, start) {
  var pos = start, lastChar, nextChar, count,
      can_open = true,
      can_close = true,
      max = state.posMax,
      marker = state.src.charCodeAt(start);

  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;

  while (pos < max && state.src.charCodeAt(pos) === marker) { pos++; }
  if (pos >= max) { can_open = false; }
  count = pos - start;

  if (count >= 4) {
    // sequence of four or more unescaped markers can't start/end an emphasis
    can_open = can_close = false;
  } else {
    nextChar = pos < max ? state.src.charCodeAt(pos) : -1;

    // check whitespace conditions
    if (nextChar === 0x20 || nextChar === 0x0A) { can_open = false; }
    if (lastChar === 0x20 || lastChar === 0x0A) { can_close = false; }

    if (marker === 0x5F /* _ */) {
      // check if we aren't inside the word
      if (isAlphaNum(lastChar)) { can_open = false; }
      if (isAlphaNum(nextChar)) { can_close = false; }
    }
  }

  return {
    can_open: can_open,
    can_close: can_close,
    delims: count
  };
}

function emphasis(state, silent) {
  var startCount,
      count,
      found,
      oldCount,
      newCount,
      stack,
      res,
      max = state.posMax,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (marker !== 0x5F/* _ */ && marker !== 0x2A /* * */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode

  res = scanDelims(state, start);
  startCount = res.delims;
  if (!res.can_open) {
    state.pos += startCount;
    if (!silent) { state.pending += state.src.slice(start, state.pos); }
    return true;
  }

  if (state.level >= state.options.maxNesting) { return false; }

  state.pos = start + startCount;
  stack = [ startCount ];

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === marker) {
      res = scanDelims(state, state.pos);
      count = res.delims;
      if (res.can_close) {
        oldCount = stack.pop();
        newCount = count;

        while (oldCount !== newCount) {
          if (newCount < oldCount) {
            stack.push(oldCount - newCount);
            break;
          }

          // assert(newCount > oldCount)
          newCount -= oldCount;

          if (stack.length === 0) { break; }
          state.pos += oldCount;
          oldCount = stack.pop();
        }

        if (stack.length === 0) {
          startCount = oldCount;
          found = true;
          break;
        }
        state.pos += count;
        continue;
      }

      if (res.can_open) { stack.push(count); }
      state.pos += count;
      continue;
    }

    state.parser.skipToken(state);
  }

  if (!found) {
    // parser failed to find ending tag, so it's not valid emphasis
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + startCount;

  if (!silent) {
    if (startCount === 2 || startCount === 3) {
      state.push({ type: 'strong_open', level: state.level++ });
    }
    if (startCount === 1 || startCount === 3) {
      state.push({ type: 'em_open', level: state.level++ });
    }

    state.parser.tokenize(state);

    if (startCount === 1 || startCount === 3) {
      state.push({ type: 'em_close', level: --state.level });
    }
    if (startCount === 2 || startCount === 3) {
      state.push({ type: 'strong_close', level: --state.level });
    }
  }

  state.pos = state.posMax + startCount;
  state.posMax = max;
  return true;
}

// Process ~subscript~

// same as UNESCAPE_MD_RE plus a space
var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

function sub(state, silent) {
  var found,
      content,
      max = state.posMax,
      start = state.pos;

  if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 2 >= max) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  state.pos = start + 1;

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
      found = true;
      break;
    }

    state.parser.skipToken(state);
  }

  if (!found || start + 1 === state.pos) {
    state.pos = start;
    return false;
  }

  content = state.src.slice(start + 1, state.pos);

  // don't allow unescaped spaces/newlines inside
  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 1;

  if (!silent) {
    state.push({
      type: 'sub',
      level: state.level,
      content: content.replace(UNESCAPE_RE, '$1')
    });
  }

  state.pos = state.posMax + 1;
  state.posMax = max;
  return true;
}

// Process ^superscript^

// same as UNESCAPE_MD_RE plus a space
var UNESCAPE_RE$1 = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

function sup(state, silent) {
  var found,
      content,
      max = state.posMax,
      start = state.pos;

  if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 2 >= max) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  state.pos = start + 1;

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === 0x5E/* ^ */) {
      found = true;
      break;
    }

    state.parser.skipToken(state);
  }

  if (!found || start + 1 === state.pos) {
    state.pos = start;
    return false;
  }

  content = state.src.slice(start + 1, state.pos);

  // don't allow unescaped spaces/newlines inside
  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 1;

  if (!silent) {
    state.push({
      type: 'sup',
      level: state.level,
      content: content.replace(UNESCAPE_RE$1, '$1')
    });
  }

  state.pos = state.posMax + 1;
  state.posMax = max;
  return true;
}

// Process [links](<to> "stuff")


function links(state, silent) {
  var labelStart,
      labelEnd,
      label,
      href,
      title,
      pos,
      ref,
      code,
      isImage = false,
      oldPos = state.pos,
      max = state.posMax,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (marker === 0x21/* ! */) {
    isImage = true;
    marker = state.src.charCodeAt(++start);
  }

  if (marker !== 0x5B/* [ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  labelStart = start + 1;
  labelEnd = parseLinkLabel(state, start);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    if (parseLinkDestination(state, pos)) {
      href = state.linkContent;
      pos = state.pos;
    } else {
      href = '';
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
      title = state.linkContent;
      pos = state.pos;

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (code !== 0x20 && code !== 0x0A) { break; }
      }
    } else {
      title = '';
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    //
    // Link reference
    //

    // do not allow nested reference links
    if (state.linkLevel > 0) { return false; }

    // [foo]  [bar]
    //      ^^ optional whitespace (can include newlines)
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = start - 1;
      }
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) {
      if (typeof label === 'undefined') {
        pos = labelEnd + 1;
      }
      label = state.src.slice(labelStart, labelEnd);
    }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;

    if (isImage) {
      state.push({
        type: 'image',
        src: href,
        title: title,
        alt: state.src.substr(labelStart, labelEnd - labelStart),
        level: state.level
      });
    } else {
      state.push({
        type: 'link_open',
        href: href,
        title: title,
        level: state.level++
      });
      state.linkLevel++;
      state.parser.tokenize(state);
      state.linkLevel--;
      state.push({ type: 'link_close', level: --state.level });
    }
  }

  state.pos = pos;
  state.posMax = max;
  return true;
}

// Process inline footnotes (^[...])


function footnote_inline(state, silent) {
  var labelStart,
      labelEnd,
      footnoteId,
      oldLength,
      max = state.posMax,
      start = state.pos;

  if (start + 2 >= max) { return false; }
  if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x5B/* [ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  labelStart = start + 2;
  labelEnd = parseLinkLabel(state, start + 1);

  // parser failed to find ']', so it's not a valid note
  if (labelEnd < 0) { return false; }

  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    if (!state.env.footnotes) { state.env.footnotes = {}; }
    if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
    footnoteId = state.env.footnotes.list.length;

    state.pos = labelStart;
    state.posMax = labelEnd;

    state.push({
      type: 'footnote_ref',
      id: footnoteId,
      level: state.level
    });
    state.linkLevel++;
    oldLength = state.tokens.length;
    state.parser.tokenize(state);
    state.env.footnotes.list[footnoteId] = { tokens: state.tokens.splice(oldLength) };
    state.linkLevel--;
  }

  state.pos = labelEnd + 1;
  state.posMax = max;
  return true;
}

// Process footnote references ([^...])

function footnote_ref(state, silent) {
  var label,
      pos,
      footnoteId,
      footnoteSubId,
      max = state.posMax,
      start = state.pos;

  // should be at least 4 chars - "[^x]"
  if (start + 3 > max) { return false; }

  if (!state.env.footnotes || !state.env.footnotes.refs) { return false; }
  if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  for (pos = start + 2; pos < max; pos++) {
    if (state.src.charCodeAt(pos) === 0x20) { return false; }
    if (state.src.charCodeAt(pos) === 0x0A) { return false; }
    if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
      break;
    }
  }

  if (pos === start + 2) { return false; } // no empty footnote labels
  if (pos >= max) { return false; }
  pos++;

  label = state.src.slice(start + 2, pos - 1);
  if (typeof state.env.footnotes.refs[':' + label] === 'undefined') { return false; }

  if (!silent) {
    if (!state.env.footnotes.list) { state.env.footnotes.list = []; }

    if (state.env.footnotes.refs[':' + label] < 0) {
      footnoteId = state.env.footnotes.list.length;
      state.env.footnotes.list[footnoteId] = { label: label, count: 0 };
      state.env.footnotes.refs[':' + label] = footnoteId;
    } else {
      footnoteId = state.env.footnotes.refs[':' + label];
    }

    footnoteSubId = state.env.footnotes.list[footnoteId].count;
    state.env.footnotes.list[footnoteId].count++;

    state.push({
      type: 'footnote_ref',
      id: footnoteId,
      subId: footnoteSubId,
      level: state.level
    });
  }

  state.pos = pos;
  state.posMax = max;
  return true;
}

// List of valid url schemas, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#autolinks

var url_schemas = [
  'coap',
  'doi',
  'javascript',
  'aaa',
  'aaas',
  'about',
  'acap',
  'cap',
  'cid',
  'crid',
  'data',
  'dav',
  'dict',
  'dns',
  'file',
  'ftp',
  'geo',
  'go',
  'gopher',
  'h323',
  'http',
  'https',
  'iax',
  'icap',
  'im',
  'imap',
  'info',
  'ipp',
  'iris',
  'iris.beep',
  'iris.xpc',
  'iris.xpcs',
  'iris.lwz',
  'ldap',
  'mailto',
  'mid',
  'msrp',
  'msrps',
  'mtqp',
  'mupdate',
  'news',
  'nfs',
  'ni',
  'nih',
  'nntp',
  'opaquelocktoken',
  'pop',
  'pres',
  'rtsp',
  'service',
  'session',
  'shttp',
  'sieve',
  'sip',
  'sips',
  'sms',
  'snmp',
  'soap.beep',
  'soap.beeps',
  'tag',
  'tel',
  'telnet',
  'tftp',
  'thismessage',
  'tn3270',
  'tip',
  'tv',
  'urn',
  'vemmi',
  'ws',
  'wss',
  'xcon',
  'xcon-userid',
  'xmlrpc.beep',
  'xmlrpc.beeps',
  'xmpp',
  'z39.50r',
  'z39.50s',
  'adiumxtra',
  'afp',
  'afs',
  'aim',
  'apt',
  'attachment',
  'aw',
  'beshare',
  'bitcoin',
  'bolo',
  'callto',
  'chrome',
  'chrome-extension',
  'com-eventbrite-attendee',
  'content',
  'cvs',
  'dlna-playsingle',
  'dlna-playcontainer',
  'dtn',
  'dvb',
  'ed2k',
  'facetime',
  'feed',
  'finger',
  'fish',
  'gg',
  'git',
  'gizmoproject',
  'gtalk',
  'hcp',
  'icon',
  'ipn',
  'irc',
  'irc6',
  'ircs',
  'itms',
  'jar',
  'jms',
  'keyparc',
  'lastfm',
  'ldaps',
  'magnet',
  'maps',
  'market',
  'message',
  'mms',
  'ms-help',
  'msnim',
  'mumble',
  'mvn',
  'notes',
  'oid',
  'palm',
  'paparazzi',
  'platform',
  'proxy',
  'psyc',
  'query',
  'res',
  'resource',
  'rmi',
  'rsync',
  'rtmp',
  'secondlife',
  'sftp',
  'sgn',
  'skype',
  'smb',
  'soldat',
  'spotify',
  'ssh',
  'steam',
  'svn',
  'teamspeak',
  'things',
  'udp',
  'unreal',
  'ut2004',
  'ventrilo',
  'view-source',
  'webcal',
  'wtai',
  'wyciwyg',
  'xfire',
  'xri',
  'ymsgr'
];

// Process autolinks '<protocol:...>'


/*eslint max-len:0*/
var EMAIL_RE    = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;


function autolink(state, silent) {
  var tail, linkMatch, emailMatch, url, fullUrl, pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  tail = state.src.slice(pos);

  if (tail.indexOf('>') < 0) { return false; }

  linkMatch = tail.match(AUTOLINK_RE);

  if (linkMatch) {
    if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) { return false; }

    url = linkMatch[0].slice(1, -1);
    fullUrl = normalizeLink(url);
    if (!state.parser.validateLink(url)) { return false; }

    if (!silent) {
      state.push({
        type: 'link_open',
        href: fullUrl,
        level: state.level
      });
      state.push({
        type: 'text',
        content: url,
        level: state.level + 1
      });
      state.push({ type: 'link_close', level: state.level });
    }

    state.pos += linkMatch[0].length;
    return true;
  }

  emailMatch = tail.match(EMAIL_RE);

  if (emailMatch) {

    url = emailMatch[0].slice(1, -1);

    fullUrl = normalizeLink('mailto:' + url);
    if (!state.parser.validateLink(fullUrl)) { return false; }

    if (!silent) {
      state.push({
        type: 'link_open',
        href: fullUrl,
        level: state.level
      });
      state.push({
        type: 'text',
        content: url,
        level: state.level + 1
      });
      state.push({ type: 'link_close', level: state.level });
    }

    state.pos += emailMatch[0].length;
    return true;
  }

  return false;
}

// Regexps to match html elements

function replace$1(regex, options) {
  regex = regex.source;
  options = options || '';

  return function self(name, val) {
    if (!name) {
      return new RegExp(regex, options);
    }
    val = val.source || val;
    regex = regex.replace(name, val);
    return self;
  };
}


var attr_name     = /[a-zA-Z_:][a-zA-Z0-9:._-]*/;

var unquoted      = /[^"'=<>`\x00-\x20]+/;
var single_quoted = /'[^']*'/;
var double_quoted = /"[^"]*"/;

/*eslint no-spaced-func:0*/
var attr_value  = replace$1(/(?:unquoted|single_quoted|double_quoted)/)
                    ('unquoted', unquoted)
                    ('single_quoted', single_quoted)
                    ('double_quoted', double_quoted)
                    ();

var attribute   = replace$1(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)
                    ('attr_name', attr_name)
                    ('attr_value', attr_value)
                    ();

var open_tag    = replace$1(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)
                    ('attribute', attribute)
                    ();

var close_tag   = /<\/[A-Za-z][A-Za-z0-9]*\s*>/;
var comment     = /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/;
var processing  = /<[?].*?[?]>/;
var declaration = /<![A-Z]+\s+[^>]*>/;
var cdata       = /<!\[CDATA\[[\s\S]*?\]\]>/;

var HTML_TAG_RE = replace$1(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)
  ('open_tag', open_tag)
  ('close_tag', close_tag)
  ('comment', comment)
  ('processing', processing)
  ('declaration', declaration)
  ('cdata', cdata)
  ();

// Process html tags


function isLetter$2(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
}


function htmltag(state, silent) {
  var ch, match, max, pos = state.pos;

  if (!state.options.html) { return false; }

  // Check start
  max = state.posMax;
  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
      pos + 2 >= max) {
    return false;
  }

  // Quick fail on second char
  ch = state.src.charCodeAt(pos + 1);
  if (ch !== 0x21/* ! */ &&
      ch !== 0x3F/* ? */ &&
      ch !== 0x2F/* / */ &&
      !isLetter$2(ch)) {
    return false;
  }

  match = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match) { return false; }

  if (!silent) {
    state.push({
      type: 'htmltag',
      content: state.src.slice(pos, pos + match[0].length),
      level: state.level
    });
  }
  state.pos += match[0].length;
  return true;
}

// Process html entity - &#123;, &#xAF;, &quot;, ...


var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


function entity(state, silent) {
  var ch, code, match, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }

  if (pos + 1 < max) {
    ch = state.src.charCodeAt(pos + 1);

    if (ch === 0x23 /* # */) {
      match = state.src.slice(pos).match(DIGITAL_RE);
      if (match) {
        if (!silent) {
          code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
          state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
        }
        state.pos += match[0].length;
        return true;
      }
    } else {
      match = state.src.slice(pos).match(NAMED_RE);
      if (match) {
        var decoded = decodeEntity(match[1]);
        if (match[1] !== decoded) {
          if (!silent) { state.pending += decoded; }
          state.pos += match[0].length;
          return true;
        }
      }
    }
  }

  if (!silent) { state.pending += '&'; }
  state.pos++;
  return true;
}

/**
 * Inline Parser `rules`
 */

var _rules$2 = [
  [ 'text',            text ],
  [ 'newline',         newline ],
  [ 'escape',          escape ],
  [ 'backticks',       backticks ],
  [ 'del',             del ],
  [ 'ins',             ins ],
  [ 'mark',            mark ],
  [ 'emphasis',        emphasis ],
  [ 'sub',             sub ],
  [ 'sup',             sup ],
  [ 'links',           links ],
  [ 'footnote_inline', footnote_inline ],
  [ 'footnote_ref',    footnote_ref ],
  [ 'autolink',        autolink ],
  [ 'htmltag',         htmltag ],
  [ 'entity',          entity ]
];

/**
 * Inline Parser class. Note that link validation is stricter
 * in Remarkable than what is specified by CommonMark. If you
 * want to change this you can use a custom validator.
 *
 * @api private
 */

function ParserInline() {
  this.ruler = new Ruler();
  for (var i = 0; i < _rules$2.length; i++) {
    this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
  }

  // Can be overridden with a custom validator
  this.validateLink = validateLink;
}

/**
 * Skip a single token by running all rules in validation mode.
 * Returns `true` if any rule reports success.
 *
 * @param  {Object} `state`
 * @api privage
 */

ParserInline.prototype.skipToken = function (state) {
  var rules = this.ruler.getRules('');
  var len = rules.length;
  var pos = state.pos;
  var i, cached_pos;

  if ((cached_pos = state.cacheGet(pos)) > 0) {
    state.pos = cached_pos;
    return;
  }

  for (i = 0; i < len; i++) {
    if (rules[i](state, true)) {
      state.cacheSet(pos, state.pos);
      return;
    }
  }

  state.pos++;
  state.cacheSet(pos, state.pos);
};

/**
 * Generate tokens for the given input range.
 *
 * @param  {Object} `state`
 * @api private
 */

ParserInline.prototype.tokenize = function (state) {
  var rules = this.ruler.getRules('');
  var len = rules.length;
  var end = state.posMax;
  var ok, i;

  while (state.pos < end) {

    // Try all possible rules.
    // On success, the rule should:
    //
    // - update `state.pos`
    // - update `state.tokens`
    // - return true
    for (i = 0; i < len; i++) {
      ok = rules[i](state, false);

      if (ok) {
        break;
      }
    }

    if (ok) {
      if (state.pos >= end) { break; }
      continue;
    }

    state.pending += state.src[state.pos++];
  }

  if (state.pending) {
    state.pushPending();
  }
};

/**
 * Parse the given input string.
 *
 * @param  {String} `str`
 * @param  {Object} `options`
 * @param  {Object} `env`
 * @param  {Array} `outTokens`
 * @api private
 */

ParserInline.prototype.parse = function (str, options, env, outTokens) {
  var state = new StateInline(str, this, options, env, outTokens);
  this.tokenize(state);
};

/**
 * Validate the given `url` by checking for bad protocols.
 *
 * @param  {String} `url`
 * @return {Boolean}
 */

function validateLink(url) {
  var BAD_PROTOCOLS = [ 'vbscript', 'javascript', 'file', 'data' ];
  var str = url.trim().toLowerCase();
  // Care about digital entities "javascript&#x3A;alert(1)"
  str = replaceEntities(str);
  if (str.indexOf(':') !== -1 && BAD_PROTOCOLS.indexOf(str.split(':')[0]) !== -1) {
    return false;
  }
  return true;
}

// Remarkable default options

var defaultConfig = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkTarget:   '',           // set target to open link in

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'block',
        'inline',
        'references',
        'replacements',
        'smartquotes',
        'references',
        'abbr2',
        'footnote_tail'
      ]
    },

    block: {
      rules: [
        'blockquote',
        'code',
        'fences',
        'footnote',
        'heading',
        'hr',
        'htmlblock',
        'lheading',
        'list',
        'paragraph',
        'table'
      ]
    },

    inline: {
      rules: [
        'autolink',
        'backticks',
        'del',
        'emphasis',
        'entity',
        'escape',
        'footnote_ref',
        'htmltag',
        'links',
        'newline',
        'text'
      ]
    }
  }
};

// Remarkable default options

var fullConfig = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkTarget:   '',           // set target to open link in

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes:       '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight:     null,

    maxNesting:    20            // Internal protection, recursion limit
  },

  components: {
    // Don't restrict core/block/inline rules
    core: {},
    block: {},
    inline: {}
  }
};

// Commonmark default options

var commonmarkConfig = {
  options: {
    html:         true,         // Enable HTML tags in source
    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkTarget:   '',           // set target to open link in

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'block',
        'inline',
        'references',
        'abbr2'
      ]
    },

    block: {
      rules: [
        'blockquote',
        'code',
        'fences',
        'heading',
        'hr',
        'htmlblock',
        'lheading',
        'list',
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'autolink',
        'backticks',
        'emphasis',
        'entity',
        'escape',
        'htmltag',
        'links',
        'newline',
        'text'
      ]
    }
  }
};

/**
 * Preset configs
 */

var config = {
  'default': defaultConfig,
  'full': fullConfig,
  'commonmark': commonmarkConfig
};

/**
 * The `StateCore` class manages state.
 *
 * @param {Object} `instance` Remarkable instance
 * @param {String} `str` Markdown string
 * @param {Object} `env`
 */

function StateCore(instance, str, env) {
  this.src = str;
  this.env = env;
  this.options = instance.options;
  this.tokens = [];
  this.inlineMode = false;

  this.inline = instance.inline;
  this.block = instance.block;
  this.renderer = instance.renderer;
  this.typographer = instance.typographer;
}

/**
 * The main `Remarkable` class. Create an instance of
 * `Remarkable` with a `preset` and/or `options`.
 *
 * @param {String} `preset` If no preset is given, `default` is used.
 * @param {Object} `options`
 */

function Remarkable(preset, options) {
  if (typeof preset !== 'string') {
    options = preset;
    preset = 'default';
  }

  if (options && options.linkify != null) {
    console.warn(
      'linkify option is removed. Use linkify plugin instead:\n\n' +
      'import Remarkable from \'remarkable\';\n' +
      'import linkify from \'remarkable/linkify\';\n' +
      'new Remarkable().use(linkify)\n'
    );
  }

  this.inline   = new ParserInline();
  this.block    = new ParserBlock();
  this.core     = new Core();
  this.renderer = new Renderer();
  this.ruler    = new Ruler();

  this.options  = {};
  this.configure(config[preset]);
  this.set(options || {});
}

/**
 * Set options as an alternative to passing them
 * to the constructor.
 *
 * ```js
 * md.set({typographer: true});
 * ```
 * @param {Object} `options`
 * @api public
 */

Remarkable.prototype.set = function (options) {
  assign(this.options, options);
};

/**
 * Batch loader for components rules states, and options
 *
 * @param  {Object} `presets`
 */

Remarkable.prototype.configure = function (presets) {
  var self = this;

  if (!presets) { throw new Error('Wrong `remarkable` preset, check name/content'); }
  if (presets.options) { self.set(presets.options); }
  if (presets.components) {
    Object.keys(presets.components).forEach(function (name) {
      if (presets.components[name].rules) {
        self[name].ruler.enable(presets.components[name].rules, true);
      }
    });
  }
};

/**
 * Use a plugin.
 *
 * ```js
 * var md = new Remarkable();
 *
 * md.use(plugin1)
 *   .use(plugin2, opts)
 *   .use(plugin3);
 * ```
 *
 * @param  {Function} `plugin`
 * @param  {Object} `options`
 * @return {Object} `Remarkable` for chaining
 */

Remarkable.prototype.use = function (plugin, options) {
  plugin(this, options);
  return this;
};


/**
 * Parse the input `string` and return a tokens array.
 * Modifies `env` with definitions data.
 *
 * @param  {String} `string`
 * @param  {Object} `env`
 * @return {Array} Array of tokens
 */

Remarkable.prototype.parse = function (str, env) {
  var state = new StateCore(this, str, env);
  this.core.process(state);
  return state.tokens;
};

/**
 * The main `.render()` method that does all the magic :)
 *
 * @param  {String} `string`
 * @param  {Object} `env`
 * @return {String} Rendered HTML.
 */

Remarkable.prototype.render = function (str, env) {
  env = env || {};
  return this.renderer.render(this.parse(str, env), this.options, env);
};

/**
 * Parse the given content `string` as a single string.
 *
 * @param  {String} `string`
 * @param  {Object} `env`
 * @return {Array} Array of tokens
 */

Remarkable.prototype.parseInline = function (str, env) {
  var state = new StateCore(this, str, env);
  state.inlineMode = true;
  this.core.process(state);
  return state.tokens;
};

/**
 * Render a single content `string`, without wrapping it
 * to paragraphs
 *
 * @param  {String} `str`
 * @param  {Object} `env`
 * @return {String}
 */

Remarkable.prototype.renderInline = function (str, env) {
  env = env || {};
  return this.renderer.render(this.parseInline(str, env), this.options, env);
};

exports.Remarkable = Remarkable;
exports.utils = utils;
});

/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */

var isNumber = function(num) {
  if (typeof num === 'number') {
    return num - num === 0;
  }
  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }
  return false;
};

function toRegexRange(min, max, options) {
  if (isNumber(min) === false) {
    throw new TypeError('toRegexRange: expected the first argument to be a number');
  }

  if (typeof max === 'undefined' || min === max) {
    return String(min);
  }

  if (isNumber(max) === false) {
    throw new TypeError('toRegexRange: expected the second argument to be a number.');
  }

  options = options || {};
  let relax = String(options.relaxZeros);
  let shorthand = String(options.shorthand);
  let capture = String(options.capture);
  let key = min + ':' + max + '=' + relax + shorthand + capture;
  if (toRegexRange.cache.hasOwnProperty(key)) {
    return toRegexRange.cache[key].result;
  }

  let a = Math.min(min, max);
  let b = Math.max(min, max);

  if (Math.abs(a - b) === 1) {
    let result = min + '|' + max;
    if (options.capture) {
      return '(' + result + ')';
    }
    if (options.wrap === false) {
      return result;
    }
    return '(?:' + result + ')';
  }

  let isPadded = padding(min) || padding(max);
  let positives = [];
  let negatives = [];

  let tok = {min: min, max: max, a: a, b: b};
  if (isPadded) {
    tok.isPadded = isPadded;
    tok.maxLen = String(tok.max).length;
  }

  if (a < 0) {
    let newMin = b < 0 ? Math.abs(b) : 1;
    let newMax = Math.abs(a);
    negatives = splitToPatterns(newMin, newMax, tok, options);
    a = tok.a = 0;
  }

  if (b >= 0) {
    positives = splitToPatterns(a, b, tok, options);
  }

  tok.negatives = negatives;
  tok.positives = positives;
  tok.result = siftPatterns(negatives, positives, options);

  if (options.capture) {
    tok.result = '(' + tok.result + ')';
  } else if (options.wrap !== false && positives.length + negatives.length > 1) {
    tok.result = '(?:' + tok.result + ')';
  }

  toRegexRange.cache[key] = tok;
  return tok.result;
}

toRegexRange.cache = {};

function siftPatterns(neg, pos, options) {
  let onlyNegative = filterPatterns(neg, pos, '-', false, options) || [];
  let onlyPositive = filterPatterns(pos, neg, '', false, options) || [];
  let intersected = filterPatterns(neg, pos, '-?', true, options) || [];
  let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
  return subpatterns.join('|');
}

function splitToRanges(min, max) {
  min = Number(min);
  max = Number(max);

  let nines = 1;
  let stops = [max];
  let stop = +countNines(min, nines);

  while (min <= stop && stop <= max) {
    stops = push(stops, stop);
    nines += 1;
    stop = +countNines(min, nines);
  }

  let zeros = 1;
  stop = countZeros(max + 1, zeros) - 1;

  while (min < stop && stop <= max) {
    stops = push(stops, stop);
    zeros += 1;
    stop = countZeros(max + 1, zeros) - 1;
  }

  stops.sort(compare);
  return stops;
}

/**
 * Convert a range to a regex pattern
 * @param {Number} `start`
 * @param {Number} `stop`
 * @return {String}
 */

function rangeToPattern(start, stop, options) {
  if (start === stop) {
    return {pattern: String(start), digits: []};
  }

  let zipped = zip(String(start), String(stop));
  let len = zipped.length, i = -1;

  let pattern = '';
  let digits = 0;

  while (++i < len) {
    let numbers = zipped[i];
    let startDigit = numbers[0];
    let stopDigit = numbers[1];

    if (startDigit === stopDigit) {
      pattern += startDigit;

    } else if (startDigit !== '0' || stopDigit !== '9') {
      pattern += toCharacterClass(startDigit, stopDigit);

    } else {
      digits += 1;
    }
  }

  if (digits) {
    pattern += options.shorthand ? '\\d' : '[0-9]';
  }

  return { pattern: pattern, digits: [digits] };
}

function splitToPatterns(min, max, tok, options) {
  let ranges = splitToRanges(min, max);
  let len = ranges.length;
  let idx = -1;

  let tokens = [];
  let start = min;
  let prev;

  while (++idx < len) {
    let range = ranges[idx];
    let obj = rangeToPattern(start, range, options);
    let zeros = '';

    if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
      if (prev.digits.length > 1) {
        prev.digits.pop();
      }
      prev.digits.push(obj.digits[0]);
      prev.string = prev.pattern + toQuantifier(prev.digits);
      start = range + 1;
      continue;
    }

    if (tok.isPadded) {
      zeros = padZeros(range, tok);
    }

    obj.string = zeros + obj.pattern + toQuantifier(obj.digits);
    tokens.push(obj);
    start = range + 1;
    prev = obj;
  }

  return tokens;
}

function filterPatterns(arr, comparison, prefix, intersection, options) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let tok = arr[i];
    let ele = tok.string;

    if (options.relaxZeros !== false) {
      if (prefix === '-' && ele.charAt(0) === '0') {
        if (ele.charAt(1) === '{') {
          ele = '0*' + ele.replace(/^0\{\d+\}/, '');
        } else {
          ele = '0*' + ele.slice(1);
        }
      }
    }

    if (!intersection && !contains(comparison, 'string', ele)) {
      res.push(prefix + ele);
    }

    if (intersection && contains(comparison, 'string', ele)) {
      res.push(prefix + ele);
    }
  }
  return res;
}

/**
 * Zip strings
 */

function zip(a, b) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push([a[i], b[i]]);
  }
  return arr;
}

function compare(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}

function push(arr, ele) {
  if (arr.indexOf(ele) === -1) arr.push(ele);
  return arr;
}

function contains(arr, key, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {
      return true;
    }
  }
  return false;
}

function countNines(min, len) {
  return String(min).slice(0, -len) + '9'.repeat(len);
}

function countZeros(integer, zeros) {
  return integer - (integer % Math.pow(10, zeros));
}

function toQuantifier(digits) {
  let start = digits[0];
  let stop = digits[1] ? (',' + digits[1]) : '';
  if (!stop && (!start || start === 1)) {
    return '';
  }
  return '{' + start + stop + '}';
}

function toCharacterClass(a, b) {
  return '[' + a + ((b - a === 1) ? '' : '-') + b + ']';
}

function padding(str) {
  return /^-?(0+)\d/.exec(str);
}

function padZeros(val, tok) {
  if (tok.isPadded) {
    let diff = Math.abs(tok.maxLen - String(val).length);
    switch (diff) {
      case 0:
        return '';
      case 1:
        return '0';
      default: {
        return '0{' + diff + '}';
      }
    }
  }
  return val;
}

/**
 * Expose `toRegexRange`
 */

toRegexRange.clearCache = () => (toRegexRange.cache = {});
var toRegexRange_1 = toRegexRange;

/**
 * Return a range of numbers or letters.
 *
 * @param  {String} `start` Start of the range
 * @param  {String} `stop` End of the range
 * @param  {String} `step` Increment or decrement to use.
 * @param  {Function} `options`
 * @return {Array}
 */

function fillRange(start, stop, step, options) {
  if (start === void 0) {
    return [];
  }

  if (stop === void 0 || start === stop) {
    // special case, for handling negative zero
    let isString = typeof start === 'string';
    if (isNumber(start) && !toNumber(start)) {
      return [isString ? '0' : 0];
    }
    return [start];
  }

  if (typeof step !== 'number' && typeof step !== 'string') {
    options = step;
    step = undefined;
  }

  if (typeof options === 'function') {
    options = { transform: options };
  }

  const opts = Object.assign({ step }, options);
  if (opts.step && !isValidNumber(opts.step)) {
    if (opts.strictRanges === true) {
      throw new TypeError('expected options.step to be a number');
    }
    return [];
  }

  opts.isNumber = isValidNumber(start) && isValidNumber(stop);
  if (!opts.isNumber && !isValid(start, stop)) {
    if (opts.strictRanges === true) {
      throw new RangeError('invalid range arguments: ' + util__default['default'].inspect([start, stop]));
    }
    return [];
  }

  opts.isPadded = isPadded(start) || isPadded(stop);
  opts.toString =
    opts.stringify ||
    typeof opts.step === 'string' ||
    typeof start === 'string' ||
    typeof stop === 'string' ||
    !opts.isNumber;

  if (opts.isPadded) {
    opts.maxLength = Math.max(String(start).length, String(stop).length);
  }

  // support legacy minimatch/fill-range options
  if (typeof opts.optimize === 'boolean') opts.toRegex = opts.optimize;
  if (typeof opts.makeRe === 'boolean') opts.toRegex = opts.makeRe;
  return expand(start, stop, opts);
}

function expand(start, stop, options) {
  let a = options.isNumber ? toNumber(start) : start.charCodeAt(0);
  let b = options.isNumber ? toNumber(stop) : stop.charCodeAt(0);

  let step = Math.abs(toNumber(options.step)) || 1;
  if (options.toRegex && step === 1) {
    return toRange(a, b, start, stop, options);
  }

  let zero = { greater: [], lesser: [] };
  let asc = a < b;
  let arr = new Array(Math.round((asc ? b - a : a - b) / step));
  let idx = 0;

  if (!asc && options.strictOrder) {
    if (options.strictRanges === true) {
      throw new RangeError('invalid range arguments: ' + util__default['default'].inspect([start, stop]));
    }
    return [];
  }

  while (asc ? a <= b : a >= b) {
    let val = options.isNumber ? a : String.fromCharCode(a);
    if (options.toRegex && (val >= 0 || !options.isNumber)) {
      zero.greater.push(val);
    } else {
      zero.lesser.push(Math.abs(val));
    }

    if (options.isPadded) {
      val = zeros(val, options);
    }

    if (options.toString) {
      val = String(val);
    }

    if (typeof options.transform === 'function') {
      arr[idx++] = options.transform(val, a, b, step, idx, arr, options);
    } else {
      arr[idx++] = val;
    }

    if (asc) {
      a += step;
    } else {
      a -= step;
    }

    if (options.limit > 0 && arr.length >= options.limit) {
      break;
    }
  }

  if (options.toRegex === true) {
    return toSequence(arr, zero, options);
  }
  return arr;
}

function toRange(a, b, start, stop, options) {
  if (options.isPadded) {
    return toRegexRange_1(start, stop, options);
  }

  if (options.isNumber) {
    return toRegexRange_1(Math.min(a, b), Math.max(a, b), options);
  }

  start = String.fromCharCode(Math.min(a, b));
  stop = String.fromCharCode(Math.max(a, b));
  return `[${start}-${stop}]`;
}

function toSequence(arr, zeros, options) {
  let greater = '';
  let lesser = '';

  if (zeros.greater.length) {
    greater = zeros.greater.join('|');
  }

  if (zeros.lesser.length) {
    lesser = `-(${zeros.lesser.join('|')})`;
  }

  let res = greater && lesser ? `${greater}|${lesser}` : greater || lesser;
  if (options.capture) {
    return `(${res})`;
  }
  return res;
}

function zeros(val, options) {
  if (options.isPadded) {
    let str = String(val);
    let len = str.length;
    let dash = '';
    if (str.charAt(0) === '-') {
      dash = '-';
      str = str.slice(1);
    }
    let diff = options.maxLength - len;
    let pad = '0'.repeat(diff);
    val = dash + pad + str;
  }
  if (options.stringify) {
    return String(val);
  }
  return val;
}

function toNumber(val) {
  return Number(val) || 0;
}

function isPadded(str) {
  return /^-?0\d/.test(str);
}

function isValid(min, max) {
  return (isValidNumber(min) || isValidLetter(min))
    && (isValidNumber(max) || isValidLetter(max));
}

function isValidLetter(ch) {
  return typeof ch === 'string' && ch.length === 1 && /^\w+$/.test(ch);
}

function isValidNumber(n) {
  return isNumber(n) && !/\./.test(n);
}

/**
 * Expose `fillRange`
 * @type {Function}
 */

var fillRange_1 = fillRange;

/**
 * Returns a function to generate a plain-text/markdown list-item,
 * allowing options to be cached for subsequent calls.
 *
 * ```js
 * const li = listitem(options);
 *
 * li(0, 'Level 0 list item');
 * //=> '- Level 0 list item'
 *
 * li(1, 'Level 1 list item');
 * //=> '  * Level 1 list item'
 *
 * li(2, 'Level 2 list item');
 * //=> '    + Level 2 list item'
 * ```
 *
 * @param  {Object} `options` pass options to customize list item characters, indentation, etc.
 * @param {Boolean} `options.nobullet` Pass true if you only want the list iten and identation, but no bullets.
 * @param {String} `options.indent` The amount of leading indentation to use. default is `  `.
 * @param {String|Array} `options.chars` If a string is passed, [fill-range][] will be used to generate an array of bullets (visit [fill-range][] to see all options.) Or directly pass an array of bullets, numbers, letters or other characters to use for each list item. Default `['-', '*', '+']`
 * @param {Function} `fn` pass a function [fill-range][] to modify the bullet for an item as it's generated. See the [examples](#examples).
 * @return {String} returns a formatted list item
 * @api public
 */

function listitem(options = {}, fn) {
  if (typeof options === 'function') {
    fn = options;
    options = {};
  }

  let chars = character(options);
  let index = 0;

  return (lvl, suffix) => {
    if (!isNumber(lvl)) {
      throw new Error('expected level to be a number');
    }

    // cast to number
    lvl = +lvl;
    index++;

    let bullet = chars ? chars[lvl % chars.length] : '';
    let indent = typeof options.indent !== 'string'
      ? (lvl > 0 ? '  ' : '')
      : options.indent;

    let prefix = !options.nobullet
      ? bullet + ' '
      : '';

    if (typeof fn === 'function') {
      return fn(indent.repeat(lvl), bullet, index);
    }

    let res = '';
    res += indent.repeat(lvl);
    res += prefix;
    res += suffix;
    return res;
  };
}

/**
 * Create the array of characters to use as bullets.
 *
 * - http://spec.commonmark.org/0.19/#list-items
 * - https://daringfireball.net/projects/markdown/syntax#list
 * - https://help.github.com/articles/markdown-basics/#lists
 *
 * @param  {Object} `opts` Options to pass to [fill-range][]
 * @return {Array}
 */

function character(options = {}) {
  let chars = options.chars || ['-', '*', '+'];

  if (typeof chars === 'string') {
    return fillRange_1(...chars.split('..'), options);
  }

  return chars;
}

/**
 * Expose `listitem`
 */

var listItem = listitem;

var markdownUtils = createCommonjsModule(function (module, exports) {




/**
 * Create a markdown-formatted blockquote.
 *
 * ```js
 * utils.blockquote('This is a blockquote');
 * //=> '> This is a blockquote'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.blockquote = str => str ? `> ${str}` : '';

/**
 * Create a markdown-formatted `<code></code>` snippet.
 *
 * ```js
 * utils.code('const foo = bar;');
 * //=> '`const foo = bar;`'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.code = str => str ? `\`${str}\`` : '';

/**
 * Create markdown-formatted deleted text: `~~text~~`.
 *
 * ```js
 * utils.del('text');
 * //=> '~~text~~'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.del = str => str ? `~~${str}~~` : '';

/**
 * Create a markdown-formatted em.
 *
 * ```js
 * utils.em('This is emphasized');
 * //=> '_This is emphasized_'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.em = str => str ? `_${str}_` : '';

/**
 * Create a markdown-formatted heading.
 *
 * ```js
 * utils.h(1, 'This is a heading');
 * //=> '# This is a heading'
 * ```
 * @param {String} `str`
 * @param {Number} `level`
 * @api public
 */

exports.h = (level, str) => str ? exports.heading(str, level) : '';

/**
 * Create a markdown-formatted h1 heading.
 *
 * ```js
 * utils.h1('This is a heading');
 * //=> '# This is a heading'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.h1 = str => str ? `# ${str}` : '';

/**
 * Create a markdown-formatted h2 heading.
 *
 * ```js
 * utils.h2('This is a heading');
 * //=> '## This is a heading'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.h2 = str => str ? `## ${str}` : '';

/**
 * Create a markdown-formatted h3 heading.
 *
 * ```js
 * utils.h3('This is a heading');
 * //=> '### This is a heading'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.h3 = str => str ? `### ${str}` : '';

/**
 * Create a markdown-formatted h4 heading.
 *
 * ```js
 * utils.h4('This is a heading');
 * //=> '#### This is a heading'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.h4 = str => str ? `#### ${str}` : '';

/**
 * Create a markdown-formatted h5 heading.
 *
 * ```js
 * utils.h5('This is a heading');
 * //=> '##### This is a heading'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.h5 = str => str ? `##### ${str}` : '';

/**
 * Create a markdown-formatted h6 heading.
 *
 * ```js
 * utils.h6('This is a heading');
 * //=> '###### This is a heading'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.h6 = str => str ? `###### ${str}` : '';

/**
 * Create a markdown-formatted heading.
 *
 * ```js
 * utils.heading('This is a heading', 1);
 * //=> '# This is a heading'
 * ```
 * @param {String} `str`
 * @param {Number} `level`
 * @api public
 */

exports.heading = (str, level) => str ? exports[`h${(level || 1)}`](str) : '';

/**
 * Create a markdown-formatted horizontal rule.
 *
 * ```js
 * utils.hr();
 * //=> '***'
 * ```
 * @param {String} `str` Alternate string to use. Default is `***` to avoid collision with `---` which is commonly used for front-matter.
 * @api public
 */

exports.hr = (str = '***') => str;

/**
 * Create a markdown-formatted link from the given values.
 *
 * ```js
 * utils.link('fs-utils', 'https://github.com/assemble/fs-utils', 'hover title');
 * //=> [fs-utils](https://github.com/assemble/fs-utils "hover title")
 * ```
 * @param {String} `anchor`
 * @param {String} `href`
 * @param {String} `title`
 * @api public
 */

exports.link = (anchor, href, title) => {
  return `[${anchor}](${href}${title ? ` "${title}"` : ''})`;
};

/**
 * Create a markdown-formatted anchor link from the given values.
 *
 * ```js
 * utils.anchor('embed', 'assemble/handlebars-helpers/lib/code.js', 25, 'v0.6.0');
 * //=> [embed](https://github.com/assemble/handlebars-helpers/blob/v0.6.0/lib/helpers/code.js#L25)
 * ```
 * @param {String} `anchor`
 * @param {String} `href`
 * @param {String} `title`
 * @api public
 */

exports.anchor = (text, repo, line, branch) => {
  return `[${text}](${format(repo, branch, line)})`;
};

function format(str, branch, line) {
  let segs = str.split(/[\\\/]/);
  let repo = segs.slice(0, 2).join('/');
  let rest = segs.slice(2).join('/');
  if (isNumber(branch)) {
    line = branch;
    branch = 'master';
  }
  let res = 'https://github.com/';
  res += `${repo}/blob/${branch}/${rest}`;
  res += line ? `#L${line}` : '';
  return res;
}

/**
 * Create a markdown-formatted reference link from the given values.
 *
 * ```js
 * utils.reference('template', 'https://github/jonschlinkert/template', 'Make stuff!');
 * //=> [template]: https://github/jonschlinkert/template "Make stuff!"
 * ```
 * @param {String} `id`
 * @param {String} `url`
 * @param {String} `title`
 * @api public
 */

exports.reference = (id, url, title) => {
  return `[${id}]: ${url}${title ? ` "${title}"` : ''}`;
};

/**
 * Create a markdown-formatted image from the given values.
 *
 * ```js
 * utils.image(alt, src);
 * //=> ![Build Status](https://travis-ci.org/jonschlinkert/template.svg)
 *
 * utils.image(alt, src, title);
 * //=> ![Build Status](https://travis-ci.org/jonschlinkert/template.svg "This is title of image!")
 * ```
 * @param {String} `alt`
 * @param {String} `src`
 * @param {String} `title`
 * @api public
 */

exports.image = (alt, src, title) => '!' + exports.link(alt, src, title);

/**
 * Create a markdown-formatted badge.
 *
 * ```js
 * utils.badge(alt, img_url, url);
 * //=> [![Build Status](https://travis-ci.org/jonschlinkert/template.svg)](https://travis-ci.org/jonschlinkert/template)
 * ```
 * @param {String} `alt`
 * @param {String} `img_url`
 * @param {String} `url`
 * @api public
 */

exports.badge = (alt, img_url, url, title) => {
  return exports.link(exports.image(alt, img_url, title), url);
};

/**
 * Returns a function to generate a plain-text/markdown list-item,
 * allowing options to be cached for subsequent calls.
 *
 * ```js
 * const li = listitem(options);
 *
 * li(0, 'Level 0 list item');
 * //=> '- Level 0 list item'
 *
 * li(1, 'Level 1 list item');
 * //=> '  * Level 1 list item'
 *
 * li(2, 'Level 2 list item');
 * //=> '    + Level 2 list item'
 * ```
 * @param {String} `options`
 *   @option {Boolean} [options] `nobullet` Pass true if you only want the list iten and identation, but no bullets.
 *   @option {String} [options] `indent` The amount of leading indentation to use. default is `  `.
 *   @option {String|Array} [options] `chars` If a string is passed, [fill-range] will be used to generate an array of bullets (visit [fill-range] to see all options.) Or directly pass an array of bullets, numbers, letters or other characters to use for each list item. Default `['-', '*', '+', '~']`
 * @param {Function} `fn` pass a function [fill-range] to modify the bullet for an item as it's generated.
 * @api public
 */

exports.li = (char, level, options, fn) => listItem(options, fn)(level, char);

/**
 * Create a markdown-formatted `<pre><code></code></pre>` snippet with or without lang.
 *
 * ```js
 * utils.pre('const foo = bar;');
 * ```
 * Results in:
 *
 * ```html
 * <pre>
 * const foo = bar;
 * </pre>
 * ```
 * @param {String} `str`
 * @param {String} `language`
 * @api public
 */

exports.pre = str => str ? `<pre>\n${str}\n</pre>` : '';

/**
 * Create a markdown-formatted code snippet with or without `lang`.
 *
 * ```js
 * utils.gfm('const foo = bar;', 'js');
 * ```
 * Results in:
 *
 * <pre>
 * ```js
 * const foo = bar;
 * ```
 * </pre>
 *
 * @param {String} `str`
 * @param {String} `language`
 * @api public
 */

exports.gfm = (str, lang = '') => {
  let fence = '```';
  return str ? `${fence}${lang}\n${str}\n${fence}` : '';
};

/**
 * Create markdown-formatted bold text.
 *
 * ```js
 * utils.strong('This is bold');
 * //=> '**This is bold**'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.strong = str => str ? `**${str}**` : '';

/**
 * Create a markdown-formatted todo item.
 *
 * ```js
 * utils.todo('this is a todo.');
 * //=> '- [ ] this is a todo'
 *
 * utils.todo('this is a completed todo.', true);
 * //=> '- [x] this is a todo'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.todo = (str, checked) => {
  return str ? ((checked ? '- [x] ' : '- [ ] ') + str) : '';
};
});

const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
const escapeRe = str => str.replace(/[-.?*+^$[\]\\(){}|]/g, '\\$&');

/**
 * Renderer rules cache
 */

const rules = {
  list: {ordered: false, num: 1},
  inside: {},
  badges: [],
  links: [],
  images: [],
  count: {
    badges: 0,
    images: 0,
    links: 0
  }
};

/**
 * Blockquotes
 */

rules.blockquote_open = () => '> ';
rules.blockquote_close = () => '';

/**
 * Code
 */

rules.code = function(tokens, idx) {
  if (tokens[idx].block) {
    return '```' + tokens[idx].content + '```' + getBreak(tokens, idx);
  }
  return `\`${tokens[idx].content}\``;
};

/**
 * Fenced code blocks
 */

rules.fence = function(tokens, idx, options, env, self) {
  const token = tokens[idx];
  let language;

  if (token.params) {
    let i = token.params.indexOf(' ');
    if (i === -1) i = token.params.length;
    language = token.params.slice(0, i);

    if (hasOwn(self.rules.fence_custom, language)) {
      return self.rules.fence_custom[language](tokens, idx, options, env, self);
    }
  }

  token.content = token.content.replace(/^\n+/, '');
  token.content = token.content.replace(/\n+$/, '');

  let res = '\n';
  res += '```' + (language || '') + '\n';
  res += token.content + '\n';
  res += '```\n';
  res += getBreak(tokens, idx);
  return res;
};
rules.fence_custom = {};

/**
 * Headings
 */

rules.heading_open = (tokens, idx) => '#'.repeat(tokens[idx].hLevel) + ' ';
rules.heading_close = (tokens, idx) => '\n' + getBreak(tokens, idx);

/**
 * Horizontal rules
 */

rules.hr = (tokens, idx) => '***\n' + getBreak(tokens, idx);

/**
 * Bullets
 */

rules.bullet_list_open = function(tokens, idx/*, options, env */) {
  rules.list.ordered = false;
  return '\n';
};
rules.bullet_list_close = (tokens, idx) => getBreak(tokens, idx);

/**
 * Ordered list items
 */

rules.ordered_list_open = function(tokens, idx/*, options, env */) {
  rules.list.ordered = true;
  return '\n';
};
rules.ordered_list_close = function(tokens, idx) {
  rules.list.ordered = false;
  rules.list.num = 1;
  return getBreak(tokens, idx);
};

/**
 * List items
 */

rules.list_item_open = function(tokens, idx, options = {}/*, env */) {
  let token = tokens[idx];
  let next = tokens[idx + 2] || {};
  let level = lvl(token.level);

  if (next.children && next.children.length > 1) {
    for (let i = 1; i < next.children.length; i++) {
      let child = next.children[i];
      if (child.content && /^[-\w]{1,2}[.]\s/.test(child.content)) {
        let prefix = ' '.repeat(level + 2);
        next.children[i].content = (prefix + child.content);
        next.children[i].level = level + 2;
      }
    }
  }

  // list info
  options.chars = ['*', '-', '+'];
  if (rules.list.ordered) {
    options.chars = [(rules.list.num++) + '.'];
  }

  return markdownUtils.li('', level, options, (indent, ch, lvl) => {
    return indent + ch + ' ';
  });
};

rules.list_item_close = function(tokens, idx/*,options, env */) {
  let prev = tokens[idx - 1];
  let br = getBreak(tokens, idx);
  if (prev && prev.tight) {
    return br;
  }
  return '';
};

/**
 * Paragraphs
 */

rules.paragraph_open = function(tokens, idx) {
  let token = tokens[idx];
  let prev = tokens[idx - 1];
  let next = tokens[idx + 1];
  if (prev && prev.type === 'blockquote_open') {
    return '';
  }
  if (next && next.type === 'inline') {
    return '';
  }
  return token.tight ? '' : '\n';
};
rules.paragraph_close = function(tokens, idx) {
  let token = tokens[idx];
  let next = tokens[idx + 1];
  let prev = tokens[idx - 1];

  if (next && next.type && next.type.indexOf('paragraph') === -1) {
    return token.tight ? '' : '\n' + getBreak(tokens, idx);
  }

  let addBreak = !(token.tight && idx && prev.type === 'inline' && !prev.content);
  return (token.tight ? '' : '\n') + (addBreak ? getBreak(tokens, idx) : '');
};

/**
 * Links
 */

rules.link_open = function(tokens, idx) {
  let prev = tokens[idx - 1];
  let token = tokens[idx];
  let next = tokens[idx + 1] || {};
  let close = tokens[idx + 2] || {};
  let after = tokens[idx + 3] || {};

  if (token && token.href === '' && next && next.content) {
    token.href = '#' + next.content;
  }

  // [foo](bar){#baz} => [foo](bar#baz) to allow `bar` to expand to a full URL
  if (close.type === 'link_close' && after && after.type === 'text') {
    let str = after.content;
    let hasBrace = str.charAt(0) === '{';
    if (str && hasBrace) {
      let end = str.indexOf('}');
      let href = str.slice(1, end);
      if (prev && prev.content && /\w$/.test(prev.content)) {
        prev.content += ' ';
      }
      after.content = str.slice(end + 1);
      if (after.content && /^\w/.test(after.content)) {
        after.content = ' ' + after.content;
      }
      token.href += href;
    }
  }

  let anchor = /\{([^}]+)\}/.exec(token.href);
  if (anchor && anchor[1]) {
    token.href = token.href.replace(anchor[0], anchor[1]);
  } else {

    anchor = /\{([^}]+)\}/.exec(after.content);
    if (anchor && anchor[1]) {
      token.href += anchor[1];
      after.content = after.content.replace(anchor[0], '');
    }
  }

  if (next.type !== 'image') {
    return markdownUtils.link(next.content, token.href, token.title);
  }
  return '';
};
rules.link_close = () => '';

/**
 * Images
 */

rules.image = function(tokens, idx, options, env) {
  let token = tokens[idx];
  let prev = tokens[idx - 1] || {};
  let next = tokens[idx + 1] || {};
  let after = tokens[idx + 2] || {};

  if (next.type === 'text' && next.content) {
    addAnchors(next, options.context || {});
  }

  normalizeAnchors(prev, token, next, after, options.context || {});
  if (prev.type !== 'link_open') {
    return markdownUtils.image(token.alt, token.src, token.title);
  }
  return markdownUtils.badge(token.alt, token.src, prev.href || token.src, token.title);
};

/**
 * Tables
 */

rules.table_open = function(/*tokens, idx, options, env */) {
  rules.align = [];
  rules.inside.table = true;
  return '';
};
rules.table_close = function(/*tokens, idx, options, env */) {
  rules.inside.table = false;
  return '\n';
};

rules.thead_open = function(tokens, idx/*, options, env */) {
  rules.inside.thead = true;
  return '| ';
};
rules.thead_close = function(tokens, idx/*, options, env */) {
  rules.inside.thead = false;
  return '';
};

rules.th_open = function(tokens, idx) {
  switch (tokens[idx].align) {
    case 'center':
      rules.align.push(':---:');
      break;
    case 'left':
      rules.align.push(':---');
      break;
    case 'right':
      rules.align.push('---:');
      break;
    default:
      rules.align.push('---');
      break;
  }
  rules.inside.th = true;
  return '';
};
rules.th_close = function(/*tokens, idx, options, env */) {
  rules.inside.th = false;
  return ' | ';
};

rules.tbody_open = function(tokens, idx/*, options, env */) {
  rules.inside.tbody = true;
  return '| ' + rules.align.join(' | ') + ' |' + '\n';
};
rules.tbody_close = function(/*tokens, idx, options, env */) {
  return '';
};

rules.tr_open = function(tokens, idx/*, options, env */) {
  rules.inside.tr = true;
  return '';
};
rules.tr_close = function(/*tokens, idx, options, env */) {
  rules.inside.tr = false;
  return '\n';
};

rules.td_open = function(tokens, idx/*, options, env */) {
  let prev = tokens[idx - 1];
  if (prev && prev.type === 'tr_open') {
    return '| ';
  } else {
    return ' | ';
  }
};
rules.td_close = function(tokens, idx/* , options, env */) {
  let next = tokens[idx + 1];
  if (next && next.type === 'tr_close') {
    return ' |';
  }
  return '';
};

/**
 * Bold
 */

rules.strong_open = function(tokens, idx/* , options, env */) {
  rules.inside.strong = {};
  let prev = tokens[idx - 1];
  let res = '';

  if (prev && prev.type === 'softbreak') {
    res += '\n';
  }

  rules.inside.strong.prev = prev;
  res += '**';
  return res;
};
rules.strong_close = function(tokens, idx/* , options, env */) {
  let prev = rules.inside.strong.prev;
  // if it's not a "heading", or it's inside a table heading
  if (prev && prev.type === 'text' || rules.inside.th) {
    return '**';
  }
  let res = detectBreak(tokens, idx, '**');
  rules.inside.strong = null;
  return res;
};

/**
 * Italicize
 */

rules.em_open = () => '_';
rules.em_close = (tokens, idx) => detectBreak(tokens, idx, '_');

/**
 * Strikethrough
 */

rules.del_open = () => '~~';
rules.del_close = (tokens, idx) => detectBreak(tokens, idx, '~~');

/**
 * Insert
 */

rules.ins_open = () => '<ins>';
rules.ins_close = () => '</ins>';

/**
 * Highlight
 */

rules.mark_open = () => '<mark>';
rules.mark_close = () => '</mark>';

/**
 * Super- and sub-script
 */

rules.sub = (tokens, idx) => `<sub>${tokens[idx].content}</sub>`;
rules.sup = (tokens, idx) => `<sup>${tokens[idx].content}</sup>`;

/**
 * Breaks
 */

rules.hardbreak = () => '\n\n';
rules.softbreak = () => '\n';

/**
 * Text
 */

rules.text = function(tokens, idx, options, env) {
  let ctx = options.context || {};
  let token = tokens[idx];
  addAnchors(token, ctx);

  let prev = tokens[idx - 1];
  if (prev && prev.type === 'link_open') {
    return '';
  }
  return token.content;
};

/**
 * Content
 */

rules.htmlblock = (tokens, idx) => tokens[idx].content;
rules.htmltag = (tokens, idx) => tokens[idx].content;

/**
 * Abbreviations, initialism
 */

rules.abbr_open = function(tokens, idx) {
  return '<abbr title="' + tokens[idx].title + '">';
};
rules.abbr_close = function(/*tokens, idx, options, env */) {
  return '</abbr>';
};

/**
 * Footnotes
 */

rules.footnote_ref = function(tokens, idx) {
  let n = Number(tokens[idx].id + 1).toString();
  let id = 'fnref' + n;
  if (tokens[idx].subId > 0) {
    id += ':' + tokens[idx].subId;
  }
  return '<sup class="footnote-ref"><a href="#fn' + n + '" id="' + id + '">[' + n + ']</a></sup>';
};
rules.footnote_block_open = function(tokens, idx, options) {
  let hr = options.xhtmlOut
    ? '<hr class="footnotes-sep" />\n'
    : '<hr class="footnotes-sep">\n';
  return hr + '<section class="footnotes">\n<ol class="footnotes-list">\n';
};
rules.footnote_block_close = () => '</ol>\n</section>\n';
rules.footnote_open = function(tokens, idx) {
  let id = Number(tokens[idx].id + 1).toString();
  return '<li id="fn' + id + '"  class="footnote-item">';
};
rules.footnote_close = () => '</li>\n';
rules.footnote_anchor = function(tokens, idx) {
  let n = Number(tokens[idx].id + 1).toString();
  let id = 'fnref' + n;
  if (tokens[idx].subId > 0) {
    id += ':' + tokens[idx].subId;
  }
  return ' <a href="#' + id + '" class="footnote-backref">↩</a>';
};

/**
 * Definition lists
 */

rules.dl_open = () => '<dl>\n';
rules.dt_open = () => '<dt>';
rules.dd_open = () => '<dd>';
rules.dl_close = () => '</dl>\n';
rules.dt_close = () => '</dt>\n';
rules.dd_close = () => '</dd>\n';

/**
 * Helper functions
 */

function nextToken(tokens, idx) {
  if (++idx >= tokens.length - 2) {
    return idx;
  }
  if ((tokens[idx].type === 'paragraph_open' && tokens[idx].tight) &&
      (tokens[idx + 1].type === 'inline' && tokens[idx + 1].content.length === 0) &&
      (tokens[idx + 2].type === 'paragraph_close' && tokens[idx + 2].tight)) {
    return nextToken(tokens, idx + 2);
  }
  return idx;
}

/**
 * Check to see if `\n` is needed before the next token.
 *
 * @param  {Array} `tokens`
 * @param  {Number} `idx`
 * @return {String} Empty string or newline
 * @api private
 */

const getBreak = rules.getBreak = (tokens, idx) => {
  idx = nextToken(tokens, idx);
  if (idx < tokens.length && tokens[idx].type === 'list_item_close') {
    return '';
  }
  return '\n';
};

function addAnchors(token, ctx) {
  const re = /(!?\[([^\]]+)\])(\[([^\]]+)\]|(?:\[\]))?(\{(#[^}]+)\})*/g;
  let match;
  let str = token.content;

  while ((match = re.exec(str))) {
    let reflink = match[1];
    let text = match[2] || '';
    let colInner = match[4] || '';
    let anchor = match[5] || '';
    let inner = match[6] || '';

    let before = str;
    if (ctx.reflinks && ctx.reflinks.hasOwnProperty(text)) {
      let resolved = reflink + '(' + ctx.reflinks[text].trim() + inner + ')';

      let reStr = '(^|[^\\[]+?)\\!?' + escapeRe(reflink)
        + '(?:(?:\\[' + text + '\\])|\\[\\]|(?:\\[' + colInner + '\\]))*'
        + (anchor ? escapeRe(anchor) : '') + '([\\s\\S]+?|$)';

      token.content = str.replace(new RegExp(reStr), function(m, $1, $2) {
        return $1 + resolved + $2;
      });
    }

    if (str === before) {
      break;
    }
  }
}

function normalizeAnchors(prev, token, next, after, ctx) {
  if (!token.src) return;
  const re = /(?:([^{]+))?(\{([#/][^}]+)\})/;
  let before;
  let match;

  let nextTok = next.content ? next : after;

  while ((match = re.exec(nextTok.content))) {
    before = nextTok.content;
    nextTok.content = nextTok.content.split(match[0]).join('');
    if (before === nextTok.content) break;

    if (prev.href) {
      prev.href += match[3];
    } else if (token.src) {
      token.src += match[3];
    }
  }

  while ((match = re.exec(token.src))) {
    before = token.src;
    token.src = match[1] + match[3] || '';
    if (before === token.src) {
      break;
    }
  }
}

function detectBreak(tokens, idx, ch) {
  let next = tokens[idx + 1];
  let res = ch;
  if (!next || next.type === 'softbreak') {
    res += '\n';
  }
  return res;
}

function lvl(level) {
  if (typeof level === 'undefined') return null;
  level = level - 1;
  return level > 0 ? (level / 2) : 0;
}

/**
 * Expose `rules`
 */

var rules_1 = rules;

/**
 * Register as a plugin by passing `prettify` to remarkable's
 * `.use()` method.
 *
 * ```js
 * const md = new Remarkable();
 * md.use(prettify);
 * const result = md.render(str);
 * ```
 *
 * @param {Object} `options`
 * @return {String}
 */

function prettify(md) {
  ast(md);
  const render = md.render;

  md.render = function(str, options) {
    if (typeof str !== 'string') {
      throw new TypeError('expected a string');
    }
    str = str.split(/\]\[\]\s*\n\s*\[/).join('][]\n\n[');
    return render.call(md, str, options);
  };

  md.renderer.renderInline = function(tokens, options, env) {
    const _rules = rules_1;
    let len = tokens.length, i = 0;
    let str = '';

    while (len--) {
      str += _rules[tokens[i].type](tokens, i++, options, env, this);
    }
    return str;
  };

  md.renderer.render = function(tokens, options, env) {
    let _rules = rules_1;
    let len = tokens.length, i = -1;
    let str = '';

    while (++i < len) {
      let token = tokens[i];
      if (token.type === 'inline') {
        str += this.renderInline(token.children, options, env);
      } else {
        str += _rules[token.type](tokens, i, options, env, this);
      }
    }

    if (options.condense !== false) {
      str = str.split(/(?:\r\n|\n){2,}/).join('\n\n');
    }

    let newline = '\n';
    if (options.newline === false) {
      newline = '';
    }
    if (typeof options.newline === 'string') {
      newline = options.newline;
    }
    str = str.trim() + newline;
    return str;
  };
}

function ast(md) {
  let parse = md.parse;

  md.parse = function(str, options) {
    let tokens = parse.apply(md, arguments);
    let ast = {type: 'root', nodes: []};
    let nodes = [ast];
    let stack = [];

    function last() {
      return stack.length ? stack[stack.length - 1] : nodes[nodes.length - 1];
    }

    visit({nodes: tokens}, function(tok) {
      if (tok.children) {
        define(tok, 'children', tok.children);
      }

      let prev = last();
      let match = parseType(tok);
      if (match) {
        if (match[2] === 'open') {
          let node = {type: match[1], nodes: [tok]};
          define(tok, 'parent', node);
          define(node, 'parent', prev);
          prev.nodes.push(node);
          stack.push(node);
        } else {
          let parent = stack.pop();
          define(tok, 'parent', parent);
          parent.nodes.push(tok);
        }
      } else {
        define(tok, 'parent', prev);
        if (tok.type !== 'inline') {
          prev.nodes.push(tok);
        }
      }
    });

    tokens.ast = ast;
    return tokens;
  };
}

function parseType(tok) {
  return /(.*?)_(open|close)$/.exec(tok.type);
}

function visit(node, fn) {
  fn(node);
  if (node.nodes || node.children) {
    mapVisit(node, fn);
  }
}

function mapVisit(node, fn) {
  var nodes = node.nodes || node.children;
  for (var i = 0; i < nodes.length; i++) {
    visit(nodes[i], fn);
  }
}

function define(obj, key, value) {
  Reflect.defineProperty(obj, key, { value });
}

/**
 * expose `prettify`
 */

var prettyRemarkable = prettify;

var MarkdownPrettifier = /** @class */ (function (_super) {
    __extends(MarkdownPrettifier, _super);
    function MarkdownPrettifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkdownPrettifier.prototype.onInit = function () {
    };
    MarkdownPrettifier.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("Loading Markdown-Prettifier");
                        _a = this;
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.setting = (_b.sent()) || new MarkdownPrettifierSettings();
                        this.addSettingTab(new MarkdownPrettifierSettingsTab(this.app, this));
                        this.addCommand({
                            id: "markdown-prettifier",
                            name: "Run",
                            callback: function () { return _this.runPrettifier(); },
                            hotkeys: [
                                {
                                    modifiers: ["Mod", "Alt"],
                                    key: "l",
                                },
                            ],
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MarkdownPrettifier.prototype.onunload = function () {
        console.log("Unload Markdown-Prettifier");
    };
    MarkdownPrettifier.prototype.runPrettifier = function () {
        var view = this.app.workspace.activeLeaf.view;
        if (view instanceof obsidian.MarkdownView) {
            // Do work here
            var editor = view.sourceMode.cmEditor;
            var text = editor.getSelection();
            // Nothing selected, fall back to select all.
            if (text == '') {
                editor.execCommand('selectAll');
                text = editor.getSelection();
            }
            var newString = this.prettify(text);
            editor.replaceSelection(newString, "start");
        }
    };
    MarkdownPrettifier.prototype.prettify = function (text) {
        return new cjs.Remarkable()
            .use(prettyRemarkable)
            .render(text);
    };
    return MarkdownPrettifier;
}(obsidian.Plugin));
var MarkdownPrettifierSettings = /** @class */ (function () {
    function MarkdownPrettifierSettings() {
    }
    return MarkdownPrettifierSettings;
}());
var MarkdownPrettifierSettingsTab = /** @class */ (function (_super) {
    __extends(MarkdownPrettifierSettingsTab, _super);
    function MarkdownPrettifierSettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    MarkdownPrettifierSettingsTab.prototype.display = function () {
        var containerEl = this.containerEl;
        var settings = this.plugin.setting;
        // new Setting(containerEl)
        //     .setName("First setting")
        //     .setDesc(
        //         "Explanation for the first setting."
        //     )
        //     .addText((text) =>
        //         text.setValue(String(settings.firstNumber)).onChange((value) => {
        //             if (!isNaN(Number(value))) {
        //                 settings.firstNumber = Number(value);
        //                 this.plugin.saveData(settings);
        //             }
        //         })
        //     );
        // new Setting(containerEl)
        //     .setName("Second number")
        //     .setDesc("I don't know yet the purpose of this second number.")
        //     .addText((text) =>
        //         text.setValue(String(settings.firstNumber)).onChange((value) => {
        //             if (!isNaN(Number(value))) {
        //                 settings.secondNumber = Number(value);
        //                 this.plugin.saveData(settings);
        //             }
        //         })
        //     );
    };
    return MarkdownPrettifierSettingsTab;
}(obsidian.PluginSettingTab));

module.exports = MarkdownPrettifier;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2Rpc3QvY2pzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2lzLW51bWJlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90by1yZWdleC1yYW5nZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9maWxsLXJhbmdlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xpc3QtaXRlbS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi11dGlscy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcmV0dHktcmVtYXJrYWJsZS9saWIvcnVsZXMuanMiLCJub2RlX21vZHVsZXMvcHJldHR5LXJlbWFya2FibGUvaW5kZXguanMiLCJtYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLy8gTGlzdCBvZiB2YWxpZCBlbnRpdGllc1xuLy9cbi8vIEdlbmVyYXRlIHdpdGggLi9zdXBwb3J0L2VudGl0aWVzLmpzIHNjcmlwdFxuLy9cblxuLyplc2xpbnQgcXVvdGVzOjAqL1xudmFyIGVudGl0aWVzID0ge1xuICBcIkFhY3V0ZVwiOlwiXFx1MDBDMVwiLFxuICBcImFhY3V0ZVwiOlwiXFx1MDBFMVwiLFxuICBcIkFicmV2ZVwiOlwiXFx1MDEwMlwiLFxuICBcImFicmV2ZVwiOlwiXFx1MDEwM1wiLFxuICBcImFjXCI6XCJcXHUyMjNFXCIsXG4gIFwiYWNkXCI6XCJcXHUyMjNGXCIsXG4gIFwiYWNFXCI6XCJcXHUyMjNFXFx1MDMzM1wiLFxuICBcIkFjaXJjXCI6XCJcXHUwMEMyXCIsXG4gIFwiYWNpcmNcIjpcIlxcdTAwRTJcIixcbiAgXCJhY3V0ZVwiOlwiXFx1MDBCNFwiLFxuICBcIkFjeVwiOlwiXFx1MDQxMFwiLFxuICBcImFjeVwiOlwiXFx1MDQzMFwiLFxuICBcIkFFbGlnXCI6XCJcXHUwMEM2XCIsXG4gIFwiYWVsaWdcIjpcIlxcdTAwRTZcIixcbiAgXCJhZlwiOlwiXFx1MjA2MVwiLFxuICBcIkFmclwiOlwiXFx1RDgzNVxcdUREMDRcIixcbiAgXCJhZnJcIjpcIlxcdUQ4MzVcXHVERDFFXCIsXG4gIFwiQWdyYXZlXCI6XCJcXHUwMEMwXCIsXG4gIFwiYWdyYXZlXCI6XCJcXHUwMEUwXCIsXG4gIFwiYWxlZnN5bVwiOlwiXFx1MjEzNVwiLFxuICBcImFsZXBoXCI6XCJcXHUyMTM1XCIsXG4gIFwiQWxwaGFcIjpcIlxcdTAzOTFcIixcbiAgXCJhbHBoYVwiOlwiXFx1MDNCMVwiLFxuICBcIkFtYWNyXCI6XCJcXHUwMTAwXCIsXG4gIFwiYW1hY3JcIjpcIlxcdTAxMDFcIixcbiAgXCJhbWFsZ1wiOlwiXFx1MkEzRlwiLFxuICBcIkFNUFwiOlwiXFx1MDAyNlwiLFxuICBcImFtcFwiOlwiXFx1MDAyNlwiLFxuICBcIkFuZFwiOlwiXFx1MkE1M1wiLFxuICBcImFuZFwiOlwiXFx1MjIyN1wiLFxuICBcImFuZGFuZFwiOlwiXFx1MkE1NVwiLFxuICBcImFuZGRcIjpcIlxcdTJBNUNcIixcbiAgXCJhbmRzbG9wZVwiOlwiXFx1MkE1OFwiLFxuICBcImFuZHZcIjpcIlxcdTJBNUFcIixcbiAgXCJhbmdcIjpcIlxcdTIyMjBcIixcbiAgXCJhbmdlXCI6XCJcXHUyOUE0XCIsXG4gIFwiYW5nbGVcIjpcIlxcdTIyMjBcIixcbiAgXCJhbmdtc2RcIjpcIlxcdTIyMjFcIixcbiAgXCJhbmdtc2RhYVwiOlwiXFx1MjlBOFwiLFxuICBcImFuZ21zZGFiXCI6XCJcXHUyOUE5XCIsXG4gIFwiYW5nbXNkYWNcIjpcIlxcdTI5QUFcIixcbiAgXCJhbmdtc2RhZFwiOlwiXFx1MjlBQlwiLFxuICBcImFuZ21zZGFlXCI6XCJcXHUyOUFDXCIsXG4gIFwiYW5nbXNkYWZcIjpcIlxcdTI5QURcIixcbiAgXCJhbmdtc2RhZ1wiOlwiXFx1MjlBRVwiLFxuICBcImFuZ21zZGFoXCI6XCJcXHUyOUFGXCIsXG4gIFwiYW5ncnRcIjpcIlxcdTIyMUZcIixcbiAgXCJhbmdydHZiXCI6XCJcXHUyMkJFXCIsXG4gIFwiYW5ncnR2YmRcIjpcIlxcdTI5OURcIixcbiAgXCJhbmdzcGhcIjpcIlxcdTIyMjJcIixcbiAgXCJhbmdzdFwiOlwiXFx1MDBDNVwiLFxuICBcImFuZ3phcnJcIjpcIlxcdTIzN0NcIixcbiAgXCJBb2dvblwiOlwiXFx1MDEwNFwiLFxuICBcImFvZ29uXCI6XCJcXHUwMTA1XCIsXG4gIFwiQW9wZlwiOlwiXFx1RDgzNVxcdUREMzhcIixcbiAgXCJhb3BmXCI6XCJcXHVEODM1XFx1REQ1MlwiLFxuICBcImFwXCI6XCJcXHUyMjQ4XCIsXG4gIFwiYXBhY2lyXCI6XCJcXHUyQTZGXCIsXG4gIFwiYXBFXCI6XCJcXHUyQTcwXCIsXG4gIFwiYXBlXCI6XCJcXHUyMjRBXCIsXG4gIFwiYXBpZFwiOlwiXFx1MjI0QlwiLFxuICBcImFwb3NcIjpcIlxcdTAwMjdcIixcbiAgXCJBcHBseUZ1bmN0aW9uXCI6XCJcXHUyMDYxXCIsXG4gIFwiYXBwcm94XCI6XCJcXHUyMjQ4XCIsXG4gIFwiYXBwcm94ZXFcIjpcIlxcdTIyNEFcIixcbiAgXCJBcmluZ1wiOlwiXFx1MDBDNVwiLFxuICBcImFyaW5nXCI6XCJcXHUwMEU1XCIsXG4gIFwiQXNjclwiOlwiXFx1RDgzNVxcdURDOUNcIixcbiAgXCJhc2NyXCI6XCJcXHVEODM1XFx1RENCNlwiLFxuICBcIkFzc2lnblwiOlwiXFx1MjI1NFwiLFxuICBcImFzdFwiOlwiXFx1MDAyQVwiLFxuICBcImFzeW1wXCI6XCJcXHUyMjQ4XCIsXG4gIFwiYXN5bXBlcVwiOlwiXFx1MjI0RFwiLFxuICBcIkF0aWxkZVwiOlwiXFx1MDBDM1wiLFxuICBcImF0aWxkZVwiOlwiXFx1MDBFM1wiLFxuICBcIkF1bWxcIjpcIlxcdTAwQzRcIixcbiAgXCJhdW1sXCI6XCJcXHUwMEU0XCIsXG4gIFwiYXdjb25pbnRcIjpcIlxcdTIyMzNcIixcbiAgXCJhd2ludFwiOlwiXFx1MkExMVwiLFxuICBcImJhY2tjb25nXCI6XCJcXHUyMjRDXCIsXG4gIFwiYmFja2Vwc2lsb25cIjpcIlxcdTAzRjZcIixcbiAgXCJiYWNrcHJpbWVcIjpcIlxcdTIwMzVcIixcbiAgXCJiYWNrc2ltXCI6XCJcXHUyMjNEXCIsXG4gIFwiYmFja3NpbWVxXCI6XCJcXHUyMkNEXCIsXG4gIFwiQmFja3NsYXNoXCI6XCJcXHUyMjE2XCIsXG4gIFwiQmFydlwiOlwiXFx1MkFFN1wiLFxuICBcImJhcnZlZVwiOlwiXFx1MjJCRFwiLFxuICBcIkJhcndlZFwiOlwiXFx1MjMwNlwiLFxuICBcImJhcndlZFwiOlwiXFx1MjMwNVwiLFxuICBcImJhcndlZGdlXCI6XCJcXHUyMzA1XCIsXG4gIFwiYmJya1wiOlwiXFx1MjNCNVwiLFxuICBcImJicmt0YnJrXCI6XCJcXHUyM0I2XCIsXG4gIFwiYmNvbmdcIjpcIlxcdTIyNENcIixcbiAgXCJCY3lcIjpcIlxcdTA0MTFcIixcbiAgXCJiY3lcIjpcIlxcdTA0MzFcIixcbiAgXCJiZHF1b1wiOlwiXFx1MjAxRVwiLFxuICBcImJlY2F1c1wiOlwiXFx1MjIzNVwiLFxuICBcIkJlY2F1c2VcIjpcIlxcdTIyMzVcIixcbiAgXCJiZWNhdXNlXCI6XCJcXHUyMjM1XCIsXG4gIFwiYmVtcHR5dlwiOlwiXFx1MjlCMFwiLFxuICBcImJlcHNpXCI6XCJcXHUwM0Y2XCIsXG4gIFwiYmVybm91XCI6XCJcXHUyMTJDXCIsXG4gIFwiQmVybm91bGxpc1wiOlwiXFx1MjEyQ1wiLFxuICBcIkJldGFcIjpcIlxcdTAzOTJcIixcbiAgXCJiZXRhXCI6XCJcXHUwM0IyXCIsXG4gIFwiYmV0aFwiOlwiXFx1MjEzNlwiLFxuICBcImJldHdlZW5cIjpcIlxcdTIyNkNcIixcbiAgXCJCZnJcIjpcIlxcdUQ4MzVcXHVERDA1XCIsXG4gIFwiYmZyXCI6XCJcXHVEODM1XFx1REQxRlwiLFxuICBcImJpZ2NhcFwiOlwiXFx1MjJDMlwiLFxuICBcImJpZ2NpcmNcIjpcIlxcdTI1RUZcIixcbiAgXCJiaWdjdXBcIjpcIlxcdTIyQzNcIixcbiAgXCJiaWdvZG90XCI6XCJcXHUyQTAwXCIsXG4gIFwiYmlnb3BsdXNcIjpcIlxcdTJBMDFcIixcbiAgXCJiaWdvdGltZXNcIjpcIlxcdTJBMDJcIixcbiAgXCJiaWdzcWN1cFwiOlwiXFx1MkEwNlwiLFxuICBcImJpZ3N0YXJcIjpcIlxcdTI2MDVcIixcbiAgXCJiaWd0cmlhbmdsZWRvd25cIjpcIlxcdTI1QkRcIixcbiAgXCJiaWd0cmlhbmdsZXVwXCI6XCJcXHUyNUIzXCIsXG4gIFwiYmlndXBsdXNcIjpcIlxcdTJBMDRcIixcbiAgXCJiaWd2ZWVcIjpcIlxcdTIyQzFcIixcbiAgXCJiaWd3ZWRnZVwiOlwiXFx1MjJDMFwiLFxuICBcImJrYXJvd1wiOlwiXFx1MjkwRFwiLFxuICBcImJsYWNrbG96ZW5nZVwiOlwiXFx1MjlFQlwiLFxuICBcImJsYWNrc3F1YXJlXCI6XCJcXHUyNUFBXCIsXG4gIFwiYmxhY2t0cmlhbmdsZVwiOlwiXFx1MjVCNFwiLFxuICBcImJsYWNrdHJpYW5nbGVkb3duXCI6XCJcXHUyNUJFXCIsXG4gIFwiYmxhY2t0cmlhbmdsZWxlZnRcIjpcIlxcdTI1QzJcIixcbiAgXCJibGFja3RyaWFuZ2xlcmlnaHRcIjpcIlxcdTI1QjhcIixcbiAgXCJibGFua1wiOlwiXFx1MjQyM1wiLFxuICBcImJsazEyXCI6XCJcXHUyNTkyXCIsXG4gIFwiYmxrMTRcIjpcIlxcdTI1OTFcIixcbiAgXCJibGszNFwiOlwiXFx1MjU5M1wiLFxuICBcImJsb2NrXCI6XCJcXHUyNTg4XCIsXG4gIFwiYm5lXCI6XCJcXHUwMDNEXFx1MjBFNVwiLFxuICBcImJuZXF1aXZcIjpcIlxcdTIyNjFcXHUyMEU1XCIsXG4gIFwiYk5vdFwiOlwiXFx1MkFFRFwiLFxuICBcImJub3RcIjpcIlxcdTIzMTBcIixcbiAgXCJCb3BmXCI6XCJcXHVEODM1XFx1REQzOVwiLFxuICBcImJvcGZcIjpcIlxcdUQ4MzVcXHVERDUzXCIsXG4gIFwiYm90XCI6XCJcXHUyMkE1XCIsXG4gIFwiYm90dG9tXCI6XCJcXHUyMkE1XCIsXG4gIFwiYm93dGllXCI6XCJcXHUyMkM4XCIsXG4gIFwiYm94Ym94XCI6XCJcXHUyOUM5XCIsXG4gIFwiYm94RExcIjpcIlxcdTI1NTdcIixcbiAgXCJib3hEbFwiOlwiXFx1MjU1NlwiLFxuICBcImJveGRMXCI6XCJcXHUyNTU1XCIsXG4gIFwiYm94ZGxcIjpcIlxcdTI1MTBcIixcbiAgXCJib3hEUlwiOlwiXFx1MjU1NFwiLFxuICBcImJveERyXCI6XCJcXHUyNTUzXCIsXG4gIFwiYm94ZFJcIjpcIlxcdTI1NTJcIixcbiAgXCJib3hkclwiOlwiXFx1MjUwQ1wiLFxuICBcImJveEhcIjpcIlxcdTI1NTBcIixcbiAgXCJib3hoXCI6XCJcXHUyNTAwXCIsXG4gIFwiYm94SERcIjpcIlxcdTI1NjZcIixcbiAgXCJib3hIZFwiOlwiXFx1MjU2NFwiLFxuICBcImJveGhEXCI6XCJcXHUyNTY1XCIsXG4gIFwiYm94aGRcIjpcIlxcdTI1MkNcIixcbiAgXCJib3hIVVwiOlwiXFx1MjU2OVwiLFxuICBcImJveEh1XCI6XCJcXHUyNTY3XCIsXG4gIFwiYm94aFVcIjpcIlxcdTI1NjhcIixcbiAgXCJib3hodVwiOlwiXFx1MjUzNFwiLFxuICBcImJveG1pbnVzXCI6XCJcXHUyMjlGXCIsXG4gIFwiYm94cGx1c1wiOlwiXFx1MjI5RVwiLFxuICBcImJveHRpbWVzXCI6XCJcXHUyMkEwXCIsXG4gIFwiYm94VUxcIjpcIlxcdTI1NURcIixcbiAgXCJib3hVbFwiOlwiXFx1MjU1Q1wiLFxuICBcImJveHVMXCI6XCJcXHUyNTVCXCIsXG4gIFwiYm94dWxcIjpcIlxcdTI1MThcIixcbiAgXCJib3hVUlwiOlwiXFx1MjU1QVwiLFxuICBcImJveFVyXCI6XCJcXHUyNTU5XCIsXG4gIFwiYm94dVJcIjpcIlxcdTI1NThcIixcbiAgXCJib3h1clwiOlwiXFx1MjUxNFwiLFxuICBcImJveFZcIjpcIlxcdTI1NTFcIixcbiAgXCJib3h2XCI6XCJcXHUyNTAyXCIsXG4gIFwiYm94VkhcIjpcIlxcdTI1NkNcIixcbiAgXCJib3hWaFwiOlwiXFx1MjU2QlwiLFxuICBcImJveHZIXCI6XCJcXHUyNTZBXCIsXG4gIFwiYm94dmhcIjpcIlxcdTI1M0NcIixcbiAgXCJib3hWTFwiOlwiXFx1MjU2M1wiLFxuICBcImJveFZsXCI6XCJcXHUyNTYyXCIsXG4gIFwiYm94dkxcIjpcIlxcdTI1NjFcIixcbiAgXCJib3h2bFwiOlwiXFx1MjUyNFwiLFxuICBcImJveFZSXCI6XCJcXHUyNTYwXCIsXG4gIFwiYm94VnJcIjpcIlxcdTI1NUZcIixcbiAgXCJib3h2UlwiOlwiXFx1MjU1RVwiLFxuICBcImJveHZyXCI6XCJcXHUyNTFDXCIsXG4gIFwiYnByaW1lXCI6XCJcXHUyMDM1XCIsXG4gIFwiQnJldmVcIjpcIlxcdTAyRDhcIixcbiAgXCJicmV2ZVwiOlwiXFx1MDJEOFwiLFxuICBcImJydmJhclwiOlwiXFx1MDBBNlwiLFxuICBcIkJzY3JcIjpcIlxcdTIxMkNcIixcbiAgXCJic2NyXCI6XCJcXHVEODM1XFx1RENCN1wiLFxuICBcImJzZW1pXCI6XCJcXHUyMDRGXCIsXG4gIFwiYnNpbVwiOlwiXFx1MjIzRFwiLFxuICBcImJzaW1lXCI6XCJcXHUyMkNEXCIsXG4gIFwiYnNvbFwiOlwiXFx1MDA1Q1wiLFxuICBcImJzb2xiXCI6XCJcXHUyOUM1XCIsXG4gIFwiYnNvbGhzdWJcIjpcIlxcdTI3QzhcIixcbiAgXCJidWxsXCI6XCJcXHUyMDIyXCIsXG4gIFwiYnVsbGV0XCI6XCJcXHUyMDIyXCIsXG4gIFwiYnVtcFwiOlwiXFx1MjI0RVwiLFxuICBcImJ1bXBFXCI6XCJcXHUyQUFFXCIsXG4gIFwiYnVtcGVcIjpcIlxcdTIyNEZcIixcbiAgXCJCdW1wZXFcIjpcIlxcdTIyNEVcIixcbiAgXCJidW1wZXFcIjpcIlxcdTIyNEZcIixcbiAgXCJDYWN1dGVcIjpcIlxcdTAxMDZcIixcbiAgXCJjYWN1dGVcIjpcIlxcdTAxMDdcIixcbiAgXCJDYXBcIjpcIlxcdTIyRDJcIixcbiAgXCJjYXBcIjpcIlxcdTIyMjlcIixcbiAgXCJjYXBhbmRcIjpcIlxcdTJBNDRcIixcbiAgXCJjYXBicmN1cFwiOlwiXFx1MkE0OVwiLFxuICBcImNhcGNhcFwiOlwiXFx1MkE0QlwiLFxuICBcImNhcGN1cFwiOlwiXFx1MkE0N1wiLFxuICBcImNhcGRvdFwiOlwiXFx1MkE0MFwiLFxuICBcIkNhcGl0YWxEaWZmZXJlbnRpYWxEXCI6XCJcXHUyMTQ1XCIsXG4gIFwiY2Fwc1wiOlwiXFx1MjIyOVxcdUZFMDBcIixcbiAgXCJjYXJldFwiOlwiXFx1MjA0MVwiLFxuICBcImNhcm9uXCI6XCJcXHUwMkM3XCIsXG4gIFwiQ2F5bGV5c1wiOlwiXFx1MjEyRFwiLFxuICBcImNjYXBzXCI6XCJcXHUyQTREXCIsXG4gIFwiQ2Nhcm9uXCI6XCJcXHUwMTBDXCIsXG4gIFwiY2Nhcm9uXCI6XCJcXHUwMTBEXCIsXG4gIFwiQ2NlZGlsXCI6XCJcXHUwMEM3XCIsXG4gIFwiY2NlZGlsXCI6XCJcXHUwMEU3XCIsXG4gIFwiQ2NpcmNcIjpcIlxcdTAxMDhcIixcbiAgXCJjY2lyY1wiOlwiXFx1MDEwOVwiLFxuICBcIkNjb25pbnRcIjpcIlxcdTIyMzBcIixcbiAgXCJjY3Vwc1wiOlwiXFx1MkE0Q1wiLFxuICBcImNjdXBzc21cIjpcIlxcdTJBNTBcIixcbiAgXCJDZG90XCI6XCJcXHUwMTBBXCIsXG4gIFwiY2RvdFwiOlwiXFx1MDEwQlwiLFxuICBcImNlZGlsXCI6XCJcXHUwMEI4XCIsXG4gIFwiQ2VkaWxsYVwiOlwiXFx1MDBCOFwiLFxuICBcImNlbXB0eXZcIjpcIlxcdTI5QjJcIixcbiAgXCJjZW50XCI6XCJcXHUwMEEyXCIsXG4gIFwiQ2VudGVyRG90XCI6XCJcXHUwMEI3XCIsXG4gIFwiY2VudGVyZG90XCI6XCJcXHUwMEI3XCIsXG4gIFwiQ2ZyXCI6XCJcXHUyMTJEXCIsXG4gIFwiY2ZyXCI6XCJcXHVEODM1XFx1REQyMFwiLFxuICBcIkNIY3lcIjpcIlxcdTA0MjdcIixcbiAgXCJjaGN5XCI6XCJcXHUwNDQ3XCIsXG4gIFwiY2hlY2tcIjpcIlxcdTI3MTNcIixcbiAgXCJjaGVja21hcmtcIjpcIlxcdTI3MTNcIixcbiAgXCJDaGlcIjpcIlxcdTAzQTdcIixcbiAgXCJjaGlcIjpcIlxcdTAzQzdcIixcbiAgXCJjaXJcIjpcIlxcdTI1Q0JcIixcbiAgXCJjaXJjXCI6XCJcXHUwMkM2XCIsXG4gIFwiY2lyY2VxXCI6XCJcXHUyMjU3XCIsXG4gIFwiY2lyY2xlYXJyb3dsZWZ0XCI6XCJcXHUyMUJBXCIsXG4gIFwiY2lyY2xlYXJyb3dyaWdodFwiOlwiXFx1MjFCQlwiLFxuICBcImNpcmNsZWRhc3RcIjpcIlxcdTIyOUJcIixcbiAgXCJjaXJjbGVkY2lyY1wiOlwiXFx1MjI5QVwiLFxuICBcImNpcmNsZWRkYXNoXCI6XCJcXHUyMjlEXCIsXG4gIFwiQ2lyY2xlRG90XCI6XCJcXHUyMjk5XCIsXG4gIFwiY2lyY2xlZFJcIjpcIlxcdTAwQUVcIixcbiAgXCJjaXJjbGVkU1wiOlwiXFx1MjRDOFwiLFxuICBcIkNpcmNsZU1pbnVzXCI6XCJcXHUyMjk2XCIsXG4gIFwiQ2lyY2xlUGx1c1wiOlwiXFx1MjI5NVwiLFxuICBcIkNpcmNsZVRpbWVzXCI6XCJcXHUyMjk3XCIsXG4gIFwiY2lyRVwiOlwiXFx1MjlDM1wiLFxuICBcImNpcmVcIjpcIlxcdTIyNTdcIixcbiAgXCJjaXJmbmludFwiOlwiXFx1MkExMFwiLFxuICBcImNpcm1pZFwiOlwiXFx1MkFFRlwiLFxuICBcImNpcnNjaXJcIjpcIlxcdTI5QzJcIixcbiAgXCJDbG9ja3dpc2VDb250b3VySW50ZWdyYWxcIjpcIlxcdTIyMzJcIixcbiAgXCJDbG9zZUN1cmx5RG91YmxlUXVvdGVcIjpcIlxcdTIwMURcIixcbiAgXCJDbG9zZUN1cmx5UXVvdGVcIjpcIlxcdTIwMTlcIixcbiAgXCJjbHVic1wiOlwiXFx1MjY2M1wiLFxuICBcImNsdWJzdWl0XCI6XCJcXHUyNjYzXCIsXG4gIFwiQ29sb25cIjpcIlxcdTIyMzdcIixcbiAgXCJjb2xvblwiOlwiXFx1MDAzQVwiLFxuICBcIkNvbG9uZVwiOlwiXFx1MkE3NFwiLFxuICBcImNvbG9uZVwiOlwiXFx1MjI1NFwiLFxuICBcImNvbG9uZXFcIjpcIlxcdTIyNTRcIixcbiAgXCJjb21tYVwiOlwiXFx1MDAyQ1wiLFxuICBcImNvbW1hdFwiOlwiXFx1MDA0MFwiLFxuICBcImNvbXBcIjpcIlxcdTIyMDFcIixcbiAgXCJjb21wZm5cIjpcIlxcdTIyMThcIixcbiAgXCJjb21wbGVtZW50XCI6XCJcXHUyMjAxXCIsXG4gIFwiY29tcGxleGVzXCI6XCJcXHUyMTAyXCIsXG4gIFwiY29uZ1wiOlwiXFx1MjI0NVwiLFxuICBcImNvbmdkb3RcIjpcIlxcdTJBNkRcIixcbiAgXCJDb25ncnVlbnRcIjpcIlxcdTIyNjFcIixcbiAgXCJDb25pbnRcIjpcIlxcdTIyMkZcIixcbiAgXCJjb25pbnRcIjpcIlxcdTIyMkVcIixcbiAgXCJDb250b3VySW50ZWdyYWxcIjpcIlxcdTIyMkVcIixcbiAgXCJDb3BmXCI6XCJcXHUyMTAyXCIsXG4gIFwiY29wZlwiOlwiXFx1RDgzNVxcdURENTRcIixcbiAgXCJjb3Byb2RcIjpcIlxcdTIyMTBcIixcbiAgXCJDb3Byb2R1Y3RcIjpcIlxcdTIyMTBcIixcbiAgXCJDT1BZXCI6XCJcXHUwMEE5XCIsXG4gIFwiY29weVwiOlwiXFx1MDBBOVwiLFxuICBcImNvcHlzclwiOlwiXFx1MjExN1wiLFxuICBcIkNvdW50ZXJDbG9ja3dpc2VDb250b3VySW50ZWdyYWxcIjpcIlxcdTIyMzNcIixcbiAgXCJjcmFyclwiOlwiXFx1MjFCNVwiLFxuICBcIkNyb3NzXCI6XCJcXHUyQTJGXCIsXG4gIFwiY3Jvc3NcIjpcIlxcdTI3MTdcIixcbiAgXCJDc2NyXCI6XCJcXHVEODM1XFx1REM5RVwiLFxuICBcImNzY3JcIjpcIlxcdUQ4MzVcXHVEQ0I4XCIsXG4gIFwiY3N1YlwiOlwiXFx1MkFDRlwiLFxuICBcImNzdWJlXCI6XCJcXHUyQUQxXCIsXG4gIFwiY3N1cFwiOlwiXFx1MkFEMFwiLFxuICBcImNzdXBlXCI6XCJcXHUyQUQyXCIsXG4gIFwiY3Rkb3RcIjpcIlxcdTIyRUZcIixcbiAgXCJjdWRhcnJsXCI6XCJcXHUyOTM4XCIsXG4gIFwiY3VkYXJyclwiOlwiXFx1MjkzNVwiLFxuICBcImN1ZXByXCI6XCJcXHUyMkRFXCIsXG4gIFwiY3Vlc2NcIjpcIlxcdTIyREZcIixcbiAgXCJjdWxhcnJcIjpcIlxcdTIxQjZcIixcbiAgXCJjdWxhcnJwXCI6XCJcXHUyOTNEXCIsXG4gIFwiQ3VwXCI6XCJcXHUyMkQzXCIsXG4gIFwiY3VwXCI6XCJcXHUyMjJBXCIsXG4gIFwiY3VwYnJjYXBcIjpcIlxcdTJBNDhcIixcbiAgXCJDdXBDYXBcIjpcIlxcdTIyNERcIixcbiAgXCJjdXBjYXBcIjpcIlxcdTJBNDZcIixcbiAgXCJjdXBjdXBcIjpcIlxcdTJBNEFcIixcbiAgXCJjdXBkb3RcIjpcIlxcdTIyOERcIixcbiAgXCJjdXBvclwiOlwiXFx1MkE0NVwiLFxuICBcImN1cHNcIjpcIlxcdTIyMkFcXHVGRTAwXCIsXG4gIFwiY3VyYXJyXCI6XCJcXHUyMUI3XCIsXG4gIFwiY3VyYXJybVwiOlwiXFx1MjkzQ1wiLFxuICBcImN1cmx5ZXFwcmVjXCI6XCJcXHUyMkRFXCIsXG4gIFwiY3VybHllcXN1Y2NcIjpcIlxcdTIyREZcIixcbiAgXCJjdXJseXZlZVwiOlwiXFx1MjJDRVwiLFxuICBcImN1cmx5d2VkZ2VcIjpcIlxcdTIyQ0ZcIixcbiAgXCJjdXJyZW5cIjpcIlxcdTAwQTRcIixcbiAgXCJjdXJ2ZWFycm93bGVmdFwiOlwiXFx1MjFCNlwiLFxuICBcImN1cnZlYXJyb3dyaWdodFwiOlwiXFx1MjFCN1wiLFxuICBcImN1dmVlXCI6XCJcXHUyMkNFXCIsXG4gIFwiY3V3ZWRcIjpcIlxcdTIyQ0ZcIixcbiAgXCJjd2NvbmludFwiOlwiXFx1MjIzMlwiLFxuICBcImN3aW50XCI6XCJcXHUyMjMxXCIsXG4gIFwiY3lsY3R5XCI6XCJcXHUyMzJEXCIsXG4gIFwiRGFnZ2VyXCI6XCJcXHUyMDIxXCIsXG4gIFwiZGFnZ2VyXCI6XCJcXHUyMDIwXCIsXG4gIFwiZGFsZXRoXCI6XCJcXHUyMTM4XCIsXG4gIFwiRGFyclwiOlwiXFx1MjFBMVwiLFxuICBcImRBcnJcIjpcIlxcdTIxRDNcIixcbiAgXCJkYXJyXCI6XCJcXHUyMTkzXCIsXG4gIFwiZGFzaFwiOlwiXFx1MjAxMFwiLFxuICBcIkRhc2h2XCI6XCJcXHUyQUU0XCIsXG4gIFwiZGFzaHZcIjpcIlxcdTIyQTNcIixcbiAgXCJkYmthcm93XCI6XCJcXHUyOTBGXCIsXG4gIFwiZGJsYWNcIjpcIlxcdTAyRERcIixcbiAgXCJEY2Fyb25cIjpcIlxcdTAxMEVcIixcbiAgXCJkY2Fyb25cIjpcIlxcdTAxMEZcIixcbiAgXCJEY3lcIjpcIlxcdTA0MTRcIixcbiAgXCJkY3lcIjpcIlxcdTA0MzRcIixcbiAgXCJERFwiOlwiXFx1MjE0NVwiLFxuICBcImRkXCI6XCJcXHUyMTQ2XCIsXG4gIFwiZGRhZ2dlclwiOlwiXFx1MjAyMVwiLFxuICBcImRkYXJyXCI6XCJcXHUyMUNBXCIsXG4gIFwiRERvdHJhaGRcIjpcIlxcdTI5MTFcIixcbiAgXCJkZG90c2VxXCI6XCJcXHUyQTc3XCIsXG4gIFwiZGVnXCI6XCJcXHUwMEIwXCIsXG4gIFwiRGVsXCI6XCJcXHUyMjA3XCIsXG4gIFwiRGVsdGFcIjpcIlxcdTAzOTRcIixcbiAgXCJkZWx0YVwiOlwiXFx1MDNCNFwiLFxuICBcImRlbXB0eXZcIjpcIlxcdTI5QjFcIixcbiAgXCJkZmlzaHRcIjpcIlxcdTI5N0ZcIixcbiAgXCJEZnJcIjpcIlxcdUQ4MzVcXHVERDA3XCIsXG4gIFwiZGZyXCI6XCJcXHVEODM1XFx1REQyMVwiLFxuICBcImRIYXJcIjpcIlxcdTI5NjVcIixcbiAgXCJkaGFybFwiOlwiXFx1MjFDM1wiLFxuICBcImRoYXJyXCI6XCJcXHUyMUMyXCIsXG4gIFwiRGlhY3JpdGljYWxBY3V0ZVwiOlwiXFx1MDBCNFwiLFxuICBcIkRpYWNyaXRpY2FsRG90XCI6XCJcXHUwMkQ5XCIsXG4gIFwiRGlhY3JpdGljYWxEb3VibGVBY3V0ZVwiOlwiXFx1MDJERFwiLFxuICBcIkRpYWNyaXRpY2FsR3JhdmVcIjpcIlxcdTAwNjBcIixcbiAgXCJEaWFjcml0aWNhbFRpbGRlXCI6XCJcXHUwMkRDXCIsXG4gIFwiZGlhbVwiOlwiXFx1MjJDNFwiLFxuICBcIkRpYW1vbmRcIjpcIlxcdTIyQzRcIixcbiAgXCJkaWFtb25kXCI6XCJcXHUyMkM0XCIsXG4gIFwiZGlhbW9uZHN1aXRcIjpcIlxcdTI2NjZcIixcbiAgXCJkaWFtc1wiOlwiXFx1MjY2NlwiLFxuICBcImRpZVwiOlwiXFx1MDBBOFwiLFxuICBcIkRpZmZlcmVudGlhbERcIjpcIlxcdTIxNDZcIixcbiAgXCJkaWdhbW1hXCI6XCJcXHUwM0REXCIsXG4gIFwiZGlzaW5cIjpcIlxcdTIyRjJcIixcbiAgXCJkaXZcIjpcIlxcdTAwRjdcIixcbiAgXCJkaXZpZGVcIjpcIlxcdTAwRjdcIixcbiAgXCJkaXZpZGVvbnRpbWVzXCI6XCJcXHUyMkM3XCIsXG4gIFwiZGl2b254XCI6XCJcXHUyMkM3XCIsXG4gIFwiREpjeVwiOlwiXFx1MDQwMlwiLFxuICBcImRqY3lcIjpcIlxcdTA0NTJcIixcbiAgXCJkbGNvcm5cIjpcIlxcdTIzMUVcIixcbiAgXCJkbGNyb3BcIjpcIlxcdTIzMERcIixcbiAgXCJkb2xsYXJcIjpcIlxcdTAwMjRcIixcbiAgXCJEb3BmXCI6XCJcXHVEODM1XFx1REQzQlwiLFxuICBcImRvcGZcIjpcIlxcdUQ4MzVcXHVERDU1XCIsXG4gIFwiRG90XCI6XCJcXHUwMEE4XCIsXG4gIFwiZG90XCI6XCJcXHUwMkQ5XCIsXG4gIFwiRG90RG90XCI6XCJcXHUyMERDXCIsXG4gIFwiZG90ZXFcIjpcIlxcdTIyNTBcIixcbiAgXCJkb3RlcWRvdFwiOlwiXFx1MjI1MVwiLFxuICBcIkRvdEVxdWFsXCI6XCJcXHUyMjUwXCIsXG4gIFwiZG90bWludXNcIjpcIlxcdTIyMzhcIixcbiAgXCJkb3RwbHVzXCI6XCJcXHUyMjE0XCIsXG4gIFwiZG90c3F1YXJlXCI6XCJcXHUyMkExXCIsXG4gIFwiZG91YmxlYmFyd2VkZ2VcIjpcIlxcdTIzMDZcIixcbiAgXCJEb3VibGVDb250b3VySW50ZWdyYWxcIjpcIlxcdTIyMkZcIixcbiAgXCJEb3VibGVEb3RcIjpcIlxcdTAwQThcIixcbiAgXCJEb3VibGVEb3duQXJyb3dcIjpcIlxcdTIxRDNcIixcbiAgXCJEb3VibGVMZWZ0QXJyb3dcIjpcIlxcdTIxRDBcIixcbiAgXCJEb3VibGVMZWZ0UmlnaHRBcnJvd1wiOlwiXFx1MjFENFwiLFxuICBcIkRvdWJsZUxlZnRUZWVcIjpcIlxcdTJBRTRcIixcbiAgXCJEb3VibGVMb25nTGVmdEFycm93XCI6XCJcXHUyN0Y4XCIsXG4gIFwiRG91YmxlTG9uZ0xlZnRSaWdodEFycm93XCI6XCJcXHUyN0ZBXCIsXG4gIFwiRG91YmxlTG9uZ1JpZ2h0QXJyb3dcIjpcIlxcdTI3RjlcIixcbiAgXCJEb3VibGVSaWdodEFycm93XCI6XCJcXHUyMUQyXCIsXG4gIFwiRG91YmxlUmlnaHRUZWVcIjpcIlxcdTIyQThcIixcbiAgXCJEb3VibGVVcEFycm93XCI6XCJcXHUyMUQxXCIsXG4gIFwiRG91YmxlVXBEb3duQXJyb3dcIjpcIlxcdTIxRDVcIixcbiAgXCJEb3VibGVWZXJ0aWNhbEJhclwiOlwiXFx1MjIyNVwiLFxuICBcIkRvd25BcnJvd1wiOlwiXFx1MjE5M1wiLFxuICBcIkRvd25hcnJvd1wiOlwiXFx1MjFEM1wiLFxuICBcImRvd25hcnJvd1wiOlwiXFx1MjE5M1wiLFxuICBcIkRvd25BcnJvd0JhclwiOlwiXFx1MjkxM1wiLFxuICBcIkRvd25BcnJvd1VwQXJyb3dcIjpcIlxcdTIxRjVcIixcbiAgXCJEb3duQnJldmVcIjpcIlxcdTAzMTFcIixcbiAgXCJkb3duZG93bmFycm93c1wiOlwiXFx1MjFDQVwiLFxuICBcImRvd25oYXJwb29ubGVmdFwiOlwiXFx1MjFDM1wiLFxuICBcImRvd25oYXJwb29ucmlnaHRcIjpcIlxcdTIxQzJcIixcbiAgXCJEb3duTGVmdFJpZ2h0VmVjdG9yXCI6XCJcXHUyOTUwXCIsXG4gIFwiRG93bkxlZnRUZWVWZWN0b3JcIjpcIlxcdTI5NUVcIixcbiAgXCJEb3duTGVmdFZlY3RvclwiOlwiXFx1MjFCRFwiLFxuICBcIkRvd25MZWZ0VmVjdG9yQmFyXCI6XCJcXHUyOTU2XCIsXG4gIFwiRG93blJpZ2h0VGVlVmVjdG9yXCI6XCJcXHUyOTVGXCIsXG4gIFwiRG93blJpZ2h0VmVjdG9yXCI6XCJcXHUyMUMxXCIsXG4gIFwiRG93blJpZ2h0VmVjdG9yQmFyXCI6XCJcXHUyOTU3XCIsXG4gIFwiRG93blRlZVwiOlwiXFx1MjJBNFwiLFxuICBcIkRvd25UZWVBcnJvd1wiOlwiXFx1MjFBN1wiLFxuICBcImRyYmthcm93XCI6XCJcXHUyOTEwXCIsXG4gIFwiZHJjb3JuXCI6XCJcXHUyMzFGXCIsXG4gIFwiZHJjcm9wXCI6XCJcXHUyMzBDXCIsXG4gIFwiRHNjclwiOlwiXFx1RDgzNVxcdURDOUZcIixcbiAgXCJkc2NyXCI6XCJcXHVEODM1XFx1RENCOVwiLFxuICBcIkRTY3lcIjpcIlxcdTA0MDVcIixcbiAgXCJkc2N5XCI6XCJcXHUwNDU1XCIsXG4gIFwiZHNvbFwiOlwiXFx1MjlGNlwiLFxuICBcIkRzdHJva1wiOlwiXFx1MDExMFwiLFxuICBcImRzdHJva1wiOlwiXFx1MDExMVwiLFxuICBcImR0ZG90XCI6XCJcXHUyMkYxXCIsXG4gIFwiZHRyaVwiOlwiXFx1MjVCRlwiLFxuICBcImR0cmlmXCI6XCJcXHUyNUJFXCIsXG4gIFwiZHVhcnJcIjpcIlxcdTIxRjVcIixcbiAgXCJkdWhhclwiOlwiXFx1Mjk2RlwiLFxuICBcImR3YW5nbGVcIjpcIlxcdTI5QTZcIixcbiAgXCJEWmN5XCI6XCJcXHUwNDBGXCIsXG4gIFwiZHpjeVwiOlwiXFx1MDQ1RlwiLFxuICBcImR6aWdyYXJyXCI6XCJcXHUyN0ZGXCIsXG4gIFwiRWFjdXRlXCI6XCJcXHUwMEM5XCIsXG4gIFwiZWFjdXRlXCI6XCJcXHUwMEU5XCIsXG4gIFwiZWFzdGVyXCI6XCJcXHUyQTZFXCIsXG4gIFwiRWNhcm9uXCI6XCJcXHUwMTFBXCIsXG4gIFwiZWNhcm9uXCI6XCJcXHUwMTFCXCIsXG4gIFwiZWNpclwiOlwiXFx1MjI1NlwiLFxuICBcIkVjaXJjXCI6XCJcXHUwMENBXCIsXG4gIFwiZWNpcmNcIjpcIlxcdTAwRUFcIixcbiAgXCJlY29sb25cIjpcIlxcdTIyNTVcIixcbiAgXCJFY3lcIjpcIlxcdTA0MkRcIixcbiAgXCJlY3lcIjpcIlxcdTA0NERcIixcbiAgXCJlRERvdFwiOlwiXFx1MkE3N1wiLFxuICBcIkVkb3RcIjpcIlxcdTAxMTZcIixcbiAgXCJlRG90XCI6XCJcXHUyMjUxXCIsXG4gIFwiZWRvdFwiOlwiXFx1MDExN1wiLFxuICBcImVlXCI6XCJcXHUyMTQ3XCIsXG4gIFwiZWZEb3RcIjpcIlxcdTIyNTJcIixcbiAgXCJFZnJcIjpcIlxcdUQ4MzVcXHVERDA4XCIsXG4gIFwiZWZyXCI6XCJcXHVEODM1XFx1REQyMlwiLFxuICBcImVnXCI6XCJcXHUyQTlBXCIsXG4gIFwiRWdyYXZlXCI6XCJcXHUwMEM4XCIsXG4gIFwiZWdyYXZlXCI6XCJcXHUwMEU4XCIsXG4gIFwiZWdzXCI6XCJcXHUyQTk2XCIsXG4gIFwiZWdzZG90XCI6XCJcXHUyQTk4XCIsXG4gIFwiZWxcIjpcIlxcdTJBOTlcIixcbiAgXCJFbGVtZW50XCI6XCJcXHUyMjA4XCIsXG4gIFwiZWxpbnRlcnNcIjpcIlxcdTIzRTdcIixcbiAgXCJlbGxcIjpcIlxcdTIxMTNcIixcbiAgXCJlbHNcIjpcIlxcdTJBOTVcIixcbiAgXCJlbHNkb3RcIjpcIlxcdTJBOTdcIixcbiAgXCJFbWFjclwiOlwiXFx1MDExMlwiLFxuICBcImVtYWNyXCI6XCJcXHUwMTEzXCIsXG4gIFwiZW1wdHlcIjpcIlxcdTIyMDVcIixcbiAgXCJlbXB0eXNldFwiOlwiXFx1MjIwNVwiLFxuICBcIkVtcHR5U21hbGxTcXVhcmVcIjpcIlxcdTI1RkJcIixcbiAgXCJlbXB0eXZcIjpcIlxcdTIyMDVcIixcbiAgXCJFbXB0eVZlcnlTbWFsbFNxdWFyZVwiOlwiXFx1MjVBQlwiLFxuICBcImVtc3BcIjpcIlxcdTIwMDNcIixcbiAgXCJlbXNwMTNcIjpcIlxcdTIwMDRcIixcbiAgXCJlbXNwMTRcIjpcIlxcdTIwMDVcIixcbiAgXCJFTkdcIjpcIlxcdTAxNEFcIixcbiAgXCJlbmdcIjpcIlxcdTAxNEJcIixcbiAgXCJlbnNwXCI6XCJcXHUyMDAyXCIsXG4gIFwiRW9nb25cIjpcIlxcdTAxMThcIixcbiAgXCJlb2dvblwiOlwiXFx1MDExOVwiLFxuICBcIkVvcGZcIjpcIlxcdUQ4MzVcXHVERDNDXCIsXG4gIFwiZW9wZlwiOlwiXFx1RDgzNVxcdURENTZcIixcbiAgXCJlcGFyXCI6XCJcXHUyMkQ1XCIsXG4gIFwiZXBhcnNsXCI6XCJcXHUyOUUzXCIsXG4gIFwiZXBsdXNcIjpcIlxcdTJBNzFcIixcbiAgXCJlcHNpXCI6XCJcXHUwM0I1XCIsXG4gIFwiRXBzaWxvblwiOlwiXFx1MDM5NVwiLFxuICBcImVwc2lsb25cIjpcIlxcdTAzQjVcIixcbiAgXCJlcHNpdlwiOlwiXFx1MDNGNVwiLFxuICBcImVxY2lyY1wiOlwiXFx1MjI1NlwiLFxuICBcImVxY29sb25cIjpcIlxcdTIyNTVcIixcbiAgXCJlcXNpbVwiOlwiXFx1MjI0MlwiLFxuICBcImVxc2xhbnRndHJcIjpcIlxcdTJBOTZcIixcbiAgXCJlcXNsYW50bGVzc1wiOlwiXFx1MkE5NVwiLFxuICBcIkVxdWFsXCI6XCJcXHUyQTc1XCIsXG4gIFwiZXF1YWxzXCI6XCJcXHUwMDNEXCIsXG4gIFwiRXF1YWxUaWxkZVwiOlwiXFx1MjI0MlwiLFxuICBcImVxdWVzdFwiOlwiXFx1MjI1RlwiLFxuICBcIkVxdWlsaWJyaXVtXCI6XCJcXHUyMUNDXCIsXG4gIFwiZXF1aXZcIjpcIlxcdTIyNjFcIixcbiAgXCJlcXVpdkREXCI6XCJcXHUyQTc4XCIsXG4gIFwiZXF2cGFyc2xcIjpcIlxcdTI5RTVcIixcbiAgXCJlcmFyclwiOlwiXFx1Mjk3MVwiLFxuICBcImVyRG90XCI6XCJcXHUyMjUzXCIsXG4gIFwiRXNjclwiOlwiXFx1MjEzMFwiLFxuICBcImVzY3JcIjpcIlxcdTIxMkZcIixcbiAgXCJlc2RvdFwiOlwiXFx1MjI1MFwiLFxuICBcIkVzaW1cIjpcIlxcdTJBNzNcIixcbiAgXCJlc2ltXCI6XCJcXHUyMjQyXCIsXG4gIFwiRXRhXCI6XCJcXHUwMzk3XCIsXG4gIFwiZXRhXCI6XCJcXHUwM0I3XCIsXG4gIFwiRVRIXCI6XCJcXHUwMEQwXCIsXG4gIFwiZXRoXCI6XCJcXHUwMEYwXCIsXG4gIFwiRXVtbFwiOlwiXFx1MDBDQlwiLFxuICBcImV1bWxcIjpcIlxcdTAwRUJcIixcbiAgXCJldXJvXCI6XCJcXHUyMEFDXCIsXG4gIFwiZXhjbFwiOlwiXFx1MDAyMVwiLFxuICBcImV4aXN0XCI6XCJcXHUyMjAzXCIsXG4gIFwiRXhpc3RzXCI6XCJcXHUyMjAzXCIsXG4gIFwiZXhwZWN0YXRpb25cIjpcIlxcdTIxMzBcIixcbiAgXCJFeHBvbmVudGlhbEVcIjpcIlxcdTIxNDdcIixcbiAgXCJleHBvbmVudGlhbGVcIjpcIlxcdTIxNDdcIixcbiAgXCJmYWxsaW5nZG90c2VxXCI6XCJcXHUyMjUyXCIsXG4gIFwiRmN5XCI6XCJcXHUwNDI0XCIsXG4gIFwiZmN5XCI6XCJcXHUwNDQ0XCIsXG4gIFwiZmVtYWxlXCI6XCJcXHUyNjQwXCIsXG4gIFwiZmZpbGlnXCI6XCJcXHVGQjAzXCIsXG4gIFwiZmZsaWdcIjpcIlxcdUZCMDBcIixcbiAgXCJmZmxsaWdcIjpcIlxcdUZCMDRcIixcbiAgXCJGZnJcIjpcIlxcdUQ4MzVcXHVERDA5XCIsXG4gIFwiZmZyXCI6XCJcXHVEODM1XFx1REQyM1wiLFxuICBcImZpbGlnXCI6XCJcXHVGQjAxXCIsXG4gIFwiRmlsbGVkU21hbGxTcXVhcmVcIjpcIlxcdTI1RkNcIixcbiAgXCJGaWxsZWRWZXJ5U21hbGxTcXVhcmVcIjpcIlxcdTI1QUFcIixcbiAgXCJmamxpZ1wiOlwiXFx1MDA2NlxcdTAwNkFcIixcbiAgXCJmbGF0XCI6XCJcXHUyNjZEXCIsXG4gIFwiZmxsaWdcIjpcIlxcdUZCMDJcIixcbiAgXCJmbHRuc1wiOlwiXFx1MjVCMVwiLFxuICBcImZub2ZcIjpcIlxcdTAxOTJcIixcbiAgXCJGb3BmXCI6XCJcXHVEODM1XFx1REQzRFwiLFxuICBcImZvcGZcIjpcIlxcdUQ4MzVcXHVERDU3XCIsXG4gIFwiRm9yQWxsXCI6XCJcXHUyMjAwXCIsXG4gIFwiZm9yYWxsXCI6XCJcXHUyMjAwXCIsXG4gIFwiZm9ya1wiOlwiXFx1MjJENFwiLFxuICBcImZvcmt2XCI6XCJcXHUyQUQ5XCIsXG4gIFwiRm91cmllcnRyZlwiOlwiXFx1MjEzMVwiLFxuICBcImZwYXJ0aW50XCI6XCJcXHUyQTBEXCIsXG4gIFwiZnJhYzEyXCI6XCJcXHUwMEJEXCIsXG4gIFwiZnJhYzEzXCI6XCJcXHUyMTUzXCIsXG4gIFwiZnJhYzE0XCI6XCJcXHUwMEJDXCIsXG4gIFwiZnJhYzE1XCI6XCJcXHUyMTU1XCIsXG4gIFwiZnJhYzE2XCI6XCJcXHUyMTU5XCIsXG4gIFwiZnJhYzE4XCI6XCJcXHUyMTVCXCIsXG4gIFwiZnJhYzIzXCI6XCJcXHUyMTU0XCIsXG4gIFwiZnJhYzI1XCI6XCJcXHUyMTU2XCIsXG4gIFwiZnJhYzM0XCI6XCJcXHUwMEJFXCIsXG4gIFwiZnJhYzM1XCI6XCJcXHUyMTU3XCIsXG4gIFwiZnJhYzM4XCI6XCJcXHUyMTVDXCIsXG4gIFwiZnJhYzQ1XCI6XCJcXHUyMTU4XCIsXG4gIFwiZnJhYzU2XCI6XCJcXHUyMTVBXCIsXG4gIFwiZnJhYzU4XCI6XCJcXHUyMTVEXCIsXG4gIFwiZnJhYzc4XCI6XCJcXHUyMTVFXCIsXG4gIFwiZnJhc2xcIjpcIlxcdTIwNDRcIixcbiAgXCJmcm93blwiOlwiXFx1MjMyMlwiLFxuICBcIkZzY3JcIjpcIlxcdTIxMzFcIixcbiAgXCJmc2NyXCI6XCJcXHVEODM1XFx1RENCQlwiLFxuICBcImdhY3V0ZVwiOlwiXFx1MDFGNVwiLFxuICBcIkdhbW1hXCI6XCJcXHUwMzkzXCIsXG4gIFwiZ2FtbWFcIjpcIlxcdTAzQjNcIixcbiAgXCJHYW1tYWRcIjpcIlxcdTAzRENcIixcbiAgXCJnYW1tYWRcIjpcIlxcdTAzRERcIixcbiAgXCJnYXBcIjpcIlxcdTJBODZcIixcbiAgXCJHYnJldmVcIjpcIlxcdTAxMUVcIixcbiAgXCJnYnJldmVcIjpcIlxcdTAxMUZcIixcbiAgXCJHY2VkaWxcIjpcIlxcdTAxMjJcIixcbiAgXCJHY2lyY1wiOlwiXFx1MDExQ1wiLFxuICBcImdjaXJjXCI6XCJcXHUwMTFEXCIsXG4gIFwiR2N5XCI6XCJcXHUwNDEzXCIsXG4gIFwiZ2N5XCI6XCJcXHUwNDMzXCIsXG4gIFwiR2RvdFwiOlwiXFx1MDEyMFwiLFxuICBcImdkb3RcIjpcIlxcdTAxMjFcIixcbiAgXCJnRVwiOlwiXFx1MjI2N1wiLFxuICBcImdlXCI6XCJcXHUyMjY1XCIsXG4gIFwiZ0VsXCI6XCJcXHUyQThDXCIsXG4gIFwiZ2VsXCI6XCJcXHUyMkRCXCIsXG4gIFwiZ2VxXCI6XCJcXHUyMjY1XCIsXG4gIFwiZ2VxcVwiOlwiXFx1MjI2N1wiLFxuICBcImdlcXNsYW50XCI6XCJcXHUyQTdFXCIsXG4gIFwiZ2VzXCI6XCJcXHUyQTdFXCIsXG4gIFwiZ2VzY2NcIjpcIlxcdTJBQTlcIixcbiAgXCJnZXNkb3RcIjpcIlxcdTJBODBcIixcbiAgXCJnZXNkb3RvXCI6XCJcXHUyQTgyXCIsXG4gIFwiZ2VzZG90b2xcIjpcIlxcdTJBODRcIixcbiAgXCJnZXNsXCI6XCJcXHUyMkRCXFx1RkUwMFwiLFxuICBcImdlc2xlc1wiOlwiXFx1MkE5NFwiLFxuICBcIkdmclwiOlwiXFx1RDgzNVxcdUREMEFcIixcbiAgXCJnZnJcIjpcIlxcdUQ4MzVcXHVERDI0XCIsXG4gIFwiR2dcIjpcIlxcdTIyRDlcIixcbiAgXCJnZ1wiOlwiXFx1MjI2QlwiLFxuICBcImdnZ1wiOlwiXFx1MjJEOVwiLFxuICBcImdpbWVsXCI6XCJcXHUyMTM3XCIsXG4gIFwiR0pjeVwiOlwiXFx1MDQwM1wiLFxuICBcImdqY3lcIjpcIlxcdTA0NTNcIixcbiAgXCJnbFwiOlwiXFx1MjI3N1wiLFxuICBcImdsYVwiOlwiXFx1MkFBNVwiLFxuICBcImdsRVwiOlwiXFx1MkE5MlwiLFxuICBcImdsalwiOlwiXFx1MkFBNFwiLFxuICBcImduYXBcIjpcIlxcdTJBOEFcIixcbiAgXCJnbmFwcHJveFwiOlwiXFx1MkE4QVwiLFxuICBcImduRVwiOlwiXFx1MjI2OVwiLFxuICBcImduZVwiOlwiXFx1MkE4OFwiLFxuICBcImduZXFcIjpcIlxcdTJBODhcIixcbiAgXCJnbmVxcVwiOlwiXFx1MjI2OVwiLFxuICBcImduc2ltXCI6XCJcXHUyMkU3XCIsXG4gIFwiR29wZlwiOlwiXFx1RDgzNVxcdUREM0VcIixcbiAgXCJnb3BmXCI6XCJcXHVEODM1XFx1REQ1OFwiLFxuICBcImdyYXZlXCI6XCJcXHUwMDYwXCIsXG4gIFwiR3JlYXRlckVxdWFsXCI6XCJcXHUyMjY1XCIsXG4gIFwiR3JlYXRlckVxdWFsTGVzc1wiOlwiXFx1MjJEQlwiLFxuICBcIkdyZWF0ZXJGdWxsRXF1YWxcIjpcIlxcdTIyNjdcIixcbiAgXCJHcmVhdGVyR3JlYXRlclwiOlwiXFx1MkFBMlwiLFxuICBcIkdyZWF0ZXJMZXNzXCI6XCJcXHUyMjc3XCIsXG4gIFwiR3JlYXRlclNsYW50RXF1YWxcIjpcIlxcdTJBN0VcIixcbiAgXCJHcmVhdGVyVGlsZGVcIjpcIlxcdTIyNzNcIixcbiAgXCJHc2NyXCI6XCJcXHVEODM1XFx1RENBMlwiLFxuICBcImdzY3JcIjpcIlxcdTIxMEFcIixcbiAgXCJnc2ltXCI6XCJcXHUyMjczXCIsXG4gIFwiZ3NpbWVcIjpcIlxcdTJBOEVcIixcbiAgXCJnc2ltbFwiOlwiXFx1MkE5MFwiLFxuICBcIkdUXCI6XCJcXHUwMDNFXCIsXG4gIFwiR3RcIjpcIlxcdTIyNkJcIixcbiAgXCJndFwiOlwiXFx1MDAzRVwiLFxuICBcImd0Y2NcIjpcIlxcdTJBQTdcIixcbiAgXCJndGNpclwiOlwiXFx1MkE3QVwiLFxuICBcImd0ZG90XCI6XCJcXHUyMkQ3XCIsXG4gIFwiZ3RsUGFyXCI6XCJcXHUyOTk1XCIsXG4gIFwiZ3RxdWVzdFwiOlwiXFx1MkE3Q1wiLFxuICBcImd0cmFwcHJveFwiOlwiXFx1MkE4NlwiLFxuICBcImd0cmFyclwiOlwiXFx1Mjk3OFwiLFxuICBcImd0cmRvdFwiOlwiXFx1MjJEN1wiLFxuICBcImd0cmVxbGVzc1wiOlwiXFx1MjJEQlwiLFxuICBcImd0cmVxcWxlc3NcIjpcIlxcdTJBOENcIixcbiAgXCJndHJsZXNzXCI6XCJcXHUyMjc3XCIsXG4gIFwiZ3Ryc2ltXCI6XCJcXHUyMjczXCIsXG4gIFwiZ3ZlcnRuZXFxXCI6XCJcXHUyMjY5XFx1RkUwMFwiLFxuICBcImd2bkVcIjpcIlxcdTIyNjlcXHVGRTAwXCIsXG4gIFwiSGFjZWtcIjpcIlxcdTAyQzdcIixcbiAgXCJoYWlyc3BcIjpcIlxcdTIwMEFcIixcbiAgXCJoYWxmXCI6XCJcXHUwMEJEXCIsXG4gIFwiaGFtaWx0XCI6XCJcXHUyMTBCXCIsXG4gIFwiSEFSRGN5XCI6XCJcXHUwNDJBXCIsXG4gIFwiaGFyZGN5XCI6XCJcXHUwNDRBXCIsXG4gIFwiaEFyclwiOlwiXFx1MjFENFwiLFxuICBcImhhcnJcIjpcIlxcdTIxOTRcIixcbiAgXCJoYXJyY2lyXCI6XCJcXHUyOTQ4XCIsXG4gIFwiaGFycndcIjpcIlxcdTIxQURcIixcbiAgXCJIYXRcIjpcIlxcdTAwNUVcIixcbiAgXCJoYmFyXCI6XCJcXHUyMTBGXCIsXG4gIFwiSGNpcmNcIjpcIlxcdTAxMjRcIixcbiAgXCJoY2lyY1wiOlwiXFx1MDEyNVwiLFxuICBcImhlYXJ0c1wiOlwiXFx1MjY2NVwiLFxuICBcImhlYXJ0c3VpdFwiOlwiXFx1MjY2NVwiLFxuICBcImhlbGxpcFwiOlwiXFx1MjAyNlwiLFxuICBcImhlcmNvblwiOlwiXFx1MjJCOVwiLFxuICBcIkhmclwiOlwiXFx1MjEwQ1wiLFxuICBcImhmclwiOlwiXFx1RDgzNVxcdUREMjVcIixcbiAgXCJIaWxiZXJ0U3BhY2VcIjpcIlxcdTIxMEJcIixcbiAgXCJoa3NlYXJvd1wiOlwiXFx1MjkyNVwiLFxuICBcImhrc3dhcm93XCI6XCJcXHUyOTI2XCIsXG4gIFwiaG9hcnJcIjpcIlxcdTIxRkZcIixcbiAgXCJob210aHRcIjpcIlxcdTIyM0JcIixcbiAgXCJob29rbGVmdGFycm93XCI6XCJcXHUyMUE5XCIsXG4gIFwiaG9va3JpZ2h0YXJyb3dcIjpcIlxcdTIxQUFcIixcbiAgXCJIb3BmXCI6XCJcXHUyMTBEXCIsXG4gIFwiaG9wZlwiOlwiXFx1RDgzNVxcdURENTlcIixcbiAgXCJob3JiYXJcIjpcIlxcdTIwMTVcIixcbiAgXCJIb3Jpem9udGFsTGluZVwiOlwiXFx1MjUwMFwiLFxuICBcIkhzY3JcIjpcIlxcdTIxMEJcIixcbiAgXCJoc2NyXCI6XCJcXHVEODM1XFx1RENCRFwiLFxuICBcImhzbGFzaFwiOlwiXFx1MjEwRlwiLFxuICBcIkhzdHJva1wiOlwiXFx1MDEyNlwiLFxuICBcImhzdHJva1wiOlwiXFx1MDEyN1wiLFxuICBcIkh1bXBEb3duSHVtcFwiOlwiXFx1MjI0RVwiLFxuICBcIkh1bXBFcXVhbFwiOlwiXFx1MjI0RlwiLFxuICBcImh5YnVsbFwiOlwiXFx1MjA0M1wiLFxuICBcImh5cGhlblwiOlwiXFx1MjAxMFwiLFxuICBcIklhY3V0ZVwiOlwiXFx1MDBDRFwiLFxuICBcImlhY3V0ZVwiOlwiXFx1MDBFRFwiLFxuICBcImljXCI6XCJcXHUyMDYzXCIsXG4gIFwiSWNpcmNcIjpcIlxcdTAwQ0VcIixcbiAgXCJpY2lyY1wiOlwiXFx1MDBFRVwiLFxuICBcIkljeVwiOlwiXFx1MDQxOFwiLFxuICBcImljeVwiOlwiXFx1MDQzOFwiLFxuICBcIklkb3RcIjpcIlxcdTAxMzBcIixcbiAgXCJJRWN5XCI6XCJcXHUwNDE1XCIsXG4gIFwiaWVjeVwiOlwiXFx1MDQzNVwiLFxuICBcImlleGNsXCI6XCJcXHUwMEExXCIsXG4gIFwiaWZmXCI6XCJcXHUyMUQ0XCIsXG4gIFwiSWZyXCI6XCJcXHUyMTExXCIsXG4gIFwiaWZyXCI6XCJcXHVEODM1XFx1REQyNlwiLFxuICBcIklncmF2ZVwiOlwiXFx1MDBDQ1wiLFxuICBcImlncmF2ZVwiOlwiXFx1MDBFQ1wiLFxuICBcImlpXCI6XCJcXHUyMTQ4XCIsXG4gIFwiaWlpaW50XCI6XCJcXHUyQTBDXCIsXG4gIFwiaWlpbnRcIjpcIlxcdTIyMkRcIixcbiAgXCJpaW5maW5cIjpcIlxcdTI5RENcIixcbiAgXCJpaW90YVwiOlwiXFx1MjEyOVwiLFxuICBcIklKbGlnXCI6XCJcXHUwMTMyXCIsXG4gIFwiaWpsaWdcIjpcIlxcdTAxMzNcIixcbiAgXCJJbVwiOlwiXFx1MjExMVwiLFxuICBcIkltYWNyXCI6XCJcXHUwMTJBXCIsXG4gIFwiaW1hY3JcIjpcIlxcdTAxMkJcIixcbiAgXCJpbWFnZVwiOlwiXFx1MjExMVwiLFxuICBcIkltYWdpbmFyeUlcIjpcIlxcdTIxNDhcIixcbiAgXCJpbWFnbGluZVwiOlwiXFx1MjExMFwiLFxuICBcImltYWdwYXJ0XCI6XCJcXHUyMTExXCIsXG4gIFwiaW1hdGhcIjpcIlxcdTAxMzFcIixcbiAgXCJpbW9mXCI6XCJcXHUyMkI3XCIsXG4gIFwiaW1wZWRcIjpcIlxcdTAxQjVcIixcbiAgXCJJbXBsaWVzXCI6XCJcXHUyMUQyXCIsXG4gIFwiaW5cIjpcIlxcdTIyMDhcIixcbiAgXCJpbmNhcmVcIjpcIlxcdTIxMDVcIixcbiAgXCJpbmZpblwiOlwiXFx1MjIxRVwiLFxuICBcImluZmludGllXCI6XCJcXHUyOUREXCIsXG4gIFwiaW5vZG90XCI6XCJcXHUwMTMxXCIsXG4gIFwiSW50XCI6XCJcXHUyMjJDXCIsXG4gIFwiaW50XCI6XCJcXHUyMjJCXCIsXG4gIFwiaW50Y2FsXCI6XCJcXHUyMkJBXCIsXG4gIFwiaW50ZWdlcnNcIjpcIlxcdTIxMjRcIixcbiAgXCJJbnRlZ3JhbFwiOlwiXFx1MjIyQlwiLFxuICBcImludGVyY2FsXCI6XCJcXHUyMkJBXCIsXG4gIFwiSW50ZXJzZWN0aW9uXCI6XCJcXHUyMkMyXCIsXG4gIFwiaW50bGFyaGtcIjpcIlxcdTJBMTdcIixcbiAgXCJpbnRwcm9kXCI6XCJcXHUyQTNDXCIsXG4gIFwiSW52aXNpYmxlQ29tbWFcIjpcIlxcdTIwNjNcIixcbiAgXCJJbnZpc2libGVUaW1lc1wiOlwiXFx1MjA2MlwiLFxuICBcIklPY3lcIjpcIlxcdTA0MDFcIixcbiAgXCJpb2N5XCI6XCJcXHUwNDUxXCIsXG4gIFwiSW9nb25cIjpcIlxcdTAxMkVcIixcbiAgXCJpb2dvblwiOlwiXFx1MDEyRlwiLFxuICBcIklvcGZcIjpcIlxcdUQ4MzVcXHVERDQwXCIsXG4gIFwiaW9wZlwiOlwiXFx1RDgzNVxcdURENUFcIixcbiAgXCJJb3RhXCI6XCJcXHUwMzk5XCIsXG4gIFwiaW90YVwiOlwiXFx1MDNCOVwiLFxuICBcImlwcm9kXCI6XCJcXHUyQTNDXCIsXG4gIFwiaXF1ZXN0XCI6XCJcXHUwMEJGXCIsXG4gIFwiSXNjclwiOlwiXFx1MjExMFwiLFxuICBcImlzY3JcIjpcIlxcdUQ4MzVcXHVEQ0JFXCIsXG4gIFwiaXNpblwiOlwiXFx1MjIwOFwiLFxuICBcImlzaW5kb3RcIjpcIlxcdTIyRjVcIixcbiAgXCJpc2luRVwiOlwiXFx1MjJGOVwiLFxuICBcImlzaW5zXCI6XCJcXHUyMkY0XCIsXG4gIFwiaXNpbnN2XCI6XCJcXHUyMkYzXCIsXG4gIFwiaXNpbnZcIjpcIlxcdTIyMDhcIixcbiAgXCJpdFwiOlwiXFx1MjA2MlwiLFxuICBcIkl0aWxkZVwiOlwiXFx1MDEyOFwiLFxuICBcIml0aWxkZVwiOlwiXFx1MDEyOVwiLFxuICBcIkl1a2N5XCI6XCJcXHUwNDA2XCIsXG4gIFwiaXVrY3lcIjpcIlxcdTA0NTZcIixcbiAgXCJJdW1sXCI6XCJcXHUwMENGXCIsXG4gIFwiaXVtbFwiOlwiXFx1MDBFRlwiLFxuICBcIkpjaXJjXCI6XCJcXHUwMTM0XCIsXG4gIFwiamNpcmNcIjpcIlxcdTAxMzVcIixcbiAgXCJKY3lcIjpcIlxcdTA0MTlcIixcbiAgXCJqY3lcIjpcIlxcdTA0MzlcIixcbiAgXCJKZnJcIjpcIlxcdUQ4MzVcXHVERDBEXCIsXG4gIFwiamZyXCI6XCJcXHVEODM1XFx1REQyN1wiLFxuICBcImptYXRoXCI6XCJcXHUwMjM3XCIsXG4gIFwiSm9wZlwiOlwiXFx1RDgzNVxcdURENDFcIixcbiAgXCJqb3BmXCI6XCJcXHVEODM1XFx1REQ1QlwiLFxuICBcIkpzY3JcIjpcIlxcdUQ4MzVcXHVEQ0E1XCIsXG4gIFwianNjclwiOlwiXFx1RDgzNVxcdURDQkZcIixcbiAgXCJKc2VyY3lcIjpcIlxcdTA0MDhcIixcbiAgXCJqc2VyY3lcIjpcIlxcdTA0NThcIixcbiAgXCJKdWtjeVwiOlwiXFx1MDQwNFwiLFxuICBcImp1a2N5XCI6XCJcXHUwNDU0XCIsXG4gIFwiS2FwcGFcIjpcIlxcdTAzOUFcIixcbiAgXCJrYXBwYVwiOlwiXFx1MDNCQVwiLFxuICBcImthcHBhdlwiOlwiXFx1MDNGMFwiLFxuICBcIktjZWRpbFwiOlwiXFx1MDEzNlwiLFxuICBcImtjZWRpbFwiOlwiXFx1MDEzN1wiLFxuICBcIktjeVwiOlwiXFx1MDQxQVwiLFxuICBcImtjeVwiOlwiXFx1MDQzQVwiLFxuICBcIktmclwiOlwiXFx1RDgzNVxcdUREMEVcIixcbiAgXCJrZnJcIjpcIlxcdUQ4MzVcXHVERDI4XCIsXG4gIFwia2dyZWVuXCI6XCJcXHUwMTM4XCIsXG4gIFwiS0hjeVwiOlwiXFx1MDQyNVwiLFxuICBcImtoY3lcIjpcIlxcdTA0NDVcIixcbiAgXCJLSmN5XCI6XCJcXHUwNDBDXCIsXG4gIFwia2pjeVwiOlwiXFx1MDQ1Q1wiLFxuICBcIktvcGZcIjpcIlxcdUQ4MzVcXHVERDQyXCIsXG4gIFwia29wZlwiOlwiXFx1RDgzNVxcdURENUNcIixcbiAgXCJLc2NyXCI6XCJcXHVEODM1XFx1RENBNlwiLFxuICBcImtzY3JcIjpcIlxcdUQ4MzVcXHVEQ0MwXCIsXG4gIFwibEFhcnJcIjpcIlxcdTIxREFcIixcbiAgXCJMYWN1dGVcIjpcIlxcdTAxMzlcIixcbiAgXCJsYWN1dGVcIjpcIlxcdTAxM0FcIixcbiAgXCJsYWVtcHR5dlwiOlwiXFx1MjlCNFwiLFxuICBcImxhZ3JhblwiOlwiXFx1MjExMlwiLFxuICBcIkxhbWJkYVwiOlwiXFx1MDM5QlwiLFxuICBcImxhbWJkYVwiOlwiXFx1MDNCQlwiLFxuICBcIkxhbmdcIjpcIlxcdTI3RUFcIixcbiAgXCJsYW5nXCI6XCJcXHUyN0U4XCIsXG4gIFwibGFuZ2RcIjpcIlxcdTI5OTFcIixcbiAgXCJsYW5nbGVcIjpcIlxcdTI3RThcIixcbiAgXCJsYXBcIjpcIlxcdTJBODVcIixcbiAgXCJMYXBsYWNldHJmXCI6XCJcXHUyMTEyXCIsXG4gIFwibGFxdW9cIjpcIlxcdTAwQUJcIixcbiAgXCJMYXJyXCI6XCJcXHUyMTlFXCIsXG4gIFwibEFyclwiOlwiXFx1MjFEMFwiLFxuICBcImxhcnJcIjpcIlxcdTIxOTBcIixcbiAgXCJsYXJyYlwiOlwiXFx1MjFFNFwiLFxuICBcImxhcnJiZnNcIjpcIlxcdTI5MUZcIixcbiAgXCJsYXJyZnNcIjpcIlxcdTI5MURcIixcbiAgXCJsYXJyaGtcIjpcIlxcdTIxQTlcIixcbiAgXCJsYXJybHBcIjpcIlxcdTIxQUJcIixcbiAgXCJsYXJycGxcIjpcIlxcdTI5MzlcIixcbiAgXCJsYXJyc2ltXCI6XCJcXHUyOTczXCIsXG4gIFwibGFycnRsXCI6XCJcXHUyMUEyXCIsXG4gIFwibGF0XCI6XCJcXHUyQUFCXCIsXG4gIFwibEF0YWlsXCI6XCJcXHUyOTFCXCIsXG4gIFwibGF0YWlsXCI6XCJcXHUyOTE5XCIsXG4gIFwibGF0ZVwiOlwiXFx1MkFBRFwiLFxuICBcImxhdGVzXCI6XCJcXHUyQUFEXFx1RkUwMFwiLFxuICBcImxCYXJyXCI6XCJcXHUyOTBFXCIsXG4gIFwibGJhcnJcIjpcIlxcdTI5MENcIixcbiAgXCJsYmJya1wiOlwiXFx1Mjc3MlwiLFxuICBcImxicmFjZVwiOlwiXFx1MDA3QlwiLFxuICBcImxicmFja1wiOlwiXFx1MDA1QlwiLFxuICBcImxicmtlXCI6XCJcXHUyOThCXCIsXG4gIFwibGJya3NsZFwiOlwiXFx1Mjk4RlwiLFxuICBcImxicmtzbHVcIjpcIlxcdTI5OERcIixcbiAgXCJMY2Fyb25cIjpcIlxcdTAxM0RcIixcbiAgXCJsY2Fyb25cIjpcIlxcdTAxM0VcIixcbiAgXCJMY2VkaWxcIjpcIlxcdTAxM0JcIixcbiAgXCJsY2VkaWxcIjpcIlxcdTAxM0NcIixcbiAgXCJsY2VpbFwiOlwiXFx1MjMwOFwiLFxuICBcImxjdWJcIjpcIlxcdTAwN0JcIixcbiAgXCJMY3lcIjpcIlxcdTA0MUJcIixcbiAgXCJsY3lcIjpcIlxcdTA0M0JcIixcbiAgXCJsZGNhXCI6XCJcXHUyOTM2XCIsXG4gIFwibGRxdW9cIjpcIlxcdTIwMUNcIixcbiAgXCJsZHF1b3JcIjpcIlxcdTIwMUVcIixcbiAgXCJsZHJkaGFyXCI6XCJcXHUyOTY3XCIsXG4gIFwibGRydXNoYXJcIjpcIlxcdTI5NEJcIixcbiAgXCJsZHNoXCI6XCJcXHUyMUIyXCIsXG4gIFwibEVcIjpcIlxcdTIyNjZcIixcbiAgXCJsZVwiOlwiXFx1MjI2NFwiLFxuICBcIkxlZnRBbmdsZUJyYWNrZXRcIjpcIlxcdTI3RThcIixcbiAgXCJMZWZ0QXJyb3dcIjpcIlxcdTIxOTBcIixcbiAgXCJMZWZ0YXJyb3dcIjpcIlxcdTIxRDBcIixcbiAgXCJsZWZ0YXJyb3dcIjpcIlxcdTIxOTBcIixcbiAgXCJMZWZ0QXJyb3dCYXJcIjpcIlxcdTIxRTRcIixcbiAgXCJMZWZ0QXJyb3dSaWdodEFycm93XCI6XCJcXHUyMUM2XCIsXG4gIFwibGVmdGFycm93dGFpbFwiOlwiXFx1MjFBMlwiLFxuICBcIkxlZnRDZWlsaW5nXCI6XCJcXHUyMzA4XCIsXG4gIFwiTGVmdERvdWJsZUJyYWNrZXRcIjpcIlxcdTI3RTZcIixcbiAgXCJMZWZ0RG93blRlZVZlY3RvclwiOlwiXFx1Mjk2MVwiLFxuICBcIkxlZnREb3duVmVjdG9yXCI6XCJcXHUyMUMzXCIsXG4gIFwiTGVmdERvd25WZWN0b3JCYXJcIjpcIlxcdTI5NTlcIixcbiAgXCJMZWZ0Rmxvb3JcIjpcIlxcdTIzMEFcIixcbiAgXCJsZWZ0aGFycG9vbmRvd25cIjpcIlxcdTIxQkRcIixcbiAgXCJsZWZ0aGFycG9vbnVwXCI6XCJcXHUyMUJDXCIsXG4gIFwibGVmdGxlZnRhcnJvd3NcIjpcIlxcdTIxQzdcIixcbiAgXCJMZWZ0UmlnaHRBcnJvd1wiOlwiXFx1MjE5NFwiLFxuICBcIkxlZnRyaWdodGFycm93XCI6XCJcXHUyMUQ0XCIsXG4gIFwibGVmdHJpZ2h0YXJyb3dcIjpcIlxcdTIxOTRcIixcbiAgXCJsZWZ0cmlnaHRhcnJvd3NcIjpcIlxcdTIxQzZcIixcbiAgXCJsZWZ0cmlnaHRoYXJwb29uc1wiOlwiXFx1MjFDQlwiLFxuICBcImxlZnRyaWdodHNxdWlnYXJyb3dcIjpcIlxcdTIxQURcIixcbiAgXCJMZWZ0UmlnaHRWZWN0b3JcIjpcIlxcdTI5NEVcIixcbiAgXCJMZWZ0VGVlXCI6XCJcXHUyMkEzXCIsXG4gIFwiTGVmdFRlZUFycm93XCI6XCJcXHUyMUE0XCIsXG4gIFwiTGVmdFRlZVZlY3RvclwiOlwiXFx1Mjk1QVwiLFxuICBcImxlZnR0aHJlZXRpbWVzXCI6XCJcXHUyMkNCXCIsXG4gIFwiTGVmdFRyaWFuZ2xlXCI6XCJcXHUyMkIyXCIsXG4gIFwiTGVmdFRyaWFuZ2xlQmFyXCI6XCJcXHUyOUNGXCIsXG4gIFwiTGVmdFRyaWFuZ2xlRXF1YWxcIjpcIlxcdTIyQjRcIixcbiAgXCJMZWZ0VXBEb3duVmVjdG9yXCI6XCJcXHUyOTUxXCIsXG4gIFwiTGVmdFVwVGVlVmVjdG9yXCI6XCJcXHUyOTYwXCIsXG4gIFwiTGVmdFVwVmVjdG9yXCI6XCJcXHUyMUJGXCIsXG4gIFwiTGVmdFVwVmVjdG9yQmFyXCI6XCJcXHUyOTU4XCIsXG4gIFwiTGVmdFZlY3RvclwiOlwiXFx1MjFCQ1wiLFxuICBcIkxlZnRWZWN0b3JCYXJcIjpcIlxcdTI5NTJcIixcbiAgXCJsRWdcIjpcIlxcdTJBOEJcIixcbiAgXCJsZWdcIjpcIlxcdTIyREFcIixcbiAgXCJsZXFcIjpcIlxcdTIyNjRcIixcbiAgXCJsZXFxXCI6XCJcXHUyMjY2XCIsXG4gIFwibGVxc2xhbnRcIjpcIlxcdTJBN0RcIixcbiAgXCJsZXNcIjpcIlxcdTJBN0RcIixcbiAgXCJsZXNjY1wiOlwiXFx1MkFBOFwiLFxuICBcImxlc2RvdFwiOlwiXFx1MkE3RlwiLFxuICBcImxlc2RvdG9cIjpcIlxcdTJBODFcIixcbiAgXCJsZXNkb3RvclwiOlwiXFx1MkE4M1wiLFxuICBcImxlc2dcIjpcIlxcdTIyREFcXHVGRTAwXCIsXG4gIFwibGVzZ2VzXCI6XCJcXHUyQTkzXCIsXG4gIFwibGVzc2FwcHJveFwiOlwiXFx1MkE4NVwiLFxuICBcImxlc3Nkb3RcIjpcIlxcdTIyRDZcIixcbiAgXCJsZXNzZXFndHJcIjpcIlxcdTIyREFcIixcbiAgXCJsZXNzZXFxZ3RyXCI6XCJcXHUyQThCXCIsXG4gIFwiTGVzc0VxdWFsR3JlYXRlclwiOlwiXFx1MjJEQVwiLFxuICBcIkxlc3NGdWxsRXF1YWxcIjpcIlxcdTIyNjZcIixcbiAgXCJMZXNzR3JlYXRlclwiOlwiXFx1MjI3NlwiLFxuICBcImxlc3NndHJcIjpcIlxcdTIyNzZcIixcbiAgXCJMZXNzTGVzc1wiOlwiXFx1MkFBMVwiLFxuICBcImxlc3NzaW1cIjpcIlxcdTIyNzJcIixcbiAgXCJMZXNzU2xhbnRFcXVhbFwiOlwiXFx1MkE3RFwiLFxuICBcIkxlc3NUaWxkZVwiOlwiXFx1MjI3MlwiLFxuICBcImxmaXNodFwiOlwiXFx1Mjk3Q1wiLFxuICBcImxmbG9vclwiOlwiXFx1MjMwQVwiLFxuICBcIkxmclwiOlwiXFx1RDgzNVxcdUREMEZcIixcbiAgXCJsZnJcIjpcIlxcdUQ4MzVcXHVERDI5XCIsXG4gIFwibGdcIjpcIlxcdTIyNzZcIixcbiAgXCJsZ0VcIjpcIlxcdTJBOTFcIixcbiAgXCJsSGFyXCI6XCJcXHUyOTYyXCIsXG4gIFwibGhhcmRcIjpcIlxcdTIxQkRcIixcbiAgXCJsaGFydVwiOlwiXFx1MjFCQ1wiLFxuICBcImxoYXJ1bFwiOlwiXFx1Mjk2QVwiLFxuICBcImxoYmxrXCI6XCJcXHUyNTg0XCIsXG4gIFwiTEpjeVwiOlwiXFx1MDQwOVwiLFxuICBcImxqY3lcIjpcIlxcdTA0NTlcIixcbiAgXCJMbFwiOlwiXFx1MjJEOFwiLFxuICBcImxsXCI6XCJcXHUyMjZBXCIsXG4gIFwibGxhcnJcIjpcIlxcdTIxQzdcIixcbiAgXCJsbGNvcm5lclwiOlwiXFx1MjMxRVwiLFxuICBcIkxsZWZ0YXJyb3dcIjpcIlxcdTIxREFcIixcbiAgXCJsbGhhcmRcIjpcIlxcdTI5NkJcIixcbiAgXCJsbHRyaVwiOlwiXFx1MjVGQVwiLFxuICBcIkxtaWRvdFwiOlwiXFx1MDEzRlwiLFxuICBcImxtaWRvdFwiOlwiXFx1MDE0MFwiLFxuICBcImxtb3VzdFwiOlwiXFx1MjNCMFwiLFxuICBcImxtb3VzdGFjaGVcIjpcIlxcdTIzQjBcIixcbiAgXCJsbmFwXCI6XCJcXHUyQTg5XCIsXG4gIFwibG5hcHByb3hcIjpcIlxcdTJBODlcIixcbiAgXCJsbkVcIjpcIlxcdTIyNjhcIixcbiAgXCJsbmVcIjpcIlxcdTJBODdcIixcbiAgXCJsbmVxXCI6XCJcXHUyQTg3XCIsXG4gIFwibG5lcXFcIjpcIlxcdTIyNjhcIixcbiAgXCJsbnNpbVwiOlwiXFx1MjJFNlwiLFxuICBcImxvYW5nXCI6XCJcXHUyN0VDXCIsXG4gIFwibG9hcnJcIjpcIlxcdTIxRkRcIixcbiAgXCJsb2Jya1wiOlwiXFx1MjdFNlwiLFxuICBcIkxvbmdMZWZ0QXJyb3dcIjpcIlxcdTI3RjVcIixcbiAgXCJMb25nbGVmdGFycm93XCI6XCJcXHUyN0Y4XCIsXG4gIFwibG9uZ2xlZnRhcnJvd1wiOlwiXFx1MjdGNVwiLFxuICBcIkxvbmdMZWZ0UmlnaHRBcnJvd1wiOlwiXFx1MjdGN1wiLFxuICBcIkxvbmdsZWZ0cmlnaHRhcnJvd1wiOlwiXFx1MjdGQVwiLFxuICBcImxvbmdsZWZ0cmlnaHRhcnJvd1wiOlwiXFx1MjdGN1wiLFxuICBcImxvbmdtYXBzdG9cIjpcIlxcdTI3RkNcIixcbiAgXCJMb25nUmlnaHRBcnJvd1wiOlwiXFx1MjdGNlwiLFxuICBcIkxvbmdyaWdodGFycm93XCI6XCJcXHUyN0Y5XCIsXG4gIFwibG9uZ3JpZ2h0YXJyb3dcIjpcIlxcdTI3RjZcIixcbiAgXCJsb29wYXJyb3dsZWZ0XCI6XCJcXHUyMUFCXCIsXG4gIFwibG9vcGFycm93cmlnaHRcIjpcIlxcdTIxQUNcIixcbiAgXCJsb3BhclwiOlwiXFx1Mjk4NVwiLFxuICBcIkxvcGZcIjpcIlxcdUQ4MzVcXHVERDQzXCIsXG4gIFwibG9wZlwiOlwiXFx1RDgzNVxcdURENURcIixcbiAgXCJsb3BsdXNcIjpcIlxcdTJBMkRcIixcbiAgXCJsb3RpbWVzXCI6XCJcXHUyQTM0XCIsXG4gIFwibG93YXN0XCI6XCJcXHUyMjE3XCIsXG4gIFwibG93YmFyXCI6XCJcXHUwMDVGXCIsXG4gIFwiTG93ZXJMZWZ0QXJyb3dcIjpcIlxcdTIxOTlcIixcbiAgXCJMb3dlclJpZ2h0QXJyb3dcIjpcIlxcdTIxOThcIixcbiAgXCJsb3pcIjpcIlxcdTI1Q0FcIixcbiAgXCJsb3plbmdlXCI6XCJcXHUyNUNBXCIsXG4gIFwibG96ZlwiOlwiXFx1MjlFQlwiLFxuICBcImxwYXJcIjpcIlxcdTAwMjhcIixcbiAgXCJscGFybHRcIjpcIlxcdTI5OTNcIixcbiAgXCJscmFyclwiOlwiXFx1MjFDNlwiLFxuICBcImxyY29ybmVyXCI6XCJcXHUyMzFGXCIsXG4gIFwibHJoYXJcIjpcIlxcdTIxQ0JcIixcbiAgXCJscmhhcmRcIjpcIlxcdTI5NkRcIixcbiAgXCJscm1cIjpcIlxcdTIwMEVcIixcbiAgXCJscnRyaVwiOlwiXFx1MjJCRlwiLFxuICBcImxzYXF1b1wiOlwiXFx1MjAzOVwiLFxuICBcIkxzY3JcIjpcIlxcdTIxMTJcIixcbiAgXCJsc2NyXCI6XCJcXHVEODM1XFx1RENDMVwiLFxuICBcIkxzaFwiOlwiXFx1MjFCMFwiLFxuICBcImxzaFwiOlwiXFx1MjFCMFwiLFxuICBcImxzaW1cIjpcIlxcdTIyNzJcIixcbiAgXCJsc2ltZVwiOlwiXFx1MkE4RFwiLFxuICBcImxzaW1nXCI6XCJcXHUyQThGXCIsXG4gIFwibHNxYlwiOlwiXFx1MDA1QlwiLFxuICBcImxzcXVvXCI6XCJcXHUyMDE4XCIsXG4gIFwibHNxdW9yXCI6XCJcXHUyMDFBXCIsXG4gIFwiTHN0cm9rXCI6XCJcXHUwMTQxXCIsXG4gIFwibHN0cm9rXCI6XCJcXHUwMTQyXCIsXG4gIFwiTFRcIjpcIlxcdTAwM0NcIixcbiAgXCJMdFwiOlwiXFx1MjI2QVwiLFxuICBcImx0XCI6XCJcXHUwMDNDXCIsXG4gIFwibHRjY1wiOlwiXFx1MkFBNlwiLFxuICBcImx0Y2lyXCI6XCJcXHUyQTc5XCIsXG4gIFwibHRkb3RcIjpcIlxcdTIyRDZcIixcbiAgXCJsdGhyZWVcIjpcIlxcdTIyQ0JcIixcbiAgXCJsdGltZXNcIjpcIlxcdTIyQzlcIixcbiAgXCJsdGxhcnJcIjpcIlxcdTI5NzZcIixcbiAgXCJsdHF1ZXN0XCI6XCJcXHUyQTdCXCIsXG4gIFwibHRyaVwiOlwiXFx1MjVDM1wiLFxuICBcImx0cmllXCI6XCJcXHUyMkI0XCIsXG4gIFwibHRyaWZcIjpcIlxcdTI1QzJcIixcbiAgXCJsdHJQYXJcIjpcIlxcdTI5OTZcIixcbiAgXCJsdXJkc2hhclwiOlwiXFx1Mjk0QVwiLFxuICBcImx1cnVoYXJcIjpcIlxcdTI5NjZcIixcbiAgXCJsdmVydG5lcXFcIjpcIlxcdTIyNjhcXHVGRTAwXCIsXG4gIFwibHZuRVwiOlwiXFx1MjI2OFxcdUZFMDBcIixcbiAgXCJtYWNyXCI6XCJcXHUwMEFGXCIsXG4gIFwibWFsZVwiOlwiXFx1MjY0MlwiLFxuICBcIm1hbHRcIjpcIlxcdTI3MjBcIixcbiAgXCJtYWx0ZXNlXCI6XCJcXHUyNzIwXCIsXG4gIFwiTWFwXCI6XCJcXHUyOTA1XCIsXG4gIFwibWFwXCI6XCJcXHUyMUE2XCIsXG4gIFwibWFwc3RvXCI6XCJcXHUyMUE2XCIsXG4gIFwibWFwc3RvZG93blwiOlwiXFx1MjFBN1wiLFxuICBcIm1hcHN0b2xlZnRcIjpcIlxcdTIxQTRcIixcbiAgXCJtYXBzdG91cFwiOlwiXFx1MjFBNVwiLFxuICBcIm1hcmtlclwiOlwiXFx1MjVBRVwiLFxuICBcIm1jb21tYVwiOlwiXFx1MkEyOVwiLFxuICBcIk1jeVwiOlwiXFx1MDQxQ1wiLFxuICBcIm1jeVwiOlwiXFx1MDQzQ1wiLFxuICBcIm1kYXNoXCI6XCJcXHUyMDE0XCIsXG4gIFwibUREb3RcIjpcIlxcdTIyM0FcIixcbiAgXCJtZWFzdXJlZGFuZ2xlXCI6XCJcXHUyMjIxXCIsXG4gIFwiTWVkaXVtU3BhY2VcIjpcIlxcdTIwNUZcIixcbiAgXCJNZWxsaW50cmZcIjpcIlxcdTIxMzNcIixcbiAgXCJNZnJcIjpcIlxcdUQ4MzVcXHVERDEwXCIsXG4gIFwibWZyXCI6XCJcXHVEODM1XFx1REQyQVwiLFxuICBcIm1ob1wiOlwiXFx1MjEyN1wiLFxuICBcIm1pY3JvXCI6XCJcXHUwMEI1XCIsXG4gIFwibWlkXCI6XCJcXHUyMjIzXCIsXG4gIFwibWlkYXN0XCI6XCJcXHUwMDJBXCIsXG4gIFwibWlkY2lyXCI6XCJcXHUyQUYwXCIsXG4gIFwibWlkZG90XCI6XCJcXHUwMEI3XCIsXG4gIFwibWludXNcIjpcIlxcdTIyMTJcIixcbiAgXCJtaW51c2JcIjpcIlxcdTIyOUZcIixcbiAgXCJtaW51c2RcIjpcIlxcdTIyMzhcIixcbiAgXCJtaW51c2R1XCI6XCJcXHUyQTJBXCIsXG4gIFwiTWludXNQbHVzXCI6XCJcXHUyMjEzXCIsXG4gIFwibWxjcFwiOlwiXFx1MkFEQlwiLFxuICBcIm1sZHJcIjpcIlxcdTIwMjZcIixcbiAgXCJtbnBsdXNcIjpcIlxcdTIyMTNcIixcbiAgXCJtb2RlbHNcIjpcIlxcdTIyQTdcIixcbiAgXCJNb3BmXCI6XCJcXHVEODM1XFx1REQ0NFwiLFxuICBcIm1vcGZcIjpcIlxcdUQ4MzVcXHVERDVFXCIsXG4gIFwibXBcIjpcIlxcdTIyMTNcIixcbiAgXCJNc2NyXCI6XCJcXHUyMTMzXCIsXG4gIFwibXNjclwiOlwiXFx1RDgzNVxcdURDQzJcIixcbiAgXCJtc3Rwb3NcIjpcIlxcdTIyM0VcIixcbiAgXCJNdVwiOlwiXFx1MDM5Q1wiLFxuICBcIm11XCI6XCJcXHUwM0JDXCIsXG4gIFwibXVsdGltYXBcIjpcIlxcdTIyQjhcIixcbiAgXCJtdW1hcFwiOlwiXFx1MjJCOFwiLFxuICBcIm5hYmxhXCI6XCJcXHUyMjA3XCIsXG4gIFwiTmFjdXRlXCI6XCJcXHUwMTQzXCIsXG4gIFwibmFjdXRlXCI6XCJcXHUwMTQ0XCIsXG4gIFwibmFuZ1wiOlwiXFx1MjIyMFxcdTIwRDJcIixcbiAgXCJuYXBcIjpcIlxcdTIyNDlcIixcbiAgXCJuYXBFXCI6XCJcXHUyQTcwXFx1MDMzOFwiLFxuICBcIm5hcGlkXCI6XCJcXHUyMjRCXFx1MDMzOFwiLFxuICBcIm5hcG9zXCI6XCJcXHUwMTQ5XCIsXG4gIFwibmFwcHJveFwiOlwiXFx1MjI0OVwiLFxuICBcIm5hdHVyXCI6XCJcXHUyNjZFXCIsXG4gIFwibmF0dXJhbFwiOlwiXFx1MjY2RVwiLFxuICBcIm5hdHVyYWxzXCI6XCJcXHUyMTE1XCIsXG4gIFwibmJzcFwiOlwiXFx1MDBBMFwiLFxuICBcIm5idW1wXCI6XCJcXHUyMjRFXFx1MDMzOFwiLFxuICBcIm5idW1wZVwiOlwiXFx1MjI0RlxcdTAzMzhcIixcbiAgXCJuY2FwXCI6XCJcXHUyQTQzXCIsXG4gIFwiTmNhcm9uXCI6XCJcXHUwMTQ3XCIsXG4gIFwibmNhcm9uXCI6XCJcXHUwMTQ4XCIsXG4gIFwiTmNlZGlsXCI6XCJcXHUwMTQ1XCIsXG4gIFwibmNlZGlsXCI6XCJcXHUwMTQ2XCIsXG4gIFwibmNvbmdcIjpcIlxcdTIyNDdcIixcbiAgXCJuY29uZ2RvdFwiOlwiXFx1MkE2RFxcdTAzMzhcIixcbiAgXCJuY3VwXCI6XCJcXHUyQTQyXCIsXG4gIFwiTmN5XCI6XCJcXHUwNDFEXCIsXG4gIFwibmN5XCI6XCJcXHUwNDNEXCIsXG4gIFwibmRhc2hcIjpcIlxcdTIwMTNcIixcbiAgXCJuZVwiOlwiXFx1MjI2MFwiLFxuICBcIm5lYXJoa1wiOlwiXFx1MjkyNFwiLFxuICBcIm5lQXJyXCI6XCJcXHUyMUQ3XCIsXG4gIFwibmVhcnJcIjpcIlxcdTIxOTdcIixcbiAgXCJuZWFycm93XCI6XCJcXHUyMTk3XCIsXG4gIFwibmVkb3RcIjpcIlxcdTIyNTBcXHUwMzM4XCIsXG4gIFwiTmVnYXRpdmVNZWRpdW1TcGFjZVwiOlwiXFx1MjAwQlwiLFxuICBcIk5lZ2F0aXZlVGhpY2tTcGFjZVwiOlwiXFx1MjAwQlwiLFxuICBcIk5lZ2F0aXZlVGhpblNwYWNlXCI6XCJcXHUyMDBCXCIsXG4gIFwiTmVnYXRpdmVWZXJ5VGhpblNwYWNlXCI6XCJcXHUyMDBCXCIsXG4gIFwibmVxdWl2XCI6XCJcXHUyMjYyXCIsXG4gIFwibmVzZWFyXCI6XCJcXHUyOTI4XCIsXG4gIFwibmVzaW1cIjpcIlxcdTIyNDJcXHUwMzM4XCIsXG4gIFwiTmVzdGVkR3JlYXRlckdyZWF0ZXJcIjpcIlxcdTIyNkJcIixcbiAgXCJOZXN0ZWRMZXNzTGVzc1wiOlwiXFx1MjI2QVwiLFxuICBcIk5ld0xpbmVcIjpcIlxcdTAwMEFcIixcbiAgXCJuZXhpc3RcIjpcIlxcdTIyMDRcIixcbiAgXCJuZXhpc3RzXCI6XCJcXHUyMjA0XCIsXG4gIFwiTmZyXCI6XCJcXHVEODM1XFx1REQxMVwiLFxuICBcIm5mclwiOlwiXFx1RDgzNVxcdUREMkJcIixcbiAgXCJuZ0VcIjpcIlxcdTIyNjdcXHUwMzM4XCIsXG4gIFwibmdlXCI6XCJcXHUyMjcxXCIsXG4gIFwibmdlcVwiOlwiXFx1MjI3MVwiLFxuICBcIm5nZXFxXCI6XCJcXHUyMjY3XFx1MDMzOFwiLFxuICBcIm5nZXFzbGFudFwiOlwiXFx1MkE3RVxcdTAzMzhcIixcbiAgXCJuZ2VzXCI6XCJcXHUyQTdFXFx1MDMzOFwiLFxuICBcIm5HZ1wiOlwiXFx1MjJEOVxcdTAzMzhcIixcbiAgXCJuZ3NpbVwiOlwiXFx1MjI3NVwiLFxuICBcIm5HdFwiOlwiXFx1MjI2QlxcdTIwRDJcIixcbiAgXCJuZ3RcIjpcIlxcdTIyNkZcIixcbiAgXCJuZ3RyXCI6XCJcXHUyMjZGXCIsXG4gIFwibkd0dlwiOlwiXFx1MjI2QlxcdTAzMzhcIixcbiAgXCJuaEFyclwiOlwiXFx1MjFDRVwiLFxuICBcIm5oYXJyXCI6XCJcXHUyMUFFXCIsXG4gIFwibmhwYXJcIjpcIlxcdTJBRjJcIixcbiAgXCJuaVwiOlwiXFx1MjIwQlwiLFxuICBcIm5pc1wiOlwiXFx1MjJGQ1wiLFxuICBcIm5pc2RcIjpcIlxcdTIyRkFcIixcbiAgXCJuaXZcIjpcIlxcdTIyMEJcIixcbiAgXCJOSmN5XCI6XCJcXHUwNDBBXCIsXG4gIFwibmpjeVwiOlwiXFx1MDQ1QVwiLFxuICBcIm5sQXJyXCI6XCJcXHUyMUNEXCIsXG4gIFwibmxhcnJcIjpcIlxcdTIxOUFcIixcbiAgXCJubGRyXCI6XCJcXHUyMDI1XCIsXG4gIFwibmxFXCI6XCJcXHUyMjY2XFx1MDMzOFwiLFxuICBcIm5sZVwiOlwiXFx1MjI3MFwiLFxuICBcIm5MZWZ0YXJyb3dcIjpcIlxcdTIxQ0RcIixcbiAgXCJubGVmdGFycm93XCI6XCJcXHUyMTlBXCIsXG4gIFwibkxlZnRyaWdodGFycm93XCI6XCJcXHUyMUNFXCIsXG4gIFwibmxlZnRyaWdodGFycm93XCI6XCJcXHUyMUFFXCIsXG4gIFwibmxlcVwiOlwiXFx1MjI3MFwiLFxuICBcIm5sZXFxXCI6XCJcXHUyMjY2XFx1MDMzOFwiLFxuICBcIm5sZXFzbGFudFwiOlwiXFx1MkE3RFxcdTAzMzhcIixcbiAgXCJubGVzXCI6XCJcXHUyQTdEXFx1MDMzOFwiLFxuICBcIm5sZXNzXCI6XCJcXHUyMjZFXCIsXG4gIFwibkxsXCI6XCJcXHUyMkQ4XFx1MDMzOFwiLFxuICBcIm5sc2ltXCI6XCJcXHUyMjc0XCIsXG4gIFwibkx0XCI6XCJcXHUyMjZBXFx1MjBEMlwiLFxuICBcIm5sdFwiOlwiXFx1MjI2RVwiLFxuICBcIm5sdHJpXCI6XCJcXHUyMkVBXCIsXG4gIFwibmx0cmllXCI6XCJcXHUyMkVDXCIsXG4gIFwibkx0dlwiOlwiXFx1MjI2QVxcdTAzMzhcIixcbiAgXCJubWlkXCI6XCJcXHUyMjI0XCIsXG4gIFwiTm9CcmVha1wiOlwiXFx1MjA2MFwiLFxuICBcIk5vbkJyZWFraW5nU3BhY2VcIjpcIlxcdTAwQTBcIixcbiAgXCJOb3BmXCI6XCJcXHUyMTE1XCIsXG4gIFwibm9wZlwiOlwiXFx1RDgzNVxcdURENUZcIixcbiAgXCJOb3RcIjpcIlxcdTJBRUNcIixcbiAgXCJub3RcIjpcIlxcdTAwQUNcIixcbiAgXCJOb3RDb25ncnVlbnRcIjpcIlxcdTIyNjJcIixcbiAgXCJOb3RDdXBDYXBcIjpcIlxcdTIyNkRcIixcbiAgXCJOb3REb3VibGVWZXJ0aWNhbEJhclwiOlwiXFx1MjIyNlwiLFxuICBcIk5vdEVsZW1lbnRcIjpcIlxcdTIyMDlcIixcbiAgXCJOb3RFcXVhbFwiOlwiXFx1MjI2MFwiLFxuICBcIk5vdEVxdWFsVGlsZGVcIjpcIlxcdTIyNDJcXHUwMzM4XCIsXG4gIFwiTm90RXhpc3RzXCI6XCJcXHUyMjA0XCIsXG4gIFwiTm90R3JlYXRlclwiOlwiXFx1MjI2RlwiLFxuICBcIk5vdEdyZWF0ZXJFcXVhbFwiOlwiXFx1MjI3MVwiLFxuICBcIk5vdEdyZWF0ZXJGdWxsRXF1YWxcIjpcIlxcdTIyNjdcXHUwMzM4XCIsXG4gIFwiTm90R3JlYXRlckdyZWF0ZXJcIjpcIlxcdTIyNkJcXHUwMzM4XCIsXG4gIFwiTm90R3JlYXRlckxlc3NcIjpcIlxcdTIyNzlcIixcbiAgXCJOb3RHcmVhdGVyU2xhbnRFcXVhbFwiOlwiXFx1MkE3RVxcdTAzMzhcIixcbiAgXCJOb3RHcmVhdGVyVGlsZGVcIjpcIlxcdTIyNzVcIixcbiAgXCJOb3RIdW1wRG93bkh1bXBcIjpcIlxcdTIyNEVcXHUwMzM4XCIsXG4gIFwiTm90SHVtcEVxdWFsXCI6XCJcXHUyMjRGXFx1MDMzOFwiLFxuICBcIm5vdGluXCI6XCJcXHUyMjA5XCIsXG4gIFwibm90aW5kb3RcIjpcIlxcdTIyRjVcXHUwMzM4XCIsXG4gIFwibm90aW5FXCI6XCJcXHUyMkY5XFx1MDMzOFwiLFxuICBcIm5vdGludmFcIjpcIlxcdTIyMDlcIixcbiAgXCJub3RpbnZiXCI6XCJcXHUyMkY3XCIsXG4gIFwibm90aW52Y1wiOlwiXFx1MjJGNlwiLFxuICBcIk5vdExlZnRUcmlhbmdsZVwiOlwiXFx1MjJFQVwiLFxuICBcIk5vdExlZnRUcmlhbmdsZUJhclwiOlwiXFx1MjlDRlxcdTAzMzhcIixcbiAgXCJOb3RMZWZ0VHJpYW5nbGVFcXVhbFwiOlwiXFx1MjJFQ1wiLFxuICBcIk5vdExlc3NcIjpcIlxcdTIyNkVcIixcbiAgXCJOb3RMZXNzRXF1YWxcIjpcIlxcdTIyNzBcIixcbiAgXCJOb3RMZXNzR3JlYXRlclwiOlwiXFx1MjI3OFwiLFxuICBcIk5vdExlc3NMZXNzXCI6XCJcXHUyMjZBXFx1MDMzOFwiLFxuICBcIk5vdExlc3NTbGFudEVxdWFsXCI6XCJcXHUyQTdEXFx1MDMzOFwiLFxuICBcIk5vdExlc3NUaWxkZVwiOlwiXFx1MjI3NFwiLFxuICBcIk5vdE5lc3RlZEdyZWF0ZXJHcmVhdGVyXCI6XCJcXHUyQUEyXFx1MDMzOFwiLFxuICBcIk5vdE5lc3RlZExlc3NMZXNzXCI6XCJcXHUyQUExXFx1MDMzOFwiLFxuICBcIm5vdG5pXCI6XCJcXHUyMjBDXCIsXG4gIFwibm90bml2YVwiOlwiXFx1MjIwQ1wiLFxuICBcIm5vdG5pdmJcIjpcIlxcdTIyRkVcIixcbiAgXCJub3RuaXZjXCI6XCJcXHUyMkZEXCIsXG4gIFwiTm90UHJlY2VkZXNcIjpcIlxcdTIyODBcIixcbiAgXCJOb3RQcmVjZWRlc0VxdWFsXCI6XCJcXHUyQUFGXFx1MDMzOFwiLFxuICBcIk5vdFByZWNlZGVzU2xhbnRFcXVhbFwiOlwiXFx1MjJFMFwiLFxuICBcIk5vdFJldmVyc2VFbGVtZW50XCI6XCJcXHUyMjBDXCIsXG4gIFwiTm90UmlnaHRUcmlhbmdsZVwiOlwiXFx1MjJFQlwiLFxuICBcIk5vdFJpZ2h0VHJpYW5nbGVCYXJcIjpcIlxcdTI5RDBcXHUwMzM4XCIsXG4gIFwiTm90UmlnaHRUcmlhbmdsZUVxdWFsXCI6XCJcXHUyMkVEXCIsXG4gIFwiTm90U3F1YXJlU3Vic2V0XCI6XCJcXHUyMjhGXFx1MDMzOFwiLFxuICBcIk5vdFNxdWFyZVN1YnNldEVxdWFsXCI6XCJcXHUyMkUyXCIsXG4gIFwiTm90U3F1YXJlU3VwZXJzZXRcIjpcIlxcdTIyOTBcXHUwMzM4XCIsXG4gIFwiTm90U3F1YXJlU3VwZXJzZXRFcXVhbFwiOlwiXFx1MjJFM1wiLFxuICBcIk5vdFN1YnNldFwiOlwiXFx1MjI4MlxcdTIwRDJcIixcbiAgXCJOb3RTdWJzZXRFcXVhbFwiOlwiXFx1MjI4OFwiLFxuICBcIk5vdFN1Y2NlZWRzXCI6XCJcXHUyMjgxXCIsXG4gIFwiTm90U3VjY2VlZHNFcXVhbFwiOlwiXFx1MkFCMFxcdTAzMzhcIixcbiAgXCJOb3RTdWNjZWVkc1NsYW50RXF1YWxcIjpcIlxcdTIyRTFcIixcbiAgXCJOb3RTdWNjZWVkc1RpbGRlXCI6XCJcXHUyMjdGXFx1MDMzOFwiLFxuICBcIk5vdFN1cGVyc2V0XCI6XCJcXHUyMjgzXFx1MjBEMlwiLFxuICBcIk5vdFN1cGVyc2V0RXF1YWxcIjpcIlxcdTIyODlcIixcbiAgXCJOb3RUaWxkZVwiOlwiXFx1MjI0MVwiLFxuICBcIk5vdFRpbGRlRXF1YWxcIjpcIlxcdTIyNDRcIixcbiAgXCJOb3RUaWxkZUZ1bGxFcXVhbFwiOlwiXFx1MjI0N1wiLFxuICBcIk5vdFRpbGRlVGlsZGVcIjpcIlxcdTIyNDlcIixcbiAgXCJOb3RWZXJ0aWNhbEJhclwiOlwiXFx1MjIyNFwiLFxuICBcIm5wYXJcIjpcIlxcdTIyMjZcIixcbiAgXCJucGFyYWxsZWxcIjpcIlxcdTIyMjZcIixcbiAgXCJucGFyc2xcIjpcIlxcdTJBRkRcXHUyMEU1XCIsXG4gIFwibnBhcnRcIjpcIlxcdTIyMDJcXHUwMzM4XCIsXG4gIFwibnBvbGludFwiOlwiXFx1MkExNFwiLFxuICBcIm5wclwiOlwiXFx1MjI4MFwiLFxuICBcIm5wcmN1ZVwiOlwiXFx1MjJFMFwiLFxuICBcIm5wcmVcIjpcIlxcdTJBQUZcXHUwMzM4XCIsXG4gIFwibnByZWNcIjpcIlxcdTIyODBcIixcbiAgXCJucHJlY2VxXCI6XCJcXHUyQUFGXFx1MDMzOFwiLFxuICBcIm5yQXJyXCI6XCJcXHUyMUNGXCIsXG4gIFwibnJhcnJcIjpcIlxcdTIxOUJcIixcbiAgXCJucmFycmNcIjpcIlxcdTI5MzNcXHUwMzM4XCIsXG4gIFwibnJhcnJ3XCI6XCJcXHUyMTlEXFx1MDMzOFwiLFxuICBcIm5SaWdodGFycm93XCI6XCJcXHUyMUNGXCIsXG4gIFwibnJpZ2h0YXJyb3dcIjpcIlxcdTIxOUJcIixcbiAgXCJucnRyaVwiOlwiXFx1MjJFQlwiLFxuICBcIm5ydHJpZVwiOlwiXFx1MjJFRFwiLFxuICBcIm5zY1wiOlwiXFx1MjI4MVwiLFxuICBcIm5zY2N1ZVwiOlwiXFx1MjJFMVwiLFxuICBcIm5zY2VcIjpcIlxcdTJBQjBcXHUwMzM4XCIsXG4gIFwiTnNjclwiOlwiXFx1RDgzNVxcdURDQTlcIixcbiAgXCJuc2NyXCI6XCJcXHVEODM1XFx1RENDM1wiLFxuICBcIm5zaG9ydG1pZFwiOlwiXFx1MjIyNFwiLFxuICBcIm5zaG9ydHBhcmFsbGVsXCI6XCJcXHUyMjI2XCIsXG4gIFwibnNpbVwiOlwiXFx1MjI0MVwiLFxuICBcIm5zaW1lXCI6XCJcXHUyMjQ0XCIsXG4gIFwibnNpbWVxXCI6XCJcXHUyMjQ0XCIsXG4gIFwibnNtaWRcIjpcIlxcdTIyMjRcIixcbiAgXCJuc3BhclwiOlwiXFx1MjIyNlwiLFxuICBcIm5zcXN1YmVcIjpcIlxcdTIyRTJcIixcbiAgXCJuc3FzdXBlXCI6XCJcXHUyMkUzXCIsXG4gIFwibnN1YlwiOlwiXFx1MjI4NFwiLFxuICBcIm5zdWJFXCI6XCJcXHUyQUM1XFx1MDMzOFwiLFxuICBcIm5zdWJlXCI6XCJcXHUyMjg4XCIsXG4gIFwibnN1YnNldFwiOlwiXFx1MjI4MlxcdTIwRDJcIixcbiAgXCJuc3Vic2V0ZXFcIjpcIlxcdTIyODhcIixcbiAgXCJuc3Vic2V0ZXFxXCI6XCJcXHUyQUM1XFx1MDMzOFwiLFxuICBcIm5zdWNjXCI6XCJcXHUyMjgxXCIsXG4gIFwibnN1Y2NlcVwiOlwiXFx1MkFCMFxcdTAzMzhcIixcbiAgXCJuc3VwXCI6XCJcXHUyMjg1XCIsXG4gIFwibnN1cEVcIjpcIlxcdTJBQzZcXHUwMzM4XCIsXG4gIFwibnN1cGVcIjpcIlxcdTIyODlcIixcbiAgXCJuc3Vwc2V0XCI6XCJcXHUyMjgzXFx1MjBEMlwiLFxuICBcIm5zdXBzZXRlcVwiOlwiXFx1MjI4OVwiLFxuICBcIm5zdXBzZXRlcXFcIjpcIlxcdTJBQzZcXHUwMzM4XCIsXG4gIFwibnRnbFwiOlwiXFx1MjI3OVwiLFxuICBcIk50aWxkZVwiOlwiXFx1MDBEMVwiLFxuICBcIm50aWxkZVwiOlwiXFx1MDBGMVwiLFxuICBcIm50bGdcIjpcIlxcdTIyNzhcIixcbiAgXCJudHJpYW5nbGVsZWZ0XCI6XCJcXHUyMkVBXCIsXG4gIFwibnRyaWFuZ2xlbGVmdGVxXCI6XCJcXHUyMkVDXCIsXG4gIFwibnRyaWFuZ2xlcmlnaHRcIjpcIlxcdTIyRUJcIixcbiAgXCJudHJpYW5nbGVyaWdodGVxXCI6XCJcXHUyMkVEXCIsXG4gIFwiTnVcIjpcIlxcdTAzOURcIixcbiAgXCJudVwiOlwiXFx1MDNCRFwiLFxuICBcIm51bVwiOlwiXFx1MDAyM1wiLFxuICBcIm51bWVyb1wiOlwiXFx1MjExNlwiLFxuICBcIm51bXNwXCI6XCJcXHUyMDA3XCIsXG4gIFwibnZhcFwiOlwiXFx1MjI0RFxcdTIwRDJcIixcbiAgXCJuVkRhc2hcIjpcIlxcdTIyQUZcIixcbiAgXCJuVmRhc2hcIjpcIlxcdTIyQUVcIixcbiAgXCJudkRhc2hcIjpcIlxcdTIyQURcIixcbiAgXCJudmRhc2hcIjpcIlxcdTIyQUNcIixcbiAgXCJudmdlXCI6XCJcXHUyMjY1XFx1MjBEMlwiLFxuICBcIm52Z3RcIjpcIlxcdTAwM0VcXHUyMEQyXCIsXG4gIFwibnZIYXJyXCI6XCJcXHUyOTA0XCIsXG4gIFwibnZpbmZpblwiOlwiXFx1MjlERVwiLFxuICBcIm52bEFyclwiOlwiXFx1MjkwMlwiLFxuICBcIm52bGVcIjpcIlxcdTIyNjRcXHUyMEQyXCIsXG4gIFwibnZsdFwiOlwiXFx1MDAzQ1xcdTIwRDJcIixcbiAgXCJudmx0cmllXCI6XCJcXHUyMkI0XFx1MjBEMlwiLFxuICBcIm52ckFyclwiOlwiXFx1MjkwM1wiLFxuICBcIm52cnRyaWVcIjpcIlxcdTIyQjVcXHUyMEQyXCIsXG4gIFwibnZzaW1cIjpcIlxcdTIyM0NcXHUyMEQyXCIsXG4gIFwibndhcmhrXCI6XCJcXHUyOTIzXCIsXG4gIFwibndBcnJcIjpcIlxcdTIxRDZcIixcbiAgXCJud2FyclwiOlwiXFx1MjE5NlwiLFxuICBcIm53YXJyb3dcIjpcIlxcdTIxOTZcIixcbiAgXCJud25lYXJcIjpcIlxcdTI5MjdcIixcbiAgXCJPYWN1dGVcIjpcIlxcdTAwRDNcIixcbiAgXCJvYWN1dGVcIjpcIlxcdTAwRjNcIixcbiAgXCJvYXN0XCI6XCJcXHUyMjlCXCIsXG4gIFwib2NpclwiOlwiXFx1MjI5QVwiLFxuICBcIk9jaXJjXCI6XCJcXHUwMEQ0XCIsXG4gIFwib2NpcmNcIjpcIlxcdTAwRjRcIixcbiAgXCJPY3lcIjpcIlxcdTA0MUVcIixcbiAgXCJvY3lcIjpcIlxcdTA0M0VcIixcbiAgXCJvZGFzaFwiOlwiXFx1MjI5RFwiLFxuICBcIk9kYmxhY1wiOlwiXFx1MDE1MFwiLFxuICBcIm9kYmxhY1wiOlwiXFx1MDE1MVwiLFxuICBcIm9kaXZcIjpcIlxcdTJBMzhcIixcbiAgXCJvZG90XCI6XCJcXHUyMjk5XCIsXG4gIFwib2Rzb2xkXCI6XCJcXHUyOUJDXCIsXG4gIFwiT0VsaWdcIjpcIlxcdTAxNTJcIixcbiAgXCJvZWxpZ1wiOlwiXFx1MDE1M1wiLFxuICBcIm9mY2lyXCI6XCJcXHUyOUJGXCIsXG4gIFwiT2ZyXCI6XCJcXHVEODM1XFx1REQxMlwiLFxuICBcIm9mclwiOlwiXFx1RDgzNVxcdUREMkNcIixcbiAgXCJvZ29uXCI6XCJcXHUwMkRCXCIsXG4gIFwiT2dyYXZlXCI6XCJcXHUwMEQyXCIsXG4gIFwib2dyYXZlXCI6XCJcXHUwMEYyXCIsXG4gIFwib2d0XCI6XCJcXHUyOUMxXCIsXG4gIFwib2hiYXJcIjpcIlxcdTI5QjVcIixcbiAgXCJvaG1cIjpcIlxcdTAzQTlcIixcbiAgXCJvaW50XCI6XCJcXHUyMjJFXCIsXG4gIFwib2xhcnJcIjpcIlxcdTIxQkFcIixcbiAgXCJvbGNpclwiOlwiXFx1MjlCRVwiLFxuICBcIm9sY3Jvc3NcIjpcIlxcdTI5QkJcIixcbiAgXCJvbGluZVwiOlwiXFx1MjAzRVwiLFxuICBcIm9sdFwiOlwiXFx1MjlDMFwiLFxuICBcIk9tYWNyXCI6XCJcXHUwMTRDXCIsXG4gIFwib21hY3JcIjpcIlxcdTAxNERcIixcbiAgXCJPbWVnYVwiOlwiXFx1MDNBOVwiLFxuICBcIm9tZWdhXCI6XCJcXHUwM0M5XCIsXG4gIFwiT21pY3JvblwiOlwiXFx1MDM5RlwiLFxuICBcIm9taWNyb25cIjpcIlxcdTAzQkZcIixcbiAgXCJvbWlkXCI6XCJcXHUyOUI2XCIsXG4gIFwib21pbnVzXCI6XCJcXHUyMjk2XCIsXG4gIFwiT29wZlwiOlwiXFx1RDgzNVxcdURENDZcIixcbiAgXCJvb3BmXCI6XCJcXHVEODM1XFx1REQ2MFwiLFxuICBcIm9wYXJcIjpcIlxcdTI5QjdcIixcbiAgXCJPcGVuQ3VybHlEb3VibGVRdW90ZVwiOlwiXFx1MjAxQ1wiLFxuICBcIk9wZW5DdXJseVF1b3RlXCI6XCJcXHUyMDE4XCIsXG4gIFwib3BlcnBcIjpcIlxcdTI5QjlcIixcbiAgXCJvcGx1c1wiOlwiXFx1MjI5NVwiLFxuICBcIk9yXCI6XCJcXHUyQTU0XCIsXG4gIFwib3JcIjpcIlxcdTIyMjhcIixcbiAgXCJvcmFyclwiOlwiXFx1MjFCQlwiLFxuICBcIm9yZFwiOlwiXFx1MkE1RFwiLFxuICBcIm9yZGVyXCI6XCJcXHUyMTM0XCIsXG4gIFwib3JkZXJvZlwiOlwiXFx1MjEzNFwiLFxuICBcIm9yZGZcIjpcIlxcdTAwQUFcIixcbiAgXCJvcmRtXCI6XCJcXHUwMEJBXCIsXG4gIFwib3JpZ29mXCI6XCJcXHUyMkI2XCIsXG4gIFwib3JvclwiOlwiXFx1MkE1NlwiLFxuICBcIm9yc2xvcGVcIjpcIlxcdTJBNTdcIixcbiAgXCJvcnZcIjpcIlxcdTJBNUJcIixcbiAgXCJvU1wiOlwiXFx1MjRDOFwiLFxuICBcIk9zY3JcIjpcIlxcdUQ4MzVcXHVEQ0FBXCIsXG4gIFwib3NjclwiOlwiXFx1MjEzNFwiLFxuICBcIk9zbGFzaFwiOlwiXFx1MDBEOFwiLFxuICBcIm9zbGFzaFwiOlwiXFx1MDBGOFwiLFxuICBcIm9zb2xcIjpcIlxcdTIyOThcIixcbiAgXCJPdGlsZGVcIjpcIlxcdTAwRDVcIixcbiAgXCJvdGlsZGVcIjpcIlxcdTAwRjVcIixcbiAgXCJPdGltZXNcIjpcIlxcdTJBMzdcIixcbiAgXCJvdGltZXNcIjpcIlxcdTIyOTdcIixcbiAgXCJvdGltZXNhc1wiOlwiXFx1MkEzNlwiLFxuICBcIk91bWxcIjpcIlxcdTAwRDZcIixcbiAgXCJvdW1sXCI6XCJcXHUwMEY2XCIsXG4gIFwib3ZiYXJcIjpcIlxcdTIzM0RcIixcbiAgXCJPdmVyQmFyXCI6XCJcXHUyMDNFXCIsXG4gIFwiT3ZlckJyYWNlXCI6XCJcXHUyM0RFXCIsXG4gIFwiT3ZlckJyYWNrZXRcIjpcIlxcdTIzQjRcIixcbiAgXCJPdmVyUGFyZW50aGVzaXNcIjpcIlxcdTIzRENcIixcbiAgXCJwYXJcIjpcIlxcdTIyMjVcIixcbiAgXCJwYXJhXCI6XCJcXHUwMEI2XCIsXG4gIFwicGFyYWxsZWxcIjpcIlxcdTIyMjVcIixcbiAgXCJwYXJzaW1cIjpcIlxcdTJBRjNcIixcbiAgXCJwYXJzbFwiOlwiXFx1MkFGRFwiLFxuICBcInBhcnRcIjpcIlxcdTIyMDJcIixcbiAgXCJQYXJ0aWFsRFwiOlwiXFx1MjIwMlwiLFxuICBcIlBjeVwiOlwiXFx1MDQxRlwiLFxuICBcInBjeVwiOlwiXFx1MDQzRlwiLFxuICBcInBlcmNudFwiOlwiXFx1MDAyNVwiLFxuICBcInBlcmlvZFwiOlwiXFx1MDAyRVwiLFxuICBcInBlcm1pbFwiOlwiXFx1MjAzMFwiLFxuICBcInBlcnBcIjpcIlxcdTIyQTVcIixcbiAgXCJwZXJ0ZW5rXCI6XCJcXHUyMDMxXCIsXG4gIFwiUGZyXCI6XCJcXHVEODM1XFx1REQxM1wiLFxuICBcInBmclwiOlwiXFx1RDgzNVxcdUREMkRcIixcbiAgXCJQaGlcIjpcIlxcdTAzQTZcIixcbiAgXCJwaGlcIjpcIlxcdTAzQzZcIixcbiAgXCJwaGl2XCI6XCJcXHUwM0Q1XCIsXG4gIFwicGhtbWF0XCI6XCJcXHUyMTMzXCIsXG4gIFwicGhvbmVcIjpcIlxcdTI2MEVcIixcbiAgXCJQaVwiOlwiXFx1MDNBMFwiLFxuICBcInBpXCI6XCJcXHUwM0MwXCIsXG4gIFwicGl0Y2hmb3JrXCI6XCJcXHUyMkQ0XCIsXG4gIFwicGl2XCI6XCJcXHUwM0Q2XCIsXG4gIFwicGxhbmNrXCI6XCJcXHUyMTBGXCIsXG4gIFwicGxhbmNraFwiOlwiXFx1MjEwRVwiLFxuICBcInBsYW5rdlwiOlwiXFx1MjEwRlwiLFxuICBcInBsdXNcIjpcIlxcdTAwMkJcIixcbiAgXCJwbHVzYWNpclwiOlwiXFx1MkEyM1wiLFxuICBcInBsdXNiXCI6XCJcXHUyMjlFXCIsXG4gIFwicGx1c2NpclwiOlwiXFx1MkEyMlwiLFxuICBcInBsdXNkb1wiOlwiXFx1MjIxNFwiLFxuICBcInBsdXNkdVwiOlwiXFx1MkEyNVwiLFxuICBcInBsdXNlXCI6XCJcXHUyQTcyXCIsXG4gIFwiUGx1c01pbnVzXCI6XCJcXHUwMEIxXCIsXG4gIFwicGx1c21uXCI6XCJcXHUwMEIxXCIsXG4gIFwicGx1c3NpbVwiOlwiXFx1MkEyNlwiLFxuICBcInBsdXN0d29cIjpcIlxcdTJBMjdcIixcbiAgXCJwbVwiOlwiXFx1MDBCMVwiLFxuICBcIlBvaW5jYXJlcGxhbmVcIjpcIlxcdTIxMENcIixcbiAgXCJwb2ludGludFwiOlwiXFx1MkExNVwiLFxuICBcIlBvcGZcIjpcIlxcdTIxMTlcIixcbiAgXCJwb3BmXCI6XCJcXHVEODM1XFx1REQ2MVwiLFxuICBcInBvdW5kXCI6XCJcXHUwMEEzXCIsXG4gIFwiUHJcIjpcIlxcdTJBQkJcIixcbiAgXCJwclwiOlwiXFx1MjI3QVwiLFxuICBcInByYXBcIjpcIlxcdTJBQjdcIixcbiAgXCJwcmN1ZVwiOlwiXFx1MjI3Q1wiLFxuICBcInByRVwiOlwiXFx1MkFCM1wiLFxuICBcInByZVwiOlwiXFx1MkFBRlwiLFxuICBcInByZWNcIjpcIlxcdTIyN0FcIixcbiAgXCJwcmVjYXBwcm94XCI6XCJcXHUyQUI3XCIsXG4gIFwicHJlY2N1cmx5ZXFcIjpcIlxcdTIyN0NcIixcbiAgXCJQcmVjZWRlc1wiOlwiXFx1MjI3QVwiLFxuICBcIlByZWNlZGVzRXF1YWxcIjpcIlxcdTJBQUZcIixcbiAgXCJQcmVjZWRlc1NsYW50RXF1YWxcIjpcIlxcdTIyN0NcIixcbiAgXCJQcmVjZWRlc1RpbGRlXCI6XCJcXHUyMjdFXCIsXG4gIFwicHJlY2VxXCI6XCJcXHUyQUFGXCIsXG4gIFwicHJlY25hcHByb3hcIjpcIlxcdTJBQjlcIixcbiAgXCJwcmVjbmVxcVwiOlwiXFx1MkFCNVwiLFxuICBcInByZWNuc2ltXCI6XCJcXHUyMkU4XCIsXG4gIFwicHJlY3NpbVwiOlwiXFx1MjI3RVwiLFxuICBcIlByaW1lXCI6XCJcXHUyMDMzXCIsXG4gIFwicHJpbWVcIjpcIlxcdTIwMzJcIixcbiAgXCJwcmltZXNcIjpcIlxcdTIxMTlcIixcbiAgXCJwcm5hcFwiOlwiXFx1MkFCOVwiLFxuICBcInBybkVcIjpcIlxcdTJBQjVcIixcbiAgXCJwcm5zaW1cIjpcIlxcdTIyRThcIixcbiAgXCJwcm9kXCI6XCJcXHUyMjBGXCIsXG4gIFwiUHJvZHVjdFwiOlwiXFx1MjIwRlwiLFxuICBcInByb2ZhbGFyXCI6XCJcXHUyMzJFXCIsXG4gIFwicHJvZmxpbmVcIjpcIlxcdTIzMTJcIixcbiAgXCJwcm9mc3VyZlwiOlwiXFx1MjMxM1wiLFxuICBcInByb3BcIjpcIlxcdTIyMURcIixcbiAgXCJQcm9wb3J0aW9uXCI6XCJcXHUyMjM3XCIsXG4gIFwiUHJvcG9ydGlvbmFsXCI6XCJcXHUyMjFEXCIsXG4gIFwicHJvcHRvXCI6XCJcXHUyMjFEXCIsXG4gIFwicHJzaW1cIjpcIlxcdTIyN0VcIixcbiAgXCJwcnVyZWxcIjpcIlxcdTIyQjBcIixcbiAgXCJQc2NyXCI6XCJcXHVEODM1XFx1RENBQlwiLFxuICBcInBzY3JcIjpcIlxcdUQ4MzVcXHVEQ0M1XCIsXG4gIFwiUHNpXCI6XCJcXHUwM0E4XCIsXG4gIFwicHNpXCI6XCJcXHUwM0M4XCIsXG4gIFwicHVuY3NwXCI6XCJcXHUyMDA4XCIsXG4gIFwiUWZyXCI6XCJcXHVEODM1XFx1REQxNFwiLFxuICBcInFmclwiOlwiXFx1RDgzNVxcdUREMkVcIixcbiAgXCJxaW50XCI6XCJcXHUyQTBDXCIsXG4gIFwiUW9wZlwiOlwiXFx1MjExQVwiLFxuICBcInFvcGZcIjpcIlxcdUQ4MzVcXHVERDYyXCIsXG4gIFwicXByaW1lXCI6XCJcXHUyMDU3XCIsXG4gIFwiUXNjclwiOlwiXFx1RDgzNVxcdURDQUNcIixcbiAgXCJxc2NyXCI6XCJcXHVEODM1XFx1RENDNlwiLFxuICBcInF1YXRlcm5pb25zXCI6XCJcXHUyMTBEXCIsXG4gIFwicXVhdGludFwiOlwiXFx1MkExNlwiLFxuICBcInF1ZXN0XCI6XCJcXHUwMDNGXCIsXG4gIFwicXVlc3RlcVwiOlwiXFx1MjI1RlwiLFxuICBcIlFVT1RcIjpcIlxcdTAwMjJcIixcbiAgXCJxdW90XCI6XCJcXHUwMDIyXCIsXG4gIFwickFhcnJcIjpcIlxcdTIxREJcIixcbiAgXCJyYWNlXCI6XCJcXHUyMjNEXFx1MDMzMVwiLFxuICBcIlJhY3V0ZVwiOlwiXFx1MDE1NFwiLFxuICBcInJhY3V0ZVwiOlwiXFx1MDE1NVwiLFxuICBcInJhZGljXCI6XCJcXHUyMjFBXCIsXG4gIFwicmFlbXB0eXZcIjpcIlxcdTI5QjNcIixcbiAgXCJSYW5nXCI6XCJcXHUyN0VCXCIsXG4gIFwicmFuZ1wiOlwiXFx1MjdFOVwiLFxuICBcInJhbmdkXCI6XCJcXHUyOTkyXCIsXG4gIFwicmFuZ2VcIjpcIlxcdTI5QTVcIixcbiAgXCJyYW5nbGVcIjpcIlxcdTI3RTlcIixcbiAgXCJyYXF1b1wiOlwiXFx1MDBCQlwiLFxuICBcIlJhcnJcIjpcIlxcdTIxQTBcIixcbiAgXCJyQXJyXCI6XCJcXHUyMUQyXCIsXG4gIFwicmFyclwiOlwiXFx1MjE5MlwiLFxuICBcInJhcnJhcFwiOlwiXFx1Mjk3NVwiLFxuICBcInJhcnJiXCI6XCJcXHUyMUU1XCIsXG4gIFwicmFycmJmc1wiOlwiXFx1MjkyMFwiLFxuICBcInJhcnJjXCI6XCJcXHUyOTMzXCIsXG4gIFwicmFycmZzXCI6XCJcXHUyOTFFXCIsXG4gIFwicmFycmhrXCI6XCJcXHUyMUFBXCIsXG4gIFwicmFycmxwXCI6XCJcXHUyMUFDXCIsXG4gIFwicmFycnBsXCI6XCJcXHUyOTQ1XCIsXG4gIFwicmFycnNpbVwiOlwiXFx1Mjk3NFwiLFxuICBcIlJhcnJ0bFwiOlwiXFx1MjkxNlwiLFxuICBcInJhcnJ0bFwiOlwiXFx1MjFBM1wiLFxuICBcInJhcnJ3XCI6XCJcXHUyMTlEXCIsXG4gIFwickF0YWlsXCI6XCJcXHUyOTFDXCIsXG4gIFwicmF0YWlsXCI6XCJcXHUyOTFBXCIsXG4gIFwicmF0aW9cIjpcIlxcdTIyMzZcIixcbiAgXCJyYXRpb25hbHNcIjpcIlxcdTIxMUFcIixcbiAgXCJSQmFyclwiOlwiXFx1MjkxMFwiLFxuICBcInJCYXJyXCI6XCJcXHUyOTBGXCIsXG4gIFwicmJhcnJcIjpcIlxcdTI5MERcIixcbiAgXCJyYmJya1wiOlwiXFx1Mjc3M1wiLFxuICBcInJicmFjZVwiOlwiXFx1MDA3RFwiLFxuICBcInJicmFja1wiOlwiXFx1MDA1RFwiLFxuICBcInJicmtlXCI6XCJcXHUyOThDXCIsXG4gIFwicmJya3NsZFwiOlwiXFx1Mjk4RVwiLFxuICBcInJicmtzbHVcIjpcIlxcdTI5OTBcIixcbiAgXCJSY2Fyb25cIjpcIlxcdTAxNThcIixcbiAgXCJyY2Fyb25cIjpcIlxcdTAxNTlcIixcbiAgXCJSY2VkaWxcIjpcIlxcdTAxNTZcIixcbiAgXCJyY2VkaWxcIjpcIlxcdTAxNTdcIixcbiAgXCJyY2VpbFwiOlwiXFx1MjMwOVwiLFxuICBcInJjdWJcIjpcIlxcdTAwN0RcIixcbiAgXCJSY3lcIjpcIlxcdTA0MjBcIixcbiAgXCJyY3lcIjpcIlxcdTA0NDBcIixcbiAgXCJyZGNhXCI6XCJcXHUyOTM3XCIsXG4gIFwicmRsZGhhclwiOlwiXFx1Mjk2OVwiLFxuICBcInJkcXVvXCI6XCJcXHUyMDFEXCIsXG4gIFwicmRxdW9yXCI6XCJcXHUyMDFEXCIsXG4gIFwicmRzaFwiOlwiXFx1MjFCM1wiLFxuICBcIlJlXCI6XCJcXHUyMTFDXCIsXG4gIFwicmVhbFwiOlwiXFx1MjExQ1wiLFxuICBcInJlYWxpbmVcIjpcIlxcdTIxMUJcIixcbiAgXCJyZWFscGFydFwiOlwiXFx1MjExQ1wiLFxuICBcInJlYWxzXCI6XCJcXHUyMTFEXCIsXG4gIFwicmVjdFwiOlwiXFx1MjVBRFwiLFxuICBcIlJFR1wiOlwiXFx1MDBBRVwiLFxuICBcInJlZ1wiOlwiXFx1MDBBRVwiLFxuICBcIlJldmVyc2VFbGVtZW50XCI6XCJcXHUyMjBCXCIsXG4gIFwiUmV2ZXJzZUVxdWlsaWJyaXVtXCI6XCJcXHUyMUNCXCIsXG4gIFwiUmV2ZXJzZVVwRXF1aWxpYnJpdW1cIjpcIlxcdTI5NkZcIixcbiAgXCJyZmlzaHRcIjpcIlxcdTI5N0RcIixcbiAgXCJyZmxvb3JcIjpcIlxcdTIzMEJcIixcbiAgXCJSZnJcIjpcIlxcdTIxMUNcIixcbiAgXCJyZnJcIjpcIlxcdUQ4MzVcXHVERDJGXCIsXG4gIFwickhhclwiOlwiXFx1Mjk2NFwiLFxuICBcInJoYXJkXCI6XCJcXHUyMUMxXCIsXG4gIFwicmhhcnVcIjpcIlxcdTIxQzBcIixcbiAgXCJyaGFydWxcIjpcIlxcdTI5NkNcIixcbiAgXCJSaG9cIjpcIlxcdTAzQTFcIixcbiAgXCJyaG9cIjpcIlxcdTAzQzFcIixcbiAgXCJyaG92XCI6XCJcXHUwM0YxXCIsXG4gIFwiUmlnaHRBbmdsZUJyYWNrZXRcIjpcIlxcdTI3RTlcIixcbiAgXCJSaWdodEFycm93XCI6XCJcXHUyMTkyXCIsXG4gIFwiUmlnaHRhcnJvd1wiOlwiXFx1MjFEMlwiLFxuICBcInJpZ2h0YXJyb3dcIjpcIlxcdTIxOTJcIixcbiAgXCJSaWdodEFycm93QmFyXCI6XCJcXHUyMUU1XCIsXG4gIFwiUmlnaHRBcnJvd0xlZnRBcnJvd1wiOlwiXFx1MjFDNFwiLFxuICBcInJpZ2h0YXJyb3d0YWlsXCI6XCJcXHUyMUEzXCIsXG4gIFwiUmlnaHRDZWlsaW5nXCI6XCJcXHUyMzA5XCIsXG4gIFwiUmlnaHREb3VibGVCcmFja2V0XCI6XCJcXHUyN0U3XCIsXG4gIFwiUmlnaHREb3duVGVlVmVjdG9yXCI6XCJcXHUyOTVEXCIsXG4gIFwiUmlnaHREb3duVmVjdG9yXCI6XCJcXHUyMUMyXCIsXG4gIFwiUmlnaHREb3duVmVjdG9yQmFyXCI6XCJcXHUyOTU1XCIsXG4gIFwiUmlnaHRGbG9vclwiOlwiXFx1MjMwQlwiLFxuICBcInJpZ2h0aGFycG9vbmRvd25cIjpcIlxcdTIxQzFcIixcbiAgXCJyaWdodGhhcnBvb251cFwiOlwiXFx1MjFDMFwiLFxuICBcInJpZ2h0bGVmdGFycm93c1wiOlwiXFx1MjFDNFwiLFxuICBcInJpZ2h0bGVmdGhhcnBvb25zXCI6XCJcXHUyMUNDXCIsXG4gIFwicmlnaHRyaWdodGFycm93c1wiOlwiXFx1MjFDOVwiLFxuICBcInJpZ2h0c3F1aWdhcnJvd1wiOlwiXFx1MjE5RFwiLFxuICBcIlJpZ2h0VGVlXCI6XCJcXHUyMkEyXCIsXG4gIFwiUmlnaHRUZWVBcnJvd1wiOlwiXFx1MjFBNlwiLFxuICBcIlJpZ2h0VGVlVmVjdG9yXCI6XCJcXHUyOTVCXCIsXG4gIFwicmlnaHR0aHJlZXRpbWVzXCI6XCJcXHUyMkNDXCIsXG4gIFwiUmlnaHRUcmlhbmdsZVwiOlwiXFx1MjJCM1wiLFxuICBcIlJpZ2h0VHJpYW5nbGVCYXJcIjpcIlxcdTI5RDBcIixcbiAgXCJSaWdodFRyaWFuZ2xlRXF1YWxcIjpcIlxcdTIyQjVcIixcbiAgXCJSaWdodFVwRG93blZlY3RvclwiOlwiXFx1Mjk0RlwiLFxuICBcIlJpZ2h0VXBUZWVWZWN0b3JcIjpcIlxcdTI5NUNcIixcbiAgXCJSaWdodFVwVmVjdG9yXCI6XCJcXHUyMUJFXCIsXG4gIFwiUmlnaHRVcFZlY3RvckJhclwiOlwiXFx1Mjk1NFwiLFxuICBcIlJpZ2h0VmVjdG9yXCI6XCJcXHUyMUMwXCIsXG4gIFwiUmlnaHRWZWN0b3JCYXJcIjpcIlxcdTI5NTNcIixcbiAgXCJyaW5nXCI6XCJcXHUwMkRBXCIsXG4gIFwicmlzaW5nZG90c2VxXCI6XCJcXHUyMjUzXCIsXG4gIFwicmxhcnJcIjpcIlxcdTIxQzRcIixcbiAgXCJybGhhclwiOlwiXFx1MjFDQ1wiLFxuICBcInJsbVwiOlwiXFx1MjAwRlwiLFxuICBcInJtb3VzdFwiOlwiXFx1MjNCMVwiLFxuICBcInJtb3VzdGFjaGVcIjpcIlxcdTIzQjFcIixcbiAgXCJybm1pZFwiOlwiXFx1MkFFRVwiLFxuICBcInJvYW5nXCI6XCJcXHUyN0VEXCIsXG4gIFwicm9hcnJcIjpcIlxcdTIxRkVcIixcbiAgXCJyb2Jya1wiOlwiXFx1MjdFN1wiLFxuICBcInJvcGFyXCI6XCJcXHUyOTg2XCIsXG4gIFwiUm9wZlwiOlwiXFx1MjExRFwiLFxuICBcInJvcGZcIjpcIlxcdUQ4MzVcXHVERDYzXCIsXG4gIFwicm9wbHVzXCI6XCJcXHUyQTJFXCIsXG4gIFwicm90aW1lc1wiOlwiXFx1MkEzNVwiLFxuICBcIlJvdW5kSW1wbGllc1wiOlwiXFx1Mjk3MFwiLFxuICBcInJwYXJcIjpcIlxcdTAwMjlcIixcbiAgXCJycGFyZ3RcIjpcIlxcdTI5OTRcIixcbiAgXCJycHBvbGludFwiOlwiXFx1MkExMlwiLFxuICBcInJyYXJyXCI6XCJcXHUyMUM5XCIsXG4gIFwiUnJpZ2h0YXJyb3dcIjpcIlxcdTIxREJcIixcbiAgXCJyc2FxdW9cIjpcIlxcdTIwM0FcIixcbiAgXCJSc2NyXCI6XCJcXHUyMTFCXCIsXG4gIFwicnNjclwiOlwiXFx1RDgzNVxcdURDQzdcIixcbiAgXCJSc2hcIjpcIlxcdTIxQjFcIixcbiAgXCJyc2hcIjpcIlxcdTIxQjFcIixcbiAgXCJyc3FiXCI6XCJcXHUwMDVEXCIsXG4gIFwicnNxdW9cIjpcIlxcdTIwMTlcIixcbiAgXCJyc3F1b3JcIjpcIlxcdTIwMTlcIixcbiAgXCJydGhyZWVcIjpcIlxcdTIyQ0NcIixcbiAgXCJydGltZXNcIjpcIlxcdTIyQ0FcIixcbiAgXCJydHJpXCI6XCJcXHUyNUI5XCIsXG4gIFwicnRyaWVcIjpcIlxcdTIyQjVcIixcbiAgXCJydHJpZlwiOlwiXFx1MjVCOFwiLFxuICBcInJ0cmlsdHJpXCI6XCJcXHUyOUNFXCIsXG4gIFwiUnVsZURlbGF5ZWRcIjpcIlxcdTI5RjRcIixcbiAgXCJydWx1aGFyXCI6XCJcXHUyOTY4XCIsXG4gIFwicnhcIjpcIlxcdTIxMUVcIixcbiAgXCJTYWN1dGVcIjpcIlxcdTAxNUFcIixcbiAgXCJzYWN1dGVcIjpcIlxcdTAxNUJcIixcbiAgXCJzYnF1b1wiOlwiXFx1MjAxQVwiLFxuICBcIlNjXCI6XCJcXHUyQUJDXCIsXG4gIFwic2NcIjpcIlxcdTIyN0JcIixcbiAgXCJzY2FwXCI6XCJcXHUyQUI4XCIsXG4gIFwiU2Nhcm9uXCI6XCJcXHUwMTYwXCIsXG4gIFwic2Nhcm9uXCI6XCJcXHUwMTYxXCIsXG4gIFwic2NjdWVcIjpcIlxcdTIyN0RcIixcbiAgXCJzY0VcIjpcIlxcdTJBQjRcIixcbiAgXCJzY2VcIjpcIlxcdTJBQjBcIixcbiAgXCJTY2VkaWxcIjpcIlxcdTAxNUVcIixcbiAgXCJzY2VkaWxcIjpcIlxcdTAxNUZcIixcbiAgXCJTY2lyY1wiOlwiXFx1MDE1Q1wiLFxuICBcInNjaXJjXCI6XCJcXHUwMTVEXCIsXG4gIFwic2NuYXBcIjpcIlxcdTJBQkFcIixcbiAgXCJzY25FXCI6XCJcXHUyQUI2XCIsXG4gIFwic2Nuc2ltXCI6XCJcXHUyMkU5XCIsXG4gIFwic2Nwb2xpbnRcIjpcIlxcdTJBMTNcIixcbiAgXCJzY3NpbVwiOlwiXFx1MjI3RlwiLFxuICBcIlNjeVwiOlwiXFx1MDQyMVwiLFxuICBcInNjeVwiOlwiXFx1MDQ0MVwiLFxuICBcInNkb3RcIjpcIlxcdTIyQzVcIixcbiAgXCJzZG90YlwiOlwiXFx1MjJBMVwiLFxuICBcInNkb3RlXCI6XCJcXHUyQTY2XCIsXG4gIFwic2VhcmhrXCI6XCJcXHUyOTI1XCIsXG4gIFwic2VBcnJcIjpcIlxcdTIxRDhcIixcbiAgXCJzZWFyclwiOlwiXFx1MjE5OFwiLFxuICBcInNlYXJyb3dcIjpcIlxcdTIxOThcIixcbiAgXCJzZWN0XCI6XCJcXHUwMEE3XCIsXG4gIFwic2VtaVwiOlwiXFx1MDAzQlwiLFxuICBcInNlc3dhclwiOlwiXFx1MjkyOVwiLFxuICBcInNldG1pbnVzXCI6XCJcXHUyMjE2XCIsXG4gIFwic2V0bW5cIjpcIlxcdTIyMTZcIixcbiAgXCJzZXh0XCI6XCJcXHUyNzM2XCIsXG4gIFwiU2ZyXCI6XCJcXHVEODM1XFx1REQxNlwiLFxuICBcInNmclwiOlwiXFx1RDgzNVxcdUREMzBcIixcbiAgXCJzZnJvd25cIjpcIlxcdTIzMjJcIixcbiAgXCJzaGFycFwiOlwiXFx1MjY2RlwiLFxuICBcIlNIQ0hjeVwiOlwiXFx1MDQyOVwiLFxuICBcInNoY2hjeVwiOlwiXFx1MDQ0OVwiLFxuICBcIlNIY3lcIjpcIlxcdTA0MjhcIixcbiAgXCJzaGN5XCI6XCJcXHUwNDQ4XCIsXG4gIFwiU2hvcnREb3duQXJyb3dcIjpcIlxcdTIxOTNcIixcbiAgXCJTaG9ydExlZnRBcnJvd1wiOlwiXFx1MjE5MFwiLFxuICBcInNob3J0bWlkXCI6XCJcXHUyMjIzXCIsXG4gIFwic2hvcnRwYXJhbGxlbFwiOlwiXFx1MjIyNVwiLFxuICBcIlNob3J0UmlnaHRBcnJvd1wiOlwiXFx1MjE5MlwiLFxuICBcIlNob3J0VXBBcnJvd1wiOlwiXFx1MjE5MVwiLFxuICBcInNoeVwiOlwiXFx1MDBBRFwiLFxuICBcIlNpZ21hXCI6XCJcXHUwM0EzXCIsXG4gIFwic2lnbWFcIjpcIlxcdTAzQzNcIixcbiAgXCJzaWdtYWZcIjpcIlxcdTAzQzJcIixcbiAgXCJzaWdtYXZcIjpcIlxcdTAzQzJcIixcbiAgXCJzaW1cIjpcIlxcdTIyM0NcIixcbiAgXCJzaW1kb3RcIjpcIlxcdTJBNkFcIixcbiAgXCJzaW1lXCI6XCJcXHUyMjQzXCIsXG4gIFwic2ltZXFcIjpcIlxcdTIyNDNcIixcbiAgXCJzaW1nXCI6XCJcXHUyQTlFXCIsXG4gIFwic2ltZ0VcIjpcIlxcdTJBQTBcIixcbiAgXCJzaW1sXCI6XCJcXHUyQTlEXCIsXG4gIFwic2ltbEVcIjpcIlxcdTJBOUZcIixcbiAgXCJzaW1uZVwiOlwiXFx1MjI0NlwiLFxuICBcInNpbXBsdXNcIjpcIlxcdTJBMjRcIixcbiAgXCJzaW1yYXJyXCI6XCJcXHUyOTcyXCIsXG4gIFwic2xhcnJcIjpcIlxcdTIxOTBcIixcbiAgXCJTbWFsbENpcmNsZVwiOlwiXFx1MjIxOFwiLFxuICBcInNtYWxsc2V0bWludXNcIjpcIlxcdTIyMTZcIixcbiAgXCJzbWFzaHBcIjpcIlxcdTJBMzNcIixcbiAgXCJzbWVwYXJzbFwiOlwiXFx1MjlFNFwiLFxuICBcInNtaWRcIjpcIlxcdTIyMjNcIixcbiAgXCJzbWlsZVwiOlwiXFx1MjMyM1wiLFxuICBcInNtdFwiOlwiXFx1MkFBQVwiLFxuICBcInNtdGVcIjpcIlxcdTJBQUNcIixcbiAgXCJzbXRlc1wiOlwiXFx1MkFBQ1xcdUZFMDBcIixcbiAgXCJTT0ZUY3lcIjpcIlxcdTA0MkNcIixcbiAgXCJzb2Z0Y3lcIjpcIlxcdTA0NENcIixcbiAgXCJzb2xcIjpcIlxcdTAwMkZcIixcbiAgXCJzb2xiXCI6XCJcXHUyOUM0XCIsXG4gIFwic29sYmFyXCI6XCJcXHUyMzNGXCIsXG4gIFwiU29wZlwiOlwiXFx1RDgzNVxcdURENEFcIixcbiAgXCJzb3BmXCI6XCJcXHVEODM1XFx1REQ2NFwiLFxuICBcInNwYWRlc1wiOlwiXFx1MjY2MFwiLFxuICBcInNwYWRlc3VpdFwiOlwiXFx1MjY2MFwiLFxuICBcInNwYXJcIjpcIlxcdTIyMjVcIixcbiAgXCJzcWNhcFwiOlwiXFx1MjI5M1wiLFxuICBcInNxY2Fwc1wiOlwiXFx1MjI5M1xcdUZFMDBcIixcbiAgXCJzcWN1cFwiOlwiXFx1MjI5NFwiLFxuICBcInNxY3Vwc1wiOlwiXFx1MjI5NFxcdUZFMDBcIixcbiAgXCJTcXJ0XCI6XCJcXHUyMjFBXCIsXG4gIFwic3FzdWJcIjpcIlxcdTIyOEZcIixcbiAgXCJzcXN1YmVcIjpcIlxcdTIyOTFcIixcbiAgXCJzcXN1YnNldFwiOlwiXFx1MjI4RlwiLFxuICBcInNxc3Vic2V0ZXFcIjpcIlxcdTIyOTFcIixcbiAgXCJzcXN1cFwiOlwiXFx1MjI5MFwiLFxuICBcInNxc3VwZVwiOlwiXFx1MjI5MlwiLFxuICBcInNxc3Vwc2V0XCI6XCJcXHUyMjkwXCIsXG4gIFwic3FzdXBzZXRlcVwiOlwiXFx1MjI5MlwiLFxuICBcInNxdVwiOlwiXFx1MjVBMVwiLFxuICBcIlNxdWFyZVwiOlwiXFx1MjVBMVwiLFxuICBcInNxdWFyZVwiOlwiXFx1MjVBMVwiLFxuICBcIlNxdWFyZUludGVyc2VjdGlvblwiOlwiXFx1MjI5M1wiLFxuICBcIlNxdWFyZVN1YnNldFwiOlwiXFx1MjI4RlwiLFxuICBcIlNxdWFyZVN1YnNldEVxdWFsXCI6XCJcXHUyMjkxXCIsXG4gIFwiU3F1YXJlU3VwZXJzZXRcIjpcIlxcdTIyOTBcIixcbiAgXCJTcXVhcmVTdXBlcnNldEVxdWFsXCI6XCJcXHUyMjkyXCIsXG4gIFwiU3F1YXJlVW5pb25cIjpcIlxcdTIyOTRcIixcbiAgXCJzcXVhcmZcIjpcIlxcdTI1QUFcIixcbiAgXCJzcXVmXCI6XCJcXHUyNUFBXCIsXG4gIFwic3JhcnJcIjpcIlxcdTIxOTJcIixcbiAgXCJTc2NyXCI6XCJcXHVEODM1XFx1RENBRVwiLFxuICBcInNzY3JcIjpcIlxcdUQ4MzVcXHVEQ0M4XCIsXG4gIFwic3NldG1uXCI6XCJcXHUyMjE2XCIsXG4gIFwic3NtaWxlXCI6XCJcXHUyMzIzXCIsXG4gIFwic3N0YXJmXCI6XCJcXHUyMkM2XCIsXG4gIFwiU3RhclwiOlwiXFx1MjJDNlwiLFxuICBcInN0YXJcIjpcIlxcdTI2MDZcIixcbiAgXCJzdGFyZlwiOlwiXFx1MjYwNVwiLFxuICBcInN0cmFpZ2h0ZXBzaWxvblwiOlwiXFx1MDNGNVwiLFxuICBcInN0cmFpZ2h0cGhpXCI6XCJcXHUwM0Q1XCIsXG4gIFwic3RybnNcIjpcIlxcdTAwQUZcIixcbiAgXCJTdWJcIjpcIlxcdTIyRDBcIixcbiAgXCJzdWJcIjpcIlxcdTIyODJcIixcbiAgXCJzdWJkb3RcIjpcIlxcdTJBQkRcIixcbiAgXCJzdWJFXCI6XCJcXHUyQUM1XCIsXG4gIFwic3ViZVwiOlwiXFx1MjI4NlwiLFxuICBcInN1YmVkb3RcIjpcIlxcdTJBQzNcIixcbiAgXCJzdWJtdWx0XCI6XCJcXHUyQUMxXCIsXG4gIFwic3VibkVcIjpcIlxcdTJBQ0JcIixcbiAgXCJzdWJuZVwiOlwiXFx1MjI4QVwiLFxuICBcInN1YnBsdXNcIjpcIlxcdTJBQkZcIixcbiAgXCJzdWJyYXJyXCI6XCJcXHUyOTc5XCIsXG4gIFwiU3Vic2V0XCI6XCJcXHUyMkQwXCIsXG4gIFwic3Vic2V0XCI6XCJcXHUyMjgyXCIsXG4gIFwic3Vic2V0ZXFcIjpcIlxcdTIyODZcIixcbiAgXCJzdWJzZXRlcXFcIjpcIlxcdTJBQzVcIixcbiAgXCJTdWJzZXRFcXVhbFwiOlwiXFx1MjI4NlwiLFxuICBcInN1YnNldG5lcVwiOlwiXFx1MjI4QVwiLFxuICBcInN1YnNldG5lcXFcIjpcIlxcdTJBQ0JcIixcbiAgXCJzdWJzaW1cIjpcIlxcdTJBQzdcIixcbiAgXCJzdWJzdWJcIjpcIlxcdTJBRDVcIixcbiAgXCJzdWJzdXBcIjpcIlxcdTJBRDNcIixcbiAgXCJzdWNjXCI6XCJcXHUyMjdCXCIsXG4gIFwic3VjY2FwcHJveFwiOlwiXFx1MkFCOFwiLFxuICBcInN1Y2NjdXJseWVxXCI6XCJcXHUyMjdEXCIsXG4gIFwiU3VjY2VlZHNcIjpcIlxcdTIyN0JcIixcbiAgXCJTdWNjZWVkc0VxdWFsXCI6XCJcXHUyQUIwXCIsXG4gIFwiU3VjY2VlZHNTbGFudEVxdWFsXCI6XCJcXHUyMjdEXCIsXG4gIFwiU3VjY2VlZHNUaWxkZVwiOlwiXFx1MjI3RlwiLFxuICBcInN1Y2NlcVwiOlwiXFx1MkFCMFwiLFxuICBcInN1Y2NuYXBwcm94XCI6XCJcXHUyQUJBXCIsXG4gIFwic3VjY25lcXFcIjpcIlxcdTJBQjZcIixcbiAgXCJzdWNjbnNpbVwiOlwiXFx1MjJFOVwiLFxuICBcInN1Y2NzaW1cIjpcIlxcdTIyN0ZcIixcbiAgXCJTdWNoVGhhdFwiOlwiXFx1MjIwQlwiLFxuICBcIlN1bVwiOlwiXFx1MjIxMVwiLFxuICBcInN1bVwiOlwiXFx1MjIxMVwiLFxuICBcInN1bmdcIjpcIlxcdTI2NkFcIixcbiAgXCJTdXBcIjpcIlxcdTIyRDFcIixcbiAgXCJzdXBcIjpcIlxcdTIyODNcIixcbiAgXCJzdXAxXCI6XCJcXHUwMEI5XCIsXG4gIFwic3VwMlwiOlwiXFx1MDBCMlwiLFxuICBcInN1cDNcIjpcIlxcdTAwQjNcIixcbiAgXCJzdXBkb3RcIjpcIlxcdTJBQkVcIixcbiAgXCJzdXBkc3ViXCI6XCJcXHUyQUQ4XCIsXG4gIFwic3VwRVwiOlwiXFx1MkFDNlwiLFxuICBcInN1cGVcIjpcIlxcdTIyODdcIixcbiAgXCJzdXBlZG90XCI6XCJcXHUyQUM0XCIsXG4gIFwiU3VwZXJzZXRcIjpcIlxcdTIyODNcIixcbiAgXCJTdXBlcnNldEVxdWFsXCI6XCJcXHUyMjg3XCIsXG4gIFwic3VwaHNvbFwiOlwiXFx1MjdDOVwiLFxuICBcInN1cGhzdWJcIjpcIlxcdTJBRDdcIixcbiAgXCJzdXBsYXJyXCI6XCJcXHUyOTdCXCIsXG4gIFwic3VwbXVsdFwiOlwiXFx1MkFDMlwiLFxuICBcInN1cG5FXCI6XCJcXHUyQUNDXCIsXG4gIFwic3VwbmVcIjpcIlxcdTIyOEJcIixcbiAgXCJzdXBwbHVzXCI6XCJcXHUyQUMwXCIsXG4gIFwiU3Vwc2V0XCI6XCJcXHUyMkQxXCIsXG4gIFwic3Vwc2V0XCI6XCJcXHUyMjgzXCIsXG4gIFwic3Vwc2V0ZXFcIjpcIlxcdTIyODdcIixcbiAgXCJzdXBzZXRlcXFcIjpcIlxcdTJBQzZcIixcbiAgXCJzdXBzZXRuZXFcIjpcIlxcdTIyOEJcIixcbiAgXCJzdXBzZXRuZXFxXCI6XCJcXHUyQUNDXCIsXG4gIFwic3Vwc2ltXCI6XCJcXHUyQUM4XCIsXG4gIFwic3Vwc3ViXCI6XCJcXHUyQUQ0XCIsXG4gIFwic3Vwc3VwXCI6XCJcXHUyQUQ2XCIsXG4gIFwic3dhcmhrXCI6XCJcXHUyOTI2XCIsXG4gIFwic3dBcnJcIjpcIlxcdTIxRDlcIixcbiAgXCJzd2FyclwiOlwiXFx1MjE5OVwiLFxuICBcInN3YXJyb3dcIjpcIlxcdTIxOTlcIixcbiAgXCJzd253YXJcIjpcIlxcdTI5MkFcIixcbiAgXCJzemxpZ1wiOlwiXFx1MDBERlwiLFxuICBcIlRhYlwiOlwiXFx1MDAwOVwiLFxuICBcInRhcmdldFwiOlwiXFx1MjMxNlwiLFxuICBcIlRhdVwiOlwiXFx1MDNBNFwiLFxuICBcInRhdVwiOlwiXFx1MDNDNFwiLFxuICBcInRicmtcIjpcIlxcdTIzQjRcIixcbiAgXCJUY2Fyb25cIjpcIlxcdTAxNjRcIixcbiAgXCJ0Y2Fyb25cIjpcIlxcdTAxNjVcIixcbiAgXCJUY2VkaWxcIjpcIlxcdTAxNjJcIixcbiAgXCJ0Y2VkaWxcIjpcIlxcdTAxNjNcIixcbiAgXCJUY3lcIjpcIlxcdTA0MjJcIixcbiAgXCJ0Y3lcIjpcIlxcdTA0NDJcIixcbiAgXCJ0ZG90XCI6XCJcXHUyMERCXCIsXG4gIFwidGVscmVjXCI6XCJcXHUyMzE1XCIsXG4gIFwiVGZyXCI6XCJcXHVEODM1XFx1REQxN1wiLFxuICBcInRmclwiOlwiXFx1RDgzNVxcdUREMzFcIixcbiAgXCJ0aGVyZTRcIjpcIlxcdTIyMzRcIixcbiAgXCJUaGVyZWZvcmVcIjpcIlxcdTIyMzRcIixcbiAgXCJ0aGVyZWZvcmVcIjpcIlxcdTIyMzRcIixcbiAgXCJUaGV0YVwiOlwiXFx1MDM5OFwiLFxuICBcInRoZXRhXCI6XCJcXHUwM0I4XCIsXG4gIFwidGhldGFzeW1cIjpcIlxcdTAzRDFcIixcbiAgXCJ0aGV0YXZcIjpcIlxcdTAzRDFcIixcbiAgXCJ0aGlja2FwcHJveFwiOlwiXFx1MjI0OFwiLFxuICBcInRoaWNrc2ltXCI6XCJcXHUyMjNDXCIsXG4gIFwiVGhpY2tTcGFjZVwiOlwiXFx1MjA1RlxcdTIwMEFcIixcbiAgXCJ0aGluc3BcIjpcIlxcdTIwMDlcIixcbiAgXCJUaGluU3BhY2VcIjpcIlxcdTIwMDlcIixcbiAgXCJ0aGthcFwiOlwiXFx1MjI0OFwiLFxuICBcInRoa3NpbVwiOlwiXFx1MjIzQ1wiLFxuICBcIlRIT1JOXCI6XCJcXHUwMERFXCIsXG4gIFwidGhvcm5cIjpcIlxcdTAwRkVcIixcbiAgXCJUaWxkZVwiOlwiXFx1MjIzQ1wiLFxuICBcInRpbGRlXCI6XCJcXHUwMkRDXCIsXG4gIFwiVGlsZGVFcXVhbFwiOlwiXFx1MjI0M1wiLFxuICBcIlRpbGRlRnVsbEVxdWFsXCI6XCJcXHUyMjQ1XCIsXG4gIFwiVGlsZGVUaWxkZVwiOlwiXFx1MjI0OFwiLFxuICBcInRpbWVzXCI6XCJcXHUwMEQ3XCIsXG4gIFwidGltZXNiXCI6XCJcXHUyMkEwXCIsXG4gIFwidGltZXNiYXJcIjpcIlxcdTJBMzFcIixcbiAgXCJ0aW1lc2RcIjpcIlxcdTJBMzBcIixcbiAgXCJ0aW50XCI6XCJcXHUyMjJEXCIsXG4gIFwidG9lYVwiOlwiXFx1MjkyOFwiLFxuICBcInRvcFwiOlwiXFx1MjJBNFwiLFxuICBcInRvcGJvdFwiOlwiXFx1MjMzNlwiLFxuICBcInRvcGNpclwiOlwiXFx1MkFGMVwiLFxuICBcIlRvcGZcIjpcIlxcdUQ4MzVcXHVERDRCXCIsXG4gIFwidG9wZlwiOlwiXFx1RDgzNVxcdURENjVcIixcbiAgXCJ0b3Bmb3JrXCI6XCJcXHUyQURBXCIsXG4gIFwidG9zYVwiOlwiXFx1MjkyOVwiLFxuICBcInRwcmltZVwiOlwiXFx1MjAzNFwiLFxuICBcIlRSQURFXCI6XCJcXHUyMTIyXCIsXG4gIFwidHJhZGVcIjpcIlxcdTIxMjJcIixcbiAgXCJ0cmlhbmdsZVwiOlwiXFx1MjVCNVwiLFxuICBcInRyaWFuZ2xlZG93blwiOlwiXFx1MjVCRlwiLFxuICBcInRyaWFuZ2xlbGVmdFwiOlwiXFx1MjVDM1wiLFxuICBcInRyaWFuZ2xlbGVmdGVxXCI6XCJcXHUyMkI0XCIsXG4gIFwidHJpYW5nbGVxXCI6XCJcXHUyMjVDXCIsXG4gIFwidHJpYW5nbGVyaWdodFwiOlwiXFx1MjVCOVwiLFxuICBcInRyaWFuZ2xlcmlnaHRlcVwiOlwiXFx1MjJCNVwiLFxuICBcInRyaWRvdFwiOlwiXFx1MjVFQ1wiLFxuICBcInRyaWVcIjpcIlxcdTIyNUNcIixcbiAgXCJ0cmltaW51c1wiOlwiXFx1MkEzQVwiLFxuICBcIlRyaXBsZURvdFwiOlwiXFx1MjBEQlwiLFxuICBcInRyaXBsdXNcIjpcIlxcdTJBMzlcIixcbiAgXCJ0cmlzYlwiOlwiXFx1MjlDRFwiLFxuICBcInRyaXRpbWVcIjpcIlxcdTJBM0JcIixcbiAgXCJ0cnBleml1bVwiOlwiXFx1MjNFMlwiLFxuICBcIlRzY3JcIjpcIlxcdUQ4MzVcXHVEQ0FGXCIsXG4gIFwidHNjclwiOlwiXFx1RDgzNVxcdURDQzlcIixcbiAgXCJUU2N5XCI6XCJcXHUwNDI2XCIsXG4gIFwidHNjeVwiOlwiXFx1MDQ0NlwiLFxuICBcIlRTSGN5XCI6XCJcXHUwNDBCXCIsXG4gIFwidHNoY3lcIjpcIlxcdTA0NUJcIixcbiAgXCJUc3Ryb2tcIjpcIlxcdTAxNjZcIixcbiAgXCJ0c3Ryb2tcIjpcIlxcdTAxNjdcIixcbiAgXCJ0d2l4dFwiOlwiXFx1MjI2Q1wiLFxuICBcInR3b2hlYWRsZWZ0YXJyb3dcIjpcIlxcdTIxOUVcIixcbiAgXCJ0d29oZWFkcmlnaHRhcnJvd1wiOlwiXFx1MjFBMFwiLFxuICBcIlVhY3V0ZVwiOlwiXFx1MDBEQVwiLFxuICBcInVhY3V0ZVwiOlwiXFx1MDBGQVwiLFxuICBcIlVhcnJcIjpcIlxcdTIxOUZcIixcbiAgXCJ1QXJyXCI6XCJcXHUyMUQxXCIsXG4gIFwidWFyclwiOlwiXFx1MjE5MVwiLFxuICBcIlVhcnJvY2lyXCI6XCJcXHUyOTQ5XCIsXG4gIFwiVWJyY3lcIjpcIlxcdTA0MEVcIixcbiAgXCJ1YnJjeVwiOlwiXFx1MDQ1RVwiLFxuICBcIlVicmV2ZVwiOlwiXFx1MDE2Q1wiLFxuICBcInVicmV2ZVwiOlwiXFx1MDE2RFwiLFxuICBcIlVjaXJjXCI6XCJcXHUwMERCXCIsXG4gIFwidWNpcmNcIjpcIlxcdTAwRkJcIixcbiAgXCJVY3lcIjpcIlxcdTA0MjNcIixcbiAgXCJ1Y3lcIjpcIlxcdTA0NDNcIixcbiAgXCJ1ZGFyclwiOlwiXFx1MjFDNVwiLFxuICBcIlVkYmxhY1wiOlwiXFx1MDE3MFwiLFxuICBcInVkYmxhY1wiOlwiXFx1MDE3MVwiLFxuICBcInVkaGFyXCI6XCJcXHUyOTZFXCIsXG4gIFwidWZpc2h0XCI6XCJcXHUyOTdFXCIsXG4gIFwiVWZyXCI6XCJcXHVEODM1XFx1REQxOFwiLFxuICBcInVmclwiOlwiXFx1RDgzNVxcdUREMzJcIixcbiAgXCJVZ3JhdmVcIjpcIlxcdTAwRDlcIixcbiAgXCJ1Z3JhdmVcIjpcIlxcdTAwRjlcIixcbiAgXCJ1SGFyXCI6XCJcXHUyOTYzXCIsXG4gIFwidWhhcmxcIjpcIlxcdTIxQkZcIixcbiAgXCJ1aGFyclwiOlwiXFx1MjFCRVwiLFxuICBcInVoYmxrXCI6XCJcXHUyNTgwXCIsXG4gIFwidWxjb3JuXCI6XCJcXHUyMzFDXCIsXG4gIFwidWxjb3JuZXJcIjpcIlxcdTIzMUNcIixcbiAgXCJ1bGNyb3BcIjpcIlxcdTIzMEZcIixcbiAgXCJ1bHRyaVwiOlwiXFx1MjVGOFwiLFxuICBcIlVtYWNyXCI6XCJcXHUwMTZBXCIsXG4gIFwidW1hY3JcIjpcIlxcdTAxNkJcIixcbiAgXCJ1bWxcIjpcIlxcdTAwQThcIixcbiAgXCJVbmRlckJhclwiOlwiXFx1MDA1RlwiLFxuICBcIlVuZGVyQnJhY2VcIjpcIlxcdTIzREZcIixcbiAgXCJVbmRlckJyYWNrZXRcIjpcIlxcdTIzQjVcIixcbiAgXCJVbmRlclBhcmVudGhlc2lzXCI6XCJcXHUyM0REXCIsXG4gIFwiVW5pb25cIjpcIlxcdTIyQzNcIixcbiAgXCJVbmlvblBsdXNcIjpcIlxcdTIyOEVcIixcbiAgXCJVb2dvblwiOlwiXFx1MDE3MlwiLFxuICBcInVvZ29uXCI6XCJcXHUwMTczXCIsXG4gIFwiVW9wZlwiOlwiXFx1RDgzNVxcdURENENcIixcbiAgXCJ1b3BmXCI6XCJcXHVEODM1XFx1REQ2NlwiLFxuICBcIlVwQXJyb3dcIjpcIlxcdTIxOTFcIixcbiAgXCJVcGFycm93XCI6XCJcXHUyMUQxXCIsXG4gIFwidXBhcnJvd1wiOlwiXFx1MjE5MVwiLFxuICBcIlVwQXJyb3dCYXJcIjpcIlxcdTI5MTJcIixcbiAgXCJVcEFycm93RG93bkFycm93XCI6XCJcXHUyMUM1XCIsXG4gIFwiVXBEb3duQXJyb3dcIjpcIlxcdTIxOTVcIixcbiAgXCJVcGRvd25hcnJvd1wiOlwiXFx1MjFENVwiLFxuICBcInVwZG93bmFycm93XCI6XCJcXHUyMTk1XCIsXG4gIFwiVXBFcXVpbGlicml1bVwiOlwiXFx1Mjk2RVwiLFxuICBcInVwaGFycG9vbmxlZnRcIjpcIlxcdTIxQkZcIixcbiAgXCJ1cGhhcnBvb25yaWdodFwiOlwiXFx1MjFCRVwiLFxuICBcInVwbHVzXCI6XCJcXHUyMjhFXCIsXG4gIFwiVXBwZXJMZWZ0QXJyb3dcIjpcIlxcdTIxOTZcIixcbiAgXCJVcHBlclJpZ2h0QXJyb3dcIjpcIlxcdTIxOTdcIixcbiAgXCJVcHNpXCI6XCJcXHUwM0QyXCIsXG4gIFwidXBzaVwiOlwiXFx1MDNDNVwiLFxuICBcInVwc2loXCI6XCJcXHUwM0QyXCIsXG4gIFwiVXBzaWxvblwiOlwiXFx1MDNBNVwiLFxuICBcInVwc2lsb25cIjpcIlxcdTAzQzVcIixcbiAgXCJVcFRlZVwiOlwiXFx1MjJBNVwiLFxuICBcIlVwVGVlQXJyb3dcIjpcIlxcdTIxQTVcIixcbiAgXCJ1cHVwYXJyb3dzXCI6XCJcXHUyMUM4XCIsXG4gIFwidXJjb3JuXCI6XCJcXHUyMzFEXCIsXG4gIFwidXJjb3JuZXJcIjpcIlxcdTIzMURcIixcbiAgXCJ1cmNyb3BcIjpcIlxcdTIzMEVcIixcbiAgXCJVcmluZ1wiOlwiXFx1MDE2RVwiLFxuICBcInVyaW5nXCI6XCJcXHUwMTZGXCIsXG4gIFwidXJ0cmlcIjpcIlxcdTI1RjlcIixcbiAgXCJVc2NyXCI6XCJcXHVEODM1XFx1RENCMFwiLFxuICBcInVzY3JcIjpcIlxcdUQ4MzVcXHVEQ0NBXCIsXG4gIFwidXRkb3RcIjpcIlxcdTIyRjBcIixcbiAgXCJVdGlsZGVcIjpcIlxcdTAxNjhcIixcbiAgXCJ1dGlsZGVcIjpcIlxcdTAxNjlcIixcbiAgXCJ1dHJpXCI6XCJcXHUyNUI1XCIsXG4gIFwidXRyaWZcIjpcIlxcdTI1QjRcIixcbiAgXCJ1dWFyclwiOlwiXFx1MjFDOFwiLFxuICBcIlV1bWxcIjpcIlxcdTAwRENcIixcbiAgXCJ1dW1sXCI6XCJcXHUwMEZDXCIsXG4gIFwidXdhbmdsZVwiOlwiXFx1MjlBN1wiLFxuICBcInZhbmdydFwiOlwiXFx1Mjk5Q1wiLFxuICBcInZhcmVwc2lsb25cIjpcIlxcdTAzRjVcIixcbiAgXCJ2YXJrYXBwYVwiOlwiXFx1MDNGMFwiLFxuICBcInZhcm5vdGhpbmdcIjpcIlxcdTIyMDVcIixcbiAgXCJ2YXJwaGlcIjpcIlxcdTAzRDVcIixcbiAgXCJ2YXJwaVwiOlwiXFx1MDNENlwiLFxuICBcInZhcnByb3B0b1wiOlwiXFx1MjIxRFwiLFxuICBcInZBcnJcIjpcIlxcdTIxRDVcIixcbiAgXCJ2YXJyXCI6XCJcXHUyMTk1XCIsXG4gIFwidmFycmhvXCI6XCJcXHUwM0YxXCIsXG4gIFwidmFyc2lnbWFcIjpcIlxcdTAzQzJcIixcbiAgXCJ2YXJzdWJzZXRuZXFcIjpcIlxcdTIyOEFcXHVGRTAwXCIsXG4gIFwidmFyc3Vic2V0bmVxcVwiOlwiXFx1MkFDQlxcdUZFMDBcIixcbiAgXCJ2YXJzdXBzZXRuZXFcIjpcIlxcdTIyOEJcXHVGRTAwXCIsXG4gIFwidmFyc3Vwc2V0bmVxcVwiOlwiXFx1MkFDQ1xcdUZFMDBcIixcbiAgXCJ2YXJ0aGV0YVwiOlwiXFx1MDNEMVwiLFxuICBcInZhcnRyaWFuZ2xlbGVmdFwiOlwiXFx1MjJCMlwiLFxuICBcInZhcnRyaWFuZ2xlcmlnaHRcIjpcIlxcdTIyQjNcIixcbiAgXCJWYmFyXCI6XCJcXHUyQUVCXCIsXG4gIFwidkJhclwiOlwiXFx1MkFFOFwiLFxuICBcInZCYXJ2XCI6XCJcXHUyQUU5XCIsXG4gIFwiVmN5XCI6XCJcXHUwNDEyXCIsXG4gIFwidmN5XCI6XCJcXHUwNDMyXCIsXG4gIFwiVkRhc2hcIjpcIlxcdTIyQUJcIixcbiAgXCJWZGFzaFwiOlwiXFx1MjJBOVwiLFxuICBcInZEYXNoXCI6XCJcXHUyMkE4XCIsXG4gIFwidmRhc2hcIjpcIlxcdTIyQTJcIixcbiAgXCJWZGFzaGxcIjpcIlxcdTJBRTZcIixcbiAgXCJWZWVcIjpcIlxcdTIyQzFcIixcbiAgXCJ2ZWVcIjpcIlxcdTIyMjhcIixcbiAgXCJ2ZWViYXJcIjpcIlxcdTIyQkJcIixcbiAgXCJ2ZWVlcVwiOlwiXFx1MjI1QVwiLFxuICBcInZlbGxpcFwiOlwiXFx1MjJFRVwiLFxuICBcIlZlcmJhclwiOlwiXFx1MjAxNlwiLFxuICBcInZlcmJhclwiOlwiXFx1MDA3Q1wiLFxuICBcIlZlcnRcIjpcIlxcdTIwMTZcIixcbiAgXCJ2ZXJ0XCI6XCJcXHUwMDdDXCIsXG4gIFwiVmVydGljYWxCYXJcIjpcIlxcdTIyMjNcIixcbiAgXCJWZXJ0aWNhbExpbmVcIjpcIlxcdTAwN0NcIixcbiAgXCJWZXJ0aWNhbFNlcGFyYXRvclwiOlwiXFx1Mjc1OFwiLFxuICBcIlZlcnRpY2FsVGlsZGVcIjpcIlxcdTIyNDBcIixcbiAgXCJWZXJ5VGhpblNwYWNlXCI6XCJcXHUyMDBBXCIsXG4gIFwiVmZyXCI6XCJcXHVEODM1XFx1REQxOVwiLFxuICBcInZmclwiOlwiXFx1RDgzNVxcdUREMzNcIixcbiAgXCJ2bHRyaVwiOlwiXFx1MjJCMlwiLFxuICBcInZuc3ViXCI6XCJcXHUyMjgyXFx1MjBEMlwiLFxuICBcInZuc3VwXCI6XCJcXHUyMjgzXFx1MjBEMlwiLFxuICBcIlZvcGZcIjpcIlxcdUQ4MzVcXHVERDREXCIsXG4gIFwidm9wZlwiOlwiXFx1RDgzNVxcdURENjdcIixcbiAgXCJ2cHJvcFwiOlwiXFx1MjIxRFwiLFxuICBcInZydHJpXCI6XCJcXHUyMkIzXCIsXG4gIFwiVnNjclwiOlwiXFx1RDgzNVxcdURDQjFcIixcbiAgXCJ2c2NyXCI6XCJcXHVEODM1XFx1RENDQlwiLFxuICBcInZzdWJuRVwiOlwiXFx1MkFDQlxcdUZFMDBcIixcbiAgXCJ2c3VibmVcIjpcIlxcdTIyOEFcXHVGRTAwXCIsXG4gIFwidnN1cG5FXCI6XCJcXHUyQUNDXFx1RkUwMFwiLFxuICBcInZzdXBuZVwiOlwiXFx1MjI4QlxcdUZFMDBcIixcbiAgXCJWdmRhc2hcIjpcIlxcdTIyQUFcIixcbiAgXCJ2emlnemFnXCI6XCJcXHUyOTlBXCIsXG4gIFwiV2NpcmNcIjpcIlxcdTAxNzRcIixcbiAgXCJ3Y2lyY1wiOlwiXFx1MDE3NVwiLFxuICBcIndlZGJhclwiOlwiXFx1MkE1RlwiLFxuICBcIldlZGdlXCI6XCJcXHUyMkMwXCIsXG4gIFwid2VkZ2VcIjpcIlxcdTIyMjdcIixcbiAgXCJ3ZWRnZXFcIjpcIlxcdTIyNTlcIixcbiAgXCJ3ZWllcnBcIjpcIlxcdTIxMThcIixcbiAgXCJXZnJcIjpcIlxcdUQ4MzVcXHVERDFBXCIsXG4gIFwid2ZyXCI6XCJcXHVEODM1XFx1REQzNFwiLFxuICBcIldvcGZcIjpcIlxcdUQ4MzVcXHVERDRFXCIsXG4gIFwid29wZlwiOlwiXFx1RDgzNVxcdURENjhcIixcbiAgXCJ3cFwiOlwiXFx1MjExOFwiLFxuICBcIndyXCI6XCJcXHUyMjQwXCIsXG4gIFwid3JlYXRoXCI6XCJcXHUyMjQwXCIsXG4gIFwiV3NjclwiOlwiXFx1RDgzNVxcdURDQjJcIixcbiAgXCJ3c2NyXCI6XCJcXHVEODM1XFx1RENDQ1wiLFxuICBcInhjYXBcIjpcIlxcdTIyQzJcIixcbiAgXCJ4Y2lyY1wiOlwiXFx1MjVFRlwiLFxuICBcInhjdXBcIjpcIlxcdTIyQzNcIixcbiAgXCJ4ZHRyaVwiOlwiXFx1MjVCRFwiLFxuICBcIlhmclwiOlwiXFx1RDgzNVxcdUREMUJcIixcbiAgXCJ4ZnJcIjpcIlxcdUQ4MzVcXHVERDM1XCIsXG4gIFwieGhBcnJcIjpcIlxcdTI3RkFcIixcbiAgXCJ4aGFyclwiOlwiXFx1MjdGN1wiLFxuICBcIlhpXCI6XCJcXHUwMzlFXCIsXG4gIFwieGlcIjpcIlxcdTAzQkVcIixcbiAgXCJ4bEFyclwiOlwiXFx1MjdGOFwiLFxuICBcInhsYXJyXCI6XCJcXHUyN0Y1XCIsXG4gIFwieG1hcFwiOlwiXFx1MjdGQ1wiLFxuICBcInhuaXNcIjpcIlxcdTIyRkJcIixcbiAgXCJ4b2RvdFwiOlwiXFx1MkEwMFwiLFxuICBcIlhvcGZcIjpcIlxcdUQ4MzVcXHVERDRGXCIsXG4gIFwieG9wZlwiOlwiXFx1RDgzNVxcdURENjlcIixcbiAgXCJ4b3BsdXNcIjpcIlxcdTJBMDFcIixcbiAgXCJ4b3RpbWVcIjpcIlxcdTJBMDJcIixcbiAgXCJ4ckFyclwiOlwiXFx1MjdGOVwiLFxuICBcInhyYXJyXCI6XCJcXHUyN0Y2XCIsXG4gIFwiWHNjclwiOlwiXFx1RDgzNVxcdURDQjNcIixcbiAgXCJ4c2NyXCI6XCJcXHVEODM1XFx1RENDRFwiLFxuICBcInhzcWN1cFwiOlwiXFx1MkEwNlwiLFxuICBcInh1cGx1c1wiOlwiXFx1MkEwNFwiLFxuICBcInh1dHJpXCI6XCJcXHUyNUIzXCIsXG4gIFwieHZlZVwiOlwiXFx1MjJDMVwiLFxuICBcInh3ZWRnZVwiOlwiXFx1MjJDMFwiLFxuICBcIllhY3V0ZVwiOlwiXFx1MDBERFwiLFxuICBcInlhY3V0ZVwiOlwiXFx1MDBGRFwiLFxuICBcIllBY3lcIjpcIlxcdTA0MkZcIixcbiAgXCJ5YWN5XCI6XCJcXHUwNDRGXCIsXG4gIFwiWWNpcmNcIjpcIlxcdTAxNzZcIixcbiAgXCJ5Y2lyY1wiOlwiXFx1MDE3N1wiLFxuICBcIlljeVwiOlwiXFx1MDQyQlwiLFxuICBcInljeVwiOlwiXFx1MDQ0QlwiLFxuICBcInllblwiOlwiXFx1MDBBNVwiLFxuICBcIllmclwiOlwiXFx1RDgzNVxcdUREMUNcIixcbiAgXCJ5ZnJcIjpcIlxcdUQ4MzVcXHVERDM2XCIsXG4gIFwiWUljeVwiOlwiXFx1MDQwN1wiLFxuICBcInlpY3lcIjpcIlxcdTA0NTdcIixcbiAgXCJZb3BmXCI6XCJcXHVEODM1XFx1REQ1MFwiLFxuICBcInlvcGZcIjpcIlxcdUQ4MzVcXHVERDZBXCIsXG4gIFwiWXNjclwiOlwiXFx1RDgzNVxcdURDQjRcIixcbiAgXCJ5c2NyXCI6XCJcXHVEODM1XFx1RENDRVwiLFxuICBcIllVY3lcIjpcIlxcdTA0MkVcIixcbiAgXCJ5dWN5XCI6XCJcXHUwNDRFXCIsXG4gIFwiWXVtbFwiOlwiXFx1MDE3OFwiLFxuICBcInl1bWxcIjpcIlxcdTAwRkZcIixcbiAgXCJaYWN1dGVcIjpcIlxcdTAxNzlcIixcbiAgXCJ6YWN1dGVcIjpcIlxcdTAxN0FcIixcbiAgXCJaY2Fyb25cIjpcIlxcdTAxN0RcIixcbiAgXCJ6Y2Fyb25cIjpcIlxcdTAxN0VcIixcbiAgXCJaY3lcIjpcIlxcdTA0MTdcIixcbiAgXCJ6Y3lcIjpcIlxcdTA0MzdcIixcbiAgXCJaZG90XCI6XCJcXHUwMTdCXCIsXG4gIFwiemRvdFwiOlwiXFx1MDE3Q1wiLFxuICBcInplZXRyZlwiOlwiXFx1MjEyOFwiLFxuICBcIlplcm9XaWR0aFNwYWNlXCI6XCJcXHUyMDBCXCIsXG4gIFwiWmV0YVwiOlwiXFx1MDM5NlwiLFxuICBcInpldGFcIjpcIlxcdTAzQjZcIixcbiAgXCJaZnJcIjpcIlxcdTIxMjhcIixcbiAgXCJ6ZnJcIjpcIlxcdUQ4MzVcXHVERDM3XCIsXG4gIFwiWkhjeVwiOlwiXFx1MDQxNlwiLFxuICBcInpoY3lcIjpcIlxcdTA0MzZcIixcbiAgXCJ6aWdyYXJyXCI6XCJcXHUyMUREXCIsXG4gIFwiWm9wZlwiOlwiXFx1MjEyNFwiLFxuICBcInpvcGZcIjpcIlxcdUQ4MzVcXHVERDZCXCIsXG4gIFwiWnNjclwiOlwiXFx1RDgzNVxcdURDQjVcIixcbiAgXCJ6c2NyXCI6XCJcXHVEODM1XFx1RENDRlwiLFxuICBcInp3alwiOlwiXFx1MjAwRFwiLFxuICBcInp3bmpcIjpcIlxcdTIwMENcIlxufTtcblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGhhcyhvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0XG4gICAgPyBoYXNPd24uY2FsbChvYmplY3QsIGtleSlcbiAgICA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVFbnRpdHkobmFtZSkge1xuICBpZiAoaGFzKGVudGl0aWVzLCBuYW1lKSkge1xuICAgIHJldHVybiBlbnRpdGllc1tuYW1lXVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuYW1lO1xuICB9XG59XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiB0eXBlT2Yob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gIHJldHVybiB0eXBlT2Yob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG5cbnZhciBoYXNPd24kMSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGhhcyQxKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3RcbiAgICA/IGhhc093biQxLmNhbGwob2JqZWN0LCBrZXkpXG4gICAgOiBmYWxzZTtcbn1cblxuLy8gRXh0ZW5kIG9iamVjdHNcbi8vXG5mdW5jdGlvbiBhc3NpZ24ob2JqIC8qZnJvbTEsIGZyb20yLCBmcm9tMywgLi4uKi8pIHtcbiAgdmFyIHNvdXJjZXMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBpZiAoIXNvdXJjZSkgeyByZXR1cm47IH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzb3VyY2UgKyAnbXVzdCBiZSBvYmplY3QnKTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgb2JqW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxudmFyIFVORVNDQVBFX01EX1JFID0gL1xcXFwoW1xcXFwhXCIjJCUmJygpKissLlxcLzo7PD0+P0BbXFxdXl9ge3x9fi1dKS9nO1xuXG5mdW5jdGlvbiB1bmVzY2FwZU1kKHN0cikge1xuICBpZiAoc3RyLmluZGV4T2YoJ1xcXFwnKSA8IDApIHsgcmV0dXJuIHN0cjsgfVxuICByZXR1cm4gc3RyLnJlcGxhY2UoVU5FU0NBUEVfTURfUkUsICckMScpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRW50aXR5Q29kZShjKSB7XG4gIC8qZXNsaW50IG5vLWJpdHdpc2U6MCovXG4gIC8vIGJyb2tlbiBzZXF1ZW5jZVxuICBpZiAoYyA+PSAweEQ4MDAgJiYgYyA8PSAweERGRkYpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIC8vIG5ldmVyIHVzZWRcbiAgaWYgKGMgPj0gMHhGREQwICYmIGMgPD0gMHhGREVGKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoKGMgJiAweEZGRkYpID09PSAweEZGRkYgfHwgKGMgJiAweEZGRkYpID09PSAweEZGRkUpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIC8vIGNvbnRyb2wgY29kZXNcbiAgaWYgKGMgPj0gMHgwMCAmJiBjIDw9IDB4MDgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChjID09PSAweDBCKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYyA+PSAweDBFICYmIGMgPD0gMHgxRikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGMgPj0gMHg3RiAmJiBjIDw9IDB4OUYpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIC8vIG91dCBvZiByYW5nZVxuICBpZiAoYyA+IDB4MTBGRkZGKSB7IHJldHVybiBmYWxzZTsgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZnJvbUNvZGVQb2ludChjKSB7XG4gIC8qZXNsaW50IG5vLWJpdHdpc2U6MCovXG4gIGlmIChjID4gMHhmZmZmKSB7XG4gICAgYyAtPSAweDEwMDAwO1xuICAgIHZhciBzdXJyb2dhdGUxID0gMHhkODAwICsgKGMgPj4gMTApLFxuICAgICAgICBzdXJyb2dhdGUyID0gMHhkYzAwICsgKGMgJiAweDNmZik7XG5cbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShzdXJyb2dhdGUxLCBzdXJyb2dhdGUyKTtcbiAgfVxuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbn1cblxudmFyIE5BTUVEX0VOVElUWV9SRSAgID0gLyYoW2EteiNdW2EtejAtOV17MSwzMX0pOy9naTtcbnZhciBESUdJVEFMX0VOVElUWV9URVNUX1JFID0gL14jKCg/OnhbYS1mMC05XXsxLDh9fFswLTldezEsOH0pKS9pO1xuXG5mdW5jdGlvbiByZXBsYWNlRW50aXR5UGF0dGVybihtYXRjaCwgbmFtZSkge1xuICB2YXIgY29kZSA9IDA7XG4gIHZhciBkZWNvZGVkID0gZGVjb2RlRW50aXR5KG5hbWUpO1xuXG4gIGlmIChuYW1lICE9PSBkZWNvZGVkKSB7XG4gICAgcmV0dXJuIGRlY29kZWQ7XG4gIH0gZWxzZSBpZiAobmFtZS5jaGFyQ29kZUF0KDApID09PSAweDIzLyogIyAqLyAmJiBESUdJVEFMX0VOVElUWV9URVNUX1JFLnRlc3QobmFtZSkpIHtcbiAgICBjb2RlID0gbmFtZVsxXS50b0xvd2VyQ2FzZSgpID09PSAneCcgP1xuICAgICAgcGFyc2VJbnQobmFtZS5zbGljZSgyKSwgMTYpXG4gICAgOlxuICAgICAgcGFyc2VJbnQobmFtZS5zbGljZSgxKSwgMTApO1xuICAgIGlmIChpc1ZhbGlkRW50aXR5Q29kZShjb2RlKSkge1xuICAgICAgcmV0dXJuIGZyb21Db2RlUG9pbnQoY29kZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXRjaDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVudGl0aWVzKHN0cikge1xuICBpZiAoc3RyLmluZGV4T2YoJyYnKSA8IDApIHsgcmV0dXJuIHN0cjsgfVxuXG4gIHJldHVybiBzdHIucmVwbGFjZShOQU1FRF9FTlRJVFlfUkUsIHJlcGxhY2VFbnRpdHlQYXR0ZXJuKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxudmFyIEhUTUxfRVNDQVBFX1RFU1RfUkUgPSAvWyY8PlwiXS87XG52YXIgSFRNTF9FU0NBUEVfUkVQTEFDRV9SRSA9IC9bJjw+XCJdL2c7XG52YXIgSFRNTF9SRVBMQUNFTUVOVFMgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7J1xufTtcblxuZnVuY3Rpb24gcmVwbGFjZVVuc2FmZUNoYXIoY2gpIHtcbiAgcmV0dXJuIEhUTUxfUkVQTEFDRU1FTlRTW2NoXTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChzdHIpIHtcbiAgaWYgKEhUTUxfRVNDQVBFX1RFU1RfUkUudGVzdChzdHIpKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKEhUTUxfRVNDQVBFX1JFUExBQ0VfUkUsIHJlcGxhY2VVbnNhZmVDaGFyKTtcbiAgfVxuICByZXR1cm4gc3RyO1xufVxuXG52YXIgdXRpbHMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaGFzOiBoYXMkMSxcbiAgYXNzaWduOiBhc3NpZ24sXG4gIHVuZXNjYXBlTWQ6IHVuZXNjYXBlTWQsXG4gIGlzVmFsaWRFbnRpdHlDb2RlOiBpc1ZhbGlkRW50aXR5Q29kZSxcbiAgZnJvbUNvZGVQb2ludDogZnJvbUNvZGVQb2ludCxcbiAgcmVwbGFjZUVudGl0aWVzOiByZXBsYWNlRW50aXRpZXMsXG4gIGVzY2FwZUh0bWw6IGVzY2FwZUh0bWxcbn0pO1xuXG4vKipcbiAqIFJlbmRlcmVyIHJ1bGVzIGNhY2hlXG4gKi9cblxudmFyIHJ1bGVzID0ge307XG5cbi8qKlxuICogQmxvY2txdW90ZXNcbiAqL1xuXG5ydWxlcy5ibG9ja3F1b3RlX29wZW4gPSBmdW5jdGlvbigvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPGJsb2NrcXVvdGU+XFxuJztcbn07XG5cbnJ1bGVzLmJsb2NrcXVvdGVfY2xvc2UgPSBmdW5jdGlvbih0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9ibG9ja3F1b3RlPicgKyBnZXRCcmVhayh0b2tlbnMsIGlkeCk7XG59O1xuXG4vKipcbiAqIENvZGVcbiAqL1xuXG5ydWxlcy5jb2RlID0gZnVuY3Rpb24odG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICBpZiAodG9rZW5zW2lkeF0uYmxvY2spIHtcbiAgICByZXR1cm4gJzxwcmU+PGNvZGU+JyArIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uY29udGVudCkgKyAnPC9jb2RlPjwvcHJlPicgKyBnZXRCcmVhayh0b2tlbnMsIGlkeCk7XG4gIH1cbiAgcmV0dXJuICc8Y29kZT4nICsgZXNjYXBlSHRtbCh0b2tlbnNbaWR4XS5jb250ZW50KSArICc8L2NvZGU+Jztcbn07XG5cbi8qKlxuICogRmVuY2VkIGNvZGUgYmxvY2tzXG4gKi9cblxucnVsZXMuZmVuY2UgPSBmdW5jdGlvbih0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBpbnN0YW5jZSkge1xuICB2YXIgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgdmFyIGxhbmdDbGFzcyA9ICcnO1xuICB2YXIgbGFuZ1ByZWZpeCA9IG9wdGlvbnMubGFuZ1ByZWZpeDtcbiAgdmFyIGxhbmdOYW1lID0gJycsIGZlbmNlcywgZmVuY2VOYW1lO1xuICB2YXIgaGlnaGxpZ2h0ZWQ7XG5cbiAgaWYgKHRva2VuLnBhcmFtcykge1xuXG4gICAgLy9cbiAgICAvLyBgYGBmb28gYmFyXG4gICAgLy9cbiAgICAvLyBUcnkgY3VzdG9tIHJlbmRlcmVyIFwiZm9vXCIgZmlyc3QuIFRoYXQgd2lsbCBzaW1wbGlmeSBvdmVyd3JpdGVcbiAgICAvLyBmb3IgZGlhZ3JhbXMsIGxhdGV4LCBhbmQgYW55IG90aGVyIGZlbmNlZCBibG9jayB3aXRoIGN1c3RvbSBsb29rXG4gICAgLy9cblxuICAgIGZlbmNlcyA9IHRva2VuLnBhcmFtcy5zcGxpdCgvXFxzKy9nKTtcbiAgICBmZW5jZU5hbWUgPSBmZW5jZXMuam9pbignICcpO1xuXG4gICAgaWYgKGhhcyQxKGluc3RhbmNlLnJ1bGVzLmZlbmNlX2N1c3RvbSwgZmVuY2VzWzBdKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnJ1bGVzLmZlbmNlX2N1c3RvbVtmZW5jZXNbMF1dKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIGluc3RhbmNlKTtcbiAgICB9XG5cbiAgICBsYW5nTmFtZSA9IGVzY2FwZUh0bWwocmVwbGFjZUVudGl0aWVzKHVuZXNjYXBlTWQoZmVuY2VOYW1lKSkpO1xuICAgIGxhbmdDbGFzcyA9ICcgY2xhc3M9XCInICsgbGFuZ1ByZWZpeCArIGxhbmdOYW1lICsgJ1wiJztcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhpZ2hsaWdodCkge1xuICAgIGhpZ2hsaWdodGVkID0gb3B0aW9ucy5oaWdobGlnaHQuYXBwbHkob3B0aW9ucy5oaWdobGlnaHQsIFsgdG9rZW4uY29udGVudCBdLmNvbmNhdChmZW5jZXMpKVxuICAgICAgfHwgZXNjYXBlSHRtbCh0b2tlbi5jb250ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBoaWdobGlnaHRlZCA9IGVzY2FwZUh0bWwodG9rZW4uY29udGVudCk7XG4gIH1cblxuICByZXR1cm4gJzxwcmU+PGNvZGUnICsgbGFuZ0NsYXNzICsgJz4nXG4gICAgICAgICsgaGlnaGxpZ2h0ZWRcbiAgICAgICAgKyAnPC9jb2RlPjwvcHJlPidcbiAgICAgICAgKyBnZXRCcmVhayh0b2tlbnMsIGlkeCk7XG59O1xuXG5ydWxlcy5mZW5jZV9jdXN0b20gPSB7fTtcblxuLyoqXG4gKiBIZWFkaW5nc1xuICovXG5cbnJ1bGVzLmhlYWRpbmdfb3BlbiA9IGZ1bmN0aW9uKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8aCcgKyB0b2tlbnNbaWR4XS5oTGV2ZWwgKyAnPic7XG59O1xucnVsZXMuaGVhZGluZ19jbG9zZSA9IGZ1bmN0aW9uKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L2gnICsgdG9rZW5zW2lkeF0uaExldmVsICsgJz5cXG4nO1xufTtcblxuLyoqXG4gKiBIb3Jpem9udGFsIHJ1bGVzXG4gKi9cblxucnVsZXMuaHIgPSBmdW5jdGlvbih0b2tlbnMsIGlkeCwgb3B0aW9ucyAvKiwgZW52ICovKSB7XG4gIHJldHVybiAob3B0aW9ucy54aHRtbE91dCA/ICc8aHIgLz4nIDogJzxocj4nKSArIGdldEJyZWFrKHRva2VucywgaWR4KTtcbn07XG5cbi8qKlxuICogQnVsbGV0c1xuICovXG5cbnJ1bGVzLmJ1bGxldF9saXN0X29wZW4gPSBmdW5jdGlvbigvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPHVsPlxcbic7XG59O1xucnVsZXMuYnVsbGV0X2xpc3RfY2xvc2UgPSBmdW5jdGlvbih0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC91bD4nICsgZ2V0QnJlYWsodG9rZW5zLCBpZHgpO1xufTtcblxuLyoqXG4gKiBMaXN0IGl0ZW1zXG4gKi9cblxucnVsZXMubGlzdF9pdGVtX29wZW4gPSBmdW5jdGlvbigvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPGxpPic7XG59O1xucnVsZXMubGlzdF9pdGVtX2Nsb3NlID0gZnVuY3Rpb24oLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvbGk+XFxuJztcbn07XG5cbi8qKlxuICogT3JkZXJlZCBsaXN0IGl0ZW1zXG4gKi9cblxucnVsZXMub3JkZXJlZF9saXN0X29wZW4gPSBmdW5jdGlvbih0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHZhciB0b2tlbiA9IHRva2Vuc1tpZHhdO1xuICB2YXIgb3JkZXIgPSB0b2tlbi5vcmRlciA+IDEgPyAnIHN0YXJ0PVwiJyArIHRva2VuLm9yZGVyICsgJ1wiJyA6ICcnO1xuICByZXR1cm4gJzxvbCcgKyBvcmRlciArICc+XFxuJztcbn07XG5ydWxlcy5vcmRlcmVkX2xpc3RfY2xvc2UgPSBmdW5jdGlvbih0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9vbD4nICsgZ2V0QnJlYWsodG9rZW5zLCBpZHgpO1xufTtcblxuLyoqXG4gKiBQYXJhZ3JhcGhzXG4gKi9cblxucnVsZXMucGFyYWdyYXBoX29wZW4gPSBmdW5jdGlvbih0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiB0b2tlbnNbaWR4XS50aWdodCA/ICcnIDogJzxwPic7XG59O1xucnVsZXMucGFyYWdyYXBoX2Nsb3NlID0gZnVuY3Rpb24odG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICB2YXIgYWRkQnJlYWsgPSAhKHRva2Vuc1tpZHhdLnRpZ2h0ICYmIGlkeCAmJiB0b2tlbnNbaWR4IC0gMV0udHlwZSA9PT0gJ2lubGluZScgJiYgIXRva2Vuc1tpZHggLSAxXS5jb250ZW50KTtcbiAgcmV0dXJuICh0b2tlbnNbaWR4XS50aWdodCA/ICcnIDogJzwvcD4nKSArIChhZGRCcmVhayA/IGdldEJyZWFrKHRva2VucywgaWR4KSA6ICcnKTtcbn07XG5cbi8qKlxuICogTGlua3NcbiAqL1xuXG5ydWxlcy5saW5rX29wZW4gPSBmdW5jdGlvbih0b2tlbnMsIGlkeCwgb3B0aW9ucyAvKiBlbnYgKi8pIHtcbiAgdmFyIHRpdGxlID0gdG9rZW5zW2lkeF0udGl0bGUgPyAoJyB0aXRsZT1cIicgKyBlc2NhcGVIdG1sKHJlcGxhY2VFbnRpdGllcyh0b2tlbnNbaWR4XS50aXRsZSkpICsgJ1wiJykgOiAnJztcbiAgdmFyIHRhcmdldCA9IG9wdGlvbnMubGlua1RhcmdldCA/ICgnIHRhcmdldD1cIicgKyBvcHRpb25zLmxpbmtUYXJnZXQgKyAnXCInKSA6ICcnO1xuICByZXR1cm4gJzxhIGhyZWY9XCInICsgZXNjYXBlSHRtbCh0b2tlbnNbaWR4XS5ocmVmKSArICdcIicgKyB0aXRsZSArIHRhcmdldCArICc+Jztcbn07XG5ydWxlcy5saW5rX2Nsb3NlID0gZnVuY3Rpb24oLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvYT4nO1xufTtcblxuLyoqXG4gKiBJbWFnZXNcbiAqL1xuXG5ydWxlcy5pbWFnZSA9IGZ1bmN0aW9uKHRva2VucywgaWR4LCBvcHRpb25zIC8qLCBlbnYgKi8pIHtcbiAgdmFyIHNyYyA9ICcgc3JjPVwiJyArIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uc3JjKSArICdcIic7XG4gIHZhciB0aXRsZSA9IHRva2Vuc1tpZHhdLnRpdGxlID8gKCcgdGl0bGU9XCInICsgZXNjYXBlSHRtbChyZXBsYWNlRW50aXRpZXModG9rZW5zW2lkeF0udGl0bGUpKSArICdcIicpIDogJyc7XG4gIHZhciBhbHQgPSAnIGFsdD1cIicgKyAodG9rZW5zW2lkeF0uYWx0ID8gZXNjYXBlSHRtbChyZXBsYWNlRW50aXRpZXModW5lc2NhcGVNZCh0b2tlbnNbaWR4XS5hbHQpKSkgOiAnJykgKyAnXCInO1xuICB2YXIgc3VmZml4ID0gb3B0aW9ucy54aHRtbE91dCA/ICcgLycgOiAnJztcbiAgcmV0dXJuICc8aW1nJyArIHNyYyArIGFsdCArIHRpdGxlICsgc3VmZml4ICsgJz4nO1xufTtcblxuLyoqXG4gKiBUYWJsZXNcbiAqL1xuXG5ydWxlcy50YWJsZV9vcGVuID0gZnVuY3Rpb24oLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzx0YWJsZT5cXG4nO1xufTtcbnJ1bGVzLnRhYmxlX2Nsb3NlID0gZnVuY3Rpb24oLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvdGFibGU+XFxuJztcbn07XG5ydWxlcy50aGVhZF9vcGVuID0gZnVuY3Rpb24oLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzx0aGVhZD5cXG4nO1xufTtcbnJ1bGVzLnRoZWFkX2Nsb3NlID0gZnVuY3Rpb24oLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvdGhlYWQ+XFxuJztcbn07XG5ydWxlcy50Ym9keV9vcGVuID0gZnVuY3Rpb24oLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzx0Ym9keT5cXG4nO1xufTtcbnJ1bGVzLnRib2R5X2Nsb3NlID0gZnVuY3Rpb24oLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvdGJvZHk+XFxuJztcbn07XG5ydWxlcy50cl9vcGVuID0gZnVuY3Rpb24oLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzx0cj4nO1xufTtcbnJ1bGVzLnRyX2Nsb3NlID0gZnVuY3Rpb24oLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvdHI+XFxuJztcbn07XG5ydWxlcy50aF9vcGVuID0gZnVuY3Rpb24odG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICB2YXIgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgcmV0dXJuICc8dGgnXG4gICAgKyAodG9rZW4uYWxpZ24gPyAnIHN0eWxlPVwidGV4dC1hbGlnbjonICsgdG9rZW4uYWxpZ24gKyAnXCInIDogJycpXG4gICAgKyAnPic7XG59O1xucnVsZXMudGhfY2xvc2UgPSBmdW5jdGlvbigvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC90aD4nO1xufTtcbnJ1bGVzLnRkX29wZW4gPSBmdW5jdGlvbih0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHZhciB0b2tlbiA9IHRva2Vuc1tpZHhdO1xuICByZXR1cm4gJzx0ZCdcbiAgICArICh0b2tlbi5hbGlnbiA/ICcgc3R5bGU9XCJ0ZXh0LWFsaWduOicgKyB0b2tlbi5hbGlnbiArICdcIicgOiAnJylcbiAgICArICc+Jztcbn07XG5ydWxlcy50ZF9jbG9zZSA9IGZ1bmN0aW9uKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L3RkPic7XG59O1xuXG4vKipcbiAqIEJvbGRcbiAqL1xuXG5ydWxlcy5zdHJvbmdfb3BlbiA9IGZ1bmN0aW9uKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8c3Ryb25nPic7XG59O1xucnVsZXMuc3Ryb25nX2Nsb3NlID0gZnVuY3Rpb24oLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvc3Ryb25nPic7XG59O1xuXG4vKipcbiAqIEl0YWxpY2l6ZVxuICovXG5cbnJ1bGVzLmVtX29wZW4gPSBmdW5jdGlvbigvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPGVtPic7XG59O1xucnVsZXMuZW1fY2xvc2UgPSBmdW5jdGlvbigvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9lbT4nO1xufTtcblxuLyoqXG4gKiBTdHJpa2V0aHJvdWdoXG4gKi9cblxucnVsZXMuZGVsX29wZW4gPSBmdW5jdGlvbigvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPGRlbD4nO1xufTtcbnJ1bGVzLmRlbF9jbG9zZSA9IGZ1bmN0aW9uKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L2RlbD4nO1xufTtcblxuLyoqXG4gKiBJbnNlcnRcbiAqL1xuXG5ydWxlcy5pbnNfb3BlbiA9IGZ1bmN0aW9uKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8aW5zPic7XG59O1xucnVsZXMuaW5zX2Nsb3NlID0gZnVuY3Rpb24oLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvaW5zPic7XG59O1xuXG4vKipcbiAqIEhpZ2hsaWdodFxuICovXG5cbnJ1bGVzLm1hcmtfb3BlbiA9IGZ1bmN0aW9uKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8bWFyaz4nO1xufTtcbnJ1bGVzLm1hcmtfY2xvc2UgPSBmdW5jdGlvbigvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9tYXJrPic7XG59O1xuXG4vKipcbiAqIFN1cGVyLSBhbmQgc3ViLXNjcmlwdFxuICovXG5cbnJ1bGVzLnN1YiA9IGZ1bmN0aW9uKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8c3ViPicgKyBlc2NhcGVIdG1sKHRva2Vuc1tpZHhdLmNvbnRlbnQpICsgJzwvc3ViPic7XG59O1xucnVsZXMuc3VwID0gZnVuY3Rpb24odG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzxzdXA+JyArIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uY29udGVudCkgKyAnPC9zdXA+Jztcbn07XG5cbi8qKlxuICogQnJlYWtzXG4gKi9cblxucnVsZXMuaGFyZGJyZWFrID0gZnVuY3Rpb24odG9rZW5zLCBpZHgsIG9wdGlvbnMgLyosIGVudiAqLykge1xuICByZXR1cm4gb3B0aW9ucy54aHRtbE91dCA/ICc8YnIgLz5cXG4nIDogJzxicj5cXG4nO1xufTtcbnJ1bGVzLnNvZnRicmVhayA9IGZ1bmN0aW9uKHRva2VucywgaWR4LCBvcHRpb25zIC8qLCBlbnYgKi8pIHtcbiAgcmV0dXJuIG9wdGlvbnMuYnJlYWtzID8gKG9wdGlvbnMueGh0bWxPdXQgPyAnPGJyIC8+XFxuJyA6ICc8YnI+XFxuJykgOiAnXFxuJztcbn07XG5cbi8qKlxuICogVGV4dFxuICovXG5cbnJ1bGVzLnRleHQgPSBmdW5jdGlvbih0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiBlc2NhcGVIdG1sKHRva2Vuc1tpZHhdLmNvbnRlbnQpO1xufTtcblxuLyoqXG4gKiBDb250ZW50XG4gKi9cblxucnVsZXMuaHRtbGJsb2NrID0gZnVuY3Rpb24odG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gdG9rZW5zW2lkeF0uY29udGVudDtcbn07XG5ydWxlcy5odG1sdGFnID0gZnVuY3Rpb24odG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gdG9rZW5zW2lkeF0uY29udGVudDtcbn07XG5cbi8qKlxuICogQWJicmV2aWF0aW9ucywgaW5pdGlhbGlzbVxuICovXG5cbnJ1bGVzLmFiYnJfb3BlbiA9IGZ1bmN0aW9uKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8YWJiciB0aXRsZT1cIicgKyBlc2NhcGVIdG1sKHJlcGxhY2VFbnRpdGllcyh0b2tlbnNbaWR4XS50aXRsZSkpICsgJ1wiPic7XG59O1xucnVsZXMuYWJicl9jbG9zZSA9IGZ1bmN0aW9uKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L2FiYnI+Jztcbn07XG5cbi8qKlxuICogRm9vdG5vdGVzXG4gKi9cblxucnVsZXMuZm9vdG5vdGVfcmVmID0gZnVuY3Rpb24odG9rZW5zLCBpZHgpIHtcbiAgdmFyIG4gPSBOdW1iZXIodG9rZW5zW2lkeF0uaWQgKyAxKS50b1N0cmluZygpO1xuICB2YXIgaWQgPSAnZm5yZWYnICsgbjtcbiAgaWYgKHRva2Vuc1tpZHhdLnN1YklkID4gMCkge1xuICAgIGlkICs9ICc6JyArIHRva2Vuc1tpZHhdLnN1YklkO1xuICB9XG4gIHJldHVybiAnPHN1cCBjbGFzcz1cImZvb3Rub3RlLXJlZlwiPjxhIGhyZWY9XCIjZm4nICsgbiArICdcIiBpZD1cIicgKyBpZCArICdcIj5bJyArIG4gKyAnXTwvYT48L3N1cD4nO1xufTtcbnJ1bGVzLmZvb3Rub3RlX2Jsb2NrX29wZW4gPSBmdW5jdGlvbih0b2tlbnMsIGlkeCwgb3B0aW9ucykge1xuICB2YXIgaHIgPSBvcHRpb25zLnhodG1sT3V0XG4gICAgPyAnPGhyIGNsYXNzPVwiZm9vdG5vdGVzLXNlcFwiIC8+XFxuJ1xuICAgIDogJzxociBjbGFzcz1cImZvb3Rub3Rlcy1zZXBcIj5cXG4nO1xuICByZXR1cm4gaHIgKyAnPHNlY3Rpb24gY2xhc3M9XCJmb290bm90ZXNcIj5cXG48b2wgY2xhc3M9XCJmb290bm90ZXMtbGlzdFwiPlxcbic7XG59O1xucnVsZXMuZm9vdG5vdGVfYmxvY2tfY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICc8L29sPlxcbjwvc2VjdGlvbj5cXG4nO1xufTtcbnJ1bGVzLmZvb3Rub3RlX29wZW4gPSBmdW5jdGlvbih0b2tlbnMsIGlkeCkge1xuICB2YXIgaWQgPSBOdW1iZXIodG9rZW5zW2lkeF0uaWQgKyAxKS50b1N0cmluZygpO1xuICByZXR1cm4gJzxsaSBpZD1cImZuJyArIGlkICsgJ1wiICBjbGFzcz1cImZvb3Rub3RlLWl0ZW1cIj4nO1xufTtcbnJ1bGVzLmZvb3Rub3RlX2Nsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnPC9saT5cXG4nO1xufTtcbnJ1bGVzLmZvb3Rub3RlX2FuY2hvciA9IGZ1bmN0aW9uKHRva2VucywgaWR4KSB7XG4gIHZhciBuID0gTnVtYmVyKHRva2Vuc1tpZHhdLmlkICsgMSkudG9TdHJpbmcoKTtcbiAgdmFyIGlkID0gJ2ZucmVmJyArIG47XG4gIGlmICh0b2tlbnNbaWR4XS5zdWJJZCA+IDApIHtcbiAgICBpZCArPSAnOicgKyB0b2tlbnNbaWR4XS5zdWJJZDtcbiAgfVxuICByZXR1cm4gJyA8YSBocmVmPVwiIycgKyBpZCArICdcIiBjbGFzcz1cImZvb3Rub3RlLWJhY2tyZWZcIj7ihqk8L2E+Jztcbn07XG5cbi8qKlxuICogRGVmaW5pdGlvbiBsaXN0c1xuICovXG5cbnJ1bGVzLmRsX29wZW4gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICc8ZGw+XFxuJztcbn07XG5ydWxlcy5kdF9vcGVuID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnPGR0Pic7XG59O1xucnVsZXMuZGRfb3BlbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJzxkZD4nO1xufTtcbnJ1bGVzLmRsX2Nsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnPC9kbD5cXG4nO1xufTtcbnJ1bGVzLmR0X2Nsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnPC9kdD5cXG4nO1xufTtcbnJ1bGVzLmRkX2Nsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnPC9kZD5cXG4nO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb25zXG4gKi9cblxuZnVuY3Rpb24gbmV4dFRva2VuKHRva2VucywgaWR4KSB7XG4gIGlmICgrK2lkeCA+PSB0b2tlbnMubGVuZ3RoIC0gMikge1xuICAgIHJldHVybiBpZHg7XG4gIH1cbiAgaWYgKCh0b2tlbnNbaWR4XS50eXBlID09PSAncGFyYWdyYXBoX29wZW4nICYmIHRva2Vuc1tpZHhdLnRpZ2h0KSAmJlxuICAgICAgKHRva2Vuc1tpZHggKyAxXS50eXBlID09PSAnaW5saW5lJyAmJiB0b2tlbnNbaWR4ICsgMV0uY29udGVudC5sZW5ndGggPT09IDApICYmXG4gICAgICAodG9rZW5zW2lkeCArIDJdLnR5cGUgPT09ICdwYXJhZ3JhcGhfY2xvc2UnICYmIHRva2Vuc1tpZHggKyAyXS50aWdodCkpIHtcbiAgICByZXR1cm4gbmV4dFRva2VuKHRva2VucywgaWR4ICsgMik7XG4gIH1cbiAgcmV0dXJuIGlkeDtcbn1cblxuLyoqXG4gKiBDaGVjayB0byBzZWUgaWYgYFxcbmAgaXMgbmVlZGVkIGJlZm9yZSB0aGUgbmV4dCB0b2tlbi5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gYHRva2Vuc2BcbiAqIEBwYXJhbSAge051bWJlcn0gYGlkeGBcbiAqIEByZXR1cm4ge1N0cmluZ30gRW1wdHkgc3RyaW5nIG9yIG5ld2xpbmVcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBnZXRCcmVhayA9IHJ1bGVzLmdldEJyZWFrID0gZnVuY3Rpb24gZ2V0QnJlYWsodG9rZW5zLCBpZHgpIHtcbiAgaWR4ID0gbmV4dFRva2VuKHRva2VucywgaWR4KTtcbiAgaWYgKGlkeCA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2lkeF0udHlwZSA9PT0gJ2xpc3RfaXRlbV9jbG9zZScpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuICdcXG4nO1xufTtcblxuLyoqXG4gKiBSZW5kZXJlciBjbGFzcy4gUmVuZGVycyBIVE1MIGFuZCBleHBvc2VzIGBydWxlc2AgdG8gYWxsb3dcbiAqIGxvY2FsIG1vZGlmaWNhdGlvbnMuXG4gKi9cblxuZnVuY3Rpb24gUmVuZGVyZXIoKSB7XG4gIHRoaXMucnVsZXMgPSBhc3NpZ24oe30sIHJ1bGVzKTtcblxuICAvLyBleHBvcnRlZCBoZWxwZXIsIGZvciBjdXN0b20gcnVsZXMgb25seVxuICB0aGlzLmdldEJyZWFrID0gcnVsZXMuZ2V0QnJlYWs7XG59XG5cbi8qKlxuICogUmVuZGVyIGEgc3RyaW5nIG9mIGlubGluZSBIVE1MIHdpdGggdGhlIGdpdmVuIGB0b2tlbnNgIGFuZFxuICogYG9wdGlvbnNgLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBgdG9rZW5zYFxuICogQHBhcmFtICB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEBwYXJhbSAge09iamVjdH0gYGVudmBcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlcklubGluZSA9IGZ1bmN0aW9uICh0b2tlbnMsIG9wdGlvbnMsIGVudikge1xuICB2YXIgX3J1bGVzID0gdGhpcy5ydWxlcztcbiAgdmFyIGxlbiA9IHRva2Vucy5sZW5ndGgsIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgd2hpbGUgKGxlbi0tKSB7XG4gICAgcmVzdWx0ICs9IF9ydWxlc1t0b2tlbnNbaV0udHlwZV0odG9rZW5zLCBpKyssIG9wdGlvbnMsIGVudiwgdGhpcyk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZW5kZXIgYSBzdHJpbmcgb2YgSFRNTCB3aXRoIHRoZSBnaXZlbiBgdG9rZW5zYCBhbmRcbiAqIGBvcHRpb25zYC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gYHRva2Vuc2BcbiAqIEBwYXJhbSAge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBlbnZgXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAodG9rZW5zLCBvcHRpb25zLCBlbnYpIHtcbiAgdmFyIF9ydWxlcyA9IHRoaXMucnVsZXM7XG4gIHZhciBsZW4gPSB0b2tlbnMubGVuZ3RoLCBpID0gLTE7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgaWYgKHRva2Vuc1tpXS50eXBlID09PSAnaW5saW5lJykge1xuICAgICAgcmVzdWx0ICs9IHRoaXMucmVuZGVySW5saW5lKHRva2Vuc1tpXS5jaGlsZHJlbiwgb3B0aW9ucywgZW52KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ICs9IF9ydWxlc1t0b2tlbnNbaV0udHlwZV0odG9rZW5zLCBpLCBvcHRpb25zLCBlbnYsIHRoaXMpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSdWxlciBpcyBhIGhlbHBlciBjbGFzcyBmb3IgYnVpbGRpbmcgcmVzcG9uc2liaWxpdHkgY2hhaW5zIGZyb21cbiAqIHBhcnNlIHJ1bGVzLiBJdCBhbGxvd3M6XG4gKlxuICogICAtIGVhc3kgc3RhY2sgcnVsZXMgY2hhaW5zXG4gKiAgIC0gZ2V0dGluZyBtYWluIGNoYWluIGFuZCBuYW1lZCBjaGFpbnMgY29udGVudCAoYXMgYXJyYXlzIG9mIGZ1bmN0aW9ucylcbiAqXG4gKiBIZWxwZXIgbWV0aG9kcywgc2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5LlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUnVsZXIoKSB7XG4gIC8vIExpc3Qgb2YgYWRkZWQgcnVsZXMuIEVhY2ggZWxlbWVudCBpczpcbiAgLy9cbiAgLy8geyBuYW1lOiBYWFgsXG4gIC8vICAgZW5hYmxlZDogQm9vbGVhbixcbiAgLy8gICBmbjogRnVuY3Rpb24oKSxcbiAgLy8gICBhbHQ6IFsgbmFtZTIsIG5hbWUzIF0gfVxuICAvL1xuICB0aGlzLl9fcnVsZXNfXyA9IFtdO1xuXG4gIC8vIENhY2hlZCBydWxlIGNoYWlucy5cbiAgLy9cbiAgLy8gRmlyc3QgbGV2ZWwgLSBjaGFpbiBuYW1lLCAnJyBmb3IgZGVmYXVsdC5cbiAgLy8gU2Vjb25kIGxldmVsIC0gZGlnaXRhbCBhbmNob3IgZm9yIGZhc3QgZmlsdGVyaW5nIGJ5IGNoYXJjb2Rlcy5cbiAgLy9cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufVxuXG4vKipcbiAqIEZpbmQgdGhlIGluZGV4IG9mIGEgcnVsZSBieSBgbmFtZWAuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBgbmFtZWBcbiAqIEByZXR1cm4ge051bWJlcn0gSW5kZXggb2YgdGhlIGdpdmVuIGBuYW1lYFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUnVsZXIucHJvdG90eXBlLl9fZmluZF9fID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIGxlbiA9IHRoaXMuX19ydWxlc19fLmxlbmd0aDtcbiAgdmFyIGkgPSAtMTtcblxuICB3aGlsZSAobGVuLS0pIHtcbiAgICBpZiAodGhpcy5fX3J1bGVzX19bKytpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufTtcblxuLyoqXG4gKiBCdWlsZCB0aGUgcnVsZXMgbG9va3VwIGNhY2hlXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUnVsZXIucHJvdG90eXBlLl9fY29tcGlsZV9fID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBjaGFpbnMgPSBbICcnIF07XG5cbiAgLy8gY29sbGVjdCB1bmlxdWUgbmFtZXNcbiAgc2VsZi5fX3J1bGVzX18uZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgIGlmICghcnVsZS5lbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcnVsZS5hbHQuZm9yRWFjaChmdW5jdGlvbiAoYWx0TmFtZSkge1xuICAgICAgaWYgKGNoYWlucy5pbmRleE9mKGFsdE5hbWUpIDwgMCkge1xuICAgICAgICBjaGFpbnMucHVzaChhbHROYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgc2VsZi5fX2NhY2hlX18gPSB7fTtcblxuICBjaGFpbnMuZm9yRWFjaChmdW5jdGlvbiAoY2hhaW4pIHtcbiAgICBzZWxmLl9fY2FjaGVfX1tjaGFpbl0gPSBbXTtcbiAgICBzZWxmLl9fcnVsZXNfXy5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICBpZiAoIXJ1bGUuZW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFpbiAmJiBydWxlLmFsdC5pbmRleE9mKGNoYWluKSA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VsZi5fX2NhY2hlX19bY2hhaW5dLnB1c2gocnVsZS5mbik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSdWxlciBwdWJsaWMgbWV0aG9kc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiBSZXBsYWNlIHJ1bGUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBuYW1lYCBSdWxlIG5hbWVcbiAqIEBwYXJhbSAge0Z1bmN0aW9uIGBmbmBcbiAqIEBwYXJhbSAge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SdWxlci5wcm90b3R5cGUuYXQgPSBmdW5jdGlvbiAobmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgdmFyIGlkeCA9IHRoaXMuX19maW5kX18obmFtZSk7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmIChpZHggPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJzZXIgcnVsZSBub3QgZm91bmQ6ICcgKyBuYW1lKTtcbiAgfVxuXG4gIHRoaXMuX19ydWxlc19fW2lkeF0uZm4gPSBmbjtcbiAgdGhpcy5fX3J1bGVzX19baWR4XS5hbHQgPSBvcHQuYWx0IHx8IFtdO1xuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG59O1xuXG4vKipcbiAqIEFkZCBhIHJ1bGUgdG8gdGhlIGNoYWluIGJlZm9yZSBnaXZlbiB0aGUgYHJ1bGVOYW1lYC5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgYGJlZm9yZU5hbWVgXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgYHJ1bGVOYW1lYFxuICogQHBhcmFtICB7RnVuY3Rpb259IGBmbmBcbiAqIEBwYXJhbSAge09iamVjdH0gICBgb3B0aW9uc2BcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJ1bGVyLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbiAoYmVmb3JlTmFtZSwgcnVsZU5hbWUsIGZuLCBvcHRpb25zKSB7XG4gIHZhciBpZHggPSB0aGlzLl9fZmluZF9fKGJlZm9yZU5hbWUpO1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaWR4ID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFyc2VyIHJ1bGUgbm90IGZvdW5kOiAnICsgYmVmb3JlTmFtZSk7XG4gIH1cblxuICB0aGlzLl9fcnVsZXNfXy5zcGxpY2UoaWR4LCAwLCB7XG4gICAgbmFtZTogcnVsZU5hbWUsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBmbjogZm4sXG4gICAgYWx0OiBvcHQuYWx0IHx8IFtdXG4gIH0pO1xuXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbn07XG5cbi8qKlxuICogQWRkIGEgcnVsZSB0byB0aGUgY2hhaW4gYWZ0ZXIgdGhlIGdpdmVuIGBydWxlTmFtZWAuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgIGBhZnRlck5hbWVgXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgYHJ1bGVOYW1lYFxuICogQHBhcmFtICB7RnVuY3Rpb259IGBmbmBcbiAqIEBwYXJhbSAge09iamVjdH0gICBgb3B0aW9uc2BcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJ1bGVyLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uIChhZnRlck5hbWUsIHJ1bGVOYW1lLCBmbiwgb3B0aW9ucykge1xuICB2YXIgaWR4ID0gdGhpcy5fX2ZpbmRfXyhhZnRlck5hbWUpO1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaWR4ID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFyc2VyIHJ1bGUgbm90IGZvdW5kOiAnICsgYWZ0ZXJOYW1lKTtcbiAgfVxuXG4gIHRoaXMuX19ydWxlc19fLnNwbGljZShpZHggKyAxLCAwLCB7XG4gICAgbmFtZTogcnVsZU5hbWUsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBmbjogZm4sXG4gICAgYWx0OiBvcHQuYWx0IHx8IFtdXG4gIH0pO1xuXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbn07XG5cbi8qKlxuICogQWRkIGEgcnVsZSB0byB0aGUgZW5kIG9mIGNoYWluLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gICBgcnVsZU5hbWVgXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gYGZuYFxuICogQHBhcmFtICB7T2JqZWN0fSAgIGBvcHRpb25zYFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cblJ1bGVyLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKHJ1bGVOYW1lLCBmbiwgb3B0aW9ucykge1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcblxuICB0aGlzLl9fcnVsZXNfXy5wdXNoKHtcbiAgICBuYW1lOiBydWxlTmFtZSxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGZuOiBmbixcbiAgICBhbHQ6IG9wdC5hbHQgfHwgW11cbiAgfSk7XG5cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufTtcblxuLyoqXG4gKiBFbmFibGUgYSBydWxlIG9yIGxpc3Qgb2YgcnVsZXMuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfEFycmF5fSBgbGlzdGAgTmFtZSBvciBhcnJheSBvZiBydWxlIG5hbWVzIHRvIGVuYWJsZVxuICogQHBhcmFtICB7Qm9vbGVhbn0gYHN0cmljdGAgSWYgYHRydWVgLCBhbGwgbm9uIGxpc3RlZCBydWxlcyB3aWxsIGJlIGRpc2FibGVkLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUnVsZXIucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uIChsaXN0LCBzdHJpY3QpIHtcbiAgbGlzdCA9ICFBcnJheS5pc0FycmF5KGxpc3QpXG4gICAgPyBbIGxpc3QgXVxuICAgIDogbGlzdDtcblxuICAvLyBJbiBzdHJpY3QgbW9kZSBkaXNhYmxlIGFsbCBleGlzdGluZyBydWxlcyBmaXJzdFxuICBpZiAoc3RyaWN0KSB7XG4gICAgdGhpcy5fX3J1bGVzX18uZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgcnVsZS5lbmFibGVkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvLyBTZWFyY2ggYnkgbmFtZSBhbmQgZW5hYmxlXG4gIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBpZHggPSB0aGlzLl9fZmluZF9fKG5hbWUpO1xuICAgIGlmIChpZHggPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1J1bGVzIG1hbmFnZXI6IGludmFsaWQgcnVsZSBuYW1lICcgKyBuYW1lKTtcbiAgICB9XG4gICAgdGhpcy5fX3J1bGVzX19baWR4XS5lbmFibGVkID0gdHJ1ZTtcbiAgfSwgdGhpcyk7XG5cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufTtcblxuXG4vKipcbiAqIERpc2FibGUgYSBydWxlIG9yIGxpc3Qgb2YgcnVsZXMuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfEFycmF5fSBgbGlzdGAgTmFtZSBvciBhcnJheSBvZiBydWxlIG5hbWVzIHRvIGRpc2FibGVcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJ1bGVyLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgbGlzdCA9ICFBcnJheS5pc0FycmF5KGxpc3QpXG4gICAgPyBbIGxpc3QgXVxuICAgIDogbGlzdDtcblxuICAvLyBTZWFyY2ggYnkgbmFtZSBhbmQgZGlzYWJsZVxuICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fX2ZpbmRfXyhuYW1lKTtcbiAgICBpZiAoaWR4IDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSdWxlcyBtYW5hZ2VyOiBpbnZhbGlkIHJ1bGUgbmFtZSAnICsgbmFtZSk7XG4gICAgfVxuICAgIHRoaXMuX19ydWxlc19fW2lkeF0uZW5hYmxlZCA9IGZhbHNlO1xuICB9LCB0aGlzKTtcblxuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG59O1xuXG4vKipcbiAqIEdldCBhIHJ1bGVzIGxpc3QgYXMgYW4gYXJyYXkgb2YgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYGNoYWluTmFtZWBcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJ1bGVyLnByb3RvdHlwZS5nZXRSdWxlcyA9IGZ1bmN0aW9uIChjaGFpbk5hbWUpIHtcbiAgaWYgKHRoaXMuX19jYWNoZV9fID09PSBudWxsKSB7XG4gICAgdGhpcy5fX2NvbXBpbGVfXygpO1xuICB9XG4gIHJldHVybiB0aGlzLl9fY2FjaGVfX1tjaGFpbk5hbWVdIHx8IFtdO1xufTtcblxuZnVuY3Rpb24gYmxvY2soc3RhdGUpIHtcblxuICBpZiAoc3RhdGUuaW5saW5lTW9kZSkge1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgY29udGVudDogc3RhdGUuc3JjLnJlcGxhY2UoL1xcbi9nLCAnICcpLnRyaW0oKSxcbiAgICAgIGxldmVsOiAwLFxuICAgICAgbGluZXM6IFsgMCwgMSBdLFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfSk7XG5cbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5ibG9jay5wYXJzZShzdGF0ZS5zcmMsIHN0YXRlLm9wdGlvbnMsIHN0YXRlLmVudiwgc3RhdGUudG9rZW5zKTtcbiAgfVxufVxuXG4vLyBJbmxpbmUgcGFyc2VyIHN0YXRlXG5cbmZ1bmN0aW9uIFN0YXRlSW5saW5lKHNyYywgcGFyc2VySW5saW5lLCBvcHRpb25zLCBlbnYsIG91dFRva2Vucykge1xuICB0aGlzLnNyYyA9IHNyYztcbiAgdGhpcy5lbnYgPSBlbnY7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMucGFyc2VyID0gcGFyc2VySW5saW5lO1xuICB0aGlzLnRva2VucyA9IG91dFRva2VucztcbiAgdGhpcy5wb3MgPSAwO1xuICB0aGlzLnBvc01heCA9IHRoaXMuc3JjLmxlbmd0aDtcbiAgdGhpcy5sZXZlbCA9IDA7XG4gIHRoaXMucGVuZGluZyA9ICcnO1xuICB0aGlzLnBlbmRpbmdMZXZlbCA9IDA7XG5cbiAgdGhpcy5jYWNoZSA9IFtdOyAgICAgICAgLy8gU3RvcmVzIHsgc3RhcnQ6IGVuZCB9IHBhaXJzLiBVc2VmdWwgZm9yIGJhY2t0cmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpbWl6YXRpb24gb2YgcGFpcnMgcGFyc2UgKGVtcGhhc2lzLCBzdHJpa2VzKS5cblxuICAvLyBMaW5rIHBhcnNlciBzdGF0ZSB2YXJzXG5cbiAgdGhpcy5pc0luTGFiZWwgPSBmYWxzZTsgLy8gU2V0IHRydWUgd2hlbiBzZWVrIGxpbmsgbGFiZWwgLSB3ZSBzaG91bGQgZGlzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcInBhaXJlZFwiIHJ1bGVzIChlbXBoYXNpcywgc3RyaWtlcykgdG8gbm90IHNraXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGFpbGluZyBgXWBcblxuICB0aGlzLmxpbmtMZXZlbCA9IDA7ICAgICAvLyBJbmNyZW1lbnQgZm9yIGVhY2ggbmVzdGluZyBsaW5rLiBVc2VkIHRvIHByZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmVzdGluZyBpbiBkZWZpbml0aW9uc1xuXG4gIHRoaXMubGlua0NvbnRlbnQgPSAnJzsgIC8vIFRlbXBvcmFyeSBzdG9yYWdlIGZvciBsaW5rIHVybFxuXG4gIHRoaXMubGFiZWxVbm1hdGNoZWRTY29wZXMgPSAwOyAvLyBUcmFjayB1bnBhaXJlZCBgW2AgZm9yIGxpbmsgbGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAoYmFja3RyYWNrIG9wdGltaXphdGlvbilcbn1cblxuLy8gRmx1c2ggcGVuZGluZyB0ZXh0XG4vL1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLnB1c2hQZW5kaW5nID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgY29udGVudDogdGhpcy5wZW5kaW5nLFxuICAgIGxldmVsOiB0aGlzLnBlbmRpbmdMZXZlbFxuICB9KTtcbiAgdGhpcy5wZW5kaW5nID0gJyc7XG59O1xuXG4vLyBQdXNoIG5ldyB0b2tlbiB0byBcInN0cmVhbVwiLlxuLy8gSWYgcGVuZGluZyB0ZXh0IGV4aXN0cyAtIGZsdXNoIGl0IGFzIHRleHQgdG9rZW5cbi8vXG5TdGF0ZUlubGluZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uICh0b2tlbikge1xuICBpZiAodGhpcy5wZW5kaW5nKSB7XG4gICAgdGhpcy5wdXNoUGVuZGluZygpO1xuICB9XG5cbiAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XG4gIHRoaXMucGVuZGluZ0xldmVsID0gdGhpcy5sZXZlbDtcbn07XG5cbi8vIFN0b3JlIHZhbHVlIHRvIGNhY2hlLlxuLy8gISEhIEltcGxlbWVudGF0aW9uIGhhcyBwYXJzZXItc3BlY2lmaWMgb3B0aW1pemF0aW9uc1xuLy8gISEhIGtleXMgTVVTVCBiZSBpbnRlZ2VyLCA+PSAwOyB2YWx1ZXMgTVVTVCBiZSBpbnRlZ2VyLCA+IDBcbi8vXG5TdGF0ZUlubGluZS5wcm90b3R5cGUuY2FjaGVTZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWwpIHtcbiAgZm9yICh2YXIgaSA9IHRoaXMuY2FjaGUubGVuZ3RoOyBpIDw9IGtleTsgaSsrKSB7XG4gICAgdGhpcy5jYWNoZS5wdXNoKDApO1xuICB9XG5cbiAgdGhpcy5jYWNoZVtrZXldID0gdmFsO1xufTtcblxuLy8gR2V0IGNhY2hlIHZhbHVlXG4vL1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLmNhY2hlR2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5IDwgdGhpcy5jYWNoZS5sZW5ndGggPyB0aGlzLmNhY2hlW2tleV0gOiAwO1xufTtcblxuLyoqXG4gKiBQYXJzZSBsaW5rIGxhYmVsc1xuICpcbiAqIFRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGZpcnN0IGNoYXJhY3RlciAoYFtgKSBhbHJlYWR5IG1hdGNoZXM7XG4gKiByZXR1cm5zIHRoZSBlbmQgb2YgdGhlIGxhYmVsLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSAge051bWJlcn0gc3RhcnRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlTGlua0xhYmVsKHN0YXRlLCBzdGFydCkge1xuICB2YXIgbGV2ZWwsIGZvdW5kLCBtYXJrZXIsXG4gICAgICBsYWJlbEVuZCA9IC0xLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgb2xkUG9zID0gc3RhdGUucG9zLFxuICAgICAgb2xkRmxhZyA9IHN0YXRlLmlzSW5MYWJlbDtcblxuICBpZiAoc3RhdGUuaXNJbkxhYmVsKSB7IHJldHVybiAtMTsgfVxuXG4gIGlmIChzdGF0ZS5sYWJlbFVubWF0Y2hlZFNjb3Blcykge1xuICAgIHN0YXRlLmxhYmVsVW5tYXRjaGVkU2NvcGVzLS07XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgc3RhdGUucG9zID0gc3RhcnQgKyAxO1xuICBzdGF0ZS5pc0luTGFiZWwgPSB0cnVlO1xuICBsZXZlbCA9IDE7XG5cbiAgd2hpbGUgKHN0YXRlLnBvcyA8IG1heCkge1xuICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyk7XG4gICAgaWYgKG1hcmtlciA9PT0gMHg1QiAvKiBbICovKSB7XG4gICAgICBsZXZlbCsrO1xuICAgIH0gZWxzZSBpZiAobWFya2VyID09PSAweDVEIC8qIF0gKi8pIHtcbiAgICAgIGxldmVsLS07XG4gICAgICBpZiAobGV2ZWwgPT09IDApIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZS5wYXJzZXIuc2tpcFRva2VuKHN0YXRlKTtcbiAgfVxuXG4gIGlmIChmb3VuZCkge1xuICAgIGxhYmVsRW5kID0gc3RhdGUucG9zO1xuICAgIHN0YXRlLmxhYmVsVW5tYXRjaGVkU2NvcGVzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5sYWJlbFVubWF0Y2hlZFNjb3BlcyA9IGxldmVsIC0gMTtcbiAgfVxuXG4gIC8vIHJlc3RvcmUgb2xkIHN0YXRlXG4gIHN0YXRlLnBvcyA9IG9sZFBvcztcbiAgc3RhdGUuaXNJbkxhYmVsID0gb2xkRmxhZztcblxuICByZXR1cm4gbGFiZWxFbmQ7XG59XG5cbi8vIFBhcnNlIGFiYnJldmlhdGlvbiBkZWZpbml0aW9ucywgaS5lLiBgKlthYmJyXTogZGVzY3JpcHRpb25gXG5cblxuZnVuY3Rpb24gcGFyc2VBYmJyKHN0ciwgcGFyc2VySW5saW5lLCBvcHRpb25zLCBlbnYpIHtcbiAgdmFyIHN0YXRlLCBsYWJlbEVuZCwgcG9zLCBtYXgsIGxhYmVsLCB0aXRsZTtcblxuICBpZiAoc3RyLmNoYXJDb2RlQXQoMCkgIT09IDB4MkEvKiAqICovKSB7IHJldHVybiAtMTsgfVxuICBpZiAoc3RyLmNoYXJDb2RlQXQoMSkgIT09IDB4NUIvKiBbICovKSB7IHJldHVybiAtMTsgfVxuXG4gIGlmIChzdHIuaW5kZXhPZignXTonKSA9PT0gLTEpIHsgcmV0dXJuIC0xOyB9XG5cbiAgc3RhdGUgPSBuZXcgU3RhdGVJbmxpbmUoc3RyLCBwYXJzZXJJbmxpbmUsIG9wdGlvbnMsIGVudiwgW10pO1xuICBsYWJlbEVuZCA9IHBhcnNlTGlua0xhYmVsKHN0YXRlLCAxKTtcblxuICBpZiAobGFiZWxFbmQgPCAwIHx8IHN0ci5jaGFyQ29kZUF0KGxhYmVsRW5kICsgMSkgIT09IDB4M0EvKiA6ICovKSB7IHJldHVybiAtMTsgfVxuXG4gIG1heCA9IHN0YXRlLnBvc01heDtcblxuICAvLyBhYmJyIHRpdGxlIGlzIGFsd2F5cyBvbmUgbGluZSwgc28gbG9va2luZyBmb3IgZW5kaW5nIFwiXFxuXCIgaGVyZVxuICBmb3IgKHBvcyA9IGxhYmVsRW5kICsgMjsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDBBKSB7IGJyZWFrOyB9XG4gIH1cblxuICBsYWJlbCA9IHN0ci5zbGljZSgyLCBsYWJlbEVuZCk7XG4gIHRpdGxlID0gc3RyLnNsaWNlKGxhYmVsRW5kICsgMiwgcG9zKS50cmltKCk7XG4gIGlmICh0aXRsZS5sZW5ndGggPT09IDApIHsgcmV0dXJuIC0xOyB9XG4gIGlmICghZW52LmFiYnJldmlhdGlvbnMpIHsgZW52LmFiYnJldmlhdGlvbnMgPSB7fTsgfVxuICAvLyBwcmVwZW5kICc6JyB0byBhdm9pZCBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGUgbWVtYmVyc1xuICBpZiAodHlwZW9mIGVudi5hYmJyZXZpYXRpb25zWyc6JyArIGxhYmVsXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbnYuYWJicmV2aWF0aW9uc1snOicgKyBsYWJlbF0gPSB0aXRsZTtcbiAgfVxuXG4gIHJldHVybiBwb3M7XG59XG5cbmZ1bmN0aW9uIGFiYnIoc3RhdGUpIHtcbiAgdmFyIHRva2VucyA9IHN0YXRlLnRva2VucywgaSwgbCwgY29udGVudCwgcG9zO1xuXG4gIGlmIChzdGF0ZS5pbmxpbmVNb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gUGFyc2UgaW5saW5lc1xuICBmb3IgKGkgPSAxLCBsID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodG9rZW5zW2kgLSAxXS50eXBlID09PSAncGFyYWdyYXBoX29wZW4nICYmXG4gICAgICAgIHRva2Vuc1tpXS50eXBlID09PSAnaW5saW5lJyAmJlxuICAgICAgICB0b2tlbnNbaSArIDFdLnR5cGUgPT09ICdwYXJhZ3JhcGhfY2xvc2UnKSB7XG5cbiAgICAgIGNvbnRlbnQgPSB0b2tlbnNbaV0uY29udGVudDtcbiAgICAgIHdoaWxlIChjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICBwb3MgPSBwYXJzZUFiYnIoY29udGVudCwgc3RhdGUuaW5saW5lLCBzdGF0ZS5vcHRpb25zLCBzdGF0ZS5lbnYpO1xuICAgICAgICBpZiAocG9zIDwgMCkgeyBicmVhazsgfVxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zbGljZShwb3MpLnRyaW0oKTtcbiAgICAgIH1cblxuICAgICAgdG9rZW5zW2ldLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgaWYgKCFjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICB0b2tlbnNbaSAtIDFdLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgdG9rZW5zW2kgKyAxXS50aWdodCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxpbmsodXJsKSB7XG4gIHZhciBub3JtYWxpemVkID0gcmVwbGFjZUVudGl0aWVzKHVybCk7XG4gIC8vIFdlIHNob3VsZG4ndCBjYXJlIGFib3V0IHRoZSByZXN1bHQgb2YgbWFsZm9ybWVkIFVSSXMsXG4gIC8vIGFuZCBzaG91bGQgbm90IHRocm93IGFuIGV4Y2VwdGlvbi5cbiAgdHJ5IHtcbiAgICBub3JtYWxpemVkID0gZGVjb2RlVVJJKG5vcm1hbGl6ZWQpO1xuICB9IGNhdGNoIChlcnIpIHt9XG4gIHJldHVybiBlbmNvZGVVUkkobm9ybWFsaXplZCk7XG59XG5cbi8qKlxuICogUGFyc2UgbGluayBkZXN0aW5hdGlvblxuICpcbiAqICAgLSBvbiBzdWNjZXNzIGl0IHJldHVybnMgYSBzdHJpbmcgYW5kIHVwZGF0ZXMgc3RhdGUucG9zO1xuICogICAtIG9uIGZhaWx1cmUgaXQgcmV0dXJucyBudWxsXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtICB7TnVtYmVyfSBwb3NcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlTGlua0Rlc3RpbmF0aW9uKHN0YXRlLCBwb3MpIHtcbiAgdmFyIGNvZGUsIGxldmVsLCBsaW5rLFxuICAgICAgc3RhcnQgPSBwb3MsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXg7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4M0MgLyogPCAqLykge1xuICAgIHBvcysrO1xuICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKGNvZGUgPT09IDB4MEEgLyogXFxuICovKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgaWYgKGNvZGUgPT09IDB4M0UgLyogPiAqLykge1xuICAgICAgICBsaW5rID0gbm9ybWFsaXplTGluayh1bmVzY2FwZU1kKHN0YXRlLnNyYy5zbGljZShzdGFydCArIDEsIHBvcykpKTtcbiAgICAgICAgaWYgKCFzdGF0ZS5wYXJzZXIudmFsaWRhdGVMaW5rKGxpbmspKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBzdGF0ZS5wb3MgPSBwb3MgKyAxO1xuICAgICAgICBzdGF0ZS5saW5rQ29udGVudCA9IGxpbms7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGNvZGUgPT09IDB4NUMgLyogXFwgKi8gJiYgcG9zICsgMSA8IG1heCkge1xuICAgICAgICBwb3MgKz0gMjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHBvcysrO1xuICAgIH1cblxuICAgIC8vIG5vIGNsb3NpbmcgJz4nXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gdGhpcyBzaG91bGQgYmUgLi4uIH0gZWxzZSB7IC4uLiBicmFuY2hcblxuICBsZXZlbCA9IDA7XG4gIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICAgIGlmIChjb2RlID09PSAweDIwKSB7IGJyZWFrOyB9XG5cbiAgICAvLyBhc2NpaSBjb250cm9sIGNoYXJzXG4gICAgaWYgKGNvZGUgPCAweDIwIHx8IGNvZGUgPT09IDB4N0YpIHsgYnJlYWs7IH1cblxuICAgIGlmIChjb2RlID09PSAweDVDIC8qIFxcICovICYmIHBvcyArIDEgPCBtYXgpIHtcbiAgICAgIHBvcyArPSAyO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDB4MjggLyogKCAqLykge1xuICAgICAgbGV2ZWwrKztcbiAgICAgIGlmIChsZXZlbCA+IDEpIHsgYnJlYWs7IH1cbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gMHgyOSAvKiApICovKSB7XG4gICAgICBsZXZlbC0tO1xuICAgICAgaWYgKGxldmVsIDwgMCkgeyBicmVhazsgfVxuICAgIH1cblxuICAgIHBvcysrO1xuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSBwb3MpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGluayA9IHVuZXNjYXBlTWQoc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBwb3MpKTtcbiAgaWYgKCFzdGF0ZS5wYXJzZXIudmFsaWRhdGVMaW5rKGxpbmspKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHN0YXRlLmxpbmtDb250ZW50ID0gbGluaztcbiAgc3RhdGUucG9zID0gcG9zO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBQYXJzZSBsaW5rIHRpdGxlXG4gKlxuICogICAtIG9uIHN1Y2Nlc3MgaXQgcmV0dXJucyBhIHN0cmluZyBhbmQgdXBkYXRlcyBzdGF0ZS5wb3M7XG4gKiAgIC0gb24gZmFpbHVyZSBpdCByZXR1cm5zIG51bGxcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHBvc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VMaW5rVGl0bGUoc3RhdGUsIHBvcykge1xuICB2YXIgY29kZSxcbiAgICAgIHN0YXJ0ID0gcG9zLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAobWFya2VyICE9PSAweDIyIC8qIFwiICovICYmIG1hcmtlciAhPT0gMHgyNyAvKiAnICovICYmIG1hcmtlciAhPT0gMHgyOCAvKiAoICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcysrO1xuXG4gIC8vIGlmIG9wZW5pbmcgbWFya2VyIGlzIFwiKFwiLCBzd2l0Y2ggaXQgdG8gY2xvc2luZyBtYXJrZXIgXCIpXCJcbiAgaWYgKG1hcmtlciA9PT0gMHgyOCkgeyBtYXJrZXIgPSAweDI5OyB9XG5cbiAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIHN0YXRlLnBvcyA9IHBvcyArIDE7XG4gICAgICBzdGF0ZS5saW5rQ29udGVudCA9IHVuZXNjYXBlTWQoc3RhdGUuc3JjLnNsaWNlKHN0YXJ0ICsgMSwgcG9zKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDB4NUMgLyogXFwgKi8gJiYgcG9zICsgMSA8IG1heCkge1xuICAgICAgcG9zICs9IDI7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwb3MrKztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUmVmZXJlbmNlKHN0cikge1xuICAvLyB1c2UgLnRvVXBwZXJDYXNlKCkgaW5zdGVhZCBvZiAudG9Mb3dlckNhc2UoKVxuICAvLyBoZXJlIHRvIGF2b2lkIGEgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlXG4gIC8vIG1lbWJlcnMgKG1vc3Qgbm90YWJseSwgYF9fcHJvdG9fX2ApXG4gIHJldHVybiBzdHIudHJpbSgpLnJlcGxhY2UoL1xccysvZywgJyAnKS50b1VwcGVyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVJlZmVyZW5jZShzdHIsIHBhcnNlciwgb3B0aW9ucywgZW52KSB7XG4gIHZhciBzdGF0ZSwgbGFiZWxFbmQsIHBvcywgbWF4LCBjb2RlLCBzdGFydCwgaHJlZiwgdGl0bGUsIGxhYmVsO1xuXG4gIGlmIChzdHIuY2hhckNvZGVBdCgwKSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIC0xOyB9XG5cbiAgaWYgKHN0ci5pbmRleE9mKCddOicpID09PSAtMSkgeyByZXR1cm4gLTE7IH1cblxuICBzdGF0ZSA9IG5ldyBTdGF0ZUlubGluZShzdHIsIHBhcnNlciwgb3B0aW9ucywgZW52LCBbXSk7XG4gIGxhYmVsRW5kID0gcGFyc2VMaW5rTGFiZWwoc3RhdGUsIDApO1xuXG4gIGlmIChsYWJlbEVuZCA8IDAgfHwgc3RyLmNoYXJDb2RlQXQobGFiZWxFbmQgKyAxKSAhPT0gMHgzQS8qIDogKi8pIHsgcmV0dXJuIC0xOyB9XG5cbiAgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIC8vIFtsYWJlbF06ICAgZGVzdGluYXRpb24gICAndGl0bGUnXG4gIC8vICAgICAgICAgXl5eIHNraXAgb3B0aW9uYWwgd2hpdGVzcGFjZSBoZXJlXG4gIGZvciAocG9zID0gbGFiZWxFbmQgKyAyOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgaWYgKGNvZGUgIT09IDB4MjAgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICB9XG5cbiAgLy8gW2xhYmVsXTogICBkZXN0aW5hdGlvbiAgICd0aXRsZSdcbiAgLy8gICAgICAgICAgICBeXl5eXl5eXl5eXiBwYXJzZSB0aGlzXG4gIGlmICghcGFyc2VMaW5rRGVzdGluYXRpb24oc3RhdGUsIHBvcykpIHsgcmV0dXJuIC0xOyB9XG4gIGhyZWYgPSBzdGF0ZS5saW5rQ29udGVudDtcbiAgcG9zID0gc3RhdGUucG9zO1xuXG4gIC8vIFtsYWJlbF06ICAgZGVzdGluYXRpb24gICAndGl0bGUnXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICBeXl4gc2tpcHBpbmcgdGhvc2Ugc3BhY2VzXG4gIHN0YXJ0ID0gcG9zO1xuICBmb3IgKHBvcyA9IHBvcyArIDE7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICBpZiAoY29kZSAhPT0gMHgyMCAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrOyB9XG4gIH1cblxuICAvLyBbbGFiZWxdOiAgIGRlc3RpbmF0aW9uICAgJ3RpdGxlJ1xuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgXl5eXl5eXiBwYXJzZSB0aGlzXG4gIGlmIChwb3MgPCBtYXggJiYgc3RhcnQgIT09IHBvcyAmJiBwYXJzZUxpbmtUaXRsZShzdGF0ZSwgcG9zKSkge1xuICAgIHRpdGxlID0gc3RhdGUubGlua0NvbnRlbnQ7XG4gICAgcG9zID0gc3RhdGUucG9zO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlID0gJyc7XG4gICAgcG9zID0gc3RhcnQ7XG4gIH1cblxuICAvLyBlbnN1cmUgdGhhdCB0aGUgZW5kIG9mIHRoZSBsaW5lIGlzIGVtcHR5XG4gIHdoaWxlIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyMC8qIHNwYWNlICovKSB7IHBvcysrOyB9XG4gIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgwQSkgeyByZXR1cm4gLTE7IH1cblxuICBsYWJlbCA9IG5vcm1hbGl6ZVJlZmVyZW5jZShzdHIuc2xpY2UoMSwgbGFiZWxFbmQpKTtcbiAgaWYgKHR5cGVvZiBlbnYucmVmZXJlbmNlc1tsYWJlbF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW52LnJlZmVyZW5jZXNbbGFiZWxdID0geyB0aXRsZTogdGl0bGUsIGhyZWY6IGhyZWYgfTtcbiAgfVxuXG4gIHJldHVybiBwb3M7XG59XG5cblxuZnVuY3Rpb24gcmVmZXJlbmNlcyhzdGF0ZSkge1xuICB2YXIgdG9rZW5zID0gc3RhdGUudG9rZW5zLCBpLCBsLCBjb250ZW50LCBwb3M7XG5cbiAgc3RhdGUuZW52LnJlZmVyZW5jZXMgPSBzdGF0ZS5lbnYucmVmZXJlbmNlcyB8fCB7fTtcblxuICBpZiAoc3RhdGUuaW5saW5lTW9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFNjYW4gZGVmaW5pdGlvbnMgaW4gcGFyYWdyYXBoIGlubGluZXNcbiAgZm9yIChpID0gMSwgbCA9IHRva2Vucy5sZW5ndGggLSAxOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHRva2Vuc1tpXS50eXBlID09PSAnaW5saW5lJyAmJlxuICAgICAgICB0b2tlbnNbaSAtIDFdLnR5cGUgPT09ICdwYXJhZ3JhcGhfb3BlbicgJiZcbiAgICAgICAgdG9rZW5zW2kgKyAxXS50eXBlID09PSAncGFyYWdyYXBoX2Nsb3NlJykge1xuXG4gICAgICBjb250ZW50ID0gdG9rZW5zW2ldLmNvbnRlbnQ7XG4gICAgICB3aGlsZSAoY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgcG9zID0gcGFyc2VSZWZlcmVuY2UoY29udGVudCwgc3RhdGUuaW5saW5lLCBzdGF0ZS5vcHRpb25zLCBzdGF0ZS5lbnYpO1xuICAgICAgICBpZiAocG9zIDwgMCkgeyBicmVhazsgfVxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zbGljZShwb3MpLnRyaW0oKTtcbiAgICAgIH1cblxuICAgICAgdG9rZW5zW2ldLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgaWYgKCFjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICB0b2tlbnNbaSAtIDFdLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgdG9rZW5zW2kgKyAxXS50aWdodCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlubGluZShzdGF0ZSkge1xuICB2YXIgdG9rZW5zID0gc3RhdGUudG9rZW5zLCB0b2ssIGksIGw7XG5cbiAgLy8gUGFyc2UgaW5saW5lc1xuICBmb3IgKGkgPSAwLCBsID0gdG9rZW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRvayA9IHRva2Vuc1tpXTtcbiAgICBpZiAodG9rLnR5cGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICBzdGF0ZS5pbmxpbmUucGFyc2UodG9rLmNvbnRlbnQsIHN0YXRlLm9wdGlvbnMsIHN0YXRlLmVudiwgdG9rLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9vdG5vdGVfYmxvY2soc3RhdGUpIHtcbiAgdmFyIGksIGwsIGosIHQsIGxhc3RQYXJhZ3JhcGgsIGxpc3QsIHRva2VucywgY3VycmVudCwgY3VycmVudExhYmVsLFxuICAgICAgbGV2ZWwgPSAwLFxuICAgICAgaW5zaWRlUmVmID0gZmFsc2UsXG4gICAgICByZWZUb2tlbnMgPSB7fTtcblxuICBpZiAoIXN0YXRlLmVudi5mb290bm90ZXMpIHsgcmV0dXJuOyB9XG5cbiAgc3RhdGUudG9rZW5zID0gc3RhdGUudG9rZW5zLmZpbHRlcihmdW5jdGlvbih0b2spIHtcbiAgICBpZiAodG9rLnR5cGUgPT09ICdmb290bm90ZV9yZWZlcmVuY2Vfb3BlbicpIHtcbiAgICAgIGluc2lkZVJlZiA9IHRydWU7XG4gICAgICBjdXJyZW50ID0gW107XG4gICAgICBjdXJyZW50TGFiZWwgPSB0b2subGFiZWw7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0b2sudHlwZSA9PT0gJ2Zvb3Rub3RlX3JlZmVyZW5jZV9jbG9zZScpIHtcbiAgICAgIGluc2lkZVJlZiA9IGZhbHNlO1xuICAgICAgLy8gcHJlcGVuZCAnOicgdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlIG1lbWJlcnNcbiAgICAgIHJlZlRva2Vuc1snOicgKyBjdXJyZW50TGFiZWxdID0gY3VycmVudDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGluc2lkZVJlZikgeyBjdXJyZW50LnB1c2godG9rKTsgfVxuICAgIHJldHVybiAhaW5zaWRlUmVmO1xuICB9KTtcblxuICBpZiAoIXN0YXRlLmVudi5mb290bm90ZXMubGlzdCkgeyByZXR1cm47IH1cbiAgbGlzdCA9IHN0YXRlLmVudi5mb290bm90ZXMubGlzdDtcblxuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2Zvb3Rub3RlX2Jsb2NrX29wZW4nLFxuICAgIGxldmVsOiBsZXZlbCsrXG4gIH0pO1xuICBmb3IgKGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnZm9vdG5vdGVfb3BlbicsXG4gICAgICBpZDogaSxcbiAgICAgIGxldmVsOiBsZXZlbCsrXG4gICAgfSk7XG5cbiAgICBpZiAobGlzdFtpXS50b2tlbnMpIHtcbiAgICAgIHRva2VucyA9IFtdO1xuICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAncGFyYWdyYXBoX29wZW4nLFxuICAgICAgICB0aWdodDogZmFsc2UsXG4gICAgICAgIGxldmVsOiBsZXZlbCsrXG4gICAgICB9KTtcbiAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgIGNoaWxkcmVuOiBsaXN0W2ldLnRva2Vuc1xuICAgICAgfSk7XG4gICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdwYXJhZ3JhcGhfY2xvc2UnLFxuICAgICAgICB0aWdodDogZmFsc2UsXG4gICAgICAgIGxldmVsOiAtLWxldmVsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGxpc3RbaV0ubGFiZWwpIHtcbiAgICAgIHRva2VucyA9IHJlZlRva2Vuc1snOicgKyBsaXN0W2ldLmxhYmVsXTtcbiAgICB9XG5cbiAgICBzdGF0ZS50b2tlbnMgPSBzdGF0ZS50b2tlbnMuY29uY2F0KHRva2Vucyk7XG4gICAgaWYgKHN0YXRlLnRva2Vuc1tzdGF0ZS50b2tlbnMubGVuZ3RoIC0gMV0udHlwZSA9PT0gJ3BhcmFncmFwaF9jbG9zZScpIHtcbiAgICAgIGxhc3RQYXJhZ3JhcGggPSBzdGF0ZS50b2tlbnMucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3RQYXJhZ3JhcGggPSBudWxsO1xuICAgIH1cblxuICAgIHQgPSBsaXN0W2ldLmNvdW50ID4gMCA/IGxpc3RbaV0uY291bnQgOiAxO1xuICAgIGZvciAoaiA9IDA7IGogPCB0OyBqKyspIHtcbiAgICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2Zvb3Rub3RlX2FuY2hvcicsXG4gICAgICAgIGlkOiBpLFxuICAgICAgICBzdWJJZDogaixcbiAgICAgICAgbGV2ZWw6IGxldmVsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobGFzdFBhcmFncmFwaCkge1xuICAgICAgc3RhdGUudG9rZW5zLnB1c2gobGFzdFBhcmFncmFwaCk7XG4gICAgfVxuXG4gICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgdHlwZTogJ2Zvb3Rub3RlX2Nsb3NlJyxcbiAgICAgIGxldmVsOiAtLWxldmVsXG4gICAgfSk7XG4gIH1cbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdmb290bm90ZV9ibG9ja19jbG9zZScsXG4gICAgbGV2ZWw6IC0tbGV2ZWxcbiAgfSk7XG59XG5cbi8vIEVuY2xvc2UgYWJicmV2aWF0aW9ucyBpbiA8YWJicj4gdGFnc1xuLy9cblxudmFyIFBVTkNUX0NIQVJTID0gJyBcXG4oKVtdXFwnXCIuLCE/LSc7XG5cblxuLy8gZnJvbSBHb29nbGUgY2xvc3VyZSBsaWJyYXJ5XG4vLyBodHRwOi8vY2xvc3VyZS1saWJyYXJ5Lmdvb2dsZWNvZGUuY29tL2dpdC1oaXN0b3J5L2RvY3MvbG9jYWxfY2xvc3VyZV9nb29nX3N0cmluZ19zdHJpbmcuanMuc291cmNlLmh0bWwjbGluZTEwMjFcbmZ1bmN0aW9uIHJlZ0VzY2FwZShzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoLyhbLSgpXFxbXFxde30rPyouJFxcXnwsOiM8IVxcXFxdKS9nLCAnXFxcXCQxJyk7XG59XG5cblxuZnVuY3Rpb24gYWJicjIoc3RhdGUpIHtcbiAgdmFyIGksIGosIGwsIHRva2VucywgdG9rZW4sIHRleHQsIG5vZGVzLCBwb3MsIGxldmVsLCByZWcsIG0sIHJlZ1RleHQsXG4gICAgICBibG9ja1Rva2VucyA9IHN0YXRlLnRva2VucztcblxuICBpZiAoIXN0YXRlLmVudi5hYmJyZXZpYXRpb25zKSB7IHJldHVybjsgfVxuICBpZiAoIXN0YXRlLmVudi5hYmJyUmVnRXhwKSB7XG4gICAgcmVnVGV4dCA9ICcoXnxbJyArIFBVTkNUX0NIQVJTLnNwbGl0KCcnKS5tYXAocmVnRXNjYXBlKS5qb2luKCcnKSArICddKSdcbiAgICAgICAgICAgICsgJygnICsgT2JqZWN0LmtleXMoc3RhdGUuZW52LmFiYnJldmlhdGlvbnMpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9KS5tYXAocmVnRXNjYXBlKS5qb2luKCd8JykgKyAnKSdcbiAgICAgICAgICAgICsgJygkfFsnICsgUFVOQ1RfQ0hBUlMuc3BsaXQoJycpLm1hcChyZWdFc2NhcGUpLmpvaW4oJycpICsgJ10pJztcbiAgICBzdGF0ZS5lbnYuYWJiclJlZ0V4cCA9IG5ldyBSZWdFeHAocmVnVGV4dCwgJ2cnKTtcbiAgfVxuICByZWcgPSBzdGF0ZS5lbnYuYWJiclJlZ0V4cDtcblxuICBmb3IgKGogPSAwLCBsID0gYmxvY2tUb2tlbnMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgaWYgKGJsb2NrVG9rZW5zW2pdLnR5cGUgIT09ICdpbmxpbmUnKSB7IGNvbnRpbnVlOyB9XG4gICAgdG9rZW5zID0gYmxvY2tUb2tlbnNbal0uY2hpbGRyZW47XG5cbiAgICAvLyBXZSBzY2FuIGZyb20gdGhlIGVuZCwgdG8ga2VlcCBwb3NpdGlvbiB3aGVuIG5ldyB0YWdzIGFkZGVkLlxuICAgIGZvciAoaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICBpZiAodG9rZW4udHlwZSAhPT0gJ3RleHQnKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgIHBvcyA9IDA7XG4gICAgICB0ZXh0ID0gdG9rZW4uY29udGVudDtcbiAgICAgIHJlZy5sYXN0SW5kZXggPSAwO1xuICAgICAgbGV2ZWwgPSB0b2tlbi5sZXZlbDtcbiAgICAgIG5vZGVzID0gW107XG5cbiAgICAgIHdoaWxlICgobSA9IHJlZy5leGVjKHRleHQpKSkge1xuICAgICAgICBpZiAocmVnLmxhc3RJbmRleCA+IHBvcykge1xuICAgICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgY29udGVudDogdGV4dC5zbGljZShwb3MsIG0uaW5kZXggKyBtWzFdLmxlbmd0aCksXG4gICAgICAgICAgICBsZXZlbDogbGV2ZWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdhYmJyX29wZW4nLFxuICAgICAgICAgIHRpdGxlOiBzdGF0ZS5lbnYuYWJicmV2aWF0aW9uc1snOicgKyBtWzJdXSxcbiAgICAgICAgICBsZXZlbDogbGV2ZWwrK1xuICAgICAgICB9KTtcbiAgICAgICAgbm9kZXMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIGNvbnRlbnQ6IG1bMl0sXG4gICAgICAgICAgbGV2ZWw6IGxldmVsXG4gICAgICAgIH0pO1xuICAgICAgICBub2Rlcy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnYWJicl9jbG9zZScsXG4gICAgICAgICAgbGV2ZWw6IC0tbGV2ZWxcbiAgICAgICAgfSk7XG4gICAgICAgIHBvcyA9IHJlZy5sYXN0SW5kZXggLSBtWzNdLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFub2Rlcy5sZW5ndGgpIHsgY29udGludWU7IH1cblxuICAgICAgaWYgKHBvcyA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBjb250ZW50OiB0ZXh0LnNsaWNlKHBvcyksXG4gICAgICAgICAgbGV2ZWw6IGxldmVsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyByZXBsYWNlIGN1cnJlbnQgbm9kZVxuICAgICAgYmxvY2tUb2tlbnNbal0uY2hpbGRyZW4gPSB0b2tlbnMgPSBbXS5jb25jYXQodG9rZW5zLnNsaWNlKDAsIGkpLCBub2RlcywgdG9rZW5zLnNsaWNlKGkgKyAxKSk7XG4gICAgfVxuICB9XG59XG5cbi8vIFNpbXBsZSB0eXBvZ3JhcGhpY2FsIHJlcGxhY2VtZW50c1xuLy9cbi8vIFRPRE86XG4vLyAtIGZyYWN0aW9uYWxzIDEvMiwgMS80LCAzLzQgLT4gwr0sIMK8LCDCvlxuLy8gLSBtaWx0aXBsaWNhdGlvbiAyIHggNCAtPiAyIMOXIDRcblxudmFyIFJBUkVfUkUgPSAvXFwrLXxcXC5cXC58XFw/XFw/XFw/XFw/fCEhISF8LCx8LS0vO1xuXG52YXIgU0NPUEVEX0FCQlJfUkUgPSAvXFwoKGN8dG18cnxwKVxcKS9pZztcbnZhciBTQ09QRURfQUJCUiA9IHtcbiAgJ2MnOiAnwqknLFxuICAncic6ICfCricsXG4gICdwJzogJ8KnJyxcbiAgJ3RtJzogJ+KEoidcbn07XG5cbmZ1bmN0aW9uIHJlcGxhY2VTY29wZWRBYmJyKHN0cikge1xuICBpZiAoc3RyLmluZGV4T2YoJygnKSA8IDApIHsgcmV0dXJuIHN0cjsgfVxuXG4gIHJldHVybiBzdHIucmVwbGFjZShTQ09QRURfQUJCUl9SRSwgZnVuY3Rpb24obWF0Y2gsIG5hbWUpIHtcbiAgICByZXR1cm4gU0NPUEVEX0FCQlJbbmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gcmVwbGFjZShzdGF0ZSkge1xuICB2YXIgaSwgdG9rZW4sIHRleHQsIGlubGluZVRva2VucywgYmxrSWR4O1xuXG4gIGlmICghc3RhdGUub3B0aW9ucy50eXBvZ3JhcGhlcikgeyByZXR1cm47IH1cblxuICBmb3IgKGJsa0lkeCA9IHN0YXRlLnRva2Vucy5sZW5ndGggLSAxOyBibGtJZHggPj0gMDsgYmxrSWR4LS0pIHtcblxuICAgIGlmIChzdGF0ZS50b2tlbnNbYmxrSWR4XS50eXBlICE9PSAnaW5saW5lJykgeyBjb250aW51ZTsgfVxuXG4gICAgaW5saW5lVG9rZW5zID0gc3RhdGUudG9rZW5zW2Jsa0lkeF0uY2hpbGRyZW47XG5cbiAgICBmb3IgKGkgPSBpbmxpbmVUb2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRva2VuID0gaW5saW5lVG9rZW5zW2ldO1xuICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICB0ZXh0ID0gdG9rZW4uY29udGVudDtcblxuICAgICAgICB0ZXh0ID0gcmVwbGFjZVNjb3BlZEFiYnIodGV4dCk7XG5cbiAgICAgICAgaWYgKFJBUkVfUkUudGVzdCh0ZXh0KSkge1xuICAgICAgICAgIHRleHQgPSB0ZXh0XG4gICAgICAgICAgICAucmVwbGFjZSgvXFwrLS9nLCAnwrEnKVxuICAgICAgICAgICAgLy8gLi4sIC4uLiwgLi4uLi4uLiAtPiDigKZcbiAgICAgICAgICAgIC8vIGJ1dCA/Li4uLi4gJiAhLi4uLi4gLT4gPy4uICYgIS4uXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwuezIsfS9nLCAn4oCmJykucmVwbGFjZSgvKFs/IV0p4oCmL2csICckMS4uJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oWz8hXSl7NCx9L2csICckMSQxJDEnKS5yZXBsYWNlKC8sezIsfS9nLCAnLCcpXG4gICAgICAgICAgICAvLyBlbS1kYXNoXG4gICAgICAgICAgICAucmVwbGFjZSgvKF58W14tXSktLS0oW14tXXwkKS9tZywgJyQxXFx1MjAxNCQyJylcbiAgICAgICAgICAgIC8vIGVuLWRhc2hcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oXnxcXHMpLS0oXFxzfCQpL21nLCAnJDFcXHUyMDEzJDInKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyhefFteLVxcc10pLS0oW14tXFxzXXwkKS9tZywgJyQxXFx1MjAxMyQyJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b2tlbi5jb250ZW50ID0gdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQ29udmVydCBzdHJhaWdodCBxdW90YXRpb24gbWFya3MgdG8gdHlwb2dyYXBoaWMgb25lc1xuLy9cblxudmFyIFFVT1RFX1RFU1RfUkUgPSAvWydcIl0vO1xudmFyIFFVT1RFX1JFID0gL1snXCJdL2c7XG52YXIgUFVOQ1RfUkUgPSAvWy1cXHMoKVxcW1xcXV0vO1xudmFyIEFQT1NUUk9QSEUgPSAn4oCZJztcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRydWUgaWYgdGhlIGNoYXJhY3RlciBhdCBgcG9zYFxuLy8gY291bGQgYmUgaW5zaWRlIGEgd29yZC5cbmZ1bmN0aW9uIGlzTGV0dGVyKHN0ciwgcG9zKSB7XG4gIGlmIChwb3MgPCAwIHx8IHBvcyA+PSBzdHIubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuICByZXR1cm4gIVBVTkNUX1JFLnRlc3Qoc3RyW3Bvc10pO1xufVxuXG5cbmZ1bmN0aW9uIHJlcGxhY2VBdChzdHIsIGluZGV4LCBjaCkge1xuICByZXR1cm4gc3RyLnN1YnN0cigwLCBpbmRleCkgKyBjaCArIHN0ci5zdWJzdHIoaW5kZXggKyAxKTtcbn1cblxuXG5mdW5jdGlvbiBzbWFydHF1b3RlcyhzdGF0ZSkge1xuICAvKmVzbGludCBtYXgtZGVwdGg6MCovXG4gIHZhciBpLCB0b2tlbiwgdGV4dCwgdCwgcG9zLCBtYXgsIHRoaXNMZXZlbCwgbGFzdFNwYWNlLCBuZXh0U3BhY2UsIGl0ZW0sXG4gICAgICBjYW5PcGVuLCBjYW5DbG9zZSwgaiwgaXNTaW5nbGUsIGJsa0lkeCwgdG9rZW5zLFxuICAgICAgc3RhY2s7XG5cbiAgaWYgKCFzdGF0ZS5vcHRpb25zLnR5cG9ncmFwaGVyKSB7IHJldHVybjsgfVxuXG4gIHN0YWNrID0gW107XG5cbiAgZm9yIChibGtJZHggPSBzdGF0ZS50b2tlbnMubGVuZ3RoIC0gMTsgYmxrSWR4ID49IDA7IGJsa0lkeC0tKSB7XG5cbiAgICBpZiAoc3RhdGUudG9rZW5zW2Jsa0lkeF0udHlwZSAhPT0gJ2lubGluZScpIHsgY29udGludWU7IH1cblxuICAgIHRva2VucyA9IHN0YXRlLnRva2Vuc1tibGtJZHhdLmNoaWxkcmVuO1xuICAgIHN0YWNrLmxlbmd0aCA9IDA7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgaWYgKHRva2VuLnR5cGUgIT09ICd0ZXh0JyB8fCBRVU9URV9URVNUX1JFLnRlc3QodG9rZW4udGV4dCkpIHsgY29udGludWU7IH1cblxuICAgICAgdGhpc0xldmVsID0gdG9rZW5zW2ldLmxldmVsO1xuXG4gICAgICBmb3IgKGogPSBzdGFjay5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICBpZiAoc3RhY2tbal0ubGV2ZWwgPD0gdGhpc0xldmVsKSB7IGJyZWFrOyB9XG4gICAgICB9XG4gICAgICBzdGFjay5sZW5ndGggPSBqICsgMTtcblxuICAgICAgdGV4dCA9IHRva2VuLmNvbnRlbnQ7XG4gICAgICBwb3MgPSAwO1xuICAgICAgbWF4ID0gdGV4dC5sZW5ndGg7XG5cbiAgICAgIC8qZXNsaW50IG5vLWxhYmVsczowLGJsb2NrLXNjb3BlZC12YXI6MCovXG4gICAgICBPVVRFUjpcbiAgICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgICAgUVVPVEVfUkUubGFzdEluZGV4ID0gcG9zO1xuICAgICAgICB0ID0gUVVPVEVfUkUuZXhlYyh0ZXh0KTtcbiAgICAgICAgaWYgKCF0KSB7IGJyZWFrOyB9XG5cbiAgICAgICAgbGFzdFNwYWNlID0gIWlzTGV0dGVyKHRleHQsIHQuaW5kZXggLSAxKTtcbiAgICAgICAgcG9zID0gdC5pbmRleCArIDE7XG4gICAgICAgIGlzU2luZ2xlID0gKHRbMF0gPT09IFwiJ1wiKTtcbiAgICAgICAgbmV4dFNwYWNlID0gIWlzTGV0dGVyKHRleHQsIHBvcyk7XG5cbiAgICAgICAgaWYgKCFuZXh0U3BhY2UgJiYgIWxhc3RTcGFjZSkge1xuICAgICAgICAgIC8vIG1pZGRsZSBvZiB3b3JkXG4gICAgICAgICAgaWYgKGlzU2luZ2xlKSB7XG4gICAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZUF0KHRva2VuLmNvbnRlbnQsIHQuaW5kZXgsIEFQT1NUUk9QSEUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbk9wZW4gPSAhbmV4dFNwYWNlO1xuICAgICAgICBjYW5DbG9zZSA9ICFsYXN0U3BhY2U7XG5cbiAgICAgICAgaWYgKGNhbkNsb3NlKSB7XG4gICAgICAgICAgLy8gdGhpcyBjb3VsZCBiZSBhIGNsb3NpbmcgcXVvdGUsIHJld2luZCB0aGUgc3RhY2sgdG8gZ2V0IGEgbWF0Y2hcbiAgICAgICAgICBmb3IgKGogPSBzdGFjay5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgaXRlbSA9IHN0YWNrW2pdO1xuICAgICAgICAgICAgaWYgKHN0YWNrW2pdLmxldmVsIDwgdGhpc0xldmVsKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICBpZiAoaXRlbS5zaW5nbGUgPT09IGlzU2luZ2xlICYmIHN0YWNrW2pdLmxldmVsID09PSB0aGlzTGV2ZWwpIHtcbiAgICAgICAgICAgICAgaXRlbSA9IHN0YWNrW2pdO1xuICAgICAgICAgICAgICBpZiAoaXNTaW5nbGUpIHtcbiAgICAgICAgICAgICAgICB0b2tlbnNbaXRlbS50b2tlbl0uY29udGVudCA9IHJlcGxhY2VBdCh0b2tlbnNbaXRlbS50b2tlbl0uY29udGVudCwgaXRlbS5wb3MsIHN0YXRlLm9wdGlvbnMucXVvdGVzWzJdKTtcbiAgICAgICAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZUF0KHRva2VuLmNvbnRlbnQsIHQuaW5kZXgsIHN0YXRlLm9wdGlvbnMucXVvdGVzWzNdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2tlbnNbaXRlbS50b2tlbl0uY29udGVudCA9IHJlcGxhY2VBdCh0b2tlbnNbaXRlbS50b2tlbl0uY29udGVudCwgaXRlbS5wb3MsIHN0YXRlLm9wdGlvbnMucXVvdGVzWzBdKTtcbiAgICAgICAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZUF0KHRva2VuLmNvbnRlbnQsIHQuaW5kZXgsIHN0YXRlLm9wdGlvbnMucXVvdGVzWzFdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzdGFjay5sZW5ndGggPSBqO1xuICAgICAgICAgICAgICBjb250aW51ZSBPVVRFUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FuT3Blbikge1xuICAgICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgICAgdG9rZW46IGksXG4gICAgICAgICAgICBwb3M6IHQuaW5kZXgsXG4gICAgICAgICAgICBzaW5nbGU6IGlzU2luZ2xlLFxuICAgICAgICAgICAgbGV2ZWw6IHRoaXNMZXZlbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGNhbkNsb3NlICYmIGlzU2luZ2xlKSB7XG4gICAgICAgICAgdG9rZW4uY29udGVudCA9IHJlcGxhY2VBdCh0b2tlbi5jb250ZW50LCB0LmluZGV4LCBBUE9TVFJPUEhFKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENvcmUgcGFyc2VyIGBydWxlc2BcbiAqL1xuXG52YXIgX3J1bGVzID0gW1xuICBbICdibG9jaycsICAgICAgICAgIGJsb2NrICAgICAgICAgIF0sXG4gIFsgJ2FiYnInLCAgICAgICAgICAgYWJiciAgICAgICAgICAgXSxcbiAgWyAncmVmZXJlbmNlcycsICAgICByZWZlcmVuY2VzICAgICBdLFxuICBbICdpbmxpbmUnLCAgICAgICAgIGlubGluZSAgICAgICAgIF0sXG4gIFsgJ2Zvb3Rub3RlX3RhaWwnLCAgZm9vdG5vdGVfYmxvY2sgIF0sXG4gIFsgJ2FiYnIyJywgICAgICAgICAgYWJicjIgICAgICAgICAgXSxcbiAgWyAncmVwbGFjZW1lbnRzJywgICByZXBsYWNlICAgXSxcbiAgWyAnc21hcnRxdW90ZXMnLCAgICBzbWFydHF1b3RlcyAgICBdLFxuXTtcblxuLyoqXG4gKiBDbGFzcyBmb3IgdG9wIGxldmVsIChgY29yZWApIHBhcnNlciBydWxlc1xuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIENvcmUoKSB7XG4gIHRoaXMub3B0aW9ucyA9IHt9O1xuICB0aGlzLnJ1bGVyID0gbmV3IFJ1bGVyKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgX3J1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5ydWxlci5wdXNoKF9ydWxlc1tpXVswXSwgX3J1bGVzW2ldWzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFByb2Nlc3MgcnVsZXMgd2l0aCB0aGUgZ2l2ZW4gYHN0YXRlYFxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gYHN0YXRlYFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuQ29yZS5wcm90b3R5cGUucHJvY2VzcyA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB2YXIgaSwgbCwgcnVsZXM7XG4gIHJ1bGVzID0gdGhpcy5ydWxlci5nZXRSdWxlcygnJyk7XG4gIGZvciAoaSA9IDAsIGwgPSBydWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBydWxlc1tpXShzdGF0ZSk7XG4gIH1cbn07XG5cbi8vIFBhcnNlciBzdGF0ZSBjbGFzc1xuXG5mdW5jdGlvbiBTdGF0ZUJsb2NrKHNyYywgcGFyc2VyLCBvcHRpb25zLCBlbnYsIHRva2Vucykge1xuICB2YXIgY2gsIHMsIHN0YXJ0LCBwb3MsIGxlbiwgaW5kZW50LCBpbmRlbnRfZm91bmQ7XG5cbiAgdGhpcy5zcmMgPSBzcmM7XG5cbiAgLy8gU2hvcnRjdXRzIHRvIHNpbXBsaWZ5IG5lc3RlZCBjYWxsc1xuICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gIHRoaXMuZW52ID0gZW52O1xuXG4gIC8vXG4gIC8vIEludGVybmFsIHN0YXRlIHZhcnRpYWJsZXNcbiAgLy9cblxuICB0aGlzLnRva2VucyA9IHRva2VucztcblxuICB0aGlzLmJNYXJrcyA9IFtdOyAgLy8gbGluZSBiZWdpbiBvZmZzZXRzIGZvciBmYXN0IGp1bXBzXG4gIHRoaXMuZU1hcmtzID0gW107ICAvLyBsaW5lIGVuZCBvZmZzZXRzIGZvciBmYXN0IGp1bXBzXG4gIHRoaXMudFNoaWZ0ID0gW107ICAvLyBpbmRlbnQgZm9yIGVhY2ggbGluZVxuXG4gIC8vIGJsb2NrIHBhcnNlciB2YXJpYWJsZXNcbiAgdGhpcy5ibGtJbmRlbnQgID0gMDsgLy8gcmVxdWlyZWQgYmxvY2sgY29udGVudCBpbmRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gKGZvciBleGFtcGxlLCBpZiB3ZSBhcmUgaW4gbGlzdClcbiAgdGhpcy5saW5lICAgICAgID0gMDsgLy8gbGluZSBpbmRleCBpbiBzcmNcbiAgdGhpcy5saW5lTWF4ICAgID0gMDsgLy8gbGluZXMgY291bnRcbiAgdGhpcy50aWdodCAgICAgID0gZmFsc2U7ICAvLyBsb29zZS90aWdodCBtb2RlIGZvciBsaXN0c1xuICB0aGlzLnBhcmVudFR5cGUgPSAncm9vdCc7IC8vIGlmIGBsaXN0YCwgYmxvY2sgcGFyc2VyIHN0b3BzIG9uIHR3byBuZXdsaW5lc1xuICB0aGlzLmRkSW5kZW50ICAgPSAtMTsgLy8gaW5kZW50IG9mIHRoZSBjdXJyZW50IGRkIGJsb2NrICgtMSBpZiB0aGVyZSBpc24ndCBhbnkpXG5cbiAgdGhpcy5sZXZlbCA9IDA7XG5cbiAgLy8gcmVuZGVyZXJcbiAgdGhpcy5yZXN1bHQgPSAnJztcblxuICAvLyBDcmVhdGUgY2FjaGVzXG4gIC8vIEdlbmVyYXRlIG1hcmtlcnMuXG4gIHMgPSB0aGlzLnNyYztcbiAgaW5kZW50ID0gMDtcbiAgaW5kZW50X2ZvdW5kID0gZmFsc2U7XG5cbiAgZm9yIChzdGFydCA9IHBvcyA9IGluZGVudCA9IDAsIGxlbiA9IHMubGVuZ3RoOyBwb3MgPCBsZW47IHBvcysrKSB7XG4gICAgY2ggPSBzLmNoYXJDb2RlQXQocG9zKTtcblxuICAgIGlmICghaW5kZW50X2ZvdW5kKSB7XG4gICAgICBpZiAoY2ggPT09IDB4MjAvKiBzcGFjZSAqLykge1xuICAgICAgICBpbmRlbnQrKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRlbnRfZm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaCA9PT0gMHgwQSB8fCBwb3MgPT09IGxlbiAtIDEpIHtcbiAgICAgIGlmIChjaCAhPT0gMHgwQSkgeyBwb3MrKzsgfVxuICAgICAgdGhpcy5iTWFya3MucHVzaChzdGFydCk7XG4gICAgICB0aGlzLmVNYXJrcy5wdXNoKHBvcyk7XG4gICAgICB0aGlzLnRTaGlmdC5wdXNoKGluZGVudCk7XG5cbiAgICAgIGluZGVudF9mb3VuZCA9IGZhbHNlO1xuICAgICAgaW5kZW50ID0gMDtcbiAgICAgIHN0YXJ0ID0gcG9zICsgMTtcbiAgICB9XG4gIH1cblxuICAvLyBQdXNoIGZha2UgZW50cnkgdG8gc2ltcGxpZnkgY2FjaGUgYm91bmRzIGNoZWNrc1xuICB0aGlzLmJNYXJrcy5wdXNoKHMubGVuZ3RoKTtcbiAgdGhpcy5lTWFya3MucHVzaChzLmxlbmd0aCk7XG4gIHRoaXMudFNoaWZ0LnB1c2goMCk7XG5cbiAgdGhpcy5saW5lTWF4ID0gdGhpcy5iTWFya3MubGVuZ3RoIC0gMTsgLy8gZG9uJ3QgY291bnQgbGFzdCBmYWtlIGxpbmVcbn1cblxuU3RhdGVCbG9jay5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uIGlzRW1wdHkobGluZSkge1xuICByZXR1cm4gdGhpcy5iTWFya3NbbGluZV0gKyB0aGlzLnRTaGlmdFtsaW5lXSA+PSB0aGlzLmVNYXJrc1tsaW5lXTtcbn07XG5cblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBFbXB0eUxpbmVzID0gZnVuY3Rpb24gc2tpcEVtcHR5TGluZXMoZnJvbSkge1xuICBmb3IgKHZhciBtYXggPSB0aGlzLmxpbmVNYXg7IGZyb20gPCBtYXg7IGZyb20rKykge1xuICAgIGlmICh0aGlzLmJNYXJrc1tmcm9tXSArIHRoaXMudFNoaWZ0W2Zyb21dIDwgdGhpcy5lTWFya3NbZnJvbV0pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZnJvbTtcbn07XG5cbi8vIFNraXAgc3BhY2VzIGZyb20gZ2l2ZW4gcG9zaXRpb24uXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5za2lwU3BhY2VzID0gZnVuY3Rpb24gc2tpcFNwYWNlcyhwb3MpIHtcbiAgZm9yICh2YXIgbWF4ID0gdGhpcy5zcmMubGVuZ3RoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgaWYgKHRoaXMuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgyMC8qIHNwYWNlICovKSB7IGJyZWFrOyB9XG4gIH1cbiAgcmV0dXJuIHBvcztcbn07XG5cbi8vIFNraXAgY2hhciBjb2RlcyBmcm9tIGdpdmVuIHBvc2l0aW9uXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5za2lwQ2hhcnMgPSBmdW5jdGlvbiBza2lwQ2hhcnMocG9zLCBjb2RlKSB7XG4gIGZvciAodmFyIG1heCA9IHRoaXMuc3JjLmxlbmd0aDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGlmICh0aGlzLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IGNvZGUpIHsgYnJlYWs7IH1cbiAgfVxuICByZXR1cm4gcG9zO1xufTtcblxuLy8gU2tpcCBjaGFyIGNvZGVzIHJldmVyc2UgZnJvbSBnaXZlbiBwb3NpdGlvbiAtIDFcblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBDaGFyc0JhY2sgPSBmdW5jdGlvbiBza2lwQ2hhcnNCYWNrKHBvcywgY29kZSwgbWluKSB7XG4gIGlmIChwb3MgPD0gbWluKSB7IHJldHVybiBwb3M7IH1cblxuICB3aGlsZSAocG9zID4gbWluKSB7XG4gICAgaWYgKGNvZGUgIT09IHRoaXMuc3JjLmNoYXJDb2RlQXQoLS1wb3MpKSB7IHJldHVybiBwb3MgKyAxOyB9XG4gIH1cbiAgcmV0dXJuIHBvcztcbn07XG5cbi8vIGN1dCBsaW5lcyByYW5nZSBmcm9tIHNvdXJjZS5cblN0YXRlQmxvY2sucHJvdG90eXBlLmdldExpbmVzID0gZnVuY3Rpb24gZ2V0TGluZXMoYmVnaW4sIGVuZCwgaW5kZW50LCBrZWVwTGFzdExGKSB7XG4gIHZhciBpLCBmaXJzdCwgbGFzdCwgcXVldWUsIHNoaWZ0LFxuICAgICAgbGluZSA9IGJlZ2luO1xuXG4gIGlmIChiZWdpbiA+PSBlbmQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBPcHQ6IGRvbid0IHVzZSBwdXNoIHF1ZXVlIGZvciBzaW5nbGUgbGluZTtcbiAgaWYgKGxpbmUgKyAxID09PSBlbmQpIHtcbiAgICBmaXJzdCA9IHRoaXMuYk1hcmtzW2xpbmVdICsgTWF0aC5taW4odGhpcy50U2hpZnRbbGluZV0sIGluZGVudCk7XG4gICAgbGFzdCA9IGtlZXBMYXN0TEYgPyB0aGlzLmVNYXJrc1tsaW5lXSArIDEgOiB0aGlzLmVNYXJrc1tsaW5lXTtcbiAgICByZXR1cm4gdGhpcy5zcmMuc2xpY2UoZmlyc3QsIGxhc3QpO1xuICB9XG5cbiAgcXVldWUgPSBuZXcgQXJyYXkoZW5kIC0gYmVnaW4pO1xuXG4gIGZvciAoaSA9IDA7IGxpbmUgPCBlbmQ7IGxpbmUrKywgaSsrKSB7XG4gICAgc2hpZnQgPSB0aGlzLnRTaGlmdFtsaW5lXTtcbiAgICBpZiAoc2hpZnQgPiBpbmRlbnQpIHsgc2hpZnQgPSBpbmRlbnQ7IH1cbiAgICBpZiAoc2hpZnQgPCAwKSB7IHNoaWZ0ID0gMDsgfVxuXG4gICAgZmlyc3QgPSB0aGlzLmJNYXJrc1tsaW5lXSArIHNoaWZ0O1xuXG4gICAgaWYgKGxpbmUgKyAxIDwgZW5kIHx8IGtlZXBMYXN0TEYpIHtcbiAgICAgIC8vIE5vIG5lZWQgZm9yIGJvdW5kcyBjaGVjayBiZWNhdXNlIHdlIGhhdmUgZmFrZSBlbnRyeSBvbiB0YWlsLlxuICAgICAgbGFzdCA9IHRoaXMuZU1hcmtzW2xpbmVdICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdCA9IHRoaXMuZU1hcmtzW2xpbmVdO1xuICAgIH1cblxuICAgIHF1ZXVlW2ldID0gdGhpcy5zcmMuc2xpY2UoZmlyc3QsIGxhc3QpO1xuICB9XG5cbiAgcmV0dXJuIHF1ZXVlLmpvaW4oJycpO1xufTtcblxuLy8gQ29kZSBibG9jayAoNCBzcGFjZXMgcGFkZGVkKVxuXG5mdW5jdGlvbiBjb2RlKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUvKiwgc2lsZW50Ki8pIHtcbiAgdmFyIG5leHRMaW5lLCBsYXN0O1xuXG4gIGlmIChzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA8IDQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGFzdCA9IG5leHRMaW5lID0gc3RhcnRMaW5lICsgMTtcblxuICB3aGlsZSAobmV4dExpbmUgPCBlbmRMaW5lKSB7XG4gICAgaWYgKHN0YXRlLmlzRW1wdHkobmV4dExpbmUpKSB7XG4gICAgICBuZXh0TGluZSsrO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChzdGF0ZS50U2hpZnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHtcbiAgICAgIG5leHRMaW5lKys7XG4gICAgICBsYXN0ID0gbmV4dExpbmU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgYnJlYWs7XG4gIH1cblxuICBzdGF0ZS5saW5lID0gbmV4dExpbmU7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnY29kZScsXG4gICAgY29udGVudDogc3RhdGUuZ2V0TGluZXMoc3RhcnRMaW5lLCBsYXN0LCA0ICsgc3RhdGUuYmxrSW5kZW50LCB0cnVlKSxcbiAgICBibG9jazogdHJ1ZSxcbiAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIGZlbmNlcyAoYGBgIGxhbmcsIH5+fiBsYW5nKVxuXG5mdW5jdGlvbiBmZW5jZXMoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBtYXJrZXIsIGxlbiwgcGFyYW1zLCBuZXh0TGluZSwgbWVtLFxuICAgICAgaGF2ZUVuZE1hcmtlciA9IGZhbHNlLFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIGlmIChwb3MgKyAzID4gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgaWYgKG1hcmtlciAhPT0gMHg3RS8qIH4gKi8gJiYgbWFya2VyICE9PSAweDYwIC8qIGAgKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBzY2FuIG1hcmtlciBsZW5ndGhcbiAgbWVtID0gcG9zO1xuICBwb3MgPSBzdGF0ZS5za2lwQ2hhcnMocG9zLCBtYXJrZXIpO1xuXG4gIGxlbiA9IHBvcyAtIG1lbTtcblxuICBpZiAobGVuIDwgMykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwYXJhbXMgPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXgpLnRyaW0oKTtcblxuICBpZiAocGFyYW1zLmluZGV4T2YoJ2AnKSA+PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIFNpbmNlIHN0YXJ0IGlzIGZvdW5kLCB3ZSBjYW4gcmVwb3J0IHN1Y2Nlc3MgaGVyZSBpbiB2YWxpZGF0aW9uIG1vZGVcbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gIC8vIHNlYXJjaCBlbmQgb2YgYmxvY2tcbiAgbmV4dExpbmUgPSBzdGFydExpbmU7XG5cbiAgZm9yICg7Oykge1xuICAgIG5leHRMaW5lKys7XG4gICAgaWYgKG5leHRMaW5lID49IGVuZExpbmUpIHtcbiAgICAgIC8vIHVuY2xvc2VkIGJsb2NrIHNob3VsZCBiZSBhdXRvY2xvc2VkIGJ5IGVuZCBvZiBkb2N1bWVudC5cbiAgICAgIC8vIGFsc28gYmxvY2sgc2VlbXMgdG8gYmUgYXV0b2Nsb3NlZCBieSBlbmQgb2YgcGFyZW50XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBwb3MgPSBtZW0gPSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdICsgc3RhdGUudFNoaWZ0W25leHRMaW5lXTtcbiAgICBtYXggPSBzdGF0ZS5lTWFya3NbbmV4dExpbmVdO1xuXG4gICAgaWYgKHBvcyA8IG1heCAmJiBzdGF0ZS50U2hpZnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7XG4gICAgICAvLyBub24tZW1wdHkgbGluZSB3aXRoIG5lZ2F0aXZlIGluZGVudCBzaG91bGQgc3RvcCB0aGUgbGlzdDpcbiAgICAgIC8vIC0gYGBgXG4gICAgICAvLyAgdGVzdFxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IG1hcmtlcikgeyBjb250aW51ZTsgfVxuXG4gICAgaWYgKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkge1xuICAgICAgLy8gY2xvc2luZyBmZW5jZSBzaG91bGQgYmUgaW5kZW50ZWQgbGVzcyB0aGFuIDQgc3BhY2VzXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwb3MgPSBzdGF0ZS5za2lwQ2hhcnMocG9zLCBtYXJrZXIpO1xuXG4gICAgLy8gY2xvc2luZyBjb2RlIGZlbmNlIG11c3QgYmUgYXQgbGVhc3QgYXMgbG9uZyBhcyB0aGUgb3BlbmluZyBvbmVcbiAgICBpZiAocG9zIC0gbWVtIDwgbGVuKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAvLyBtYWtlIHN1cmUgdGFpbCBoYXMgc3BhY2VzIG9ubHlcbiAgICBwb3MgPSBzdGF0ZS5za2lwU3BhY2VzKHBvcyk7XG5cbiAgICBpZiAocG9zIDwgbWF4KSB7IGNvbnRpbnVlOyB9XG5cbiAgICBoYXZlRW5kTWFya2VyID0gdHJ1ZTtcbiAgICAvLyBmb3VuZCFcbiAgICBicmVhaztcbiAgfVxuXG4gIC8vIElmIGEgZmVuY2UgaGFzIGhlYWRpbmcgc3BhY2VzLCB0aGV5IHNob3VsZCBiZSByZW1vdmVkIGZyb20gaXRzIGlubmVyIGJsb2NrXG4gIGxlbiA9IHN0YXRlLnRTaGlmdFtzdGFydExpbmVdO1xuXG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZSArIChoYXZlRW5kTWFya2VyID8gMSA6IDApO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2ZlbmNlJyxcbiAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICBjb250ZW50OiBzdGF0ZS5nZXRMaW5lcyhzdGFydExpbmUgKyAxLCBuZXh0TGluZSwgbGVuLCB0cnVlKSxcbiAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIEJsb2NrIHF1b3Rlc1xuXG5mdW5jdGlvbiBibG9ja3F1b3RlKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgbmV4dExpbmUsIGxhc3RMaW5lRW1wdHksIG9sZFRTaGlmdCwgb2xkQk1hcmtzLCBvbGRJbmRlbnQsIG9sZFBhcmVudFR5cGUsIGxpbmVzLFxuICAgICAgdGVybWluYXRvclJ1bGVzLFxuICAgICAgaSwgbCwgdGVybWluYXRlLFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIGlmIChwb3MgPiBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gY2hlY2sgdGhlIGJsb2NrIHF1b3RlIG1hcmtlclxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspICE9PSAweDNFLyogPiAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIHdlIGtub3cgdGhhdCBpdCdzIGdvaW5nIHRvIGJlIGEgdmFsaWQgYmxvY2txdW90ZSxcbiAgLy8gc28gbm8gcG9pbnQgdHJ5aW5nIHRvIGZpbmQgdGhlIGVuZCBvZiBpdCBpbiBzaWxlbnQgbW9kZVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgLy8gc2tpcCBvbmUgb3B0aW9uYWwgc3BhY2UgYWZ0ZXIgJz4nXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDIwKSB7IHBvcysrOyB9XG5cbiAgb2xkSW5kZW50ID0gc3RhdGUuYmxrSW5kZW50O1xuICBzdGF0ZS5ibGtJbmRlbnQgPSAwO1xuXG4gIG9sZEJNYXJrcyA9IFsgc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gXTtcbiAgc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gPSBwb3M7XG5cbiAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBhbiBlbXB0eSBibG9ja3F1b3RlXG4gIHBvcyA9IHBvcyA8IG1heCA/IHN0YXRlLnNraXBTcGFjZXMocG9zKSA6IHBvcztcbiAgbGFzdExpbmVFbXB0eSA9IHBvcyA+PSBtYXg7XG5cbiAgb2xkVFNoaWZ0ID0gWyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSBdO1xuICBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA9IHBvcyAtIHN0YXRlLmJNYXJrc1tzdGFydExpbmVdO1xuXG4gIHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLnBhcnNlci5ydWxlci5nZXRSdWxlcygnYmxvY2txdW90ZScpO1xuXG4gIC8vIFNlYXJjaCB0aGUgZW5kIG9mIHRoZSBibG9ja1xuICAvL1xuICAvLyBCbG9jayBlbmRzIHdpdGggZWl0aGVyOlxuICAvLyAgMS4gYW4gZW1wdHkgbGluZSBvdXRzaWRlOlxuICAvLyAgICAgYGBgXG4gIC8vICAgICA+IHRlc3RcbiAgLy9cbiAgLy8gICAgIGBgYFxuICAvLyAgMi4gYW4gZW1wdHkgbGluZSBpbnNpZGU6XG4gIC8vICAgICBgYGBcbiAgLy8gICAgID5cbiAgLy8gICAgIHRlc3RcbiAgLy8gICAgIGBgYFxuICAvLyAgMy4gYW5vdGhlciB0YWdcbiAgLy8gICAgIGBgYFxuICAvLyAgICAgPiB0ZXN0XG4gIC8vICAgICAgLSAtIC1cbiAgLy8gICAgIGBgYFxuICBmb3IgKG5leHRMaW5lID0gc3RhcnRMaW5lICsgMTsgbmV4dExpbmUgPCBlbmRMaW5lOyBuZXh0TGluZSsrKSB7XG4gICAgcG9zID0gc3RhdGUuYk1hcmtzW25leHRMaW5lXSArIHN0YXRlLnRTaGlmdFtuZXh0TGluZV07XG4gICAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXTtcblxuICAgIGlmIChwb3MgPj0gbWF4KSB7XG4gICAgICAvLyBDYXNlIDE6IGxpbmUgaXMgbm90IGluc2lkZSB0aGUgYmxvY2txdW90ZSwgYW5kIHRoaXMgbGluZSBpcyBlbXB0eS5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKykgPT09IDB4M0UvKiA+ICovKSB7XG4gICAgICAvLyBUaGlzIGxpbmUgaXMgaW5zaWRlIHRoZSBibG9ja3F1b3RlLlxuXG4gICAgICAvLyBza2lwIG9uZSBvcHRpb25hbCBzcGFjZSBhZnRlciAnPidcbiAgICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDIwKSB7IHBvcysrOyB9XG5cbiAgICAgIG9sZEJNYXJrcy5wdXNoKHN0YXRlLmJNYXJrc1tuZXh0TGluZV0pO1xuICAgICAgc3RhdGUuYk1hcmtzW25leHRMaW5lXSA9IHBvcztcblxuICAgICAgcG9zID0gcG9zIDwgbWF4ID8gc3RhdGUuc2tpcFNwYWNlcyhwb3MpIDogcG9zO1xuICAgICAgbGFzdExpbmVFbXB0eSA9IHBvcyA+PSBtYXg7XG5cbiAgICAgIG9sZFRTaGlmdC5wdXNoKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0pO1xuICAgICAgc3RhdGUudFNoaWZ0W25leHRMaW5lXSA9IHBvcyAtIHN0YXRlLmJNYXJrc1tuZXh0TGluZV07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBDYXNlIDI6IGxpbmUgaXMgbm90IGluc2lkZSB0aGUgYmxvY2txdW90ZSwgYW5kIHRoZSBsYXN0IGxpbmUgd2FzIGVtcHR5LlxuICAgIGlmIChsYXN0TGluZUVtcHR5KSB7IGJyZWFrOyB9XG5cbiAgICAvLyBDYXNlIDM6IGFub3RoZXIgdGFnIGZvdW5kLlxuICAgIHRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIGZvciAoaSA9IDAsIGwgPSB0ZXJtaW5hdG9yUnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGVybWluYXRvclJ1bGVzW2ldKHN0YXRlLCBuZXh0TGluZSwgZW5kTGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXJtaW5hdGUpIHsgYnJlYWs7IH1cblxuICAgIG9sZEJNYXJrcy5wdXNoKHN0YXRlLmJNYXJrc1tuZXh0TGluZV0pO1xuICAgIG9sZFRTaGlmdC5wdXNoKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0pO1xuXG4gICAgLy8gQSBuZWdhdGl2ZSBudW1iZXIgbWVhbnMgdGhhdCB0aGlzIGlzIGEgcGFyYWdyYXBoIGNvbnRpbnVhdGlvbjtcbiAgICAvL1xuICAgIC8vIEFueSBuZWdhdGl2ZSBudW1iZXIgd2lsbCBkbyB0aGUgam9iIGhlcmUsIGJ1dCBpdCdzIGJldHRlciBmb3IgaXRcbiAgICAvLyB0byBiZSBsYXJnZSBlbm91Z2ggdG8gbWFrZSBhbnkgYnVncyBvYnZpb3VzLlxuICAgIHN0YXRlLnRTaGlmdFtuZXh0TGluZV0gPSAtMTMzNztcbiAgfVxuXG4gIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICBzdGF0ZS5wYXJlbnRUeXBlID0gJ2Jsb2NrcXVvdGUnO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2Jsb2NrcXVvdGVfb3BlbicsXG4gICAgbGluZXM6IGxpbmVzID0gWyBzdGFydExpbmUsIDAgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICB9KTtcbiAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlLCBzdGFydExpbmUsIG5leHRMaW5lKTtcbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdibG9ja3F1b3RlX2Nsb3NlJyxcbiAgICBsZXZlbDogLS1zdGF0ZS5sZXZlbFxuICB9KTtcbiAgc3RhdGUucGFyZW50VHlwZSA9IG9sZFBhcmVudFR5cGU7XG4gIGxpbmVzWzFdID0gc3RhdGUubGluZTtcblxuICAvLyBSZXN0b3JlIG9yaWdpbmFsIHRTaGlmdDsgdGhpcyBtaWdodCBub3QgYmUgbmVjZXNzYXJ5IHNpbmNlIHRoZSBwYXJzZXJcbiAgLy8gaGFzIGFscmVhZHkgYmVlbiBoZXJlLCBidXQganVzdCB0byBtYWtlIHN1cmUgd2UgY2FuIGRvIHRoYXQuXG4gIGZvciAoaSA9IDA7IGkgPCBvbGRUU2hpZnQubGVuZ3RoOyBpKyspIHtcbiAgICBzdGF0ZS5iTWFya3NbaSArIHN0YXJ0TGluZV0gPSBvbGRCTWFya3NbaV07XG4gICAgc3RhdGUudFNoaWZ0W2kgKyBzdGFydExpbmVdID0gb2xkVFNoaWZ0W2ldO1xuICB9XG4gIHN0YXRlLmJsa0luZGVudCA9IG9sZEluZGVudDtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gSG9yaXpvbnRhbCBydWxlXG5cbmZ1bmN0aW9uIGhyKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgbWFya2VyLCBjbnQsIGNoLFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICBwb3MgKz0gc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG5cbiAgaWYgKHBvcyA+IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG5cbiAgLy8gQ2hlY2sgaHIgbWFya2VyXG4gIGlmIChtYXJrZXIgIT09IDB4MkEvKiAqICovICYmXG4gICAgICBtYXJrZXIgIT09IDB4MkQvKiAtICovICYmXG4gICAgICBtYXJrZXIgIT09IDB4NUYvKiBfICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gbWFya2VycyBjYW4gYmUgbWl4ZWQgd2l0aCBzcGFjZXMsIGJ1dCB0aGVyZSBzaG91bGQgYmUgYXQgbGVhc3QgMyBvbmVcblxuICBjbnQgPSAxO1xuICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG4gICAgaWYgKGNoICE9PSBtYXJrZXIgJiYgY2ggIT09IDB4MjAvKiBzcGFjZSAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBpZiAoY2ggPT09IG1hcmtlcikgeyBjbnQrKzsgfVxuICB9XG5cbiAgaWYgKGNudCA8IDMpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gIHN0YXRlLmxpbmUgPSBzdGFydExpbmUgKyAxO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2hyJyxcbiAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIExpc3RzXG5cbi8vIFNlYXJjaCBgWy0rKl1bXFxuIF1gLCByZXR1cm5zIG5leHQgcG9zIGFydGVyIG1hcmtlciBvbiBzdWNjZXNzXG4vLyBvciAtMSBvbiBmYWlsLlxuZnVuY3Rpb24gc2tpcEJ1bGxldExpc3RNYXJrZXIoc3RhdGUsIHN0YXJ0TGluZSkge1xuICB2YXIgbWFya2VyLCBwb3MsIG1heDtcblxuICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdO1xuICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gLTE7IH1cblxuICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG4gIC8vIENoZWNrIGJ1bGxldFxuICBpZiAobWFya2VyICE9PSAweDJBLyogKiAqLyAmJlxuICAgICAgbWFya2VyICE9PSAweDJELyogLSAqLyAmJlxuICAgICAgbWFya2VyICE9PSAweDJCLyogKyAqLykge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgyMCkge1xuICAgIC8vIFwiIDEudGVzdCBcIiAtIGlzIG5vdCBhIGxpc3QgaXRlbVxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHJldHVybiBwb3M7XG59XG5cbi8vIFNlYXJjaCBgXFxkK1suKV1bXFxuIF1gLCByZXR1cm5zIG5leHQgcG9zIGFydGVyIG1hcmtlciBvbiBzdWNjZXNzXG4vLyBvciAtMSBvbiBmYWlsLlxuZnVuY3Rpb24gc2tpcE9yZGVyZWRMaXN0TWFya2VyKHN0YXRlLCBzdGFydExpbmUpIHtcbiAgdmFyIGNoLFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIGlmIChwb3MgKyAxID49IG1heCkgeyByZXR1cm4gLTE7IH1cblxuICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKTtcblxuICBpZiAoY2ggPCAweDMwLyogMCAqLyB8fCBjaCA+IDB4MzkvKiA5ICovKSB7IHJldHVybiAtMTsgfVxuXG4gIGZvciAoOzspIHtcbiAgICAvLyBFT0wgLT4gZmFpbFxuICAgIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiAtMTsgfVxuXG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG5cbiAgICBpZiAoY2ggPj0gMHgzMC8qIDAgKi8gJiYgY2ggPD0gMHgzOS8qIDkgKi8pIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGZvdW5kIHZhbGlkIG1hcmtlclxuICAgIGlmIChjaCA9PT0gMHgyOS8qICkgKi8gfHwgY2ggPT09IDB4MmUvKiAuICovKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuXG4gIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgyMC8qIHNwYWNlICovKSB7XG4gICAgLy8gXCIgMS50ZXN0IFwiIC0gaXMgbm90IGEgbGlzdCBpdGVtXG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHJldHVybiBwb3M7XG59XG5cbmZ1bmN0aW9uIG1hcmtUaWdodFBhcmFncmFwaHMoc3RhdGUsIGlkeCkge1xuICB2YXIgaSwgbCxcbiAgICAgIGxldmVsID0gc3RhdGUubGV2ZWwgKyAyO1xuXG4gIGZvciAoaSA9IGlkeCArIDIsIGwgPSBzdGF0ZS50b2tlbnMubGVuZ3RoIC0gMjsgaSA8IGw7IGkrKykge1xuICAgIGlmIChzdGF0ZS50b2tlbnNbaV0ubGV2ZWwgPT09IGxldmVsICYmIHN0YXRlLnRva2Vuc1tpXS50eXBlID09PSAncGFyYWdyYXBoX29wZW4nKSB7XG4gICAgICBzdGF0ZS50b2tlbnNbaSArIDJdLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnRva2Vuc1tpXS50aWdodCA9IHRydWU7XG4gICAgICBpICs9IDI7XG4gICAgfVxuICB9XG59XG5cblxuZnVuY3Rpb24gbGlzdChzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIG5leHRMaW5lLFxuICAgICAgaW5kZW50LFxuICAgICAgb2xkVFNoaWZ0LFxuICAgICAgb2xkSW5kZW50LFxuICAgICAgb2xkVGlnaHQsXG4gICAgICBvbGRQYXJlbnRUeXBlLFxuICAgICAgc3RhcnQsXG4gICAgICBwb3NBZnRlck1hcmtlcixcbiAgICAgIG1heCxcbiAgICAgIGluZGVudEFmdGVyTWFya2VyLFxuICAgICAgbWFya2VyVmFsdWUsXG4gICAgICBtYXJrZXJDaGFyQ29kZSxcbiAgICAgIGlzT3JkZXJlZCxcbiAgICAgIGNvbnRlbnRTdGFydCxcbiAgICAgIGxpc3RUb2tJZHgsXG4gICAgICBwcmV2RW1wdHlFbmQsXG4gICAgICBsaXN0TGluZXMsXG4gICAgICBpdGVtTGluZXMsXG4gICAgICB0aWdodCA9IHRydWUsXG4gICAgICB0ZXJtaW5hdG9yUnVsZXMsXG4gICAgICBpLCBsLCB0ZXJtaW5hdGU7XG5cbiAgLy8gRGV0ZWN0IGxpc3QgdHlwZSBhbmQgcG9zaXRpb24gYWZ0ZXIgbWFya2VyXG4gIGlmICgocG9zQWZ0ZXJNYXJrZXIgPSBza2lwT3JkZXJlZExpc3RNYXJrZXIoc3RhdGUsIHN0YXJ0TGluZSkpID49IDApIHtcbiAgICBpc09yZGVyZWQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKChwb3NBZnRlck1hcmtlciA9IHNraXBCdWxsZXRMaXN0TWFya2VyKHN0YXRlLCBzdGFydExpbmUpKSA+PSAwKSB7XG4gICAgaXNPcmRlcmVkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBXZSBzaG91bGQgdGVybWluYXRlIGxpc3Qgb24gc3R5bGUgY2hhbmdlLiBSZW1lbWJlciBmaXJzdCBvbmUgdG8gY29tcGFyZS5cbiAgbWFya2VyQ2hhckNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3NBZnRlck1hcmtlciAtIDEpO1xuXG4gIC8vIEZvciB2YWxpZGF0aW9uIG1vZGUgd2UgY2FuIHRlcm1pbmF0ZSBpbW1lZGlhdGVseVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgLy8gU3RhcnQgbGlzdFxuICBsaXN0VG9rSWR4ID0gc3RhdGUudG9rZW5zLmxlbmd0aDtcblxuICBpZiAoaXNPcmRlcmVkKSB7XG4gICAgc3RhcnQgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdO1xuICAgIG1hcmtlclZhbHVlID0gTnVtYmVyKHN0YXRlLnNyYy5zdWJzdHIoc3RhcnQsIHBvc0FmdGVyTWFya2VyIC0gc3RhcnQgLSAxKSk7XG5cbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnb3JkZXJlZF9saXN0X29wZW4nLFxuICAgICAgb3JkZXI6IG1hcmtlclZhbHVlLFxuICAgICAgbGluZXM6IGxpc3RMaW5lcyA9IFsgc3RhcnRMaW5lLCAwIF0sXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICAgIH0pO1xuXG4gIH0gZWxzZSB7XG4gICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgdHlwZTogJ2J1bGxldF9saXN0X29wZW4nLFxuICAgICAgbGluZXM6IGxpc3RMaW5lcyA9IFsgc3RhcnRMaW5lLCAwIF0sXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICAgIH0pO1xuICB9XG5cbiAgLy9cbiAgLy8gSXRlcmF0ZSBsaXN0IGl0ZW1zXG4gIC8vXG5cbiAgbmV4dExpbmUgPSBzdGFydExpbmU7XG4gIHByZXZFbXB0eUVuZCA9IGZhbHNlO1xuICB0ZXJtaW5hdG9yUnVsZXMgPSBzdGF0ZS5wYXJzZXIucnVsZXIuZ2V0UnVsZXMoJ2xpc3QnKTtcblxuICB3aGlsZSAobmV4dExpbmUgPCBlbmRMaW5lKSB7XG4gICAgY29udGVudFN0YXJ0ID0gc3RhdGUuc2tpcFNwYWNlcyhwb3NBZnRlck1hcmtlcik7XG4gICAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXTtcblxuICAgIGlmIChjb250ZW50U3RhcnQgPj0gbWF4KSB7XG4gICAgICAvLyB0cmltbWluZyBzcGFjZSBpbiBcIi0gICAgXFxuICAzXCIgY2FzZSwgaW5kZW50IGlzIDEgaGVyZVxuICAgICAgaW5kZW50QWZ0ZXJNYXJrZXIgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRlbnRBZnRlck1hcmtlciA9IGNvbnRlbnRTdGFydCAtIHBvc0FmdGVyTWFya2VyO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgbW9yZSB0aGFuIDQgc3BhY2VzLCB0aGUgaW5kZW50IGlzIDFcbiAgICAvLyAodGhlIHJlc3QgaXMganVzdCBpbmRlbnRlZCBjb2RlIGJsb2NrKVxuICAgIGlmIChpbmRlbnRBZnRlck1hcmtlciA+IDQpIHsgaW5kZW50QWZ0ZXJNYXJrZXIgPSAxOyB9XG5cbiAgICAvLyBJZiBpbmRlbnQgaXMgbGVzcyB0aGFuIDEsIGFzc3VtZSB0aGF0IGl0J3Mgb25lLCBleGFtcGxlOlxuICAgIC8vICBcIi1cXG4gIHRlc3RcIlxuICAgIGlmIChpbmRlbnRBZnRlck1hcmtlciA8IDEpIHsgaW5kZW50QWZ0ZXJNYXJrZXIgPSAxOyB9XG5cbiAgICAvLyBcIiAgLSAgdGVzdFwiXG4gICAgLy8gIF5eXl5eIC0gY2FsY3VsYXRpbmcgdG90YWwgbGVuZ3RoIG9mIHRoaXMgdGhpbmdcbiAgICBpbmRlbnQgPSAocG9zQWZ0ZXJNYXJrZXIgLSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdKSArIGluZGVudEFmdGVyTWFya2VyO1xuXG4gICAgLy8gUnVuIHN1YnBhcnNlciAmIHdyaXRlIHRva2Vuc1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdsaXN0X2l0ZW1fb3BlbicsXG4gICAgICBsaW5lczogaXRlbUxpbmVzID0gWyBzdGFydExpbmUsIDAgXSxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gICAgfSk7XG5cbiAgICBvbGRJbmRlbnQgPSBzdGF0ZS5ibGtJbmRlbnQ7XG4gICAgb2xkVGlnaHQgPSBzdGF0ZS50aWdodDtcbiAgICBvbGRUU2hpZnQgPSBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXTtcbiAgICBvbGRQYXJlbnRUeXBlID0gc3RhdGUucGFyZW50VHlwZTtcbiAgICBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA9IGNvbnRlbnRTdGFydCAtIHN0YXRlLmJNYXJrc1tzdGFydExpbmVdO1xuICAgIHN0YXRlLmJsa0luZGVudCA9IGluZGVudDtcbiAgICBzdGF0ZS50aWdodCA9IHRydWU7XG4gICAgc3RhdGUucGFyZW50VHlwZSA9ICdsaXN0JztcblxuICAgIHN0YXRlLnBhcnNlci50b2tlbml6ZShzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCB0cnVlKTtcblxuICAgIC8vIElmIGFueSBvZiBsaXN0IGl0ZW0gaXMgdGlnaHQsIG1hcmsgbGlzdCBhcyB0aWdodFxuICAgIGlmICghc3RhdGUudGlnaHQgfHwgcHJldkVtcHR5RW5kKSB7XG4gICAgICB0aWdodCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBJdGVtIGJlY29tZSBsb29zZSBpZiBmaW5pc2ggd2l0aCBlbXB0eSBsaW5lLFxuICAgIC8vIGJ1dCB3ZSBzaG91bGQgZmlsdGVyIGxhc3QgZWxlbWVudCwgYmVjYXVzZSBpdCBtZWFucyBsaXN0IGZpbmlzaFxuICAgIHByZXZFbXB0eUVuZCA9IChzdGF0ZS5saW5lIC0gc3RhcnRMaW5lKSA+IDEgJiYgc3RhdGUuaXNFbXB0eShzdGF0ZS5saW5lIC0gMSk7XG5cbiAgICBzdGF0ZS5ibGtJbmRlbnQgPSBvbGRJbmRlbnQ7XG4gICAgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0gPSBvbGRUU2hpZnQ7XG4gICAgc3RhdGUudGlnaHQgPSBvbGRUaWdodDtcbiAgICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZTtcblxuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdsaXN0X2l0ZW1fY2xvc2UnLFxuICAgICAgbGV2ZWw6IC0tc3RhdGUubGV2ZWxcbiAgICB9KTtcblxuICAgIG5leHRMaW5lID0gc3RhcnRMaW5lID0gc3RhdGUubGluZTtcbiAgICBpdGVtTGluZXNbMV0gPSBuZXh0TGluZTtcbiAgICBjb250ZW50U3RhcnQgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXTtcblxuICAgIGlmIChuZXh0TGluZSA+PSBlbmRMaW5lKSB7IGJyZWFrOyB9XG5cbiAgICBpZiAoc3RhdGUuaXNFbXB0eShuZXh0TGluZSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gVHJ5IHRvIGNoZWNrIGlmIGxpc3QgaXMgdGVybWluYXRlZCBvciBjb250aW51ZWQuXG4gICAgLy9cbiAgICBpZiAoc3RhdGUudFNoaWZ0W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyBicmVhazsgfVxuXG4gICAgLy8gZmFpbCBpZiB0ZXJtaW5hdGluZyBibG9jayBmb3VuZFxuICAgIHRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIGZvciAoaSA9IDAsIGwgPSB0ZXJtaW5hdG9yUnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGVybWluYXRvclJ1bGVzW2ldKHN0YXRlLCBuZXh0TGluZSwgZW5kTGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXJtaW5hdGUpIHsgYnJlYWs7IH1cblxuICAgIC8vIGZhaWwgaWYgbGlzdCBoYXMgYW5vdGhlciB0eXBlXG4gICAgaWYgKGlzT3JkZXJlZCkge1xuICAgICAgcG9zQWZ0ZXJNYXJrZXIgPSBza2lwT3JkZXJlZExpc3RNYXJrZXIoc3RhdGUsIG5leHRMaW5lKTtcbiAgICAgIGlmIChwb3NBZnRlck1hcmtlciA8IDApIHsgYnJlYWs7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgcG9zQWZ0ZXJNYXJrZXIgPSBza2lwQnVsbGV0TGlzdE1hcmtlcihzdGF0ZSwgbmV4dExpbmUpO1xuICAgICAgaWYgKHBvc0FmdGVyTWFya2VyIDwgMCkgeyBicmVhazsgfVxuICAgIH1cblxuICAgIGlmIChtYXJrZXJDaGFyQ29kZSAhPT0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zQWZ0ZXJNYXJrZXIgLSAxKSkgeyBicmVhazsgfVxuICB9XG5cbiAgLy8gRmluaWxpemUgbGlzdFxuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogaXNPcmRlcmVkID8gJ29yZGVyZWRfbGlzdF9jbG9zZScgOiAnYnVsbGV0X2xpc3RfY2xvc2UnLFxuICAgIGxldmVsOiAtLXN0YXRlLmxldmVsXG4gIH0pO1xuICBsaXN0TGluZXNbMV0gPSBuZXh0TGluZTtcblxuICBzdGF0ZS5saW5lID0gbmV4dExpbmU7XG5cbiAgLy8gbWFyayBwYXJhZ3JhcGhzIHRpZ2h0IGlmIG5lZWRlZFxuICBpZiAodGlnaHQpIHtcbiAgICBtYXJrVGlnaHRQYXJhZ3JhcGhzKHN0YXRlLCBsaXN0VG9rSWR4KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBQcm9jZXNzIGZvb3Rub3RlIHJlZmVyZW5jZSBsaXN0XG5cbmZ1bmN0aW9uIGZvb3Rub3RlKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgb2xkQk1hcmssIG9sZFRTaGlmdCwgb2xkUGFyZW50VHlwZSwgcG9zLCBsYWJlbCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIC8vIGxpbmUgc2hvdWxkIGJlIGF0IGxlYXN0IDUgY2hhcnMgLSBcIlteeF06XCJcbiAgaWYgKHN0YXJ0ICsgNCA+IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpICE9PSAweDVCLyogWyAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMSkgIT09IDB4NUUvKiBeICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGZvciAocG9zID0gc3RhcnQgKyAyOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MjApIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4NUQgLyogXSAqLykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBvcyA9PT0gc3RhcnQgKyAyKSB7IHJldHVybiBmYWxzZTsgfSAvLyBubyBlbXB0eSBmb290bm90ZSBsYWJlbHNcbiAgaWYgKHBvcyArIDEgPj0gbWF4IHx8IHN0YXRlLnNyYy5jaGFyQ29kZUF0KCsrcG9zKSAhPT0gMHgzQSAvKiA6ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG4gIHBvcysrO1xuXG4gIGlmICghc3RhdGUuZW52LmZvb3Rub3RlcykgeyBzdGF0ZS5lbnYuZm9vdG5vdGVzID0ge307IH1cbiAgaWYgKCFzdGF0ZS5lbnYuZm9vdG5vdGVzLnJlZnMpIHsgc3RhdGUuZW52LmZvb3Rub3Rlcy5yZWZzID0ge307IH1cbiAgbGFiZWwgPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQgKyAyLCBwb3MgLSAyKTtcbiAgc3RhdGUuZW52LmZvb3Rub3Rlcy5yZWZzWyc6JyArIGxhYmVsXSA9IC0xO1xuXG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnZm9vdG5vdGVfcmVmZXJlbmNlX29wZW4nLFxuICAgIGxhYmVsOiBsYWJlbCxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICB9KTtcblxuICBvbGRCTWFyayA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdO1xuICBvbGRUU2hpZnQgPSBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXTtcbiAgb2xkUGFyZW50VHlwZSA9IHN0YXRlLnBhcmVudFR5cGU7XG4gIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdID0gc3RhdGUuc2tpcFNwYWNlcyhwb3MpIC0gcG9zO1xuICBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSA9IHBvcztcbiAgc3RhdGUuYmxrSW5kZW50ICs9IDQ7XG4gIHN0YXRlLnBhcmVudFR5cGUgPSAnZm9vdG5vdGUnO1xuXG4gIGlmIChzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkge1xuICAgIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdICs9IHN0YXRlLmJsa0luZGVudDtcbiAgICBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSAtPSBzdGF0ZS5ibGtJbmRlbnQ7XG4gIH1cblxuICBzdGF0ZS5wYXJzZXIudG9rZW5pemUoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgdHJ1ZSk7XG5cbiAgc3RhdGUucGFyZW50VHlwZSA9IG9sZFBhcmVudFR5cGU7XG4gIHN0YXRlLmJsa0luZGVudCAtPSA0O1xuICBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA9IG9sZFRTaGlmdDtcbiAgc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gPSBvbGRCTWFyaztcblxuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2Zvb3Rub3RlX3JlZmVyZW5jZV9jbG9zZScsXG4gICAgbGV2ZWw6IC0tc3RhdGUubGV2ZWxcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIGhlYWRpbmcgKCMsICMjLCAuLi4pXG5cbmZ1bmN0aW9uIGhlYWRpbmcoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBjaCwgbGV2ZWwsIHRtcCxcbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBjaCAgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gIGlmIChjaCAhPT0gMHgyMy8qICMgKi8gfHwgcG9zID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBjb3VudCBoZWFkaW5nIGxldmVsXG4gIGxldmVsID0gMTtcbiAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdCgrK3Bvcyk7XG4gIHdoaWxlIChjaCA9PT0gMHgyMy8qICMgKi8gJiYgcG9zIDwgbWF4ICYmIGxldmVsIDw9IDYpIHtcbiAgICBsZXZlbCsrO1xuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoKytwb3MpO1xuICB9XG5cbiAgaWYgKGxldmVsID4gNiB8fCAocG9zIDwgbWF4ICYmIGNoICE9PSAweDIwLyogc3BhY2UgKi8pKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICAvLyBMZXQncyBjdXQgdGFpbHMgbGlrZSAnICAgICMjIyAgJyBmcm9tIHRoZSBlbmQgb2Ygc3RyaW5nXG5cbiAgbWF4ID0gc3RhdGUuc2tpcENoYXJzQmFjayhtYXgsIDB4MjAsIHBvcyk7IC8vIHNwYWNlXG4gIHRtcCA9IHN0YXRlLnNraXBDaGFyc0JhY2sobWF4LCAweDIzLCBwb3MpOyAvLyAjXG4gIGlmICh0bXAgPiBwb3MgJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQodG1wIC0gMSkgPT09IDB4MjAvKiBzcGFjZSAqLykge1xuICAgIG1heCA9IHRtcDtcbiAgfVxuXG4gIHN0YXRlLmxpbmUgPSBzdGFydExpbmUgKyAxO1xuXG4gIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ2hlYWRpbmdfb3BlbicsXG4gICAgaExldmVsOiBsZXZlbCxcbiAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgfSk7XG5cbiAgLy8gb25seSBpZiBoZWFkZXIgaXMgbm90IGVtcHR5XG4gIGlmIChwb3MgPCBtYXgpIHtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgIGNvbnRlbnQ6IHN0YXRlLnNyYy5zbGljZShwb3MsIG1heCkudHJpbSgpLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsICsgMSxcbiAgICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdLFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfSk7XG4gIH1cbiAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAnaGVhZGluZ19jbG9zZScsIGhMZXZlbDogbGV2ZWwsIGxldmVsOiBzdGF0ZS5sZXZlbCB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gbGhlYWRpbmcgKC0tLSwgPT09KVxuXG5mdW5jdGlvbiBsaGVhZGluZyhzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLyosIHNpbGVudCovKSB7XG4gIHZhciBtYXJrZXIsIHBvcywgbWF4LFxuICAgICAgbmV4dCA9IHN0YXJ0TGluZSArIDE7XG5cbiAgaWYgKG5leHQgPj0gZW5kTGluZSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnRTaGlmdFtuZXh0XSA8IHN0YXRlLmJsa0luZGVudCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBTY2FuIG5leHQgbGluZVxuXG4gIGlmIChzdGF0ZS50U2hpZnRbbmV4dF0gLSBzdGF0ZS5ibGtJbmRlbnQgPiAzKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IHN0YXRlLmJNYXJrc1tuZXh0XSArIHN0YXRlLnRTaGlmdFtuZXh0XTtcbiAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRdO1xuXG4gIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgaWYgKG1hcmtlciAhPT0gMHgyRC8qIC0gKi8gJiYgbWFya2VyICE9PSAweDNELyogPSAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwb3MgPSBzdGF0ZS5za2lwQ2hhcnMocG9zLCBtYXJrZXIpO1xuXG4gIHBvcyA9IHN0YXRlLnNraXBTcGFjZXMocG9zKTtcblxuICBpZiAocG9zIDwgbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG5cbiAgc3RhdGUubGluZSA9IG5leHQgKyAxO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2hlYWRpbmdfb3BlbicsXG4gICAgaExldmVsOiBtYXJrZXIgPT09IDB4M0QvKiA9ICovID8gMSA6IDIsXG4gICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gIH0pO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2lubGluZScsXG4gICAgY29udGVudDogc3RhdGUuc3JjLnNsaWNlKHBvcywgc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV0pLnRyaW0oKSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwgKyAxLFxuICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSAtIDEgXSxcbiAgICBjaGlsZHJlbjogW11cbiAgfSk7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnaGVhZGluZ19jbG9zZScsXG4gICAgaExldmVsOiBtYXJrZXIgPT09IDB4M0QvKiA9ICovID8gMSA6IDIsXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBMaXN0IG9mIHZhbGlkIGh0bWwgYmxvY2tzIG5hbWVzLCBhY2NvcnRpbmcgdG8gY29tbW9ubWFyayBzcGVjXG4vLyBodHRwOi8vamdtLmdpdGh1Yi5pby9Db21tb25NYXJrL3NwZWMuaHRtbCNodG1sLWJsb2Nrc1xuXG52YXIgaHRtbF9ibG9ja3MgPSB7fTtcblxuW1xuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdidXR0b24nLFxuICAnYmxvY2txdW90ZScsXG4gICdib2R5JyxcbiAgJ2NhbnZhcycsXG4gICdjYXB0aW9uJyxcbiAgJ2NvbCcsXG4gICdjb2xncm91cCcsXG4gICdkZCcsXG4gICdkaXYnLFxuICAnZGwnLFxuICAnZHQnLFxuICAnZW1iZWQnLFxuICAnZmllbGRzZXQnLFxuICAnZmlnY2FwdGlvbicsXG4gICdmaWd1cmUnLFxuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdocicsXG4gICdpZnJhbWUnLFxuICAnbGknLFxuICAnbWFwJyxcbiAgJ29iamVjdCcsXG4gICdvbCcsXG4gICdvdXRwdXQnLFxuICAncCcsXG4gICdwcmUnLFxuICAncHJvZ3Jlc3MnLFxuICAnc2NyaXB0JyxcbiAgJ3NlY3Rpb24nLFxuICAnc3R5bGUnLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGV4dGFyZWEnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndHInLFxuICAndGhlYWQnLFxuICAndWwnLFxuICAndmlkZW8nXG5dLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgaHRtbF9ibG9ja3NbbmFtZV0gPSB0cnVlOyB9KTtcblxuLy8gSFRNTCBibG9ja1xuXG5cbnZhciBIVE1MX1RBR19PUEVOX1JFID0gL148KFthLXpBLVpdezEsMTV9KVtcXHNcXC8+XS87XG52YXIgSFRNTF9UQUdfQ0xPU0VfUkUgPSAvXjxcXC8oW2EtekEtWl17MSwxNX0pW1xccz5dLztcblxuZnVuY3Rpb24gaXNMZXR0ZXIkMShjaCkge1xuICAvKmVzbGludCBuby1iaXR3aXNlOjAqL1xuICB2YXIgbGMgPSBjaCB8IDB4MjA7IC8vIHRvIGxvd2VyIGNhc2VcbiAgcmV0dXJuIChsYyA+PSAweDYxLyogYSAqLykgJiYgKGxjIDw9IDB4N2EvKiB6ICovKTtcbn1cblxuZnVuY3Rpb24gaHRtbGJsb2NrKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgY2gsIG1hdGNoLCBuZXh0TGluZSxcbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV0sXG4gICAgICBzaGlmdCA9IHN0YXRlLnRTaGlmdFtzdGFydExpbmVdO1xuXG4gIHBvcyArPSBzaGlmdDtcblxuICBpZiAoIXN0YXRlLm9wdGlvbnMuaHRtbCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc2hpZnQgPiAzIHx8IHBvcyArIDIgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDNDLyogPCAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyArIDEpO1xuXG4gIGlmIChjaCA9PT0gMHgyMS8qICEgKi8gfHwgY2ggPT09IDB4M0YvKiA/ICovKSB7XG4gICAgLy8gRGlyZWN0aXZlIHN0YXJ0IC8gY29tbWVudCBzdGFydCAvIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gc3RhcnRcbiAgICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgfSBlbHNlIGlmIChjaCA9PT0gMHgyRi8qIC8gKi8gfHwgaXNMZXR0ZXIkMShjaCkpIHtcblxuICAgIC8vIFByb2JhYmx5IHN0YXJ0IG9yIGVuZCBvZiB0YWdcbiAgICBpZiAoY2ggPT09IDB4MkYvKiBcXCAqLykge1xuICAgICAgLy8gY2xvc2luZyB0YWdcbiAgICAgIG1hdGNoID0gc3RhdGUuc3JjLnNsaWNlKHBvcywgbWF4KS5tYXRjaChIVE1MX1RBR19DTE9TRV9SRSk7XG4gICAgICBpZiAoIW1hdGNoKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvcGVuaW5nIHRhZ1xuICAgICAgbWF0Y2ggPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXgpLm1hdGNoKEhUTUxfVEFHX09QRU5fUkUpO1xuICAgICAgaWYgKCFtYXRjaCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRhZyBuYW1lIGlzIHZhbGlkXG4gICAgaWYgKGh0bWxfYmxvY2tzW21hdGNoWzFdLnRvTG93ZXJDYXNlKCldICE9PSB0cnVlKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIElmIHdlIGFyZSBoZXJlIC0gd2UgZGV0ZWN0ZWQgSFRNTCBibG9jay5cbiAgLy8gTGV0J3Mgcm9sbCBkb3duIHRpbGwgZW1wdHkgbGluZSAoYmxvY2sgZW5kKS5cbiAgbmV4dExpbmUgPSBzdGFydExpbmUgKyAxO1xuICB3aGlsZSAobmV4dExpbmUgPCBzdGF0ZS5saW5lTWF4ICYmICFzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKSkge1xuICAgIG5leHRMaW5lKys7XG4gIH1cblxuICBzdGF0ZS5saW5lID0gbmV4dExpbmU7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnaHRtbGJsb2NrJyxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwsXG4gICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgY29udGVudDogc3RhdGUuZ2V0TGluZXMoc3RhcnRMaW5lLCBuZXh0TGluZSwgMCwgdHJ1ZSlcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIEdGTSB0YWJsZSwgbm9uLXN0YW5kYXJkXG5cbmZ1bmN0aW9uIGdldExpbmUoc3RhdGUsIGxpbmUpIHtcbiAgdmFyIHBvcyA9IHN0YXRlLmJNYXJrc1tsaW5lXSArIHN0YXRlLmJsa0luZGVudCxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tsaW5lXTtcblxuICByZXR1cm4gc3RhdGUuc3JjLnN1YnN0cihwb3MsIG1heCAtIHBvcyk7XG59XG5cbmZ1bmN0aW9uIHRhYmxlKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgY2gsIGxpbmVUZXh0LCBwb3MsIGksIG5leHRMaW5lLCByb3dzLCBjZWxsLFxuICAgICAgYWxpZ25zLCB0LCB0YWJsZUxpbmVzLCB0Ym9keUxpbmVzO1xuXG4gIC8vIHNob3VsZCBoYXZlIGF0IGxlYXN0IHRocmVlIGxpbmVzXG4gIGlmIChzdGFydExpbmUgKyAyID4gZW5kTGluZSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBuZXh0TGluZSA9IHN0YXJ0TGluZSArIDE7XG5cbiAgaWYgKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gZmlyc3QgY2hhcmFjdGVyIG9mIHRoZSBzZWNvbmQgbGluZSBzaG91bGQgYmUgJ3wnIG9yICctJ1xuXG4gIHBvcyA9IHN0YXRlLmJNYXJrc1tuZXh0TGluZV0gKyBzdGF0ZS50U2hpZnRbbmV4dExpbmVdO1xuICBpZiAocG9zID49IHN0YXRlLmVNYXJrc1tuZXh0TGluZV0pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICBpZiAoY2ggIT09IDB4N0MvKiB8ICovICYmIGNoICE9PSAweDJELyogLSAqLyAmJiBjaCAhPT0gMHgzQS8qIDogKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGluZVRleHQgPSBnZXRMaW5lKHN0YXRlLCBzdGFydExpbmUgKyAxKTtcbiAgaWYgKCEvXlstOnwgXSskLy50ZXN0KGxpbmVUZXh0KSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICByb3dzID0gbGluZVRleHQuc3BsaXQoJ3wnKTtcbiAgaWYgKHJvd3MgPD0gMikgeyByZXR1cm4gZmFsc2U7IH1cbiAgYWxpZ25zID0gW107XG4gIGZvciAoaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgdCA9IHJvd3NbaV0udHJpbSgpO1xuICAgIGlmICghdCkge1xuICAgICAgLy8gYWxsb3cgZW1wdHkgY29sdW1ucyBiZWZvcmUgYW5kIGFmdGVyIHRhYmxlLCBidXQgbm90IGluIGJldHdlZW4gY29sdW1ucztcbiAgICAgIC8vIGUuZy4gYWxsb3cgYCB8LS0tfCBgLCBkaXNhbGxvdyBgIC0tLXx8LS0tIGBcbiAgICAgIGlmIChpID09PSAwIHx8IGkgPT09IHJvd3MubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIS9eOj8tKzo/JC8udGVzdCh0KSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBpZiAodC5jaGFyQ29kZUF0KHQubGVuZ3RoIC0gMSkgPT09IDB4M0EvKiA6ICovKSB7XG4gICAgICBhbGlnbnMucHVzaCh0LmNoYXJDb2RlQXQoMCkgPT09IDB4M0EvKiA6ICovID8gJ2NlbnRlcicgOiAncmlnaHQnKTtcbiAgICB9IGVsc2UgaWYgKHQuY2hhckNvZGVBdCgwKSA9PT0gMHgzQS8qIDogKi8pIHtcbiAgICAgIGFsaWducy5wdXNoKCdsZWZ0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsaWducy5wdXNoKCcnKTtcbiAgICB9XG4gIH1cblxuICBsaW5lVGV4dCA9IGdldExpbmUoc3RhdGUsIHN0YXJ0TGluZSkudHJpbSgpO1xuICBpZiAobGluZVRleHQuaW5kZXhPZignfCcpID09PSAtMSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgcm93cyA9IGxpbmVUZXh0LnJlcGxhY2UoL15cXHx8XFx8JC9nLCAnJykuc3BsaXQoJ3wnKTtcbiAgaWYgKGFsaWducy5sZW5ndGggIT09IHJvd3MubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICd0YWJsZV9vcGVuJyxcbiAgICBsaW5lczogdGFibGVMaW5lcyA9IFsgc3RhcnRMaW5lLCAwIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgfSk7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAndGhlYWRfb3BlbicsXG4gICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGFydExpbmUgKyAxIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgfSk7XG5cbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICd0cl9vcGVuJyxcbiAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXJ0TGluZSArIDEgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICB9KTtcbiAgZm9yIChpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAndGhfb3BlbicsXG4gICAgICBhbGlnbjogYWxpZ25zW2ldLFxuICAgICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGFydExpbmUgKyAxIF0sXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICAgIH0pO1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgY29udGVudDogcm93c1tpXS50cmltKCksXG4gICAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXJ0TGluZSArIDEgXSxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH0pO1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ3RoX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gIH1cbiAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAndHJfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAndGhlYWRfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcblxuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ3Rib2R5X29wZW4nLFxuICAgIGxpbmVzOiB0Ym9keUxpbmVzID0gWyBzdGFydExpbmUgKyAyLCAwIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgfSk7XG5cbiAgZm9yIChuZXh0TGluZSA9IHN0YXJ0TGluZSArIDI7IG5leHRMaW5lIDwgZW5kTGluZTsgbmV4dExpbmUrKykge1xuICAgIGlmIChzdGF0ZS50U2hpZnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7IGJyZWFrOyB9XG5cbiAgICBsaW5lVGV4dCA9IGdldExpbmUoc3RhdGUsIG5leHRMaW5lKS50cmltKCk7XG4gICAgaWYgKGxpbmVUZXh0LmluZGV4T2YoJ3wnKSA9PT0gLTEpIHsgYnJlYWs7IH1cbiAgICByb3dzID0gbGluZVRleHQucmVwbGFjZSgvXlxcfHxcXHwkL2csICcnKS5zcGxpdCgnfCcpO1xuXG4gICAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAndHJfb3BlbicsIGxldmVsOiBzdGF0ZS5sZXZlbCsrIH0pO1xuICAgIGZvciAoaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdGF0ZS50b2tlbnMucHVzaCh7IHR5cGU6ICd0ZF9vcGVuJywgYWxpZ246IGFsaWduc1tpXSwgbGV2ZWw6IHN0YXRlLmxldmVsKysgfSk7XG4gICAgICAvLyAweDdjID09PSAnfCdcbiAgICAgIGNlbGwgPSByb3dzW2ldLnN1YnN0cmluZyhcbiAgICAgICAgICByb3dzW2ldLmNoYXJDb2RlQXQoMCkgPT09IDB4N2MgPyAxIDogMCxcbiAgICAgICAgICByb3dzW2ldLmNoYXJDb2RlQXQocm93c1tpXS5sZW5ndGggLSAxKSA9PT0gMHg3YyA/IHJvd3NbaV0ubGVuZ3RoIC0gMSA6IHJvd3NbaV0ubGVuZ3RoXG4gICAgICApLnRyaW0oKTtcbiAgICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgIGNvbnRlbnQ6IGNlbGwsXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCxcbiAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICB9KTtcbiAgICAgIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ3RkX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gICAgfVxuICAgIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ3RyX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gIH1cbiAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAndGJvZHlfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAndGFibGVfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcblxuICB0YWJsZUxpbmVzWzFdID0gdGJvZHlMaW5lc1sxXSA9IG5leHRMaW5lO1xuICBzdGF0ZS5saW5lID0gbmV4dExpbmU7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBEZWZpbml0aW9uIGxpc3RzXG5cbi8vIFNlYXJjaCBgWzp+XVtcXG4gXWAsIHJldHVybnMgbmV4dCBwb3MgYWZ0ZXIgbWFya2VyIG9uIHN1Y2Nlc3Ncbi8vIG9yIC0xIG9uIGZhaWwuXG5mdW5jdGlvbiBza2lwTWFya2VyKHN0YXRlLCBsaW5lKSB7XG4gIHZhciBwb3MsIG1hcmtlcixcbiAgICAgIHN0YXJ0ID0gc3RhdGUuYk1hcmtzW2xpbmVdICsgc3RhdGUudFNoaWZ0W2xpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW2xpbmVdO1xuXG4gIGlmIChzdGFydCA+PSBtYXgpIHsgcmV0dXJuIC0xOyB9XG5cbiAgLy8gQ2hlY2sgYnVsbGV0XG4gIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KyspO1xuICBpZiAobWFya2VyICE9PSAweDdFLyogfiAqLyAmJiBtYXJrZXIgIT09IDB4M0EvKiA6ICovKSB7IHJldHVybiAtMTsgfVxuXG4gIHBvcyA9IHN0YXRlLnNraXBTcGFjZXMoc3RhcnQpO1xuXG4gIC8vIHJlcXVpcmUgc3BhY2UgYWZ0ZXIgXCI6XCJcbiAgaWYgKHN0YXJ0ID09PSBwb3MpIHsgcmV0dXJuIC0xOyB9XG5cbiAgLy8gbm8gZW1wdHkgZGVmaW5pdGlvbnMsIGUuZy4gXCIgIDogXCJcbiAgaWYgKHBvcyA+PSBtYXgpIHsgcmV0dXJuIC0xOyB9XG5cbiAgcmV0dXJuIHBvcztcbn1cblxuZnVuY3Rpb24gbWFya1RpZ2h0UGFyYWdyYXBocyQxKHN0YXRlLCBpZHgpIHtcbiAgdmFyIGksIGwsXG4gICAgICBsZXZlbCA9IHN0YXRlLmxldmVsICsgMjtcblxuICBmb3IgKGkgPSBpZHggKyAyLCBsID0gc3RhdGUudG9rZW5zLmxlbmd0aCAtIDI7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoc3RhdGUudG9rZW5zW2ldLmxldmVsID09PSBsZXZlbCAmJiBzdGF0ZS50b2tlbnNbaV0udHlwZSA9PT0gJ3BhcmFncmFwaF9vcGVuJykge1xuICAgICAgc3RhdGUudG9rZW5zW2kgKyAyXS50aWdodCA9IHRydWU7XG4gICAgICBzdGF0ZS50b2tlbnNbaV0udGlnaHQgPSB0cnVlO1xuICAgICAgaSArPSAyO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZsaXN0KHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgY29udGVudFN0YXJ0LFxuICAgICAgZGRMaW5lLFxuICAgICAgZHRMaW5lLFxuICAgICAgaXRlbUxpbmVzLFxuICAgICAgbGlzdExpbmVzLFxuICAgICAgbGlzdFRva0lkeCxcbiAgICAgIG5leHRMaW5lLFxuICAgICAgb2xkSW5kZW50LFxuICAgICAgb2xkRERJbmRlbnQsXG4gICAgICBvbGRQYXJlbnRUeXBlLFxuICAgICAgb2xkVFNoaWZ0LFxuICAgICAgb2xkVGlnaHQsXG4gICAgICBwcmV2RW1wdHlFbmQsXG4gICAgICB0aWdodDtcblxuICBpZiAoc2lsZW50KSB7XG4gICAgLy8gcXVpcms6IHZhbGlkYXRpb24gbW9kZSB2YWxpZGF0ZXMgYSBkZCBibG9jayBvbmx5LCBub3QgYSB3aG9sZSBkZWZsaXN0XG4gICAgaWYgKHN0YXRlLmRkSW5kZW50IDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICByZXR1cm4gc2tpcE1hcmtlcihzdGF0ZSwgc3RhcnRMaW5lKSA+PSAwO1xuICB9XG5cbiAgbmV4dExpbmUgPSBzdGFydExpbmUgKyAxO1xuICBpZiAoc3RhdGUuaXNFbXB0eShuZXh0TGluZSkpIHtcbiAgICBpZiAoKytuZXh0TGluZSA+IGVuZExpbmUpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIH1cblxuICBpZiAoc3RhdGUudFNoaWZ0W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29udGVudFN0YXJ0ID0gc2tpcE1hcmtlcihzdGF0ZSwgbmV4dExpbmUpO1xuICBpZiAoY29udGVudFN0YXJ0IDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIFN0YXJ0IGxpc3RcbiAgbGlzdFRva0lkeCA9IHN0YXRlLnRva2Vucy5sZW5ndGg7XG5cbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdkbF9vcGVuJyxcbiAgICBsaW5lczogbGlzdExpbmVzID0gWyBzdGFydExpbmUsIDAgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICB9KTtcblxuICAvL1xuICAvLyBJdGVyYXRlIGxpc3QgaXRlbXNcbiAgLy9cblxuICBkdExpbmUgPSBzdGFydExpbmU7XG4gIGRkTGluZSA9IG5leHRMaW5lO1xuXG4gIC8vIE9uZSBkZWZpbml0aW9uIGxpc3QgY2FuIGNvbnRhaW4gbXVsdGlwbGUgRFRzLFxuICAvLyBhbmQgb25lIERUIGNhbiBiZSBmb2xsb3dlZCBieSBtdWx0aXBsZSBERHMuXG4gIC8vXG4gIC8vIFRodXMsIHRoZXJlIGlzIHR3byBsb29wcyBoZXJlLCBhbmQgbGFiZWwgaXNcbiAgLy8gbmVlZGVkIHRvIGJyZWFrIG91dCBvZiB0aGUgc2Vjb25kIG9uZVxuICAvL1xuICAvKmVzbGludCBuby1sYWJlbHM6MCxibG9jay1zY29wZWQtdmFyOjAqL1xuICBPVVRFUjpcbiAgZm9yICg7Oykge1xuICAgIHRpZ2h0ID0gdHJ1ZTtcbiAgICBwcmV2RW1wdHlFbmQgPSBmYWxzZTtcblxuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdkdF9vcGVuJyxcbiAgICAgIGxpbmVzOiBbIGR0TGluZSwgZHRMaW5lIF0sXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICAgIH0pO1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgY29udGVudDogc3RhdGUuZ2V0TGluZXMoZHRMaW5lLCBkdExpbmUgKyAxLCBzdGF0ZS5ibGtJbmRlbnQsIGZhbHNlKS50cmltKCksXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwgKyAxLFxuICAgICAgbGluZXM6IFsgZHRMaW5lLCBkdExpbmUgXSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH0pO1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdkdF9jbG9zZScsXG4gICAgICBsZXZlbDogLS1zdGF0ZS5sZXZlbFxuICAgIH0pO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnZGRfb3BlbicsXG4gICAgICAgIGxpbmVzOiBpdGVtTGluZXMgPSBbIG5leHRMaW5lLCAwIF0sXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gICAgICB9KTtcblxuICAgICAgb2xkVGlnaHQgPSBzdGF0ZS50aWdodDtcbiAgICAgIG9sZERESW5kZW50ID0gc3RhdGUuZGRJbmRlbnQ7XG4gICAgICBvbGRJbmRlbnQgPSBzdGF0ZS5ibGtJbmRlbnQ7XG4gICAgICBvbGRUU2hpZnQgPSBzdGF0ZS50U2hpZnRbZGRMaW5lXTtcbiAgICAgIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICAgICAgc3RhdGUuYmxrSW5kZW50ID0gc3RhdGUuZGRJbmRlbnQgPSBzdGF0ZS50U2hpZnRbZGRMaW5lXSArIDI7XG4gICAgICBzdGF0ZS50U2hpZnRbZGRMaW5lXSA9IGNvbnRlbnRTdGFydCAtIHN0YXRlLmJNYXJrc1tkZExpbmVdO1xuICAgICAgc3RhdGUudGlnaHQgPSB0cnVlO1xuICAgICAgc3RhdGUucGFyZW50VHlwZSA9ICdkZWZsaXN0JztcblxuICAgICAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlLCBkZExpbmUsIGVuZExpbmUsIHRydWUpO1xuXG4gICAgICAvLyBJZiBhbnkgb2YgbGlzdCBpdGVtIGlzIHRpZ2h0LCBtYXJrIGxpc3QgYXMgdGlnaHRcbiAgICAgIGlmICghc3RhdGUudGlnaHQgfHwgcHJldkVtcHR5RW5kKSB7XG4gICAgICAgIHRpZ2h0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBJdGVtIGJlY29tZSBsb29zZSBpZiBmaW5pc2ggd2l0aCBlbXB0eSBsaW5lLFxuICAgICAgLy8gYnV0IHdlIHNob3VsZCBmaWx0ZXIgbGFzdCBlbGVtZW50LCBiZWNhdXNlIGl0IG1lYW5zIGxpc3QgZmluaXNoXG4gICAgICBwcmV2RW1wdHlFbmQgPSAoc3RhdGUubGluZSAtIGRkTGluZSkgPiAxICYmIHN0YXRlLmlzRW1wdHkoc3RhdGUubGluZSAtIDEpO1xuXG4gICAgICBzdGF0ZS50U2hpZnRbZGRMaW5lXSA9IG9sZFRTaGlmdDtcbiAgICAgIHN0YXRlLnRpZ2h0ID0gb2xkVGlnaHQ7XG4gICAgICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZTtcbiAgICAgIHN0YXRlLmJsa0luZGVudCA9IG9sZEluZGVudDtcbiAgICAgIHN0YXRlLmRkSW5kZW50ID0gb2xkRERJbmRlbnQ7XG5cbiAgICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2RkX2Nsb3NlJyxcbiAgICAgICAgbGV2ZWw6IC0tc3RhdGUubGV2ZWxcbiAgICAgIH0pO1xuXG4gICAgICBpdGVtTGluZXNbMV0gPSBuZXh0TGluZSA9IHN0YXRlLmxpbmU7XG5cbiAgICAgIGlmIChuZXh0TGluZSA+PSBlbmRMaW5lKSB7IGJyZWFrIE9VVEVSOyB9XG5cbiAgICAgIGlmIChzdGF0ZS50U2hpZnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7IGJyZWFrIE9VVEVSOyB9XG4gICAgICBjb250ZW50U3RhcnQgPSBza2lwTWFya2VyKHN0YXRlLCBuZXh0TGluZSk7XG4gICAgICBpZiAoY29udGVudFN0YXJ0IDwgMCkgeyBicmVhazsgfVxuXG4gICAgICBkZExpbmUgPSBuZXh0TGluZTtcblxuICAgICAgLy8gZ28gdG8gdGhlIG5leHQgbG9vcCBpdGVyYXRpb246XG4gICAgICAvLyBpbnNlcnQgREQgdGFnIGFuZCByZXBlYXQgY2hlY2tpbmdcbiAgICB9XG5cbiAgICBpZiAobmV4dExpbmUgPj0gZW5kTGluZSkgeyBicmVhazsgfVxuICAgIGR0TGluZSA9IG5leHRMaW5lO1xuXG4gICAgaWYgKHN0YXRlLmlzRW1wdHkoZHRMaW5lKSkgeyBicmVhazsgfVxuICAgIGlmIChzdGF0ZS50U2hpZnRbZHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyBicmVhazsgfVxuXG4gICAgZGRMaW5lID0gZHRMaW5lICsgMTtcbiAgICBpZiAoZGRMaW5lID49IGVuZExpbmUpIHsgYnJlYWs7IH1cbiAgICBpZiAoc3RhdGUuaXNFbXB0eShkZExpbmUpKSB7IGRkTGluZSsrOyB9XG4gICAgaWYgKGRkTGluZSA+PSBlbmRMaW5lKSB7IGJyZWFrOyB9XG5cbiAgICBpZiAoc3RhdGUudFNoaWZ0W2RkTGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWs7IH1cbiAgICBjb250ZW50U3RhcnQgPSBza2lwTWFya2VyKHN0YXRlLCBkZExpbmUpO1xuICAgIGlmIChjb250ZW50U3RhcnQgPCAwKSB7IGJyZWFrOyB9XG5cbiAgICAvLyBnbyB0byB0aGUgbmV4dCBsb29wIGl0ZXJhdGlvbjpcbiAgICAvLyBpbnNlcnQgRFQgYW5kIEREIHRhZ3MgYW5kIHJlcGVhdCBjaGVja2luZ1xuICB9XG5cbiAgLy8gRmluaWxpemUgbGlzdFxuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2RsX2Nsb3NlJyxcbiAgICBsZXZlbDogLS1zdGF0ZS5sZXZlbFxuICB9KTtcbiAgbGlzdExpbmVzWzFdID0gbmV4dExpbmU7XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuXG4gIC8vIG1hcmsgcGFyYWdyYXBocyB0aWdodCBpZiBuZWVkZWRcbiAgaWYgKHRpZ2h0KSB7XG4gICAgbWFya1RpZ2h0UGFyYWdyYXBocyQxKHN0YXRlLCBsaXN0VG9rSWR4KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBQYXJhZ3JhcGhcblxuZnVuY3Rpb24gcGFyYWdyYXBoKHN0YXRlLCBzdGFydExpbmUvKiwgZW5kTGluZSovKSB7XG4gIHZhciBlbmRMaW5lLCBjb250ZW50LCB0ZXJtaW5hdGUsIGksIGwsXG4gICAgICBuZXh0TGluZSA9IHN0YXJ0TGluZSArIDEsXG4gICAgICB0ZXJtaW5hdG9yUnVsZXM7XG5cbiAgZW5kTGluZSA9IHN0YXRlLmxpbmVNYXg7XG5cbiAgLy8ganVtcCBsaW5lLWJ5LWxpbmUgdW50aWwgZW1wdHkgb25lIG9yIEVPRlxuICBpZiAobmV4dExpbmUgPCBlbmRMaW5lICYmICFzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKSkge1xuICAgIHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLnBhcnNlci5ydWxlci5nZXRSdWxlcygncGFyYWdyYXBoJyk7XG5cbiAgICBmb3IgKDsgbmV4dExpbmUgPCBlbmRMaW5lICYmICFzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKTsgbmV4dExpbmUrKykge1xuICAgICAgLy8gdGhpcyB3b3VsZCBiZSBhIGNvZGUgYmxvY2sgbm9ybWFsbHksIGJ1dCBhZnRlciBwYXJhZ3JhcGhcbiAgICAgIC8vIGl0J3MgY29uc2lkZXJlZCBhIGxhenkgY29udGludWF0aW9uIHJlZ2FyZGxlc3Mgb2Ygd2hhdCdzIHRoZXJlXG4gICAgICBpZiAoc3RhdGUudFNoaWZ0W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+IDMpIHsgY29udGludWU7IH1cblxuICAgICAgLy8gU29tZSB0YWdzIGNhbiB0ZXJtaW5hdGUgcGFyYWdyYXBoIHdpdGhvdXQgZW1wdHkgbGluZS5cbiAgICAgIHRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgZm9yIChpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKHRlcm1pbmF0b3JSdWxlc1tpXShzdGF0ZSwgbmV4dExpbmUsIGVuZExpbmUsIHRydWUpKSB7XG4gICAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRlcm1pbmF0ZSkgeyBicmVhazsgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnRlbnQgPSBzdGF0ZS5nZXRMaW5lcyhzdGFydExpbmUsIG5leHRMaW5lLCBzdGF0ZS5ibGtJbmRlbnQsIGZhbHNlKS50cmltKCk7XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuICBpZiAoY29udGVudC5sZW5ndGgpIHtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAncGFyYWdyYXBoX29wZW4nLFxuICAgICAgdGlnaHQ6IGZhbHNlLFxuICAgICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICB9KTtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwgKyAxLFxuICAgICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9KTtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAncGFyYWdyYXBoX2Nsb3NlJyxcbiAgICAgIHRpZ2h0OiBmYWxzZSxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogUGFyc2VyIHJ1bGVzXG4gKi9cblxudmFyIF9ydWxlcyQxID0gW1xuICBbICdjb2RlJywgICAgICAgY29kZSBdLFxuICBbICdmZW5jZXMnLCAgICAgZmVuY2VzLCAgICAgWyAncGFyYWdyYXBoJywgJ2Jsb2NrcXVvdGUnLCAnbGlzdCcgXSBdLFxuICBbICdibG9ja3F1b3RlJywgYmxvY2txdW90ZSwgWyAncGFyYWdyYXBoJywgJ2Jsb2NrcXVvdGUnLCAnbGlzdCcgXSBdLFxuICBbICdocicsICAgICAgICAgaHIsICAgICAgICAgWyAncGFyYWdyYXBoJywgJ2Jsb2NrcXVvdGUnLCAnbGlzdCcgXSBdLFxuICBbICdsaXN0JywgICAgICAgbGlzdCwgICAgICAgWyAncGFyYWdyYXBoJywgJ2Jsb2NrcXVvdGUnIF0gXSxcbiAgWyAnZm9vdG5vdGUnLCAgIGZvb3Rub3RlLCAgIFsgJ3BhcmFncmFwaCcgXSBdLFxuICBbICdoZWFkaW5nJywgICAgaGVhZGluZywgICAgWyAncGFyYWdyYXBoJywgJ2Jsb2NrcXVvdGUnIF0gXSxcbiAgWyAnbGhlYWRpbmcnLCAgIGxoZWFkaW5nIF0sXG4gIFsgJ2h0bWxibG9jaycsICBodG1sYmxvY2ssICBbICdwYXJhZ3JhcGgnLCAnYmxvY2txdW90ZScgXSBdLFxuICBbICd0YWJsZScsICAgICAgdGFibGUsICAgICAgWyAncGFyYWdyYXBoJyBdIF0sXG4gIFsgJ2RlZmxpc3QnLCAgICBkZWZsaXN0LCAgICBbICdwYXJhZ3JhcGgnIF0gXSxcbiAgWyAncGFyYWdyYXBoJywgIHBhcmFncmFwaCBdXG5dO1xuXG4vKipcbiAqIEJsb2NrIFBhcnNlciBjbGFzc1xuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFBhcnNlckJsb2NrKCkge1xuICB0aGlzLnJ1bGVyID0gbmV3IFJ1bGVyKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgX3J1bGVzJDEubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnJ1bGVyLnB1c2goX3J1bGVzJDFbaV1bMF0sIF9ydWxlcyQxW2ldWzFdLCB7XG4gICAgICBhbHQ6IChfcnVsZXMkMVtpXVsyXSB8fCBbXSkuc2xpY2UoKVxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogR2VuZXJhdGUgdG9rZW5zIGZvciB0aGUgZ2l2ZW4gaW5wdXQgcmFuZ2UuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBgc3RhdGVgIEhhcyBwcm9wZXJ0aWVzIGxpa2UgYHNyY2AsIGBwYXJzZXJgLCBgb3B0aW9uc2AgZXRjXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGBzdGFydExpbmVgXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGBlbmRMaW5lYFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUGFyc2VyQmxvY2sucHJvdG90eXBlLnRva2VuaXplID0gZnVuY3Rpb24gKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUpIHtcbiAgdmFyIHJ1bGVzID0gdGhpcy5ydWxlci5nZXRSdWxlcygnJyk7XG4gIHZhciBsZW4gPSBydWxlcy5sZW5ndGg7XG4gIHZhciBsaW5lID0gc3RhcnRMaW5lO1xuICB2YXIgaGFzRW1wdHlMaW5lcyA9IGZhbHNlO1xuICB2YXIgb2ssIGk7XG5cbiAgd2hpbGUgKGxpbmUgPCBlbmRMaW5lKSB7XG4gICAgc3RhdGUubGluZSA9IGxpbmUgPSBzdGF0ZS5za2lwRW1wdHlMaW5lcyhsaW5lKTtcbiAgICBpZiAobGluZSA+PSBlbmRMaW5lKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBUZXJtaW5hdGlvbiBjb25kaXRpb24gZm9yIG5lc3RlZCBjYWxscy5cbiAgICAvLyBOZXN0ZWQgY2FsbHMgY3VycmVudGx5IHVzZWQgZm9yIGJsb2NrcXVvdGVzICYgbGlzdHNcbiAgICBpZiAoc3RhdGUudFNoaWZ0W2xpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBUcnkgYWxsIHBvc3NpYmxlIHJ1bGVzLlxuICAgIC8vIE9uIHN1Y2Nlc3MsIHJ1bGUgc2hvdWxkOlxuICAgIC8vXG4gICAgLy8gLSB1cGRhdGUgYHN0YXRlLmxpbmVgXG4gICAgLy8gLSB1cGRhdGUgYHN0YXRlLnRva2Vuc2BcbiAgICAvLyAtIHJldHVybiB0cnVlXG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIG9rID0gcnVsZXNbaV0oc3RhdGUsIGxpbmUsIGVuZExpbmUsIGZhbHNlKTtcbiAgICAgIGlmIChvaykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXQgc3RhdGUudGlnaHQgaWZmIHdlIGhhZCBhbiBlbXB0eSBsaW5lIGJlZm9yZSBjdXJyZW50IHRhZ1xuICAgIC8vIGkuZS4gbGF0ZXN0IGVtcHR5IGxpbmUgc2hvdWxkIG5vdCBjb3VudFxuICAgIHN0YXRlLnRpZ2h0ID0gIWhhc0VtcHR5TGluZXM7XG5cbiAgICAvLyBwYXJhZ3JhcGggbWlnaHQgXCJlYXRcIiBvbmUgbmV3bGluZSBhZnRlciBpdCBpbiBuZXN0ZWQgbGlzdHNcbiAgICBpZiAoc3RhdGUuaXNFbXB0eShzdGF0ZS5saW5lIC0gMSkpIHtcbiAgICAgIGhhc0VtcHR5TGluZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGxpbmUgPSBzdGF0ZS5saW5lO1xuXG4gICAgaWYgKGxpbmUgPCBlbmRMaW5lICYmIHN0YXRlLmlzRW1wdHkobGluZSkpIHtcbiAgICAgIGhhc0VtcHR5TGluZXMgPSB0cnVlO1xuICAgICAgbGluZSsrO1xuXG4gICAgICAvLyB0d28gZW1wdHkgbGluZXMgc2hvdWxkIHN0b3AgdGhlIHBhcnNlciBpbiBsaXN0IG1vZGVcbiAgICAgIGlmIChsaW5lIDwgZW5kTGluZSAmJiBzdGF0ZS5wYXJlbnRUeXBlID09PSAnbGlzdCcgJiYgc3RhdGUuaXNFbXB0eShsaW5lKSkgeyBicmVhazsgfVxuICAgICAgc3RhdGUubGluZSA9IGxpbmU7XG4gICAgfVxuICB9XG59O1xuXG52YXIgVEFCU19TQ0FOX1JFID0gL1tcXG5cXHRdL2c7XG52YXIgTkVXTElORVNfUkUgID0gL1xccltcXG5cXHUwMDg1XXxbXFx1MjQyNFxcdTIwMjhcXHUwMDg1XS9nO1xudmFyIFNQQUNFU19SRSAgICA9IC9cXHUwMGEwL2c7XG5cbi8qKlxuICogVG9rZW5pemUgdGhlIGdpdmVuIGBzdHJgLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYHN0cmAgU291cmNlIHN0cmluZ1xuICogQHBhcmFtICB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEBwYXJhbSAge09iamVjdH0gYGVudmBcbiAqIEBwYXJhbSAge0FycmF5fSBgb3V0VG9rZW5zYFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUGFyc2VyQmxvY2sucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHN0ciwgb3B0aW9ucywgZW52LCBvdXRUb2tlbnMpIHtcbiAgdmFyIHN0YXRlLCBsaW5lU3RhcnQgPSAwLCBsYXN0VGFiUG9zID0gMDtcbiAgaWYgKCFzdHIpIHsgcmV0dXJuIFtdOyB9XG5cbiAgLy8gTm9ybWFsaXplIHNwYWNlc1xuICBzdHIgPSBzdHIucmVwbGFjZShTUEFDRVNfUkUsICcgJyk7XG5cbiAgLy8gTm9ybWFsaXplIG5ld2xpbmVzXG4gIHN0ciA9IHN0ci5yZXBsYWNlKE5FV0xJTkVTX1JFLCAnXFxuJyk7XG5cbiAgLy8gUmVwbGFjZSB0YWJzIHdpdGggcHJvcGVyIG51bWJlciBvZiBzcGFjZXMgKDEuLjQpXG4gIGlmIChzdHIuaW5kZXhPZignXFx0JykgPj0gMCkge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKFRBQlNfU0NBTl9SRSwgZnVuY3Rpb24gKG1hdGNoLCBvZmZzZXQpIHtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICBpZiAoc3RyLmNoYXJDb2RlQXQob2Zmc2V0KSA9PT0gMHgwQSkge1xuICAgICAgICBsaW5lU3RhcnQgPSBvZmZzZXQgKyAxO1xuICAgICAgICBsYXN0VGFiUG9zID0gMDtcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gJyAgICAnLnNsaWNlKChvZmZzZXQgLSBsaW5lU3RhcnQgLSBsYXN0VGFiUG9zKSAlIDQpO1xuICAgICAgbGFzdFRhYlBvcyA9IG9mZnNldCAtIGxpbmVTdGFydCArIDE7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGUgPSBuZXcgU3RhdGVCbG9jayhzdHIsIHRoaXMsIG9wdGlvbnMsIGVudiwgb3V0VG9rZW5zKTtcbiAgdGhpcy50b2tlbml6ZShzdGF0ZSwgc3RhdGUubGluZSwgc3RhdGUubGluZU1heCk7XG59O1xuXG4vLyBTa2lwIHRleHQgY2hhcmFjdGVycyBmb3IgdGV4dCB0b2tlbiwgcGxhY2UgdGhvc2UgdG8gcGVuZGluZyBidWZmZXJcbi8vIGFuZCBpbmNyZW1lbnQgY3VycmVudCBwb3NcblxuLy8gUnVsZSB0byBza2lwIHB1cmUgdGV4dFxuLy8gJ3t9JCVAfis9OicgcmVzZXJ2ZWQgZm9yIGV4dGVudGlvbnNcblxuZnVuY3Rpb24gaXNUZXJtaW5hdG9yQ2hhcihjaCkge1xuICBzd2l0Y2ggKGNoKSB7XG4gICAgY2FzZSAweDBBLyogXFxuICovOlxuICAgIGNhc2UgMHg1Qy8qIFxcICovOlxuICAgIGNhc2UgMHg2MC8qIGAgKi86XG4gICAgY2FzZSAweDJBLyogKiAqLzpcbiAgICBjYXNlIDB4NUYvKiBfICovOlxuICAgIGNhc2UgMHg1RS8qIF4gKi86XG4gICAgY2FzZSAweDVCLyogWyAqLzpcbiAgICBjYXNlIDB4NUQvKiBdICovOlxuICAgIGNhc2UgMHgyMS8qICEgKi86XG4gICAgY2FzZSAweDI2LyogJiAqLzpcbiAgICBjYXNlIDB4M0MvKiA8ICovOlxuICAgIGNhc2UgMHgzRS8qID4gKi86XG4gICAgY2FzZSAweDdCLyogeyAqLzpcbiAgICBjYXNlIDB4N0QvKiB9ICovOlxuICAgIGNhc2UgMHgyNC8qICQgKi86XG4gICAgY2FzZSAweDI1LyogJSAqLzpcbiAgICBjYXNlIDB4NDAvKiBAICovOlxuICAgIGNhc2UgMHg3RS8qIH4gKi86XG4gICAgY2FzZSAweDJCLyogKyAqLzpcbiAgICBjYXNlIDB4M0QvKiA9ICovOlxuICAgIGNhc2UgMHgzQS8qIDogKi86XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRleHQoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgcG9zID0gc3RhdGUucG9zO1xuXG4gIHdoaWxlIChwb3MgPCBzdGF0ZS5wb3NNYXggJiYgIWlzVGVybWluYXRvckNoYXIoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSkpIHtcbiAgICBwb3MrKztcbiAgfVxuXG4gIGlmIChwb3MgPT09IHN0YXRlLnBvcykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9IHN0YXRlLnNyYy5zbGljZShzdGF0ZS5wb3MsIHBvcyk7IH1cblxuICBzdGF0ZS5wb3MgPSBwb3M7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFByb2NlZXNzICdcXG4nXG5cbmZ1bmN0aW9uIG5ld2xpbmUoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgcG1heCwgbWF4LCBwb3MgPSBzdGF0ZS5wb3M7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MEEvKiBcXG4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG1heCA9IHN0YXRlLnBlbmRpbmcubGVuZ3RoIC0gMTtcbiAgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIC8vICcgIFxcbicgLT4gaGFyZGJyZWFrXG4gIC8vIExvb2t1cCBpbiBwZW5kaW5nIGNoYXJzIGlzIGJhZCBwcmFjdGljZSEgRG9uJ3QgY29weSB0byBvdGhlciBydWxlcyFcbiAgLy8gUGVuZGluZyBzdHJpbmcgaXMgc3RvcmVkIGluIGNvbmNhdCBtb2RlLCBpbmRleGVkIGxvb2t1cHMgd2lsbCBjYXVzZVxuICAvLyBjb252ZXJ0aW9uIHRvIGZsYXQgbW9kZS5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBpZiAocG1heCA+PSAwICYmIHN0YXRlLnBlbmRpbmcuY2hhckNvZGVBdChwbWF4KSA9PT0gMHgyMCkge1xuICAgICAgaWYgKHBtYXggPj0gMSAmJiBzdGF0ZS5wZW5kaW5nLmNoYXJDb2RlQXQocG1heCAtIDEpID09PSAweDIwKSB7XG4gICAgICAgIC8vIFN0cmlwIG91dCBhbGwgdHJhaWxpbmcgc3BhY2VzIG9uIHRoaXMgbGluZS5cbiAgICAgICAgZm9yICh2YXIgaSA9IHBtYXggLSAyOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChzdGF0ZS5wZW5kaW5nLmNoYXJDb2RlQXQoaSkgIT09IDB4MjApIHtcbiAgICAgICAgICAgIHN0YXRlLnBlbmRpbmcgPSBzdGF0ZS5wZW5kaW5nLnN1YnN0cmluZygwLCBpICsgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2hhcmRicmVhaycsXG4gICAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucGVuZGluZyA9IHN0YXRlLnBlbmRpbmcuc2xpY2UoMCwgLTEpO1xuICAgICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnc29mdGJyZWFrJyxcbiAgICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgIHR5cGU6ICdzb2Z0YnJlYWsnLFxuICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHBvcysrO1xuXG4gIC8vIHNraXAgaGVhZGluZyBzcGFjZXMgZm9yIG5leHQgbGluZVxuICB3aGlsZSAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MjApIHsgcG9zKys7IH1cblxuICBzdGF0ZS5wb3MgPSBwb3M7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBQcm9jZWVzcyBlc2NhcGVkIGNoYXJzIGFuZCBoYXJkYnJlYWtzXG5cbnZhciBFU0NBUEVEID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHsgRVNDQVBFRC5wdXNoKDApOyB9XG5cbidcXFxcIVwiIyQlJlxcJygpKissLi86Ozw9Pj9AW11eX2B7fH1+LSdcbiAgLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKSB7IEVTQ0FQRURbY2guY2hhckNvZGVBdCgwKV0gPSAxOyB9KTtcblxuXG5mdW5jdGlvbiBlc2NhcGUoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgY2gsIHBvcyA9IHN0YXRlLnBvcywgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDVDLyogXFwgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG9zKys7XG5cbiAgaWYgKHBvcyA8IG1heCkge1xuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICAgIGlmIChjaCA8IDI1NiAmJiBFU0NBUEVEW2NoXSAhPT0gMCkge1xuICAgICAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmNbcG9zXTsgfVxuICAgICAgc3RhdGUucG9zICs9IDI7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2ggPT09IDB4MEEpIHtcbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdoYXJkYnJlYWsnLFxuICAgICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcG9zKys7XG4gICAgICAvLyBza2lwIGxlYWRpbmcgd2hpdGVzcGFjZXMgZnJvbSBuZXh0IGxpbmVcbiAgICAgIHdoaWxlIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyMCkgeyBwb3MrKzsgfVxuXG4gICAgICBzdGF0ZS5wb3MgPSBwb3M7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9ICdcXFxcJzsgfVxuICBzdGF0ZS5wb3MrKztcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFBhcnNlIGJhY2t0aWNrc1xuXG5mdW5jdGlvbiBiYWNrdGlja3Moc3RhdGUsIHNpbGVudCkge1xuICB2YXIgc3RhcnQsIG1heCwgbWFya2VyLCBtYXRjaFN0YXJ0LCBtYXRjaEVuZCxcbiAgICAgIHBvcyA9IHN0YXRlLnBvcyxcbiAgICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAoY2ggIT09IDB4NjAvKiBgICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHN0YXJ0ID0gcG9zO1xuICBwb3MrKztcbiAgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIHdoaWxlIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHg2MC8qIGAgKi8pIHsgcG9zKys7IH1cblxuICBtYXJrZXIgPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHBvcyk7XG5cbiAgbWF0Y2hTdGFydCA9IG1hdGNoRW5kID0gcG9zO1xuXG4gIHdoaWxlICgobWF0Y2hTdGFydCA9IHN0YXRlLnNyYy5pbmRleE9mKCdgJywgbWF0Y2hFbmQpKSAhPT0gLTEpIHtcbiAgICBtYXRjaEVuZCA9IG1hdGNoU3RhcnQgKyAxO1xuXG4gICAgd2hpbGUgKG1hdGNoRW5kIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KG1hdGNoRW5kKSA9PT0gMHg2MC8qIGAgKi8pIHsgbWF0Y2hFbmQrKzsgfVxuXG4gICAgaWYgKG1hdGNoRW5kIC0gbWF0Y2hTdGFydCA9PT0gbWFya2VyLmxlbmd0aCkge1xuICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgICAgIGNvbnRlbnQ6IHN0YXRlLnNyYy5zbGljZShwb3MsIG1hdGNoU3RhcnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvWyBcXG5dKy9nLCAnICcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpLFxuICAgICAgICAgIGJsb2NrOiBmYWxzZSxcbiAgICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBzdGF0ZS5wb3MgPSBtYXRjaEVuZDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gbWFya2VyOyB9XG4gIHN0YXRlLnBvcyArPSBtYXJrZXIubGVuZ3RoO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gUHJvY2VzcyB+fmRlbGV0ZWQgdGV4dH5+XG5cbmZ1bmN0aW9uIGRlbChzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBmb3VuZCxcbiAgICAgIHBvcyxcbiAgICAgIHN0YWNrLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3MsXG4gICAgICBsYXN0Q2hhcixcbiAgICAgIG5leHRDaGFyO1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCkgIT09IDB4N0UvKiB+ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiBmYWxzZTsgfSAvLyBkb24ndCBydW4gYW55IHBhaXJzIGluIHZhbGlkYXRpb24gbW9kZVxuICBpZiAoc3RhcnQgKyA0ID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMSkgIT09IDB4N0UvKiB+ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxhc3RDaGFyID0gc3RhcnQgPiAwID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgLSAxKSA6IC0xO1xuICBuZXh0Q2hhciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMik7XG5cbiAgaWYgKGxhc3RDaGFyID09PSAweDdFLyogfiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKG5leHRDaGFyID09PSAweDdFLyogfiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKG5leHRDaGFyID09PSAweDIwIHx8IG5leHRDaGFyID09PSAweDBBKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IHN0YXJ0ICsgMjtcbiAgd2hpbGUgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDdFLyogfiAqLykgeyBwb3MrKzsgfVxuICBpZiAocG9zID4gc3RhcnQgKyAzKSB7XG4gICAgLy8gc2VxdWVuY2Ugb2YgNCsgbWFya2VycyB0YWtpbmcgYXMgbGl0ZXJhbCwgc2FtZSBhcyBpbiBhIGVtcGhhc2lzXG4gICAgc3RhdGUucG9zICs9IHBvcyAtIHN0YXJ0O1xuICAgIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBwb3MpOyB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGFydCArIDI7XG4gIHN0YWNrID0gMTtcblxuICB3aGlsZSAoc3RhdGUucG9zICsgMSA8IG1heCkge1xuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MpID09PSAweDdFLyogfiAqLykge1xuICAgICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyArIDEpID09PSAweDdFLyogfiAqLykge1xuICAgICAgICBsYXN0Q2hhciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyAtIDEpO1xuICAgICAgICBuZXh0Q2hhciA9IHN0YXRlLnBvcyArIDIgPCBtYXggPyBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MgKyAyKSA6IC0xO1xuICAgICAgICBpZiAobmV4dENoYXIgIT09IDB4N0UvKiB+ICovICYmIGxhc3RDaGFyICE9PSAweDdFLyogfiAqLykge1xuICAgICAgICAgIGlmIChsYXN0Q2hhciAhPT0gMHgyMCAmJiBsYXN0Q2hhciAhPT0gMHgwQSkge1xuICAgICAgICAgICAgLy8gY2xvc2luZyAnfn4nXG4gICAgICAgICAgICBzdGFjay0tO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgIT09IDB4MjAgJiYgbmV4dENoYXIgIT09IDB4MEEpIHtcbiAgICAgICAgICAgIC8vIG9wZW5pbmcgJ35+J1xuICAgICAgICAgICAgc3RhY2srKztcbiAgICAgICAgICB9IC8vIGVsc2Uge1xuICAgICAgICAgICAgLy8gIC8vIHN0YW5kYWxvbmUgJyB+fiAnIGluZGVudGVkIHdpdGggc3BhY2VzXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgaWYgKHN0YWNrIDw9IDApIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRlLnBhcnNlci5za2lwVG9rZW4oc3RhdGUpO1xuICB9XG5cbiAgaWYgKCFmb3VuZCkge1xuICAgIC8vIHBhcnNlciBmYWlsZWQgdG8gZmluZCBlbmRpbmcgdGFnLCBzbyBpdCdzIG5vdCB2YWxpZCBlbXBoYXNpc1xuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGZvdW5kIVxuICBzdGF0ZS5wb3NNYXggPSBzdGF0ZS5wb3M7XG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMjtcblxuICBpZiAoIXNpbGVudCkge1xuICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnZGVsX29wZW4nLCBsZXZlbDogc3RhdGUubGV2ZWwrKyB9KTtcbiAgICBzdGF0ZS5wYXJzZXIudG9rZW5pemUoc3RhdGUpO1xuICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnZGVsX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGF0ZS5wb3NNYXggKyAyO1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBQcm9jZXNzICsraW5zZXJ0ZWQgdGV4dCsrXG5cbmZ1bmN0aW9uIGlucyhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBmb3VuZCxcbiAgICAgIHBvcyxcbiAgICAgIHN0YWNrLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3MsXG4gICAgICBsYXN0Q2hhcixcbiAgICAgIG5leHRDaGFyO1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCkgIT09IDB4MkIvKiArICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiBmYWxzZTsgfSAvLyBkb24ndCBydW4gYW55IHBhaXJzIGluIHZhbGlkYXRpb24gbW9kZVxuICBpZiAoc3RhcnQgKyA0ID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMSkgIT09IDB4MkIvKiArICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxhc3RDaGFyID0gc3RhcnQgPiAwID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgLSAxKSA6IC0xO1xuICBuZXh0Q2hhciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMik7XG5cbiAgaWYgKGxhc3RDaGFyID09PSAweDJCLyogKyAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKG5leHRDaGFyID09PSAweDJCLyogKyAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKG5leHRDaGFyID09PSAweDIwIHx8IG5leHRDaGFyID09PSAweDBBKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IHN0YXJ0ICsgMjtcbiAgd2hpbGUgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDJCLyogKyAqLykgeyBwb3MrKzsgfVxuICBpZiAocG9zICE9PSBzdGFydCArIDIpIHtcbiAgICAvLyBzZXF1ZW5jZSBvZiAzKyBtYXJrZXJzIHRha2luZyBhcyBsaXRlcmFsLCBzYW1lIGFzIGluIGEgZW1waGFzaXNcbiAgICBzdGF0ZS5wb3MgKz0gcG9zIC0gc3RhcnQ7XG4gICAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHBvcyk7IH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMjtcbiAgc3RhY2sgPSAxO1xuXG4gIHdoaWxlIChzdGF0ZS5wb3MgKyAxIDwgbWF4KSB7XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcykgPT09IDB4MkIvKiArICovKSB7XG4gICAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zICsgMSkgPT09IDB4MkIvKiArICovKSB7XG4gICAgICAgIGxhc3RDaGFyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zIC0gMSk7XG4gICAgICAgIG5leHRDaGFyID0gc3RhdGUucG9zICsgMiA8IG1heCA/IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyArIDIpIDogLTE7XG4gICAgICAgIGlmIChuZXh0Q2hhciAhPT0gMHgyQi8qICsgKi8gJiYgbGFzdENoYXIgIT09IDB4MkIvKiArICovKSB7XG4gICAgICAgICAgaWYgKGxhc3RDaGFyICE9PSAweDIwICYmIGxhc3RDaGFyICE9PSAweDBBKSB7XG4gICAgICAgICAgICAvLyBjbG9zaW5nICcrKydcbiAgICAgICAgICAgIHN0YWNrLS07XG4gICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciAhPT0gMHgyMCAmJiBuZXh0Q2hhciAhPT0gMHgwQSkge1xuICAgICAgICAgICAgLy8gb3BlbmluZyAnKysnXG4gICAgICAgICAgICBzdGFjaysrO1xuICAgICAgICAgIH0gLy8gZWxzZSB7XG4gICAgICAgICAgICAvLyAgLy8gc3RhbmRhbG9uZSAnICsrICcgaW5kZW50ZWQgd2l0aCBzcGFjZXNcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICBpZiAoc3RhY2sgPD0gMCkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGUucGFyc2VyLnNraXBUb2tlbihzdGF0ZSk7XG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgLy8gcGFyc2VyIGZhaWxlZCB0byBmaW5kIGVuZGluZyB0YWcsIHNvIGl0J3Mgbm90IHZhbGlkIGVtcGhhc2lzXG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gZm91bmQhXG4gIHN0YXRlLnBvc01heCA9IHN0YXRlLnBvcztcbiAgc3RhdGUucG9zID0gc3RhcnQgKyAyO1xuXG4gIGlmICghc2lsZW50KSB7XG4gICAgc3RhdGUucHVzaCh7IHR5cGU6ICdpbnNfb3BlbicsIGxldmVsOiBzdGF0ZS5sZXZlbCsrIH0pO1xuICAgIHN0YXRlLnBhcnNlci50b2tlbml6ZShzdGF0ZSk7XG4gICAgc3RhdGUucHVzaCh7IHR5cGU6ICdpbnNfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXRlLnBvc01heCArIDI7XG4gIHN0YXRlLnBvc01heCA9IG1heDtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFByb2Nlc3MgPT1oaWdobGlnaHRlZCB0ZXh0PT1cblxuZnVuY3Rpb24gbWFyayhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBmb3VuZCxcbiAgICAgIHBvcyxcbiAgICAgIHN0YWNrLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3MsXG4gICAgICBsYXN0Q2hhcixcbiAgICAgIG5leHRDaGFyO1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCkgIT09IDB4M0QvKiA9ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiBmYWxzZTsgfSAvLyBkb24ndCBydW4gYW55IHBhaXJzIGluIHZhbGlkYXRpb24gbW9kZVxuICBpZiAoc3RhcnQgKyA0ID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMSkgIT09IDB4M0QvKiA9ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxhc3RDaGFyID0gc3RhcnQgPiAwID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgLSAxKSA6IC0xO1xuICBuZXh0Q2hhciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMik7XG5cbiAgaWYgKGxhc3RDaGFyID09PSAweDNELyogPSAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKG5leHRDaGFyID09PSAweDNELyogPSAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKG5leHRDaGFyID09PSAweDIwIHx8IG5leHRDaGFyID09PSAweDBBKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IHN0YXJ0ICsgMjtcbiAgd2hpbGUgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDNELyogPSAqLykgeyBwb3MrKzsgfVxuICBpZiAocG9zICE9PSBzdGFydCArIDIpIHtcbiAgICAvLyBzZXF1ZW5jZSBvZiAzKyBtYXJrZXJzIHRha2luZyBhcyBsaXRlcmFsLCBzYW1lIGFzIGluIGEgZW1waGFzaXNcbiAgICBzdGF0ZS5wb3MgKz0gcG9zIC0gc3RhcnQ7XG4gICAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHBvcyk7IH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMjtcbiAgc3RhY2sgPSAxO1xuXG4gIHdoaWxlIChzdGF0ZS5wb3MgKyAxIDwgbWF4KSB7XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcykgPT09IDB4M0QvKiA9ICovKSB7XG4gICAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zICsgMSkgPT09IDB4M0QvKiA9ICovKSB7XG4gICAgICAgIGxhc3RDaGFyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zIC0gMSk7XG4gICAgICAgIG5leHRDaGFyID0gc3RhdGUucG9zICsgMiA8IG1heCA/IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyArIDIpIDogLTE7XG4gICAgICAgIGlmIChuZXh0Q2hhciAhPT0gMHgzRC8qID0gKi8gJiYgbGFzdENoYXIgIT09IDB4M0QvKiA9ICovKSB7XG4gICAgICAgICAgaWYgKGxhc3RDaGFyICE9PSAweDIwICYmIGxhc3RDaGFyICE9PSAweDBBKSB7XG4gICAgICAgICAgICAvLyBjbG9zaW5nICc9PSdcbiAgICAgICAgICAgIHN0YWNrLS07XG4gICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciAhPT0gMHgyMCAmJiBuZXh0Q2hhciAhPT0gMHgwQSkge1xuICAgICAgICAgICAgLy8gb3BlbmluZyAnPT0nXG4gICAgICAgICAgICBzdGFjaysrO1xuICAgICAgICAgIH0gLy8gZWxzZSB7XG4gICAgICAgICAgICAvLyAgLy8gc3RhbmRhbG9uZSAnID09ICcgaW5kZW50ZWQgd2l0aCBzcGFjZXNcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICBpZiAoc3RhY2sgPD0gMCkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGUucGFyc2VyLnNraXBUb2tlbihzdGF0ZSk7XG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgLy8gcGFyc2VyIGZhaWxlZCB0byBmaW5kIGVuZGluZyB0YWcsIHNvIGl0J3Mgbm90IHZhbGlkIGVtcGhhc2lzXG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gZm91bmQhXG4gIHN0YXRlLnBvc01heCA9IHN0YXRlLnBvcztcbiAgc3RhdGUucG9zID0gc3RhcnQgKyAyO1xuXG4gIGlmICghc2lsZW50KSB7XG4gICAgc3RhdGUucHVzaCh7IHR5cGU6ICdtYXJrX29wZW4nLCBsZXZlbDogc3RhdGUubGV2ZWwrKyB9KTtcbiAgICBzdGF0ZS5wYXJzZXIudG9rZW5pemUoc3RhdGUpO1xuICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnbWFya19jbG9zZScsIGxldmVsOiAtLXN0YXRlLmxldmVsIH0pO1xuICB9XG5cbiAgc3RhdGUucG9zID0gc3RhdGUucG9zTWF4ICsgMjtcbiAgc3RhdGUucG9zTWF4ID0gbWF4O1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gUHJvY2VzcyAqdGhpcyogYW5kIF90aGF0X1xuXG5mdW5jdGlvbiBpc0FscGhhTnVtKGNvZGUpIHtcbiAgcmV0dXJuIChjb2RlID49IDB4MzAgLyogMCAqLyAmJiBjb2RlIDw9IDB4MzkgLyogOSAqLykgfHxcbiAgICAgICAgIChjb2RlID49IDB4NDEgLyogQSAqLyAmJiBjb2RlIDw9IDB4NUEgLyogWiAqLykgfHxcbiAgICAgICAgIChjb2RlID49IDB4NjEgLyogYSAqLyAmJiBjb2RlIDw9IDB4N0EgLyogeiAqLyk7XG59XG5cbi8vIHBhcnNlIHNlcXVlbmNlIG9mIGVtcGhhc2lzIG1hcmtlcnMsXG4vLyBcInN0YXJ0XCIgc2hvdWxkIHBvaW50IGF0IGEgdmFsaWQgbWFya2VyXG5mdW5jdGlvbiBzY2FuRGVsaW1zKHN0YXRlLCBzdGFydCkge1xuICB2YXIgcG9zID0gc3RhcnQsIGxhc3RDaGFyLCBuZXh0Q2hhciwgY291bnQsXG4gICAgICBjYW5fb3BlbiA9IHRydWUsXG4gICAgICBjYW5fY2xvc2UgPSB0cnVlLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpO1xuXG4gIGxhc3RDaGFyID0gc3RhcnQgPiAwID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgLSAxKSA6IC0xO1xuXG4gIHdoaWxlIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gbWFya2VyKSB7IHBvcysrOyB9XG4gIGlmIChwb3MgPj0gbWF4KSB7IGNhbl9vcGVuID0gZmFsc2U7IH1cbiAgY291bnQgPSBwb3MgLSBzdGFydDtcblxuICBpZiAoY291bnQgPj0gNCkge1xuICAgIC8vIHNlcXVlbmNlIG9mIGZvdXIgb3IgbW9yZSB1bmVzY2FwZWQgbWFya2VycyBjYW4ndCBzdGFydC9lbmQgYW4gZW1waGFzaXNcbiAgICBjYW5fb3BlbiA9IGNhbl9jbG9zZSA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIG5leHRDaGFyID0gcG9zIDwgbWF4ID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA6IC0xO1xuXG4gICAgLy8gY2hlY2sgd2hpdGVzcGFjZSBjb25kaXRpb25zXG4gICAgaWYgKG5leHRDaGFyID09PSAweDIwIHx8IG5leHRDaGFyID09PSAweDBBKSB7IGNhbl9vcGVuID0gZmFsc2U7IH1cbiAgICBpZiAobGFzdENoYXIgPT09IDB4MjAgfHwgbGFzdENoYXIgPT09IDB4MEEpIHsgY2FuX2Nsb3NlID0gZmFsc2U7IH1cblxuICAgIGlmIChtYXJrZXIgPT09IDB4NUYgLyogXyAqLykge1xuICAgICAgLy8gY2hlY2sgaWYgd2UgYXJlbid0IGluc2lkZSB0aGUgd29yZFxuICAgICAgaWYgKGlzQWxwaGFOdW0obGFzdENoYXIpKSB7IGNhbl9vcGVuID0gZmFsc2U7IH1cbiAgICAgIGlmIChpc0FscGhhTnVtKG5leHRDaGFyKSkgeyBjYW5fY2xvc2UgPSBmYWxzZTsgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2FuX29wZW46IGNhbl9vcGVuLFxuICAgIGNhbl9jbG9zZTogY2FuX2Nsb3NlLFxuICAgIGRlbGltczogY291bnRcbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1waGFzaXMoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgc3RhcnRDb3VudCxcbiAgICAgIGNvdW50LFxuICAgICAgZm91bmQsXG4gICAgICBvbGRDb3VudCxcbiAgICAgIG5ld0NvdW50LFxuICAgICAgc3RhY2ssXG4gICAgICByZXMsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcyxcbiAgICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KTtcblxuICBpZiAobWFya2VyICE9PSAweDVGLyogXyAqLyAmJiBtYXJrZXIgIT09IDB4MkEgLyogKiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gZmFsc2U7IH0gLy8gZG9uJ3QgcnVuIGFueSBwYWlycyBpbiB2YWxpZGF0aW9uIG1vZGVcblxuICByZXMgPSBzY2FuRGVsaW1zKHN0YXRlLCBzdGFydCk7XG4gIHN0YXJ0Q291bnQgPSByZXMuZGVsaW1zO1xuICBpZiAoIXJlcy5jYW5fb3Blbikge1xuICAgIHN0YXRlLnBvcyArPSBzdGFydENvdW50O1xuICAgIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBzdGF0ZS5wb3MpOyB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgc3RhcnRDb3VudDtcbiAgc3RhY2sgPSBbIHN0YXJ0Q291bnQgXTtcblxuICB3aGlsZSAoc3RhdGUucG9zIDwgbWF4KSB7XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcykgPT09IG1hcmtlcikge1xuICAgICAgcmVzID0gc2NhbkRlbGltcyhzdGF0ZSwgc3RhdGUucG9zKTtcbiAgICAgIGNvdW50ID0gcmVzLmRlbGltcztcbiAgICAgIGlmIChyZXMuY2FuX2Nsb3NlKSB7XG4gICAgICAgIG9sZENvdW50ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIG5ld0NvdW50ID0gY291bnQ7XG5cbiAgICAgICAgd2hpbGUgKG9sZENvdW50ICE9PSBuZXdDb3VudCkge1xuICAgICAgICAgIGlmIChuZXdDb3VudCA8IG9sZENvdW50KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG9sZENvdW50IC0gbmV3Q291bnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gYXNzZXJ0KG5ld0NvdW50ID4gb2xkQ291bnQpXG4gICAgICAgICAgbmV3Q291bnQgLT0gb2xkQ291bnQ7XG5cbiAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoID09PSAwKSB7IGJyZWFrOyB9XG4gICAgICAgICAgc3RhdGUucG9zICs9IG9sZENvdW50O1xuICAgICAgICAgIG9sZENvdW50ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc3RhcnRDb3VudCA9IG9sZENvdW50O1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5wb3MgKz0gY291bnQ7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzLmNhbl9vcGVuKSB7IHN0YWNrLnB1c2goY291bnQpOyB9XG4gICAgICBzdGF0ZS5wb3MgKz0gY291bnQ7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBzdGF0ZS5wYXJzZXIuc2tpcFRva2VuKHN0YXRlKTtcbiAgfVxuXG4gIGlmICghZm91bmQpIHtcbiAgICAvLyBwYXJzZXIgZmFpbGVkIHRvIGZpbmQgZW5kaW5nIHRhZywgc28gaXQncyBub3QgdmFsaWQgZW1waGFzaXNcbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBmb3VuZCFcbiAgc3RhdGUucG9zTWF4ID0gc3RhdGUucG9zO1xuICBzdGF0ZS5wb3MgPSBzdGFydCArIHN0YXJ0Q291bnQ7XG5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBpZiAoc3RhcnRDb3VudCA9PT0gMiB8fCBzdGFydENvdW50ID09PSAzKSB7XG4gICAgICBzdGF0ZS5wdXNoKHsgdHlwZTogJ3N0cm9uZ19vcGVuJywgbGV2ZWw6IHN0YXRlLmxldmVsKysgfSk7XG4gICAgfVxuICAgIGlmIChzdGFydENvdW50ID09PSAxIHx8IHN0YXJ0Q291bnQgPT09IDMpIHtcbiAgICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnZW1fb3BlbicsIGxldmVsOiBzdGF0ZS5sZXZlbCsrIH0pO1xuICAgIH1cblxuICAgIHN0YXRlLnBhcnNlci50b2tlbml6ZShzdGF0ZSk7XG5cbiAgICBpZiAoc3RhcnRDb3VudCA9PT0gMSB8fCBzdGFydENvdW50ID09PSAzKSB7XG4gICAgICBzdGF0ZS5wdXNoKHsgdHlwZTogJ2VtX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gICAgfVxuICAgIGlmIChzdGFydENvdW50ID09PSAyIHx8IHN0YXJ0Q291bnQgPT09IDMpIHtcbiAgICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnc3Ryb25nX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUucG9zID0gc3RhdGUucG9zTWF4ICsgc3RhcnRDb3VudDtcbiAgc3RhdGUucG9zTWF4ID0gbWF4O1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gUHJvY2VzcyB+c3Vic2NyaXB0flxuXG4vLyBzYW1lIGFzIFVORVNDQVBFX01EX1JFIHBsdXMgYSBzcGFjZVxudmFyIFVORVNDQVBFX1JFID0gL1xcXFwoWyBcXFxcIVwiIyQlJicoKSorLC5cXC86Ozw9Pj9AW1xcXV5fYHt8fX4tXSkvZztcblxuZnVuY3Rpb24gc3ViKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGZvdW5kLFxuICAgICAgY29udGVudCxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUucG9zO1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCkgIT09IDB4N0UvKiB+ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiBmYWxzZTsgfSAvLyBkb24ndCBydW4gYW55IHBhaXJzIGluIHZhbGlkYXRpb24gbW9kZVxuICBpZiAoc3RhcnQgKyAyID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBzdGF0ZS5wb3MgPSBzdGFydCArIDE7XG5cbiAgd2hpbGUgKHN0YXRlLnBvcyA8IG1heCkge1xuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MpID09PSAweDdFLyogfiAqLykge1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGUucGFyc2VyLnNraXBUb2tlbihzdGF0ZSk7XG4gIH1cblxuICBpZiAoIWZvdW5kIHx8IHN0YXJ0ICsgMSA9PT0gc3RhdGUucG9zKSB7XG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29udGVudCA9IHN0YXRlLnNyYy5zbGljZShzdGFydCArIDEsIHN0YXRlLnBvcyk7XG5cbiAgLy8gZG9uJ3QgYWxsb3cgdW5lc2NhcGVkIHNwYWNlcy9uZXdsaW5lcyBpbnNpZGVcbiAgaWYgKGNvbnRlbnQubWF0Y2goLyhefFteXFxcXF0pKFxcXFxcXFxcKSpcXHMvKSkge1xuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGZvdW5kIVxuICBzdGF0ZS5wb3NNYXggPSBzdGF0ZS5wb3M7XG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMTtcblxuICBpZiAoIXNpbGVudCkge1xuICAgIHN0YXRlLnB1c2goe1xuICAgICAgdHlwZTogJ3N1YicsXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwsXG4gICAgICBjb250ZW50OiBjb250ZW50LnJlcGxhY2UoVU5FU0NBUEVfUkUsICckMScpXG4gICAgfSk7XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGF0ZS5wb3NNYXggKyAxO1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBQcm9jZXNzIF5zdXBlcnNjcmlwdF5cblxuLy8gc2FtZSBhcyBVTkVTQ0FQRV9NRF9SRSBwbHVzIGEgc3BhY2VcbnZhciBVTkVTQ0FQRV9SRSQxID0gL1xcXFwoWyBcXFxcIVwiIyQlJicoKSorLC5cXC86Ozw9Pj9AW1xcXV5fYHt8fX4tXSkvZztcblxuZnVuY3Rpb24gc3VwKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGZvdW5kLFxuICAgICAgY29udGVudCxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUucG9zO1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCkgIT09IDB4NUUvKiBeICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiBmYWxzZTsgfSAvLyBkb24ndCBydW4gYW55IHBhaXJzIGluIHZhbGlkYXRpb24gbW9kZVxuICBpZiAoc3RhcnQgKyAyID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBzdGF0ZS5wb3MgPSBzdGFydCArIDE7XG5cbiAgd2hpbGUgKHN0YXRlLnBvcyA8IG1heCkge1xuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MpID09PSAweDVFLyogXiAqLykge1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGUucGFyc2VyLnNraXBUb2tlbihzdGF0ZSk7XG4gIH1cblxuICBpZiAoIWZvdW5kIHx8IHN0YXJ0ICsgMSA9PT0gc3RhdGUucG9zKSB7XG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29udGVudCA9IHN0YXRlLnNyYy5zbGljZShzdGFydCArIDEsIHN0YXRlLnBvcyk7XG5cbiAgLy8gZG9uJ3QgYWxsb3cgdW5lc2NhcGVkIHNwYWNlcy9uZXdsaW5lcyBpbnNpZGVcbiAgaWYgKGNvbnRlbnQubWF0Y2goLyhefFteXFxcXF0pKFxcXFxcXFxcKSpcXHMvKSkge1xuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGZvdW5kIVxuICBzdGF0ZS5wb3NNYXggPSBzdGF0ZS5wb3M7XG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMTtcblxuICBpZiAoIXNpbGVudCkge1xuICAgIHN0YXRlLnB1c2goe1xuICAgICAgdHlwZTogJ3N1cCcsXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwsXG4gICAgICBjb250ZW50OiBjb250ZW50LnJlcGxhY2UoVU5FU0NBUEVfUkUkMSwgJyQxJylcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXRlLnBvc01heCArIDE7XG4gIHN0YXRlLnBvc01heCA9IG1heDtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFByb2Nlc3MgW2xpbmtzXSg8dG8+IFwic3R1ZmZcIilcblxuXG5mdW5jdGlvbiBsaW5rcyhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBsYWJlbFN0YXJ0LFxuICAgICAgbGFiZWxFbmQsXG4gICAgICBsYWJlbCxcbiAgICAgIGhyZWYsXG4gICAgICB0aXRsZSxcbiAgICAgIHBvcyxcbiAgICAgIHJlZixcbiAgICAgIGNvZGUsXG4gICAgICBpc0ltYWdlID0gZmFsc2UsXG4gICAgICBvbGRQb3MgPSBzdGF0ZS5wb3MsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcyxcbiAgICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KTtcblxuICBpZiAobWFya2VyID09PSAweDIxLyogISAqLykge1xuICAgIGlzSW1hZ2UgPSB0cnVlO1xuICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KCsrc3RhcnQpO1xuICB9XG5cbiAgaWYgKG1hcmtlciAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGFiZWxTdGFydCA9IHN0YXJ0ICsgMTtcbiAgbGFiZWxFbmQgPSBwYXJzZUxpbmtMYWJlbChzdGF0ZSwgc3RhcnQpO1xuXG4gIC8vIHBhcnNlciBmYWlsZWQgdG8gZmluZCAnXScsIHNvIGl0J3Mgbm90IGEgdmFsaWQgbGlua1xuICBpZiAobGFiZWxFbmQgPCAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IGxhYmVsRW5kICsgMTtcbiAgaWYgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDI4LyogKCAqLykge1xuICAgIC8vXG4gICAgLy8gSW5saW5lIGxpbmtcbiAgICAvL1xuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgXl4gc2tpcHBpbmcgdGhlc2Ugc3BhY2VzXG4gICAgcG9zKys7XG4gICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKGNvZGUgIT09IDB4MjAgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICAgIH1cbiAgICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgLy8gICAgICAgICAgXl5eXl5eIHBhcnNpbmcgbGluayBkZXN0aW5hdGlvblxuICAgIHN0YXJ0ID0gcG9zO1xuICAgIGlmIChwYXJzZUxpbmtEZXN0aW5hdGlvbihzdGF0ZSwgcG9zKSkge1xuICAgICAgaHJlZiA9IHN0YXRlLmxpbmtDb250ZW50O1xuICAgICAgcG9zID0gc3RhdGUucG9zO1xuICAgIH0gZWxzZSB7XG4gICAgICBocmVmID0gJyc7XG4gICAgfVxuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgICAgICAgICBeXiBza2lwcGluZyB0aGVzZSBzcGFjZXNcbiAgICBzdGFydCA9IHBvcztcbiAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICBpZiAoY29kZSAhPT0gMHgyMCAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrOyB9XG4gICAgfVxuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgICAgICAgICAgIF5eXl5eXl4gcGFyc2luZyBsaW5rIHRpdGxlXG4gICAgaWYgKHBvcyA8IG1heCAmJiBzdGFydCAhPT0gcG9zICYmIHBhcnNlTGlua1RpdGxlKHN0YXRlLCBwb3MpKSB7XG4gICAgICB0aXRsZSA9IHN0YXRlLmxpbmtDb250ZW50O1xuICAgICAgcG9zID0gc3RhdGUucG9zO1xuXG4gICAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXl4gc2tpcHBpbmcgdGhlc2Ugc3BhY2VzXG4gICAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgaWYgKGNvZGUgIT09IDB4MjAgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZSA9ICcnO1xuICAgIH1cblxuICAgIGlmIChwb3MgPj0gbWF4IHx8IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MjkvKiApICovKSB7XG4gICAgICBzdGF0ZS5wb3MgPSBvbGRQb3M7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHBvcysrO1xuICB9IGVsc2Uge1xuICAgIC8vXG4gICAgLy8gTGluayByZWZlcmVuY2VcbiAgICAvL1xuXG4gICAgLy8gZG8gbm90IGFsbG93IG5lc3RlZCByZWZlcmVuY2UgbGlua3NcbiAgICBpZiAoc3RhdGUubGlua0xldmVsID4gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIC8vIFtmb29dICBbYmFyXVxuICAgIC8vICAgICAgXl4gb3B0aW9uYWwgd2hpdGVzcGFjZSAoY2FuIGluY2x1ZGUgbmV3bGluZXMpXG4gICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKGNvZGUgIT09IDB4MjAgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICAgIH1cblxuICAgIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHg1Qi8qIFsgKi8pIHtcbiAgICAgIHN0YXJ0ID0gcG9zICsgMTtcbiAgICAgIHBvcyA9IHBhcnNlTGlua0xhYmVsKHN0YXRlLCBwb3MpO1xuICAgICAgaWYgKHBvcyA+PSAwKSB7XG4gICAgICAgIGxhYmVsID0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBwb3MrKyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3MgPSBzdGFydCAtIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY292ZXJzIGxhYmVsID09PSAnJyBhbmQgbGFiZWwgPT09IHVuZGVmaW5lZFxuICAgIC8vIChjb2xsYXBzZWQgcmVmZXJlbmNlIGxpbmsgYW5kIHNob3J0Y3V0IHJlZmVyZW5jZSBsaW5rIHJlc3BlY3RpdmVseSlcbiAgICBpZiAoIWxhYmVsKSB7XG4gICAgICBpZiAodHlwZW9mIGxhYmVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwb3MgPSBsYWJlbEVuZCArIDE7XG4gICAgICB9XG4gICAgICBsYWJlbCA9IHN0YXRlLnNyYy5zbGljZShsYWJlbFN0YXJ0LCBsYWJlbEVuZCk7XG4gICAgfVxuXG4gICAgcmVmID0gc3RhdGUuZW52LnJlZmVyZW5jZXNbbm9ybWFsaXplUmVmZXJlbmNlKGxhYmVsKV07XG4gICAgaWYgKCFyZWYpIHtcbiAgICAgIHN0YXRlLnBvcyA9IG9sZFBvcztcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaHJlZiA9IHJlZi5ocmVmO1xuICAgIHRpdGxlID0gcmVmLnRpdGxlO1xuICB9XG5cbiAgLy9cbiAgLy8gV2UgZm91bmQgdGhlIGVuZCBvZiB0aGUgbGluaywgYW5kIGtub3cgZm9yIGEgZmFjdCBpdCdzIGEgdmFsaWQgbGluaztcbiAgLy8gc28gYWxsIHRoYXQncyBsZWZ0IHRvIGRvIGlzIHRvIGNhbGwgdG9rZW5pemVyLlxuICAvL1xuICBpZiAoIXNpbGVudCkge1xuICAgIHN0YXRlLnBvcyA9IGxhYmVsU3RhcnQ7XG4gICAgc3RhdGUucG9zTWF4ID0gbGFiZWxFbmQ7XG5cbiAgICBpZiAoaXNJbWFnZSkge1xuICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIHNyYzogaHJlZixcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBhbHQ6IHN0YXRlLnNyYy5zdWJzdHIobGFiZWxTdGFydCwgbGFiZWxFbmQgLSBsYWJlbFN0YXJ0KSxcbiAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaW5rX29wZW4nLFxuICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gICAgICB9KTtcbiAgICAgIHN0YXRlLmxpbmtMZXZlbCsrO1xuICAgICAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlKTtcbiAgICAgIHN0YXRlLmxpbmtMZXZlbC0tO1xuICAgICAgc3RhdGUucHVzaCh7IHR5cGU6ICdsaW5rX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUucG9zID0gcG9zO1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBQcm9jZXNzIGlubGluZSBmb290bm90ZXMgKF5bLi4uXSlcblxuXG5mdW5jdGlvbiBmb290bm90ZV9pbmxpbmUoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgbGFiZWxTdGFydCxcbiAgICAgIGxhYmVsRW5kLFxuICAgICAgZm9vdG5vdGVJZCxcbiAgICAgIG9sZExlbmd0aCxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUucG9zO1xuXG4gIGlmIChzdGFydCArIDIgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpICE9PSAweDVFLyogXiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMSkgIT09IDB4NUIvKiBbICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxhYmVsU3RhcnQgPSBzdGFydCArIDI7XG4gIGxhYmVsRW5kID0gcGFyc2VMaW5rTGFiZWwoc3RhdGUsIHN0YXJ0ICsgMSk7XG5cbiAgLy8gcGFyc2VyIGZhaWxlZCB0byBmaW5kICddJywgc28gaXQncyBub3QgYSB2YWxpZCBub3RlXG4gIGlmIChsYWJlbEVuZCA8IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gV2UgZm91bmQgdGhlIGVuZCBvZiB0aGUgbGluaywgYW5kIGtub3cgZm9yIGEgZmFjdCBpdCdzIGEgdmFsaWQgbGluaztcbiAgLy8gc28gYWxsIHRoYXQncyBsZWZ0IHRvIGRvIGlzIHRvIGNhbGwgdG9rZW5pemVyLlxuICAvL1xuICBpZiAoIXNpbGVudCkge1xuICAgIGlmICghc3RhdGUuZW52LmZvb3Rub3RlcykgeyBzdGF0ZS5lbnYuZm9vdG5vdGVzID0ge307IH1cbiAgICBpZiAoIXN0YXRlLmVudi5mb290bm90ZXMubGlzdCkgeyBzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3QgPSBbXTsgfVxuICAgIGZvb3Rub3RlSWQgPSBzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3QubGVuZ3RoO1xuXG4gICAgc3RhdGUucG9zID0gbGFiZWxTdGFydDtcbiAgICBzdGF0ZS5wb3NNYXggPSBsYWJlbEVuZDtcblxuICAgIHN0YXRlLnB1c2goe1xuICAgICAgdHlwZTogJ2Zvb3Rub3RlX3JlZicsXG4gICAgICBpZDogZm9vdG5vdGVJZCxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgIH0pO1xuICAgIHN0YXRlLmxpbmtMZXZlbCsrO1xuICAgIG9sZExlbmd0aCA9IHN0YXRlLnRva2Vucy5sZW5ndGg7XG4gICAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlKTtcbiAgICBzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3RbZm9vdG5vdGVJZF0gPSB7IHRva2Vuczogc3RhdGUudG9rZW5zLnNwbGljZShvbGRMZW5ndGgpIH07XG4gICAgc3RhdGUubGlua0xldmVsLS07XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBsYWJlbEVuZCArIDE7XG4gIHN0YXRlLnBvc01heCA9IG1heDtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFByb2Nlc3MgZm9vdG5vdGUgcmVmZXJlbmNlcyAoW14uLi5dKVxuXG5mdW5jdGlvbiBmb290bm90ZV9yZWYoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgbGFiZWwsXG4gICAgICBwb3MsXG4gICAgICBmb290bm90ZUlkLFxuICAgICAgZm9vdG5vdGVTdWJJZCxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUucG9zO1xuXG4gIC8vIHNob3VsZCBiZSBhdCBsZWFzdCA0IGNoYXJzIC0gXCJbXnhdXCJcbiAgaWYgKHN0YXJ0ICsgMyA+IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoIXN0YXRlLmVudi5mb290bm90ZXMgfHwgIXN0YXRlLmVudi5mb290bm90ZXMucmVmcykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCArIDEpICE9PSAweDVFLyogXiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBmb3IgKHBvcyA9IHN0YXJ0ICsgMjsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDIwKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDBBKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDVEIC8qIF0gKi8pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwb3MgPT09IHN0YXJ0ICsgMikgeyByZXR1cm4gZmFsc2U7IH0gLy8gbm8gZW1wdHkgZm9vdG5vdGUgbGFiZWxzXG4gIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuICBwb3MrKztcblxuICBsYWJlbCA9IHN0YXRlLnNyYy5zbGljZShzdGFydCArIDIsIHBvcyAtIDEpO1xuICBpZiAodHlwZW9mIHN0YXRlLmVudi5mb290bm90ZXMucmVmc1snOicgKyBsYWJlbF0gPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmICghc2lsZW50KSB7XG4gICAgaWYgKCFzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3QpIHsgc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0ID0gW107IH1cblxuICAgIGlmIChzdGF0ZS5lbnYuZm9vdG5vdGVzLnJlZnNbJzonICsgbGFiZWxdIDwgMCkge1xuICAgICAgZm9vdG5vdGVJZCA9IHN0YXRlLmVudi5mb290bm90ZXMubGlzdC5sZW5ndGg7XG4gICAgICBzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3RbZm9vdG5vdGVJZF0gPSB7IGxhYmVsOiBsYWJlbCwgY291bnQ6IDAgfTtcbiAgICAgIHN0YXRlLmVudi5mb290bm90ZXMucmVmc1snOicgKyBsYWJlbF0gPSBmb290bm90ZUlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb290bm90ZUlkID0gc3RhdGUuZW52LmZvb3Rub3Rlcy5yZWZzWyc6JyArIGxhYmVsXTtcbiAgICB9XG5cbiAgICBmb290bm90ZVN1YklkID0gc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0W2Zvb3Rub3RlSWRdLmNvdW50O1xuICAgIHN0YXRlLmVudi5mb290bm90ZXMubGlzdFtmb290bm90ZUlkXS5jb3VudCsrO1xuXG4gICAgc3RhdGUucHVzaCh7XG4gICAgICB0eXBlOiAnZm9vdG5vdGVfcmVmJyxcbiAgICAgIGlkOiBmb290bm90ZUlkLFxuICAgICAgc3ViSWQ6IGZvb3Rub3RlU3ViSWQsXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHBvcztcbiAgc3RhdGUucG9zTWF4ID0gbWF4O1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gTGlzdCBvZiB2YWxpZCB1cmwgc2NoZW1hcywgYWNjb3J0aW5nIHRvIGNvbW1vbm1hcmsgc3BlY1xuLy8gaHR0cDovL2pnbS5naXRodWIuaW8vQ29tbW9uTWFyay9zcGVjLmh0bWwjYXV0b2xpbmtzXG5cbnZhciB1cmxfc2NoZW1hcyA9IFtcbiAgJ2NvYXAnLFxuICAnZG9pJyxcbiAgJ2phdmFzY3JpcHQnLFxuICAnYWFhJyxcbiAgJ2FhYXMnLFxuICAnYWJvdXQnLFxuICAnYWNhcCcsXG4gICdjYXAnLFxuICAnY2lkJyxcbiAgJ2NyaWQnLFxuICAnZGF0YScsXG4gICdkYXYnLFxuICAnZGljdCcsXG4gICdkbnMnLFxuICAnZmlsZScsXG4gICdmdHAnLFxuICAnZ2VvJyxcbiAgJ2dvJyxcbiAgJ2dvcGhlcicsXG4gICdoMzIzJyxcbiAgJ2h0dHAnLFxuICAnaHR0cHMnLFxuICAnaWF4JyxcbiAgJ2ljYXAnLFxuICAnaW0nLFxuICAnaW1hcCcsXG4gICdpbmZvJyxcbiAgJ2lwcCcsXG4gICdpcmlzJyxcbiAgJ2lyaXMuYmVlcCcsXG4gICdpcmlzLnhwYycsXG4gICdpcmlzLnhwY3MnLFxuICAnaXJpcy5sd3onLFxuICAnbGRhcCcsXG4gICdtYWlsdG8nLFxuICAnbWlkJyxcbiAgJ21zcnAnLFxuICAnbXNycHMnLFxuICAnbXRxcCcsXG4gICdtdXBkYXRlJyxcbiAgJ25ld3MnLFxuICAnbmZzJyxcbiAgJ25pJyxcbiAgJ25paCcsXG4gICdubnRwJyxcbiAgJ29wYXF1ZWxvY2t0b2tlbicsXG4gICdwb3AnLFxuICAncHJlcycsXG4gICdydHNwJyxcbiAgJ3NlcnZpY2UnLFxuICAnc2Vzc2lvbicsXG4gICdzaHR0cCcsXG4gICdzaWV2ZScsXG4gICdzaXAnLFxuICAnc2lwcycsXG4gICdzbXMnLFxuICAnc25tcCcsXG4gICdzb2FwLmJlZXAnLFxuICAnc29hcC5iZWVwcycsXG4gICd0YWcnLFxuICAndGVsJyxcbiAgJ3RlbG5ldCcsXG4gICd0ZnRwJyxcbiAgJ3RoaXNtZXNzYWdlJyxcbiAgJ3RuMzI3MCcsXG4gICd0aXAnLFxuICAndHYnLFxuICAndXJuJyxcbiAgJ3ZlbW1pJyxcbiAgJ3dzJyxcbiAgJ3dzcycsXG4gICd4Y29uJyxcbiAgJ3hjb24tdXNlcmlkJyxcbiAgJ3htbHJwYy5iZWVwJyxcbiAgJ3htbHJwYy5iZWVwcycsXG4gICd4bXBwJyxcbiAgJ3ozOS41MHInLFxuICAnejM5LjUwcycsXG4gICdhZGl1bXh0cmEnLFxuICAnYWZwJyxcbiAgJ2FmcycsXG4gICdhaW0nLFxuICAnYXB0JyxcbiAgJ2F0dGFjaG1lbnQnLFxuICAnYXcnLFxuICAnYmVzaGFyZScsXG4gICdiaXRjb2luJyxcbiAgJ2JvbG8nLFxuICAnY2FsbHRvJyxcbiAgJ2Nocm9tZScsXG4gICdjaHJvbWUtZXh0ZW5zaW9uJyxcbiAgJ2NvbS1ldmVudGJyaXRlLWF0dGVuZGVlJyxcbiAgJ2NvbnRlbnQnLFxuICAnY3ZzJyxcbiAgJ2RsbmEtcGxheXNpbmdsZScsXG4gICdkbG5hLXBsYXljb250YWluZXInLFxuICAnZHRuJyxcbiAgJ2R2YicsXG4gICdlZDJrJyxcbiAgJ2ZhY2V0aW1lJyxcbiAgJ2ZlZWQnLFxuICAnZmluZ2VyJyxcbiAgJ2Zpc2gnLFxuICAnZ2cnLFxuICAnZ2l0JyxcbiAgJ2dpem1vcHJvamVjdCcsXG4gICdndGFsaycsXG4gICdoY3AnLFxuICAnaWNvbicsXG4gICdpcG4nLFxuICAnaXJjJyxcbiAgJ2lyYzYnLFxuICAnaXJjcycsXG4gICdpdG1zJyxcbiAgJ2phcicsXG4gICdqbXMnLFxuICAna2V5cGFyYycsXG4gICdsYXN0Zm0nLFxuICAnbGRhcHMnLFxuICAnbWFnbmV0JyxcbiAgJ21hcHMnLFxuICAnbWFya2V0JyxcbiAgJ21lc3NhZ2UnLFxuICAnbW1zJyxcbiAgJ21zLWhlbHAnLFxuICAnbXNuaW0nLFxuICAnbXVtYmxlJyxcbiAgJ212bicsXG4gICdub3RlcycsXG4gICdvaWQnLFxuICAncGFsbScsXG4gICdwYXBhcmF6emknLFxuICAncGxhdGZvcm0nLFxuICAncHJveHknLFxuICAncHN5YycsXG4gICdxdWVyeScsXG4gICdyZXMnLFxuICAncmVzb3VyY2UnLFxuICAncm1pJyxcbiAgJ3JzeW5jJyxcbiAgJ3J0bXAnLFxuICAnc2Vjb25kbGlmZScsXG4gICdzZnRwJyxcbiAgJ3NnbicsXG4gICdza3lwZScsXG4gICdzbWInLFxuICAnc29sZGF0JyxcbiAgJ3Nwb3RpZnknLFxuICAnc3NoJyxcbiAgJ3N0ZWFtJyxcbiAgJ3N2bicsXG4gICd0ZWFtc3BlYWsnLFxuICAndGhpbmdzJyxcbiAgJ3VkcCcsXG4gICd1bnJlYWwnLFxuICAndXQyMDA0JyxcbiAgJ3ZlbnRyaWxvJyxcbiAgJ3ZpZXctc291cmNlJyxcbiAgJ3dlYmNhbCcsXG4gICd3dGFpJyxcbiAgJ3d5Y2l3eWcnLFxuICAneGZpcmUnLFxuICAneHJpJyxcbiAgJ3ltc2dyJ1xuXTtcblxuLy8gUHJvY2VzcyBhdXRvbGlua3MgJzxwcm90b2NvbDouLi4+J1xuXG5cbi8qZXNsaW50IG1heC1sZW46MCovXG52YXIgRU1BSUxfUkUgICAgPSAvXjwoW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKik+LztcbnZhciBBVVRPTElOS19SRSA9IC9ePChbYS16QS1aLlxcLV17MSwyNX0pOihbXjw+XFx4MDAtXFx4MjBdKik+LztcblxuXG5mdW5jdGlvbiBhdXRvbGluayhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciB0YWlsLCBsaW5rTWF0Y2gsIGVtYWlsTWF0Y2gsIHVybCwgZnVsbFVybCwgcG9zID0gc3RhdGUucG9zO1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDNDLyogPCAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICB0YWlsID0gc3RhdGUuc3JjLnNsaWNlKHBvcyk7XG5cbiAgaWYgKHRhaWwuaW5kZXhPZignPicpIDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBsaW5rTWF0Y2ggPSB0YWlsLm1hdGNoKEFVVE9MSU5LX1JFKTtcblxuICBpZiAobGlua01hdGNoKSB7XG4gICAgaWYgKHVybF9zY2hlbWFzLmluZGV4T2YobGlua01hdGNoWzFdLnRvTG93ZXJDYXNlKCkpIDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIHVybCA9IGxpbmtNYXRjaFswXS5zbGljZSgxLCAtMSk7XG4gICAgZnVsbFVybCA9IG5vcm1hbGl6ZUxpbmsodXJsKTtcbiAgICBpZiAoIXN0YXRlLnBhcnNlci52YWxpZGF0ZUxpbmsodXJsKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIGlmICghc2lsZW50KSB7XG4gICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpbmtfb3BlbicsXG4gICAgICAgIGhyZWY6IGZ1bGxVcmwsXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgICAgfSk7XG4gICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50OiB1cmwsXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCArIDFcbiAgICAgIH0pO1xuICAgICAgc3RhdGUucHVzaCh7IHR5cGU6ICdsaW5rX2Nsb3NlJywgbGV2ZWw6IHN0YXRlLmxldmVsIH0pO1xuICAgIH1cblxuICAgIHN0YXRlLnBvcyArPSBsaW5rTWF0Y2hbMF0ubGVuZ3RoO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZW1haWxNYXRjaCA9IHRhaWwubWF0Y2goRU1BSUxfUkUpO1xuXG4gIGlmIChlbWFpbE1hdGNoKSB7XG5cbiAgICB1cmwgPSBlbWFpbE1hdGNoWzBdLnNsaWNlKDEsIC0xKTtcblxuICAgIGZ1bGxVcmwgPSBub3JtYWxpemVMaW5rKCdtYWlsdG86JyArIHVybCk7XG4gICAgaWYgKCFzdGF0ZS5wYXJzZXIudmFsaWRhdGVMaW5rKGZ1bGxVcmwpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICB0eXBlOiAnbGlua19vcGVuJyxcbiAgICAgICAgaHJlZjogZnVsbFVybCxcbiAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgICB9KTtcbiAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNvbnRlbnQ6IHVybCxcbiAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsICsgMVxuICAgICAgfSk7XG4gICAgICBzdGF0ZS5wdXNoKHsgdHlwZTogJ2xpbmtfY2xvc2UnLCBsZXZlbDogc3RhdGUubGV2ZWwgfSk7XG4gICAgfVxuXG4gICAgc3RhdGUucG9zICs9IGVtYWlsTWF0Y2hbMF0ubGVuZ3RoO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBSZWdleHBzIHRvIG1hdGNoIGh0bWwgZWxlbWVudHNcblxuZnVuY3Rpb24gcmVwbGFjZSQxKHJlZ2V4LCBvcHRpb25zKSB7XG4gIHJlZ2V4ID0gcmVnZXguc291cmNlO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCAnJztcblxuICByZXR1cm4gZnVuY3Rpb24gc2VsZihuYW1lLCB2YWwpIHtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4LCBvcHRpb25zKTtcbiAgICB9XG4gICAgdmFsID0gdmFsLnNvdXJjZSB8fCB2YWw7XG4gICAgcmVnZXggPSByZWdleC5yZXBsYWNlKG5hbWUsIHZhbCk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG59XG5cblxudmFyIGF0dHJfbmFtZSAgICAgPSAvW2EtekEtWl86XVthLXpBLVowLTk6Ll8tXSovO1xuXG52YXIgdW5xdW90ZWQgICAgICA9IC9bXlwiJz08PmBcXHgwMC1cXHgyMF0rLztcbnZhciBzaW5nbGVfcXVvdGVkID0gLydbXiddKicvO1xudmFyIGRvdWJsZV9xdW90ZWQgPSAvXCJbXlwiXSpcIi87XG5cbi8qZXNsaW50IG5vLXNwYWNlZC1mdW5jOjAqL1xudmFyIGF0dHJfdmFsdWUgID0gcmVwbGFjZSQxKC8oPzp1bnF1b3RlZHxzaW5nbGVfcXVvdGVkfGRvdWJsZV9xdW90ZWQpLylcbiAgICAgICAgICAgICAgICAgICAgKCd1bnF1b3RlZCcsIHVucXVvdGVkKVxuICAgICAgICAgICAgICAgICAgICAoJ3NpbmdsZV9xdW90ZWQnLCBzaW5nbGVfcXVvdGVkKVxuICAgICAgICAgICAgICAgICAgICAoJ2RvdWJsZV9xdW90ZWQnLCBkb3VibGVfcXVvdGVkKVxuICAgICAgICAgICAgICAgICAgICAoKTtcblxudmFyIGF0dHJpYnV0ZSAgID0gcmVwbGFjZSQxKC8oPzpcXHMrYXR0cl9uYW1lKD86XFxzKj1cXHMqYXR0cl92YWx1ZSk/KS8pXG4gICAgICAgICAgICAgICAgICAgICgnYXR0cl9uYW1lJywgYXR0cl9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAoJ2F0dHJfdmFsdWUnLCBhdHRyX3ZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAoKTtcblxudmFyIG9wZW5fdGFnICAgID0gcmVwbGFjZSQxKC88W0EtWmEtel1bQS1aYS16MC05XSphdHRyaWJ1dGUqXFxzKlxcLz8+LylcbiAgICAgICAgICAgICAgICAgICAgKCdhdHRyaWJ1dGUnLCBhdHRyaWJ1dGUpXG4gICAgICAgICAgICAgICAgICAgICgpO1xuXG52YXIgY2xvc2VfdGFnICAgPSAvPFxcL1tBLVphLXpdW0EtWmEtejAtOV0qXFxzKj4vO1xudmFyIGNvbW1lbnQgICAgID0gLzwhLS0tLT58PCEtLSg/Oi0/W14+LV0pKD86LT9bXi1dKSotLT4vO1xudmFyIHByb2Nlc3NpbmcgID0gLzxbP10uKj9bP10+LztcbnZhciBkZWNsYXJhdGlvbiA9IC88IVtBLVpdK1xccytbXj5dKj4vO1xudmFyIGNkYXRhICAgICAgID0gLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPi87XG5cbnZhciBIVE1MX1RBR19SRSA9IHJlcGxhY2UkMSgvXig/Om9wZW5fdGFnfGNsb3NlX3RhZ3xjb21tZW50fHByb2Nlc3Npbmd8ZGVjbGFyYXRpb258Y2RhdGEpLylcbiAgKCdvcGVuX3RhZycsIG9wZW5fdGFnKVxuICAoJ2Nsb3NlX3RhZycsIGNsb3NlX3RhZylcbiAgKCdjb21tZW50JywgY29tbWVudClcbiAgKCdwcm9jZXNzaW5nJywgcHJvY2Vzc2luZylcbiAgKCdkZWNsYXJhdGlvbicsIGRlY2xhcmF0aW9uKVxuICAoJ2NkYXRhJywgY2RhdGEpXG4gICgpO1xuXG4vLyBQcm9jZXNzIGh0bWwgdGFnc1xuXG5cbmZ1bmN0aW9uIGlzTGV0dGVyJDIoY2gpIHtcbiAgLyplc2xpbnQgbm8tYml0d2lzZTowKi9cbiAgdmFyIGxjID0gY2ggfCAweDIwOyAvLyB0byBsb3dlciBjYXNlXG4gIHJldHVybiAobGMgPj0gMHg2MS8qIGEgKi8pICYmIChsYyA8PSAweDdhLyogeiAqLyk7XG59XG5cblxuZnVuY3Rpb24gaHRtbHRhZyhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBjaCwgbWF0Y2gsIG1heCwgcG9zID0gc3RhdGUucG9zO1xuXG4gIGlmICghc3RhdGUub3B0aW9ucy5odG1sKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIENoZWNrIHN0YXJ0XG4gIG1heCA9IHN0YXRlLnBvc01heDtcbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4M0MvKiA8ICovIHx8XG4gICAgICBwb3MgKyAyID49IG1heCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFF1aWNrIGZhaWwgb24gc2Vjb25kIGNoYXJcbiAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MgKyAxKTtcbiAgaWYgKGNoICE9PSAweDIxLyogISAqLyAmJlxuICAgICAgY2ggIT09IDB4M0YvKiA/ICovICYmXG4gICAgICBjaCAhPT0gMHgyRi8qIC8gKi8gJiZcbiAgICAgICFpc0xldHRlciQyKGNoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG1hdGNoID0gc3RhdGUuc3JjLnNsaWNlKHBvcykubWF0Y2goSFRNTF9UQUdfUkUpO1xuICBpZiAoIW1hdGNoKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmICghc2lsZW50KSB7XG4gICAgc3RhdGUucHVzaCh7XG4gICAgICB0eXBlOiAnaHRtbHRhZycsXG4gICAgICBjb250ZW50OiBzdGF0ZS5zcmMuc2xpY2UocG9zLCBwb3MgKyBtYXRjaFswXS5sZW5ndGgpLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgfSk7XG4gIH1cbiAgc3RhdGUucG9zICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFByb2Nlc3MgaHRtbCBlbnRpdHkgLSAmIzEyMzssICYjeEFGOywgJnF1b3Q7LCAuLi5cblxuXG52YXIgRElHSVRBTF9SRSA9IC9eJiMoKD86eFthLWYwLTldezEsOH18WzAtOV17MSw4fSkpOy9pO1xudmFyIE5BTUVEX1JFICAgPSAvXiYoW2Etel1bYS16MC05XXsxLDMxfSk7L2k7XG5cblxuZnVuY3Rpb24gZW50aXR5KHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGNoLCBjb2RlLCBtYXRjaCwgcG9zID0gc3RhdGUucG9zLCBtYXggPSBzdGF0ZS5wb3NNYXg7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MjYvKiAmICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChwb3MgKyAxIDwgbWF4KSB7XG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MgKyAxKTtcblxuICAgIGlmIChjaCA9PT0gMHgyMyAvKiAjICovKSB7XG4gICAgICBtYXRjaCA9IHN0YXRlLnNyYy5zbGljZShwb3MpLm1hdGNoKERJR0lUQUxfUkUpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgICAgY29kZSA9IG1hdGNoWzFdWzBdLnRvTG93ZXJDYXNlKCkgPT09ICd4JyA/IHBhcnNlSW50KG1hdGNoWzFdLnNsaWNlKDEpLCAxNikgOiBwYXJzZUludChtYXRjaFsxXSwgMTApO1xuICAgICAgICAgIHN0YXRlLnBlbmRpbmcgKz0gaXNWYWxpZEVudGl0eUNvZGUoY29kZSkgPyBmcm9tQ29kZVBvaW50KGNvZGUpIDogZnJvbUNvZGVQb2ludCgweEZGRkQpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnBvcyArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXRjaCA9IHN0YXRlLnNyYy5zbGljZShwb3MpLm1hdGNoKE5BTUVEX1JFKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgZGVjb2RlZCA9IGRlY29kZUVudGl0eShtYXRjaFsxXSk7XG4gICAgICAgIGlmIChtYXRjaFsxXSAhPT0gZGVjb2RlZCkge1xuICAgICAgICAgIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gZGVjb2RlZDsgfVxuICAgICAgICAgIHN0YXRlLnBvcyArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9ICcmJzsgfVxuICBzdGF0ZS5wb3MrKztcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogSW5saW5lIFBhcnNlciBgcnVsZXNgXG4gKi9cblxudmFyIF9ydWxlcyQyID0gW1xuICBbICd0ZXh0JywgICAgICAgICAgICB0ZXh0IF0sXG4gIFsgJ25ld2xpbmUnLCAgICAgICAgIG5ld2xpbmUgXSxcbiAgWyAnZXNjYXBlJywgICAgICAgICAgZXNjYXBlIF0sXG4gIFsgJ2JhY2t0aWNrcycsICAgICAgIGJhY2t0aWNrcyBdLFxuICBbICdkZWwnLCAgICAgICAgICAgICBkZWwgXSxcbiAgWyAnaW5zJywgICAgICAgICAgICAgaW5zIF0sXG4gIFsgJ21hcmsnLCAgICAgICAgICAgIG1hcmsgXSxcbiAgWyAnZW1waGFzaXMnLCAgICAgICAgZW1waGFzaXMgXSxcbiAgWyAnc3ViJywgICAgICAgICAgICAgc3ViIF0sXG4gIFsgJ3N1cCcsICAgICAgICAgICAgIHN1cCBdLFxuICBbICdsaW5rcycsICAgICAgICAgICBsaW5rcyBdLFxuICBbICdmb290bm90ZV9pbmxpbmUnLCBmb290bm90ZV9pbmxpbmUgXSxcbiAgWyAnZm9vdG5vdGVfcmVmJywgICAgZm9vdG5vdGVfcmVmIF0sXG4gIFsgJ2F1dG9saW5rJywgICAgICAgIGF1dG9saW5rIF0sXG4gIFsgJ2h0bWx0YWcnLCAgICAgICAgIGh0bWx0YWcgXSxcbiAgWyAnZW50aXR5JywgICAgICAgICAgZW50aXR5IF1cbl07XG5cbi8qKlxuICogSW5saW5lIFBhcnNlciBjbGFzcy4gTm90ZSB0aGF0IGxpbmsgdmFsaWRhdGlvbiBpcyBzdHJpY3RlclxuICogaW4gUmVtYXJrYWJsZSB0aGFuIHdoYXQgaXMgc3BlY2lmaWVkIGJ5IENvbW1vbk1hcmsuIElmIHlvdVxuICogd2FudCB0byBjaGFuZ2UgdGhpcyB5b3UgY2FuIHVzZSBhIGN1c3RvbSB2YWxpZGF0b3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUGFyc2VySW5saW5lKCkge1xuICB0aGlzLnJ1bGVyID0gbmV3IFJ1bGVyKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgX3J1bGVzJDIubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnJ1bGVyLnB1c2goX3J1bGVzJDJbaV1bMF0sIF9ydWxlcyQyW2ldWzFdKTtcbiAgfVxuXG4gIC8vIENhbiBiZSBvdmVycmlkZGVuIHdpdGggYSBjdXN0b20gdmFsaWRhdG9yXG4gIHRoaXMudmFsaWRhdGVMaW5rID0gdmFsaWRhdGVMaW5rO1xufVxuXG4vKipcbiAqIFNraXAgYSBzaW5nbGUgdG9rZW4gYnkgcnVubmluZyBhbGwgcnVsZXMgaW4gdmFsaWRhdGlvbiBtb2RlLlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYW55IHJ1bGUgcmVwb3J0cyBzdWNjZXNzLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gYHN0YXRlYFxuICogQGFwaSBwcml2YWdlXG4gKi9cblxuUGFyc2VySW5saW5lLnByb3RvdHlwZS5za2lwVG9rZW4gPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdmFyIHJ1bGVzID0gdGhpcy5ydWxlci5nZXRSdWxlcygnJyk7XG4gIHZhciBsZW4gPSBydWxlcy5sZW5ndGg7XG4gIHZhciBwb3MgPSBzdGF0ZS5wb3M7XG4gIHZhciBpLCBjYWNoZWRfcG9zO1xuXG4gIGlmICgoY2FjaGVkX3BvcyA9IHN0YXRlLmNhY2hlR2V0KHBvcykpID4gMCkge1xuICAgIHN0YXRlLnBvcyA9IGNhY2hlZF9wb3M7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKHJ1bGVzW2ldKHN0YXRlLCB0cnVlKSkge1xuICAgICAgc3RhdGUuY2FjaGVTZXQocG9zLCBzdGF0ZS5wb3MpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLnBvcysrO1xuICBzdGF0ZS5jYWNoZVNldChwb3MsIHN0YXRlLnBvcyk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHRva2VucyBmb3IgdGhlIGdpdmVuIGlucHV0IHJhbmdlLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gYHN0YXRlYFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUGFyc2VySW5saW5lLnByb3RvdHlwZS50b2tlbml6ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB2YXIgcnVsZXMgPSB0aGlzLnJ1bGVyLmdldFJ1bGVzKCcnKTtcbiAgdmFyIGxlbiA9IHJ1bGVzLmxlbmd0aDtcbiAgdmFyIGVuZCA9IHN0YXRlLnBvc01heDtcbiAgdmFyIG9rLCBpO1xuXG4gIHdoaWxlIChzdGF0ZS5wb3MgPCBlbmQpIHtcblxuICAgIC8vIFRyeSBhbGwgcG9zc2libGUgcnVsZXMuXG4gICAgLy8gT24gc3VjY2VzcywgdGhlIHJ1bGUgc2hvdWxkOlxuICAgIC8vXG4gICAgLy8gLSB1cGRhdGUgYHN0YXRlLnBvc2BcbiAgICAvLyAtIHVwZGF0ZSBgc3RhdGUudG9rZW5zYFxuICAgIC8vIC0gcmV0dXJuIHRydWVcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIG9rID0gcnVsZXNbaV0oc3RhdGUsIGZhbHNlKTtcblxuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvaykge1xuICAgICAgaWYgKHN0YXRlLnBvcyA+PSBlbmQpIHsgYnJlYWs7IH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjW3N0YXRlLnBvcysrXTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5wZW5kaW5nKSB7XG4gICAgc3RhdGUucHVzaFBlbmRpbmcoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gaW5wdXQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYHN0cmBcbiAqIEBwYXJhbSAge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBlbnZgXG4gKiBAcGFyYW0gIHtBcnJheX0gYG91dFRva2Vuc2BcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBhcnNlcklubGluZS5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoc3RyLCBvcHRpb25zLCBlbnYsIG91dFRva2Vucykge1xuICB2YXIgc3RhdGUgPSBuZXcgU3RhdGVJbmxpbmUoc3RyLCB0aGlzLCBvcHRpb25zLCBlbnYsIG91dFRva2Vucyk7XG4gIHRoaXMudG9rZW5pemUoc3RhdGUpO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGUgZ2l2ZW4gYHVybGAgYnkgY2hlY2tpbmcgZm9yIGJhZCBwcm90b2NvbHMuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBgdXJsYFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUxpbmsodXJsKSB7XG4gIHZhciBCQURfUFJPVE9DT0xTID0gWyAndmJzY3JpcHQnLCAnamF2YXNjcmlwdCcsICdmaWxlJywgJ2RhdGEnIF07XG4gIHZhciBzdHIgPSB1cmwudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIC8vIENhcmUgYWJvdXQgZGlnaXRhbCBlbnRpdGllcyBcImphdmFzY3JpcHQmI3gzQTthbGVydCgxKVwiXG4gIHN0ciA9IHJlcGxhY2VFbnRpdGllcyhzdHIpO1xuICBpZiAoc3RyLmluZGV4T2YoJzonKSAhPT0gLTEgJiYgQkFEX1BST1RPQ09MUy5pbmRleE9mKHN0ci5zcGxpdCgnOicpWzBdKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFJlbWFya2FibGUgZGVmYXVsdCBvcHRpb25zXG5cbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICBvcHRpb25zOiB7XG4gICAgaHRtbDogICAgICAgICBmYWxzZSwgICAgICAgIC8vIEVuYWJsZSBIVE1MIHRhZ3MgaW4gc291cmNlXG4gICAgeGh0bWxPdXQ6ICAgICBmYWxzZSwgICAgICAgIC8vIFVzZSAnLycgdG8gY2xvc2Ugc2luZ2xlIHRhZ3MgKDxiciAvPilcbiAgICBicmVha3M6ICAgICAgIGZhbHNlLCAgICAgICAgLy8gQ29udmVydCAnXFxuJyBpbiBwYXJhZ3JhcGhzIGludG8gPGJyPlxuICAgIGxhbmdQcmVmaXg6ICAgJ2xhbmd1YWdlLScsICAvLyBDU1MgbGFuZ3VhZ2UgcHJlZml4IGZvciBmZW5jZWQgYmxvY2tzXG4gICAgbGlua1RhcmdldDogICAnJywgICAgICAgICAgIC8vIHNldCB0YXJnZXQgdG8gb3BlbiBsaW5rIGluXG5cbiAgICAvLyBFbmFibGUgc29tZSBsYW5ndWFnZS1uZXV0cmFsIHJlcGxhY2VtZW50cyArIHF1b3RlcyBiZWF1dGlmaWNhdGlvblxuICAgIHR5cG9ncmFwaGVyOiAgZmFsc2UsXG5cbiAgICAvLyBEb3VibGUgKyBzaW5nbGUgcXVvdGVzIHJlcGxhY2VtZW50IHBhaXJzLCB3aGVuIHR5cG9ncmFwaGVyIGVuYWJsZWQsXG4gICAgLy8gYW5kIHNtYXJ0cXVvdGVzIG9uLiBTZXQgZG91YmxlcyB0byAnwqvCuycgZm9yIFJ1c3NpYW4sICfigJ7igJwnIGZvciBHZXJtYW4uXG4gICAgcXVvdGVzOiAn4oCc4oCd4oCY4oCZJyxcblxuICAgIC8vIEhpZ2hsaWdodGVyIGZ1bmN0aW9uLiBTaG91bGQgcmV0dXJuIGVzY2FwZWQgSFRNTCxcbiAgICAvLyBvciAnJyBpZiBpbnB1dCBub3QgY2hhbmdlZFxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gKC8qc3RyLCBsYW5nKi8pIHsgcmV0dXJuICcnOyB9XG4gICAgLy9cbiAgICBoaWdobGlnaHQ6IG51bGwsXG5cbiAgICBtYXhOZXN0aW5nOiAgIDIwICAgICAgICAgICAgLy8gSW50ZXJuYWwgcHJvdGVjdGlvbiwgcmVjdXJzaW9uIGxpbWl0XG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuXG4gICAgY29yZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ2Jsb2NrJyxcbiAgICAgICAgJ2lubGluZScsXG4gICAgICAgICdyZWZlcmVuY2VzJyxcbiAgICAgICAgJ3JlcGxhY2VtZW50cycsXG4gICAgICAgICdzbWFydHF1b3RlcycsXG4gICAgICAgICdyZWZlcmVuY2VzJyxcbiAgICAgICAgJ2FiYnIyJyxcbiAgICAgICAgJ2Zvb3Rub3RlX3RhaWwnXG4gICAgICBdXG4gICAgfSxcblxuICAgIGJsb2NrOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnYmxvY2txdW90ZScsXG4gICAgICAgICdjb2RlJyxcbiAgICAgICAgJ2ZlbmNlcycsXG4gICAgICAgICdmb290bm90ZScsXG4gICAgICAgICdoZWFkaW5nJyxcbiAgICAgICAgJ2hyJyxcbiAgICAgICAgJ2h0bWxibG9jaycsXG4gICAgICAgICdsaGVhZGluZycsXG4gICAgICAgICdsaXN0JyxcbiAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICd0YWJsZSdcbiAgICAgIF1cbiAgICB9LFxuXG4gICAgaW5saW5lOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnYXV0b2xpbmsnLFxuICAgICAgICAnYmFja3RpY2tzJyxcbiAgICAgICAgJ2RlbCcsXG4gICAgICAgICdlbXBoYXNpcycsXG4gICAgICAgICdlbnRpdHknLFxuICAgICAgICAnZXNjYXBlJyxcbiAgICAgICAgJ2Zvb3Rub3RlX3JlZicsXG4gICAgICAgICdodG1sdGFnJyxcbiAgICAgICAgJ2xpbmtzJyxcbiAgICAgICAgJ25ld2xpbmUnLFxuICAgICAgICAndGV4dCdcbiAgICAgIF1cbiAgICB9XG4gIH1cbn07XG5cbi8vIFJlbWFya2FibGUgZGVmYXVsdCBvcHRpb25zXG5cbnZhciBmdWxsQ29uZmlnID0ge1xuICBvcHRpb25zOiB7XG4gICAgaHRtbDogICAgICAgICBmYWxzZSwgICAgICAgIC8vIEVuYWJsZSBIVE1MIHRhZ3MgaW4gc291cmNlXG4gICAgeGh0bWxPdXQ6ICAgICBmYWxzZSwgICAgICAgIC8vIFVzZSAnLycgdG8gY2xvc2Ugc2luZ2xlIHRhZ3MgKDxiciAvPilcbiAgICBicmVha3M6ICAgICAgIGZhbHNlLCAgICAgICAgLy8gQ29udmVydCAnXFxuJyBpbiBwYXJhZ3JhcGhzIGludG8gPGJyPlxuICAgIGxhbmdQcmVmaXg6ICAgJ2xhbmd1YWdlLScsICAvLyBDU1MgbGFuZ3VhZ2UgcHJlZml4IGZvciBmZW5jZWQgYmxvY2tzXG4gICAgbGlua1RhcmdldDogICAnJywgICAgICAgICAgIC8vIHNldCB0YXJnZXQgdG8gb3BlbiBsaW5rIGluXG5cbiAgICAvLyBFbmFibGUgc29tZSBsYW5ndWFnZS1uZXV0cmFsIHJlcGxhY2VtZW50cyArIHF1b3RlcyBiZWF1dGlmaWNhdGlvblxuICAgIHR5cG9ncmFwaGVyOiAgZmFsc2UsXG5cbiAgICAvLyBEb3VibGUgKyBzaW5nbGUgcXVvdGVzIHJlcGxhY2VtZW50IHBhaXJzLCB3aGVuIHR5cG9ncmFwaGVyIGVuYWJsZWQsXG4gICAgLy8gYW5kIHNtYXJ0cXVvdGVzIG9uLiBTZXQgZG91YmxlcyB0byAnwqvCuycgZm9yIFJ1c3NpYW4sICfigJ7igJwnIGZvciBHZXJtYW4uXG4gICAgcXVvdGVzOiAgICAgICAn4oCc4oCd4oCY4oCZJyxcblxuICAgIC8vIEhpZ2hsaWdodGVyIGZ1bmN0aW9uLiBTaG91bGQgcmV0dXJuIGVzY2FwZWQgSFRNTCxcbiAgICAvLyBvciAnJyBpZiBpbnB1dCBub3QgY2hhbmdlZFxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gKC8qc3RyLCBsYW5nKi8pIHsgcmV0dXJuICcnOyB9XG4gICAgLy9cbiAgICBoaWdobGlnaHQ6ICAgICBudWxsLFxuXG4gICAgbWF4TmVzdGluZzogICAgMjAgICAgICAgICAgICAvLyBJbnRlcm5hbCBwcm90ZWN0aW9uLCByZWN1cnNpb24gbGltaXRcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgLy8gRG9uJ3QgcmVzdHJpY3QgY29yZS9ibG9jay9pbmxpbmUgcnVsZXNcbiAgICBjb3JlOiB7fSxcbiAgICBibG9jazoge30sXG4gICAgaW5saW5lOiB7fVxuICB9XG59O1xuXG4vLyBDb21tb25tYXJrIGRlZmF1bHQgb3B0aW9uc1xuXG52YXIgY29tbW9ubWFya0NvbmZpZyA9IHtcbiAgb3B0aW9uczoge1xuICAgIGh0bWw6ICAgICAgICAgdHJ1ZSwgICAgICAgICAvLyBFbmFibGUgSFRNTCB0YWdzIGluIHNvdXJjZVxuICAgIHhodG1sT3V0OiAgICAgdHJ1ZSwgICAgICAgICAvLyBVc2UgJy8nIHRvIGNsb3NlIHNpbmdsZSB0YWdzICg8YnIgLz4pXG4gICAgYnJlYWtzOiAgICAgICBmYWxzZSwgICAgICAgIC8vIENvbnZlcnQgJ1xcbicgaW4gcGFyYWdyYXBocyBpbnRvIDxicj5cbiAgICBsYW5nUHJlZml4OiAgICdsYW5ndWFnZS0nLCAgLy8gQ1NTIGxhbmd1YWdlIHByZWZpeCBmb3IgZmVuY2VkIGJsb2Nrc1xuICAgIGxpbmtUYXJnZXQ6ICAgJycsICAgICAgICAgICAvLyBzZXQgdGFyZ2V0IHRvIG9wZW4gbGluayBpblxuXG4gICAgLy8gRW5hYmxlIHNvbWUgbGFuZ3VhZ2UtbmV1dHJhbCByZXBsYWNlbWVudHMgKyBxdW90ZXMgYmVhdXRpZmljYXRpb25cbiAgICB0eXBvZ3JhcGhlcjogIGZhbHNlLFxuXG4gICAgLy8gRG91YmxlICsgc2luZ2xlIHF1b3RlcyByZXBsYWNlbWVudCBwYWlycywgd2hlbiB0eXBvZ3JhcGhlciBlbmFibGVkLFxuICAgIC8vIGFuZCBzbWFydHF1b3RlcyBvbi4gU2V0IGRvdWJsZXMgdG8gJ8KrwrsnIGZvciBSdXNzaWFuLCAn4oCe4oCcJyBmb3IgR2VybWFuLlxuICAgIHF1b3RlczogJ+KAnOKAneKAmOKAmScsXG5cbiAgICAvLyBIaWdobGlnaHRlciBmdW5jdGlvbi4gU2hvdWxkIHJldHVybiBlc2NhcGVkIEhUTUwsXG4gICAgLy8gb3IgJycgaWYgaW5wdXQgbm90IGNoYW5nZWRcbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uICgvKnN0ciwgbGFuZyovKSB7IHJldHVybiAnJzsgfVxuICAgIC8vXG4gICAgaGlnaGxpZ2h0OiBudWxsLFxuXG4gICAgbWF4TmVzdGluZzogICAyMCAgICAgICAgICAgIC8vIEludGVybmFsIHByb3RlY3Rpb24sIHJlY3Vyc2lvbiBsaW1pdFxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcblxuICAgIGNvcmU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdibG9jaycsXG4gICAgICAgICdpbmxpbmUnLFxuICAgICAgICAncmVmZXJlbmNlcycsXG4gICAgICAgICdhYmJyMidcbiAgICAgIF1cbiAgICB9LFxuXG4gICAgYmxvY2s6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdibG9ja3F1b3RlJyxcbiAgICAgICAgJ2NvZGUnLFxuICAgICAgICAnZmVuY2VzJyxcbiAgICAgICAgJ2hlYWRpbmcnLFxuICAgICAgICAnaHInLFxuICAgICAgICAnaHRtbGJsb2NrJyxcbiAgICAgICAgJ2xoZWFkaW5nJyxcbiAgICAgICAgJ2xpc3QnLFxuICAgICAgICAncGFyYWdyYXBoJ1xuICAgICAgXVxuICAgIH0sXG5cbiAgICBpbmxpbmU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdhdXRvbGluaycsXG4gICAgICAgICdiYWNrdGlja3MnLFxuICAgICAgICAnZW1waGFzaXMnLFxuICAgICAgICAnZW50aXR5JyxcbiAgICAgICAgJ2VzY2FwZScsXG4gICAgICAgICdodG1sdGFnJyxcbiAgICAgICAgJ2xpbmtzJyxcbiAgICAgICAgJ25ld2xpbmUnLFxuICAgICAgICAndGV4dCdcbiAgICAgIF1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogUHJlc2V0IGNvbmZpZ3NcbiAqL1xuXG52YXIgY29uZmlnID0ge1xuICAnZGVmYXVsdCc6IGRlZmF1bHRDb25maWcsXG4gICdmdWxsJzogZnVsbENvbmZpZyxcbiAgJ2NvbW1vbm1hcmsnOiBjb21tb25tYXJrQ29uZmlnXG59O1xuXG4vKipcbiAqIFRoZSBgU3RhdGVDb3JlYCBjbGFzcyBtYW5hZ2VzIHN0YXRlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBgaW5zdGFuY2VgIFJlbWFya2FibGUgaW5zdGFuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RyYCBNYXJrZG93biBzdHJpbmdcbiAqIEBwYXJhbSB7T2JqZWN0fSBgZW52YFxuICovXG5cbmZ1bmN0aW9uIFN0YXRlQ29yZShpbnN0YW5jZSwgc3RyLCBlbnYpIHtcbiAgdGhpcy5zcmMgPSBzdHI7XG4gIHRoaXMuZW52ID0gZW52O1xuICB0aGlzLm9wdGlvbnMgPSBpbnN0YW5jZS5vcHRpb25zO1xuICB0aGlzLnRva2VucyA9IFtdO1xuICB0aGlzLmlubGluZU1vZGUgPSBmYWxzZTtcblxuICB0aGlzLmlubGluZSA9IGluc3RhbmNlLmlubGluZTtcbiAgdGhpcy5ibG9jayA9IGluc3RhbmNlLmJsb2NrO1xuICB0aGlzLnJlbmRlcmVyID0gaW5zdGFuY2UucmVuZGVyZXI7XG4gIHRoaXMudHlwb2dyYXBoZXIgPSBpbnN0YW5jZS50eXBvZ3JhcGhlcjtcbn1cblxuLyoqXG4gKiBUaGUgbWFpbiBgUmVtYXJrYWJsZWAgY2xhc3MuIENyZWF0ZSBhbiBpbnN0YW5jZSBvZlxuICogYFJlbWFya2FibGVgIHdpdGggYSBgcHJlc2V0YCBhbmQvb3IgYG9wdGlvbnNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBgcHJlc2V0YCBJZiBubyBwcmVzZXQgaXMgZ2l2ZW4sIGBkZWZhdWx0YCBpcyB1c2VkLlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICovXG5cbmZ1bmN0aW9uIFJlbWFya2FibGUocHJlc2V0LCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgcHJlc2V0ICE9PSAnc3RyaW5nJykge1xuICAgIG9wdGlvbnMgPSBwcmVzZXQ7XG4gICAgcHJlc2V0ID0gJ2RlZmF1bHQnO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5saW5raWZ5ICE9IG51bGwpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnbGlua2lmeSBvcHRpb24gaXMgcmVtb3ZlZC4gVXNlIGxpbmtpZnkgcGx1Z2luIGluc3RlYWQ6XFxuXFxuJyArXG4gICAgICAnaW1wb3J0IFJlbWFya2FibGUgZnJvbSBcXCdyZW1hcmthYmxlXFwnO1xcbicgK1xuICAgICAgJ2ltcG9ydCBsaW5raWZ5IGZyb20gXFwncmVtYXJrYWJsZS9saW5raWZ5XFwnO1xcbicgK1xuICAgICAgJ25ldyBSZW1hcmthYmxlKCkudXNlKGxpbmtpZnkpXFxuJ1xuICAgICk7XG4gIH1cblxuICB0aGlzLmlubGluZSAgID0gbmV3IFBhcnNlcklubGluZSgpO1xuICB0aGlzLmJsb2NrICAgID0gbmV3IFBhcnNlckJsb2NrKCk7XG4gIHRoaXMuY29yZSAgICAgPSBuZXcgQ29yZSgpO1xuICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XG4gIHRoaXMucnVsZXIgICAgPSBuZXcgUnVsZXIoKTtcblxuICB0aGlzLm9wdGlvbnMgID0ge307XG4gIHRoaXMuY29uZmlndXJlKGNvbmZpZ1twcmVzZXRdKTtcbiAgdGhpcy5zZXQob3B0aW9ucyB8fCB7fSk7XG59XG5cbi8qKlxuICogU2V0IG9wdGlvbnMgYXMgYW4gYWx0ZXJuYXRpdmUgdG8gcGFzc2luZyB0aGVtXG4gKiB0byB0aGUgY29uc3RydWN0b3IuXG4gKlxuICogYGBganNcbiAqIG1kLnNldCh7dHlwb2dyYXBoZXI6IHRydWV9KTtcbiAqIGBgYFxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZW1hcmthYmxlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBhc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogQmF0Y2ggbG9hZGVyIGZvciBjb21wb25lbnRzIHJ1bGVzIHN0YXRlcywgYW5kIG9wdGlvbnNcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBwcmVzZXRzYFxuICovXG5cblJlbWFya2FibGUucHJvdG90eXBlLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uIChwcmVzZXRzKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoIXByZXNldHMpIHsgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBgcmVtYXJrYWJsZWAgcHJlc2V0LCBjaGVjayBuYW1lL2NvbnRlbnQnKTsgfVxuICBpZiAocHJlc2V0cy5vcHRpb25zKSB7IHNlbGYuc2V0KHByZXNldHMub3B0aW9ucyk7IH1cbiAgaWYgKHByZXNldHMuY29tcG9uZW50cykge1xuICAgIE9iamVjdC5rZXlzKHByZXNldHMuY29tcG9uZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKHByZXNldHMuY29tcG9uZW50c1tuYW1lXS5ydWxlcykge1xuICAgICAgICBzZWxmW25hbWVdLnJ1bGVyLmVuYWJsZShwcmVzZXRzLmNvbXBvbmVudHNbbmFtZV0ucnVsZXMsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIFVzZSBhIHBsdWdpbi5cbiAqXG4gKiBgYGBqc1xuICogdmFyIG1kID0gbmV3IFJlbWFya2FibGUoKTtcbiAqXG4gKiBtZC51c2UocGx1Z2luMSlcbiAqICAgLnVzZShwbHVnaW4yLCBvcHRzKVxuICogICAudXNlKHBsdWdpbjMpO1xuICogYGBgXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGBwbHVnaW5gXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7T2JqZWN0fSBgUmVtYXJrYWJsZWAgZm9yIGNoYWluaW5nXG4gKi9cblxuUmVtYXJrYWJsZS5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKHBsdWdpbiwgb3B0aW9ucykge1xuICBwbHVnaW4odGhpcywgb3B0aW9ucyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKipcbiAqIFBhcnNlIHRoZSBpbnB1dCBgc3RyaW5nYCBhbmQgcmV0dXJuIGEgdG9rZW5zIGFycmF5LlxuICogTW9kaWZpZXMgYGVudmAgd2l0aCBkZWZpbml0aW9ucyBkYXRhLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYHN0cmluZ2BcbiAqIEBwYXJhbSAge09iamVjdH0gYGVudmBcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiB0b2tlbnNcbiAqL1xuXG5SZW1hcmthYmxlLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIChzdHIsIGVudikge1xuICB2YXIgc3RhdGUgPSBuZXcgU3RhdGVDb3JlKHRoaXMsIHN0ciwgZW52KTtcbiAgdGhpcy5jb3JlLnByb2Nlc3Moc3RhdGUpO1xuICByZXR1cm4gc3RhdGUudG9rZW5zO1xufTtcblxuLyoqXG4gKiBUaGUgbWFpbiBgLnJlbmRlcigpYCBtZXRob2QgdGhhdCBkb2VzIGFsbCB0aGUgbWFnaWMgOilcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBzdHJpbmdgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBlbnZgXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJlbmRlcmVkIEhUTUwuXG4gKi9cblxuUmVtYXJrYWJsZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHN0ciwgZW52KSB7XG4gIGVudiA9IGVudiB8fCB7fTtcbiAgcmV0dXJuIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMucGFyc2Uoc3RyLCBlbnYpLCB0aGlzLm9wdGlvbnMsIGVudik7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBjb250ZW50IGBzdHJpbmdgIGFzIGEgc2luZ2xlIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBzdHJpbmdgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBlbnZgXG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgdG9rZW5zXG4gKi9cblxuUmVtYXJrYWJsZS5wcm90b3R5cGUucGFyc2VJbmxpbmUgPSBmdW5jdGlvbiAoc3RyLCBlbnYpIHtcbiAgdmFyIHN0YXRlID0gbmV3IFN0YXRlQ29yZSh0aGlzLCBzdHIsIGVudik7XG4gIHN0YXRlLmlubGluZU1vZGUgPSB0cnVlO1xuICB0aGlzLmNvcmUucHJvY2VzcyhzdGF0ZSk7XG4gIHJldHVybiBzdGF0ZS50b2tlbnM7XG59O1xuXG4vKipcbiAqIFJlbmRlciBhIHNpbmdsZSBjb250ZW50IGBzdHJpbmdgLCB3aXRob3V0IHdyYXBwaW5nIGl0XG4gKiB0byBwYXJhZ3JhcGhzXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBgc3RyYFxuICogQHBhcmFtICB7T2JqZWN0fSBgZW52YFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cblJlbWFya2FibGUucHJvdG90eXBlLnJlbmRlcklubGluZSA9IGZ1bmN0aW9uIChzdHIsIGVudikge1xuICBlbnYgPSBlbnYgfHwge307XG4gIHJldHVybiB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnBhcnNlSW5saW5lKHN0ciwgZW52KSwgdGhpcy5vcHRpb25zLCBlbnYpO1xufTtcblxuZXhwb3J0cy5SZW1hcmthYmxlID0gUmVtYXJrYWJsZTtcbmV4cG9ydHMudXRpbHMgPSB1dGlscztcbiIsIi8qIVxuICogaXMtbnVtYmVyIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1udW1iZXI+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihudW0pIHtcbiAgaWYgKHR5cGVvZiBudW0gPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIG51bSAtIG51bSA9PT0gMDtcbiAgfVxuICBpZiAodHlwZW9mIG51bSA9PT0gJ3N0cmluZycgJiYgbnVtLnRyaW0oKSAhPT0gJycpIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlID8gTnVtYmVyLmlzRmluaXRlKCtudW0pIDogaXNGaW5pdGUoK251bSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsIi8qIVxuICogdG8tcmVnZXgtcmFuZ2UgPGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb21hdGNoL3RvLXJlZ2V4LXJhbmdlPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzTnVtYmVyID0gcmVxdWlyZSgnaXMtbnVtYmVyJyk7XG5cbmZ1bmN0aW9uIHRvUmVnZXhSYW5nZShtaW4sIG1heCwgb3B0aW9ucykge1xuICBpZiAoaXNOdW1iZXIobWluKSA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0b1JlZ2V4UmFuZ2U6IGV4cGVjdGVkIHRoZSBmaXJzdCBhcmd1bWVudCB0byBiZSBhIG51bWJlcicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBtYXggPT09ICd1bmRlZmluZWQnIHx8IG1pbiA9PT0gbWF4KSB7XG4gICAgcmV0dXJuIFN0cmluZyhtaW4pO1xuICB9XG5cbiAgaWYgKGlzTnVtYmVyKG1heCkgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndG9SZWdleFJhbmdlOiBleHBlY3RlZCB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgbnVtYmVyLicpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxldCByZWxheCA9IFN0cmluZyhvcHRpb25zLnJlbGF4WmVyb3MpO1xuICBsZXQgc2hvcnRoYW5kID0gU3RyaW5nKG9wdGlvbnMuc2hvcnRoYW5kKTtcbiAgbGV0IGNhcHR1cmUgPSBTdHJpbmcob3B0aW9ucy5jYXB0dXJlKTtcbiAgbGV0IGtleSA9IG1pbiArICc6JyArIG1heCArICc9JyArIHJlbGF4ICsgc2hvcnRoYW5kICsgY2FwdHVyZTtcbiAgaWYgKHRvUmVnZXhSYW5nZS5jYWNoZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgcmV0dXJuIHRvUmVnZXhSYW5nZS5jYWNoZVtrZXldLnJlc3VsdDtcbiAgfVxuXG4gIGxldCBhID0gTWF0aC5taW4obWluLCBtYXgpO1xuICBsZXQgYiA9IE1hdGgubWF4KG1pbiwgbWF4KTtcblxuICBpZiAoTWF0aC5hYnMoYSAtIGIpID09PSAxKSB7XG4gICAgbGV0IHJlc3VsdCA9IG1pbiArICd8JyArIG1heDtcbiAgICBpZiAob3B0aW9ucy5jYXB0dXJlKSB7XG4gICAgICByZXR1cm4gJygnICsgcmVzdWx0ICsgJyknO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy53cmFwID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuICcoPzonICsgcmVzdWx0ICsgJyknO1xuICB9XG5cbiAgbGV0IGlzUGFkZGVkID0gcGFkZGluZyhtaW4pIHx8IHBhZGRpbmcobWF4KTtcbiAgbGV0IHBvc2l0aXZlcyA9IFtdO1xuICBsZXQgbmVnYXRpdmVzID0gW107XG5cbiAgbGV0IHRvayA9IHttaW46IG1pbiwgbWF4OiBtYXgsIGE6IGEsIGI6IGJ9O1xuICBpZiAoaXNQYWRkZWQpIHtcbiAgICB0b2suaXNQYWRkZWQgPSBpc1BhZGRlZDtcbiAgICB0b2subWF4TGVuID0gU3RyaW5nKHRvay5tYXgpLmxlbmd0aDtcbiAgfVxuXG4gIGlmIChhIDwgMCkge1xuICAgIGxldCBuZXdNaW4gPSBiIDwgMCA/IE1hdGguYWJzKGIpIDogMTtcbiAgICBsZXQgbmV3TWF4ID0gTWF0aC5hYnMoYSk7XG4gICAgbmVnYXRpdmVzID0gc3BsaXRUb1BhdHRlcm5zKG5ld01pbiwgbmV3TWF4LCB0b2ssIG9wdGlvbnMpO1xuICAgIGEgPSB0b2suYSA9IDA7XG4gIH1cblxuICBpZiAoYiA+PSAwKSB7XG4gICAgcG9zaXRpdmVzID0gc3BsaXRUb1BhdHRlcm5zKGEsIGIsIHRvaywgb3B0aW9ucyk7XG4gIH1cblxuICB0b2submVnYXRpdmVzID0gbmVnYXRpdmVzO1xuICB0b2sucG9zaXRpdmVzID0gcG9zaXRpdmVzO1xuICB0b2sucmVzdWx0ID0gc2lmdFBhdHRlcm5zKG5lZ2F0aXZlcywgcG9zaXRpdmVzLCBvcHRpb25zKTtcblxuICBpZiAob3B0aW9ucy5jYXB0dXJlKSB7XG4gICAgdG9rLnJlc3VsdCA9ICcoJyArIHRvay5yZXN1bHQgKyAnKSc7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy53cmFwICE9PSBmYWxzZSAmJiBwb3NpdGl2ZXMubGVuZ3RoICsgbmVnYXRpdmVzLmxlbmd0aCA+IDEpIHtcbiAgICB0b2sucmVzdWx0ID0gJyg/OicgKyB0b2sucmVzdWx0ICsgJyknO1xuICB9XG5cbiAgdG9SZWdleFJhbmdlLmNhY2hlW2tleV0gPSB0b2s7XG4gIHJldHVybiB0b2sucmVzdWx0O1xufVxuXG50b1JlZ2V4UmFuZ2UuY2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gc2lmdFBhdHRlcm5zKG5lZywgcG9zLCBvcHRpb25zKSB7XG4gIGxldCBvbmx5TmVnYXRpdmUgPSBmaWx0ZXJQYXR0ZXJucyhuZWcsIHBvcywgJy0nLCBmYWxzZSwgb3B0aW9ucykgfHwgW107XG4gIGxldCBvbmx5UG9zaXRpdmUgPSBmaWx0ZXJQYXR0ZXJucyhwb3MsIG5lZywgJycsIGZhbHNlLCBvcHRpb25zKSB8fCBbXTtcbiAgbGV0IGludGVyc2VjdGVkID0gZmlsdGVyUGF0dGVybnMobmVnLCBwb3MsICctPycsIHRydWUsIG9wdGlvbnMpIHx8IFtdO1xuICBsZXQgc3VicGF0dGVybnMgPSBvbmx5TmVnYXRpdmUuY29uY2F0KGludGVyc2VjdGVkKS5jb25jYXQob25seVBvc2l0aXZlKTtcbiAgcmV0dXJuIHN1YnBhdHRlcm5zLmpvaW4oJ3wnKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRUb1JhbmdlcyhtaW4sIG1heCkge1xuICBtaW4gPSBOdW1iZXIobWluKTtcbiAgbWF4ID0gTnVtYmVyKG1heCk7XG5cbiAgbGV0IG5pbmVzID0gMTtcbiAgbGV0IHN0b3BzID0gW21heF07XG4gIGxldCBzdG9wID0gK2NvdW50TmluZXMobWluLCBuaW5lcyk7XG5cbiAgd2hpbGUgKG1pbiA8PSBzdG9wICYmIHN0b3AgPD0gbWF4KSB7XG4gICAgc3RvcHMgPSBwdXNoKHN0b3BzLCBzdG9wKTtcbiAgICBuaW5lcyArPSAxO1xuICAgIHN0b3AgPSArY291bnROaW5lcyhtaW4sIG5pbmVzKTtcbiAgfVxuXG4gIGxldCB6ZXJvcyA9IDE7XG4gIHN0b3AgPSBjb3VudFplcm9zKG1heCArIDEsIHplcm9zKSAtIDE7XG5cbiAgd2hpbGUgKG1pbiA8IHN0b3AgJiYgc3RvcCA8PSBtYXgpIHtcbiAgICBzdG9wcyA9IHB1c2goc3RvcHMsIHN0b3ApO1xuICAgIHplcm9zICs9IDE7XG4gICAgc3RvcCA9IGNvdW50WmVyb3MobWF4ICsgMSwgemVyb3MpIC0gMTtcbiAgfVxuXG4gIHN0b3BzLnNvcnQoY29tcGFyZSk7XG4gIHJldHVybiBzdG9wcztcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgcmFuZ2UgdG8gYSByZWdleCBwYXR0ZXJuXG4gKiBAcGFyYW0ge051bWJlcn0gYHN0YXJ0YFxuICogQHBhcmFtIHtOdW1iZXJ9IGBzdG9wYFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHJhbmdlVG9QYXR0ZXJuKHN0YXJ0LCBzdG9wLCBvcHRpb25zKSB7XG4gIGlmIChzdGFydCA9PT0gc3RvcCkge1xuICAgIHJldHVybiB7cGF0dGVybjogU3RyaW5nKHN0YXJ0KSwgZGlnaXRzOiBbXX07XG4gIH1cblxuICBsZXQgemlwcGVkID0gemlwKFN0cmluZyhzdGFydCksIFN0cmluZyhzdG9wKSk7XG4gIGxldCBsZW4gPSB6aXBwZWQubGVuZ3RoLCBpID0gLTE7XG5cbiAgbGV0IHBhdHRlcm4gPSAnJztcbiAgbGV0IGRpZ2l0cyA9IDA7XG5cbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIGxldCBudW1iZXJzID0gemlwcGVkW2ldO1xuICAgIGxldCBzdGFydERpZ2l0ID0gbnVtYmVyc1swXTtcbiAgICBsZXQgc3RvcERpZ2l0ID0gbnVtYmVyc1sxXTtcblxuICAgIGlmIChzdGFydERpZ2l0ID09PSBzdG9wRGlnaXQpIHtcbiAgICAgIHBhdHRlcm4gKz0gc3RhcnREaWdpdDtcblxuICAgIH0gZWxzZSBpZiAoc3RhcnREaWdpdCAhPT0gJzAnIHx8IHN0b3BEaWdpdCAhPT0gJzknKSB7XG4gICAgICBwYXR0ZXJuICs9IHRvQ2hhcmFjdGVyQ2xhc3Moc3RhcnREaWdpdCwgc3RvcERpZ2l0KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBkaWdpdHMgKz0gMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGlnaXRzKSB7XG4gICAgcGF0dGVybiArPSBvcHRpb25zLnNob3J0aGFuZCA/ICdcXFxcZCcgOiAnWzAtOV0nO1xuICB9XG5cbiAgcmV0dXJuIHsgcGF0dGVybjogcGF0dGVybiwgZGlnaXRzOiBbZGlnaXRzXSB9O1xufVxuXG5mdW5jdGlvbiBzcGxpdFRvUGF0dGVybnMobWluLCBtYXgsIHRvaywgb3B0aW9ucykge1xuICBsZXQgcmFuZ2VzID0gc3BsaXRUb1JhbmdlcyhtaW4sIG1heCk7XG4gIGxldCBsZW4gPSByYW5nZXMubGVuZ3RoO1xuICBsZXQgaWR4ID0gLTE7XG5cbiAgbGV0IHRva2VucyA9IFtdO1xuICBsZXQgc3RhcnQgPSBtaW47XG4gIGxldCBwcmV2O1xuXG4gIHdoaWxlICgrK2lkeCA8IGxlbikge1xuICAgIGxldCByYW5nZSA9IHJhbmdlc1tpZHhdO1xuICAgIGxldCBvYmogPSByYW5nZVRvUGF0dGVybihzdGFydCwgcmFuZ2UsIG9wdGlvbnMpO1xuICAgIGxldCB6ZXJvcyA9ICcnO1xuXG4gICAgaWYgKCF0b2suaXNQYWRkZWQgJiYgcHJldiAmJiBwcmV2LnBhdHRlcm4gPT09IG9iai5wYXR0ZXJuKSB7XG4gICAgICBpZiAocHJldi5kaWdpdHMubGVuZ3RoID4gMSkge1xuICAgICAgICBwcmV2LmRpZ2l0cy5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHByZXYuZGlnaXRzLnB1c2gob2JqLmRpZ2l0c1swXSk7XG4gICAgICBwcmV2LnN0cmluZyA9IHByZXYucGF0dGVybiArIHRvUXVhbnRpZmllcihwcmV2LmRpZ2l0cyk7XG4gICAgICBzdGFydCA9IHJhbmdlICsgMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh0b2suaXNQYWRkZWQpIHtcbiAgICAgIHplcm9zID0gcGFkWmVyb3MocmFuZ2UsIHRvayk7XG4gICAgfVxuXG4gICAgb2JqLnN0cmluZyA9IHplcm9zICsgb2JqLnBhdHRlcm4gKyB0b1F1YW50aWZpZXIob2JqLmRpZ2l0cyk7XG4gICAgdG9rZW5zLnB1c2gob2JqKTtcbiAgICBzdGFydCA9IHJhbmdlICsgMTtcbiAgICBwcmV2ID0gb2JqO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gZmlsdGVyUGF0dGVybnMoYXJyLCBjb21wYXJpc29uLCBwcmVmaXgsIGludGVyc2VjdGlvbiwgb3B0aW9ucykge1xuICBsZXQgcmVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdG9rID0gYXJyW2ldO1xuICAgIGxldCBlbGUgPSB0b2suc3RyaW5nO1xuXG4gICAgaWYgKG9wdGlvbnMucmVsYXhaZXJvcyAhPT0gZmFsc2UpIHtcbiAgICAgIGlmIChwcmVmaXggPT09ICctJyAmJiBlbGUuY2hhckF0KDApID09PSAnMCcpIHtcbiAgICAgICAgaWYgKGVsZS5jaGFyQXQoMSkgPT09ICd7Jykge1xuICAgICAgICAgIGVsZSA9ICcwKicgKyBlbGUucmVwbGFjZSgvXjBcXHtcXGQrXFx9LywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZSA9ICcwKicgKyBlbGUuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWludGVyc2VjdGlvbiAmJiAhY29udGFpbnMoY29tcGFyaXNvbiwgJ3N0cmluZycsIGVsZSkpIHtcbiAgICAgIHJlcy5wdXNoKHByZWZpeCArIGVsZSk7XG4gICAgfVxuXG4gICAgaWYgKGludGVyc2VjdGlvbiAmJiBjb250YWlucyhjb21wYXJpc29uLCAnc3RyaW5nJywgZWxlKSkge1xuICAgICAgcmVzLnB1c2gocHJlZml4ICsgZWxlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBaaXAgc3RyaW5nc1xuICovXG5cbmZ1bmN0aW9uIHppcChhLCBiKSB7XG4gIGxldCBhcnIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJyLnB1c2goW2FbaV0sIGJbaV1dKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgcmV0dXJuIGEgPiBiID8gMSA6IGIgPiBhID8gLTEgOiAwO1xufVxuXG5mdW5jdGlvbiBwdXNoKGFyciwgZWxlKSB7XG4gIGlmIChhcnIuaW5kZXhPZihlbGUpID09PSAtMSkgYXJyLnB1c2goZWxlKTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gY29udGFpbnMoYXJyLCBrZXksIHZhbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJbaV1ba2V5XSA9PT0gdmFsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjb3VudE5pbmVzKG1pbiwgbGVuKSB7XG4gIHJldHVybiBTdHJpbmcobWluKS5zbGljZSgwLCAtbGVuKSArICc5Jy5yZXBlYXQobGVuKTtcbn1cblxuZnVuY3Rpb24gY291bnRaZXJvcyhpbnRlZ2VyLCB6ZXJvcykge1xuICByZXR1cm4gaW50ZWdlciAtIChpbnRlZ2VyICUgTWF0aC5wb3coMTAsIHplcm9zKSk7XG59XG5cbmZ1bmN0aW9uIHRvUXVhbnRpZmllcihkaWdpdHMpIHtcbiAgbGV0IHN0YXJ0ID0gZGlnaXRzWzBdO1xuICBsZXQgc3RvcCA9IGRpZ2l0c1sxXSA/ICgnLCcgKyBkaWdpdHNbMV0pIDogJyc7XG4gIGlmICghc3RvcCAmJiAoIXN0YXJ0IHx8IHN0YXJ0ID09PSAxKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gJ3snICsgc3RhcnQgKyBzdG9wICsgJ30nO1xufVxuXG5mdW5jdGlvbiB0b0NoYXJhY3RlckNsYXNzKGEsIGIpIHtcbiAgcmV0dXJuICdbJyArIGEgKyAoKGIgLSBhID09PSAxKSA/ICcnIDogJy0nKSArIGIgKyAnXSc7XG59XG5cbmZ1bmN0aW9uIHBhZGRpbmcoc3RyKSB7XG4gIHJldHVybiAvXi0/KDArKVxcZC8uZXhlYyhzdHIpO1xufVxuXG5mdW5jdGlvbiBwYWRaZXJvcyh2YWwsIHRvaykge1xuICBpZiAodG9rLmlzUGFkZGVkKSB7XG4gICAgbGV0IGRpZmYgPSBNYXRoLmFicyh0b2subWF4TGVuIC0gU3RyaW5nKHZhbCkubGVuZ3RoKTtcbiAgICBzd2l0Y2ggKGRpZmYpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gJzAnO1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4gJzB7JyArIGRpZmYgKyAnfSc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWw7XG59XG5cbi8qKlxuICogRXhwb3NlIGB0b1JlZ2V4UmFuZ2VgXG4gKi9cblxudG9SZWdleFJhbmdlLmNsZWFyQ2FjaGUgPSAoKSA9PiAodG9SZWdleFJhbmdlLmNhY2hlID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSB0b1JlZ2V4UmFuZ2U7XG4iLCIvKiFcbiAqIGZpbGwtcmFuZ2UgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2ZpbGwtcmFuZ2U+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbmNvbnN0IGlzTnVtYmVyID0gcmVxdWlyZSgnaXMtbnVtYmVyJyk7XG5jb25zdCB0b1JlZ2V4ID0gcmVxdWlyZSgndG8tcmVnZXgtcmFuZ2UnKTtcblxuLyoqXG4gKiBSZXR1cm4gYSByYW5nZSBvZiBudW1iZXJzIG9yIGxldHRlcnMuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBgc3RhcnRgIFN0YXJ0IG9mIHRoZSByYW5nZVxuICogQHBhcmFtICB7U3RyaW5nfSBgc3RvcGAgRW5kIG9mIHRoZSByYW5nZVxuICogQHBhcmFtICB7U3RyaW5nfSBgc3RlcGAgSW5jcmVtZW50IG9yIGRlY3JlbWVudCB0byB1c2UuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuXG5mdW5jdGlvbiBmaWxsUmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXAsIG9wdGlvbnMpIHtcbiAgaWYgKHN0YXJ0ID09PSB2b2lkIDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiAoc3RvcCA9PT0gdm9pZCAwIHx8IHN0YXJ0ID09PSBzdG9wKSB7XG4gICAgLy8gc3BlY2lhbCBjYXNlLCBmb3IgaGFuZGxpbmcgbmVnYXRpdmUgemVyb1xuICAgIGxldCBpc1N0cmluZyA9IHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZyc7XG4gICAgaWYgKGlzTnVtYmVyKHN0YXJ0KSAmJiAhdG9OdW1iZXIoc3RhcnQpKSB7XG4gICAgICByZXR1cm4gW2lzU3RyaW5nID8gJzAnIDogMF07XG4gICAgfVxuICAgIHJldHVybiBbc3RhcnRdO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzdGVwICE9PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc3RlcCAhPT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zID0gc3RlcDtcbiAgICBzdGVwID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IHsgdHJhbnNmb3JtOiBvcHRpb25zIH07XG4gIH1cblxuICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7IHN0ZXAgfSwgb3B0aW9ucyk7XG4gIGlmIChvcHRzLnN0ZXAgJiYgIWlzVmFsaWROdW1iZXIob3B0cy5zdGVwKSkge1xuICAgIGlmIChvcHRzLnN0cmljdFJhbmdlcyA9PT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgb3B0aW9ucy5zdGVwIHRvIGJlIGEgbnVtYmVyJyk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIG9wdHMuaXNOdW1iZXIgPSBpc1ZhbGlkTnVtYmVyKHN0YXJ0KSAmJiBpc1ZhbGlkTnVtYmVyKHN0b3ApO1xuICBpZiAoIW9wdHMuaXNOdW1iZXIgJiYgIWlzVmFsaWQoc3RhcnQsIHN0b3ApKSB7XG4gICAgaWYgKG9wdHMuc3RyaWN0UmFuZ2VzID09PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignaW52YWxpZCByYW5nZSBhcmd1bWVudHM6ICcgKyB1dGlsLmluc3BlY3QoW3N0YXJ0LCBzdG9wXSkpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBvcHRzLmlzUGFkZGVkID0gaXNQYWRkZWQoc3RhcnQpIHx8IGlzUGFkZGVkKHN0b3ApO1xuICBvcHRzLnRvU3RyaW5nID1cbiAgICBvcHRzLnN0cmluZ2lmeSB8fFxuICAgIHR5cGVvZiBvcHRzLnN0ZXAgPT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiBzdG9wID09PSAnc3RyaW5nJyB8fFxuICAgICFvcHRzLmlzTnVtYmVyO1xuXG4gIGlmIChvcHRzLmlzUGFkZGVkKSB7XG4gICAgb3B0cy5tYXhMZW5ndGggPSBNYXRoLm1heChTdHJpbmcoc3RhcnQpLmxlbmd0aCwgU3RyaW5nKHN0b3ApLmxlbmd0aCk7XG4gIH1cblxuICAvLyBzdXBwb3J0IGxlZ2FjeSBtaW5pbWF0Y2gvZmlsbC1yYW5nZSBvcHRpb25zXG4gIGlmICh0eXBlb2Ygb3B0cy5vcHRpbWl6ZSA9PT0gJ2Jvb2xlYW4nKSBvcHRzLnRvUmVnZXggPSBvcHRzLm9wdGltaXplO1xuICBpZiAodHlwZW9mIG9wdHMubWFrZVJlID09PSAnYm9vbGVhbicpIG9wdHMudG9SZWdleCA9IG9wdHMubWFrZVJlO1xuICByZXR1cm4gZXhwYW5kKHN0YXJ0LCBzdG9wLCBvcHRzKTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kKHN0YXJ0LCBzdG9wLCBvcHRpb25zKSB7XG4gIGxldCBhID0gb3B0aW9ucy5pc051bWJlciA/IHRvTnVtYmVyKHN0YXJ0KSA6IHN0YXJ0LmNoYXJDb2RlQXQoMCk7XG4gIGxldCBiID0gb3B0aW9ucy5pc051bWJlciA/IHRvTnVtYmVyKHN0b3ApIDogc3RvcC5jaGFyQ29kZUF0KDApO1xuXG4gIGxldCBzdGVwID0gTWF0aC5hYnModG9OdW1iZXIob3B0aW9ucy5zdGVwKSkgfHwgMTtcbiAgaWYgKG9wdGlvbnMudG9SZWdleCAmJiBzdGVwID09PSAxKSB7XG4gICAgcmV0dXJuIHRvUmFuZ2UoYSwgYiwgc3RhcnQsIHN0b3AsIG9wdGlvbnMpO1xuICB9XG5cbiAgbGV0IHplcm8gPSB7IGdyZWF0ZXI6IFtdLCBsZXNzZXI6IFtdIH07XG4gIGxldCBhc2MgPSBhIDwgYjtcbiAgbGV0IGFyciA9IG5ldyBBcnJheShNYXRoLnJvdW5kKChhc2MgPyBiIC0gYSA6IGEgLSBiKSAvIHN0ZXApKTtcbiAgbGV0IGlkeCA9IDA7XG5cbiAgaWYgKCFhc2MgJiYgb3B0aW9ucy5zdHJpY3RPcmRlcikge1xuICAgIGlmIChvcHRpb25zLnN0cmljdFJhbmdlcyA9PT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ludmFsaWQgcmFuZ2UgYXJndW1lbnRzOiAnICsgdXRpbC5pbnNwZWN0KFtzdGFydCwgc3RvcF0pKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgd2hpbGUgKGFzYyA/IGEgPD0gYiA6IGEgPj0gYikge1xuICAgIGxldCB2YWwgPSBvcHRpb25zLmlzTnVtYmVyID8gYSA6IFN0cmluZy5mcm9tQ2hhckNvZGUoYSk7XG4gICAgaWYgKG9wdGlvbnMudG9SZWdleCAmJiAodmFsID49IDAgfHwgIW9wdGlvbnMuaXNOdW1iZXIpKSB7XG4gICAgICB6ZXJvLmdyZWF0ZXIucHVzaCh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB6ZXJvLmxlc3Nlci5wdXNoKE1hdGguYWJzKHZhbCkpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmlzUGFkZGVkKSB7XG4gICAgICB2YWwgPSB6ZXJvcyh2YWwsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnRvU3RyaW5nKSB7XG4gICAgICB2YWwgPSBTdHJpbmcodmFsKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcnJbaWR4KytdID0gb3B0aW9ucy50cmFuc2Zvcm0odmFsLCBhLCBiLCBzdGVwLCBpZHgsIGFyciwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFycltpZHgrK10gPSB2YWw7XG4gICAgfVxuXG4gICAgaWYgKGFzYykge1xuICAgICAgYSArPSBzdGVwO1xuICAgIH0gZWxzZSB7XG4gICAgICBhIC09IHN0ZXA7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubGltaXQgPiAwICYmIGFyci5sZW5ndGggPj0gb3B0aW9ucy5saW1pdCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKG9wdGlvbnMudG9SZWdleCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiB0b1NlcXVlbmNlKGFyciwgemVybywgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gdG9SYW5nZShhLCBiLCBzdGFydCwgc3RvcCwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5pc1BhZGRlZCkge1xuICAgIHJldHVybiB0b1JlZ2V4KHN0YXJ0LCBzdG9wLCBvcHRpb25zKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmlzTnVtYmVyKSB7XG4gICAgcmV0dXJuIHRvUmVnZXgoTWF0aC5taW4oYSwgYiksIE1hdGgubWF4KGEsIGIpLCBvcHRpb25zKTtcbiAgfVxuXG4gIHN0YXJ0ID0gU3RyaW5nLmZyb21DaGFyQ29kZShNYXRoLm1pbihhLCBiKSk7XG4gIHN0b3AgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKE1hdGgubWF4KGEsIGIpKTtcbiAgcmV0dXJuIGBbJHtzdGFydH0tJHtzdG9wfV1gO1xufVxuXG5mdW5jdGlvbiB0b1NlcXVlbmNlKGFyciwgemVyb3MsIG9wdGlvbnMpIHtcbiAgbGV0IGdyZWF0ZXIgPSAnJztcbiAgbGV0IGxlc3NlciA9ICcnO1xuXG4gIGlmICh6ZXJvcy5ncmVhdGVyLmxlbmd0aCkge1xuICAgIGdyZWF0ZXIgPSB6ZXJvcy5ncmVhdGVyLmpvaW4oJ3wnKTtcbiAgfVxuXG4gIGlmICh6ZXJvcy5sZXNzZXIubGVuZ3RoKSB7XG4gICAgbGVzc2VyID0gYC0oJHt6ZXJvcy5sZXNzZXIuam9pbignfCcpfSlgO1xuICB9XG5cbiAgbGV0IHJlcyA9IGdyZWF0ZXIgJiYgbGVzc2VyID8gYCR7Z3JlYXRlcn18JHtsZXNzZXJ9YCA6IGdyZWF0ZXIgfHwgbGVzc2VyO1xuICBpZiAob3B0aW9ucy5jYXB0dXJlKSB7XG4gICAgcmV0dXJuIGAoJHtyZXN9KWA7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gemVyb3ModmFsLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmlzUGFkZGVkKSB7XG4gICAgbGV0IHN0ciA9IFN0cmluZyh2YWwpO1xuICAgIGxldCBsZW4gPSBzdHIubGVuZ3RoO1xuICAgIGxldCBkYXNoID0gJyc7XG4gICAgaWYgKHN0ci5jaGFyQXQoMCkgPT09ICctJykge1xuICAgICAgZGFzaCA9ICctJztcbiAgICAgIHN0ciA9IHN0ci5zbGljZSgxKTtcbiAgICB9XG4gICAgbGV0IGRpZmYgPSBvcHRpb25zLm1heExlbmd0aCAtIGxlbjtcbiAgICBsZXQgcGFkID0gJzAnLnJlcGVhdChkaWZmKTtcbiAgICB2YWwgPSBkYXNoICsgcGFkICsgc3RyO1xuICB9XG4gIGlmIChvcHRpb25zLnN0cmluZ2lmeSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsKTtcbiAgfVxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiB0b051bWJlcih2YWwpIHtcbiAgcmV0dXJuIE51bWJlcih2YWwpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIGlzUGFkZGVkKHN0cikge1xuICByZXR1cm4gL14tPzBcXGQvLnRlc3Qoc3RyKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZChtaW4sIG1heCkge1xuICByZXR1cm4gKGlzVmFsaWROdW1iZXIobWluKSB8fCBpc1ZhbGlkTGV0dGVyKG1pbikpXG4gICAgJiYgKGlzVmFsaWROdW1iZXIobWF4KSB8fCBpc1ZhbGlkTGV0dGVyKG1heCkpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkTGV0dGVyKGNoKSB7XG4gIHJldHVybiB0eXBlb2YgY2ggPT09ICdzdHJpbmcnICYmIGNoLmxlbmd0aCA9PT0gMSAmJiAvXlxcdyskLy50ZXN0KGNoKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZE51bWJlcihuKSB7XG4gIHJldHVybiBpc051bWJlcihuKSAmJiAhL1xcLi8udGVzdChuKTtcbn1cblxuLyoqXG4gKiBFeHBvc2UgYGZpbGxSYW5nZWBcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbGxSYW5nZTtcbiIsIi8qIVxuICogbGlzdC1pdGVtIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9saXN0LWl0ZW0+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgaXNOdW1iZXIgPSByZXF1aXJlKCdpcy1udW1iZXInKTtcbmNvbnN0IGZpbGwgPSByZXF1aXJlKCdmaWxsLXJhbmdlJyk7XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGEgcGxhaW4tdGV4dC9tYXJrZG93biBsaXN0LWl0ZW0sXG4gKiBhbGxvd2luZyBvcHRpb25zIHRvIGJlIGNhY2hlZCBmb3Igc3Vic2VxdWVudCBjYWxscy5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbGkgPSBsaXN0aXRlbShvcHRpb25zKTtcbiAqXG4gKiBsaSgwLCAnTGV2ZWwgMCBsaXN0IGl0ZW0nKTtcbiAqIC8vPT4gJy0gTGV2ZWwgMCBsaXN0IGl0ZW0nXG4gKlxuICogbGkoMSwgJ0xldmVsIDEgbGlzdCBpdGVtJyk7XG4gKiAvLz0+ICcgICogTGV2ZWwgMSBsaXN0IGl0ZW0nXG4gKlxuICogbGkoMiwgJ0xldmVsIDIgbGlzdCBpdGVtJyk7XG4gKiAvLz0+ICcgICAgKyBMZXZlbCAyIGxpc3QgaXRlbSdcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gYG9wdGlvbnNgIHBhc3Mgb3B0aW9ucyB0byBjdXN0b21pemUgbGlzdCBpdGVtIGNoYXJhY3RlcnMsIGluZGVudGF0aW9uLCBldGMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGBvcHRpb25zLm5vYnVsbGV0YCBQYXNzIHRydWUgaWYgeW91IG9ubHkgd2FudCB0aGUgbGlzdCBpdGVuIGFuZCBpZGVudGF0aW9uLCBidXQgbm8gYnVsbGV0cy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBgb3B0aW9ucy5pbmRlbnRgIFRoZSBhbW91bnQgb2YgbGVhZGluZyBpbmRlbnRhdGlvbiB0byB1c2UuIGRlZmF1bHQgaXMgYCAgYC5cbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBgb3B0aW9ucy5jaGFyc2AgSWYgYSBzdHJpbmcgaXMgcGFzc2VkLCBbZmlsbC1yYW5nZV1bXSB3aWxsIGJlIHVzZWQgdG8gZ2VuZXJhdGUgYW4gYXJyYXkgb2YgYnVsbGV0cyAodmlzaXQgW2ZpbGwtcmFuZ2VdW10gdG8gc2VlIGFsbCBvcHRpb25zLikgT3IgZGlyZWN0bHkgcGFzcyBhbiBhcnJheSBvZiBidWxsZXRzLCBudW1iZXJzLCBsZXR0ZXJzIG9yIG90aGVyIGNoYXJhY3RlcnMgdG8gdXNlIGZvciBlYWNoIGxpc3QgaXRlbS4gRGVmYXVsdCBgWyctJywgJyonLCAnKyddYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gYGZuYCBwYXNzIGEgZnVuY3Rpb24gW2ZpbGwtcmFuZ2VdW10gdG8gbW9kaWZ5IHRoZSBidWxsZXQgZm9yIGFuIGl0ZW0gYXMgaXQncyBnZW5lcmF0ZWQuIFNlZSB0aGUgW2V4YW1wbGVzXSgjZXhhbXBsZXMpLlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIGEgZm9ybWF0dGVkIGxpc3QgaXRlbVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsaXN0aXRlbShvcHRpb25zID0ge30sIGZuKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZuID0gb3B0aW9ucztcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBsZXQgY2hhcnMgPSBjaGFyYWN0ZXIob3B0aW9ucyk7XG4gIGxldCBpbmRleCA9IDA7XG5cbiAgcmV0dXJuIChsdmwsIHN1ZmZpeCkgPT4ge1xuICAgIGlmICghaXNOdW1iZXIobHZsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBsZXZlbCB0byBiZSBhIG51bWJlcicpO1xuICAgIH1cblxuICAgIC8vIGNhc3QgdG8gbnVtYmVyXG4gICAgbHZsID0gK2x2bDtcbiAgICBpbmRleCsrO1xuXG4gICAgbGV0IGJ1bGxldCA9IGNoYXJzID8gY2hhcnNbbHZsICUgY2hhcnMubGVuZ3RoXSA6ICcnO1xuICAgIGxldCBpbmRlbnQgPSB0eXBlb2Ygb3B0aW9ucy5pbmRlbnQgIT09ICdzdHJpbmcnXG4gICAgICA/IChsdmwgPiAwID8gJyAgJyA6ICcnKVxuICAgICAgOiBvcHRpb25zLmluZGVudDtcblxuICAgIGxldCBwcmVmaXggPSAhb3B0aW9ucy5ub2J1bGxldFxuICAgICAgPyBidWxsZXQgKyAnICdcbiAgICAgIDogJyc7XG5cbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZm4oaW5kZW50LnJlcGVhdChsdmwpLCBidWxsZXQsIGluZGV4KTtcbiAgICB9XG5cbiAgICBsZXQgcmVzID0gJyc7XG4gICAgcmVzICs9IGluZGVudC5yZXBlYXQobHZsKTtcbiAgICByZXMgKz0gcHJlZml4O1xuICAgIHJlcyArPSBzdWZmaXg7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIGFycmF5IG9mIGNoYXJhY3RlcnMgdG8gdXNlIGFzIGJ1bGxldHMuXG4gKlxuICogLSBodHRwOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjE5LyNsaXN0LWl0ZW1zXG4gKiAtIGh0dHBzOi8vZGFyaW5nZmlyZWJhbGwubmV0L3Byb2plY3RzL21hcmtkb3duL3N5bnRheCNsaXN0XG4gKiAtIGh0dHBzOi8vaGVscC5naXRodWIuY29tL2FydGljbGVzL21hcmtkb3duLWJhc2ljcy8jbGlzdHNcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRzYCBPcHRpb25zIHRvIHBhc3MgdG8gW2ZpbGwtcmFuZ2VdW11cbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmZ1bmN0aW9uIGNoYXJhY3RlcihvcHRpb25zID0ge30pIHtcbiAgbGV0IGNoYXJzID0gb3B0aW9ucy5jaGFycyB8fCBbJy0nLCAnKicsICcrJ107XG5cbiAgaWYgKHR5cGVvZiBjaGFycyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmlsbCguLi5jaGFycy5zcGxpdCgnLi4nKSwgb3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gY2hhcnM7XG59XG5cbi8qKlxuICogRXhwb3NlIGBsaXN0aXRlbWBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RpdGVtO1xuIiwiLyohXG4gKiBtYXJrZG93bi11dGlscyA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvbWFya2Rvd24tdXRpbHM+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTgsIEpvbiBTY2hsaW5rZXJ0LCBjb250cmlidXRvcnMuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBpc051bWJlciA9IHJlcXVpcmUoJ2lzLW51bWJlcicpO1xuY29uc3QgbGlzdGl0ZW0gPSByZXF1aXJlKCdsaXN0LWl0ZW0nKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBtYXJrZG93bi1mb3JtYXR0ZWQgYmxvY2txdW90ZS5cbiAqXG4gKiBgYGBqc1xuICogdXRpbHMuYmxvY2txdW90ZSgnVGhpcyBpcyBhIGJsb2NrcXVvdGUnKTtcbiAqIC8vPT4gJz4gVGhpcyBpcyBhIGJsb2NrcXVvdGUnXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RyYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmJsb2NrcXVvdGUgPSBzdHIgPT4gc3RyID8gYD4gJHtzdHJ9YCA6ICcnO1xuXG4vKipcbiAqIENyZWF0ZSBhIG1hcmtkb3duLWZvcm1hdHRlZCBgPGNvZGU+PC9jb2RlPmAgc25pcHBldC5cbiAqXG4gKiBgYGBqc1xuICogdXRpbHMuY29kZSgnY29uc3QgZm9vID0gYmFyOycpO1xuICogLy89PiAnYGNvbnN0IGZvbyA9IGJhcjtgJ1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5jb2RlID0gc3RyID0+IHN0ciA/IGBcXGAke3N0cn1cXGBgIDogJyc7XG5cbi8qKlxuICogQ3JlYXRlIG1hcmtkb3duLWZvcm1hdHRlZCBkZWxldGVkIHRleHQ6IGB+fnRleHR+fmAuXG4gKlxuICogYGBganNcbiAqIHV0aWxzLmRlbCgndGV4dCcpO1xuICogLy89PiAnfn50ZXh0fn4nXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RyYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmRlbCA9IHN0ciA9PiBzdHIgPyBgfn4ke3N0cn1+fmAgOiAnJztcblxuLyoqXG4gKiBDcmVhdGUgYSBtYXJrZG93bi1mb3JtYXR0ZWQgZW0uXG4gKlxuICogYGBganNcbiAqIHV0aWxzLmVtKCdUaGlzIGlzIGVtcGhhc2l6ZWQnKTtcbiAqIC8vPT4gJ19UaGlzIGlzIGVtcGhhc2l6ZWRfJ1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5lbSA9IHN0ciA9PiBzdHIgPyBgXyR7c3RyfV9gIDogJyc7XG5cbi8qKlxuICogQ3JlYXRlIGEgbWFya2Rvd24tZm9ybWF0dGVkIGhlYWRpbmcuXG4gKlxuICogYGBganNcbiAqIHV0aWxzLmgoMSwgJ1RoaXMgaXMgYSBoZWFkaW5nJyk7XG4gKiAvLz0+ICcjIFRoaXMgaXMgYSBoZWFkaW5nJ1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmBcbiAqIEBwYXJhbSB7TnVtYmVyfSBgbGV2ZWxgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuaCA9IChsZXZlbCwgc3RyKSA9PiBzdHIgPyBleHBvcnRzLmhlYWRpbmcoc3RyLCBsZXZlbCkgOiAnJztcblxuLyoqXG4gKiBDcmVhdGUgYSBtYXJrZG93bi1mb3JtYXR0ZWQgaDEgaGVhZGluZy5cbiAqXG4gKiBgYGBqc1xuICogdXRpbHMuaDEoJ1RoaXMgaXMgYSBoZWFkaW5nJyk7XG4gKiAvLz0+ICcjIFRoaXMgaXMgYSBoZWFkaW5nJ1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5oMSA9IHN0ciA9PiBzdHIgPyBgIyAke3N0cn1gIDogJyc7XG5cbi8qKlxuICogQ3JlYXRlIGEgbWFya2Rvd24tZm9ybWF0dGVkIGgyIGhlYWRpbmcuXG4gKlxuICogYGBganNcbiAqIHV0aWxzLmgyKCdUaGlzIGlzIGEgaGVhZGluZycpO1xuICogLy89PiAnIyMgVGhpcyBpcyBhIGhlYWRpbmcnXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RyYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmgyID0gc3RyID0+IHN0ciA/IGAjIyAke3N0cn1gIDogJyc7XG5cbi8qKlxuICogQ3JlYXRlIGEgbWFya2Rvd24tZm9ybWF0dGVkIGgzIGhlYWRpbmcuXG4gKlxuICogYGBganNcbiAqIHV0aWxzLmgzKCdUaGlzIGlzIGEgaGVhZGluZycpO1xuICogLy89PiAnIyMjIFRoaXMgaXMgYSBoZWFkaW5nJ1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5oMyA9IHN0ciA9PiBzdHIgPyBgIyMjICR7c3RyfWAgOiAnJztcblxuLyoqXG4gKiBDcmVhdGUgYSBtYXJrZG93bi1mb3JtYXR0ZWQgaDQgaGVhZGluZy5cbiAqXG4gKiBgYGBqc1xuICogdXRpbHMuaDQoJ1RoaXMgaXMgYSBoZWFkaW5nJyk7XG4gKiAvLz0+ICcjIyMjIFRoaXMgaXMgYSBoZWFkaW5nJ1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5oNCA9IHN0ciA9PiBzdHIgPyBgIyMjIyAke3N0cn1gIDogJyc7XG5cbi8qKlxuICogQ3JlYXRlIGEgbWFya2Rvd24tZm9ybWF0dGVkIGg1IGhlYWRpbmcuXG4gKlxuICogYGBganNcbiAqIHV0aWxzLmg1KCdUaGlzIGlzIGEgaGVhZGluZycpO1xuICogLy89PiAnIyMjIyMgVGhpcyBpcyBhIGhlYWRpbmcnXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RyYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmg1ID0gc3RyID0+IHN0ciA/IGAjIyMjIyAke3N0cn1gIDogJyc7XG5cbi8qKlxuICogQ3JlYXRlIGEgbWFya2Rvd24tZm9ybWF0dGVkIGg2IGhlYWRpbmcuXG4gKlxuICogYGBganNcbiAqIHV0aWxzLmg2KCdUaGlzIGlzIGEgaGVhZGluZycpO1xuICogLy89PiAnIyMjIyMjIFRoaXMgaXMgYSBoZWFkaW5nJ1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5oNiA9IHN0ciA9PiBzdHIgPyBgIyMjIyMjICR7c3RyfWAgOiAnJztcblxuLyoqXG4gKiBDcmVhdGUgYSBtYXJrZG93bi1mb3JtYXR0ZWQgaGVhZGluZy5cbiAqXG4gKiBgYGBqc1xuICogdXRpbHMuaGVhZGluZygnVGhpcyBpcyBhIGhlYWRpbmcnLCAxKTtcbiAqIC8vPT4gJyMgVGhpcyBpcyBhIGhlYWRpbmcnXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RyYFxuICogQHBhcmFtIHtOdW1iZXJ9IGBsZXZlbGBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5oZWFkaW5nID0gKHN0ciwgbGV2ZWwpID0+IHN0ciA/IGV4cG9ydHNbYGgkeyhsZXZlbCB8fCAxKX1gXShzdHIpIDogJyc7XG5cbi8qKlxuICogQ3JlYXRlIGEgbWFya2Rvd24tZm9ybWF0dGVkIGhvcml6b250YWwgcnVsZS5cbiAqXG4gKiBgYGBqc1xuICogdXRpbHMuaHIoKTtcbiAqIC8vPT4gJyoqKidcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBzdHJgIEFsdGVybmF0ZSBzdHJpbmcgdG8gdXNlLiBEZWZhdWx0IGlzIGAqKipgIHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoIGAtLS1gIHdoaWNoIGlzIGNvbW1vbmx5IHVzZWQgZm9yIGZyb250LW1hdHRlci5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5ociA9IChzdHIgPSAnKioqJykgPT4gc3RyO1xuXG4vKipcbiAqIENyZWF0ZSBhIG1hcmtkb3duLWZvcm1hdHRlZCBsaW5rIGZyb20gdGhlIGdpdmVuIHZhbHVlcy5cbiAqXG4gKiBgYGBqc1xuICogdXRpbHMubGluaygnZnMtdXRpbHMnLCAnaHR0cHM6Ly9naXRodWIuY29tL2Fzc2VtYmxlL2ZzLXV0aWxzJywgJ2hvdmVyIHRpdGxlJyk7XG4gKiAvLz0+IFtmcy11dGlsc10oaHR0cHM6Ly9naXRodWIuY29tL2Fzc2VtYmxlL2ZzLXV0aWxzIFwiaG92ZXIgdGl0bGVcIilcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBhbmNob3JgXG4gKiBAcGFyYW0ge1N0cmluZ30gYGhyZWZgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHRpdGxlYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmxpbmsgPSAoYW5jaG9yLCBocmVmLCB0aXRsZSkgPT4ge1xuICByZXR1cm4gYFske2FuY2hvcn1dKCR7aHJlZn0ke3RpdGxlID8gYCBcIiR7dGl0bGV9XCJgIDogJyd9KWA7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIG1hcmtkb3duLWZvcm1hdHRlZCBhbmNob3IgbGluayBmcm9tIHRoZSBnaXZlbiB2YWx1ZXMuXG4gKlxuICogYGBganNcbiAqIHV0aWxzLmFuY2hvcignZW1iZWQnLCAnYXNzZW1ibGUvaGFuZGxlYmFycy1oZWxwZXJzL2xpYi9jb2RlLmpzJywgMjUsICd2MC42LjAnKTtcbiAqIC8vPT4gW2VtYmVkXShodHRwczovL2dpdGh1Yi5jb20vYXNzZW1ibGUvaGFuZGxlYmFycy1oZWxwZXJzL2Jsb2IvdjAuNi4wL2xpYi9oZWxwZXJzL2NvZGUuanMjTDI1KVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYGFuY2hvcmBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgaHJlZmBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgdGl0bGVgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuYW5jaG9yID0gKHRleHQsIHJlcG8sIGxpbmUsIGJyYW5jaCkgPT4ge1xuICByZXR1cm4gYFske3RleHR9XSgke2Zvcm1hdChyZXBvLCBicmFuY2gsIGxpbmUpfSlgO1xufTtcblxuZnVuY3Rpb24gZm9ybWF0KHN0ciwgYnJhbmNoLCBsaW5lKSB7XG4gIGxldCBzZWdzID0gc3RyLnNwbGl0KC9bXFxcXFxcL10vKTtcbiAgbGV0IHJlcG8gPSBzZWdzLnNsaWNlKDAsIDIpLmpvaW4oJy8nKTtcbiAgbGV0IHJlc3QgPSBzZWdzLnNsaWNlKDIpLmpvaW4oJy8nKTtcbiAgaWYgKGlzTnVtYmVyKGJyYW5jaCkpIHtcbiAgICBsaW5lID0gYnJhbmNoO1xuICAgIGJyYW5jaCA9ICdtYXN0ZXInO1xuICB9XG4gIGxldCByZXMgPSAnaHR0cHM6Ly9naXRodWIuY29tLyc7XG4gIHJlcyArPSBgJHtyZXBvfS9ibG9iLyR7YnJhbmNofS8ke3Jlc3R9YDtcbiAgcmVzICs9IGxpbmUgPyBgI0wke2xpbmV9YCA6ICcnO1xuICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG1hcmtkb3duLWZvcm1hdHRlZCByZWZlcmVuY2UgbGluayBmcm9tIHRoZSBnaXZlbiB2YWx1ZXMuXG4gKlxuICogYGBganNcbiAqIHV0aWxzLnJlZmVyZW5jZSgndGVtcGxhdGUnLCAnaHR0cHM6Ly9naXRodWIvam9uc2NobGlua2VydC90ZW1wbGF0ZScsICdNYWtlIHN0dWZmIScpO1xuICogLy89PiBbdGVtcGxhdGVdOiBodHRwczovL2dpdGh1Yi9qb25zY2hsaW5rZXJ0L3RlbXBsYXRlIFwiTWFrZSBzdHVmZiFcIlxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYGlkYFxuICogQHBhcmFtIHtTdHJpbmd9IGB1cmxgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHRpdGxlYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnJlZmVyZW5jZSA9IChpZCwgdXJsLCB0aXRsZSkgPT4ge1xuICByZXR1cm4gYFske2lkfV06ICR7dXJsfSR7dGl0bGUgPyBgIFwiJHt0aXRsZX1cImAgOiAnJ31gO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBtYXJrZG93bi1mb3JtYXR0ZWQgaW1hZ2UgZnJvbSB0aGUgZ2l2ZW4gdmFsdWVzLlxuICpcbiAqIGBgYGpzXG4gKiB1dGlscy5pbWFnZShhbHQsIHNyYyk7XG4gKiAvLz0+ICFbQnVpbGQgU3RhdHVzXShodHRwczovL3RyYXZpcy1jaS5vcmcvam9uc2NobGlua2VydC90ZW1wbGF0ZS5zdmcpXG4gKlxuICogdXRpbHMuaW1hZ2UoYWx0LCBzcmMsIHRpdGxlKTtcbiAqIC8vPT4gIVtCdWlsZCBTdGF0dXNdKGh0dHBzOi8vdHJhdmlzLWNpLm9yZy9qb25zY2hsaW5rZXJ0L3RlbXBsYXRlLnN2ZyBcIlRoaXMgaXMgdGl0bGUgb2YgaW1hZ2UhXCIpXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgYWx0YFxuICogQHBhcmFtIHtTdHJpbmd9IGBzcmNgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHRpdGxlYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmltYWdlID0gKGFsdCwgc3JjLCB0aXRsZSkgPT4gJyEnICsgZXhwb3J0cy5saW5rKGFsdCwgc3JjLCB0aXRsZSk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbWFya2Rvd24tZm9ybWF0dGVkIGJhZGdlLlxuICpcbiAqIGBgYGpzXG4gKiB1dGlscy5iYWRnZShhbHQsIGltZ191cmwsIHVybCk7XG4gKiAvLz0+IFshW0J1aWxkIFN0YXR1c10oaHR0cHM6Ly90cmF2aXMtY2kub3JnL2pvbnNjaGxpbmtlcnQvdGVtcGxhdGUuc3ZnKV0oaHR0cHM6Ly90cmF2aXMtY2kub3JnL2pvbnNjaGxpbmtlcnQvdGVtcGxhdGUpXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgYWx0YFxuICogQHBhcmFtIHtTdHJpbmd9IGBpbWdfdXJsYFxuICogQHBhcmFtIHtTdHJpbmd9IGB1cmxgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuYmFkZ2UgPSAoYWx0LCBpbWdfdXJsLCB1cmwsIHRpdGxlKSA9PiB7XG4gIHJldHVybiBleHBvcnRzLmxpbmsoZXhwb3J0cy5pbWFnZShhbHQsIGltZ191cmwsIHRpdGxlKSwgdXJsKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGEgcGxhaW4tdGV4dC9tYXJrZG93biBsaXN0LWl0ZW0sXG4gKiBhbGxvd2luZyBvcHRpb25zIHRvIGJlIGNhY2hlZCBmb3Igc3Vic2VxdWVudCBjYWxscy5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbGkgPSBsaXN0aXRlbShvcHRpb25zKTtcbiAqXG4gKiBsaSgwLCAnTGV2ZWwgMCBsaXN0IGl0ZW0nKTtcbiAqIC8vPT4gJy0gTGV2ZWwgMCBsaXN0IGl0ZW0nXG4gKlxuICogbGkoMSwgJ0xldmVsIDEgbGlzdCBpdGVtJyk7XG4gKiAvLz0+ICcgICogTGV2ZWwgMSBsaXN0IGl0ZW0nXG4gKlxuICogbGkoMiwgJ0xldmVsIDIgbGlzdCBpdGVtJyk7XG4gKiAvLz0+ICcgICAgKyBMZXZlbCAyIGxpc3QgaXRlbSdcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBvcHRpb25zYFxuICogICBAb3B0aW9uIHtCb29sZWFufSBbb3B0aW9uc10gYG5vYnVsbGV0YCBQYXNzIHRydWUgaWYgeW91IG9ubHkgd2FudCB0aGUgbGlzdCBpdGVuIGFuZCBpZGVudGF0aW9uLCBidXQgbm8gYnVsbGV0cy5cbiAqICAgQG9wdGlvbiB7U3RyaW5nfSBbb3B0aW9uc10gYGluZGVudGAgVGhlIGFtb3VudCBvZiBsZWFkaW5nIGluZGVudGF0aW9uIHRvIHVzZS4gZGVmYXVsdCBpcyBgICBgLlxuICogICBAb3B0aW9uIHtTdHJpbmd8QXJyYXl9IFtvcHRpb25zXSBgY2hhcnNgIElmIGEgc3RyaW5nIGlzIHBhc3NlZCwgW2ZpbGwtcmFuZ2VdIHdpbGwgYmUgdXNlZCB0byBnZW5lcmF0ZSBhbiBhcnJheSBvZiBidWxsZXRzICh2aXNpdCBbZmlsbC1yYW5nZV0gdG8gc2VlIGFsbCBvcHRpb25zLikgT3IgZGlyZWN0bHkgcGFzcyBhbiBhcnJheSBvZiBidWxsZXRzLCBudW1iZXJzLCBsZXR0ZXJzIG9yIG90aGVyIGNoYXJhY3RlcnMgdG8gdXNlIGZvciBlYWNoIGxpc3QgaXRlbS4gRGVmYXVsdCBgWyctJywgJyonLCAnKycsICd+J11gXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBgZm5gIHBhc3MgYSBmdW5jdGlvbiBbZmlsbC1yYW5nZV0gdG8gbW9kaWZ5IHRoZSBidWxsZXQgZm9yIGFuIGl0ZW0gYXMgaXQncyBnZW5lcmF0ZWQuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMubGkgPSAoY2hhciwgbGV2ZWwsIG9wdGlvbnMsIGZuKSA9PiBsaXN0aXRlbShvcHRpb25zLCBmbikobGV2ZWwsIGNoYXIpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG1hcmtkb3duLWZvcm1hdHRlZCBgPHByZT48Y29kZT48L2NvZGU+PC9wcmU+YCBzbmlwcGV0IHdpdGggb3Igd2l0aG91dCBsYW5nLlxuICpcbiAqIGBgYGpzXG4gKiB1dGlscy5wcmUoJ2NvbnN0IGZvbyA9IGJhcjsnKTtcbiAqIGBgYFxuICogUmVzdWx0cyBpbjpcbiAqXG4gKiBgYGBodG1sXG4gKiA8cHJlPlxuICogY29uc3QgZm9vID0gYmFyO1xuICogPC9wcmU+XG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RyYFxuICogQHBhcmFtIHtTdHJpbmd9IGBsYW5ndWFnZWBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5wcmUgPSBzdHIgPT4gc3RyID8gYDxwcmU+XFxuJHtzdHJ9XFxuPC9wcmU+YCA6ICcnO1xuXG4vKipcbiAqIENyZWF0ZSBhIG1hcmtkb3duLWZvcm1hdHRlZCBjb2RlIHNuaXBwZXQgd2l0aCBvciB3aXRob3V0IGBsYW5nYC5cbiAqXG4gKiBgYGBqc1xuICogdXRpbHMuZ2ZtKCdjb25zdCBmb28gPSBiYXI7JywgJ2pzJyk7XG4gKiBgYGBcbiAqIFJlc3VsdHMgaW46XG4gKlxuICogPHByZT5cbiAqIGBgYGpzXG4gKiBjb25zdCBmb28gPSBiYXI7XG4gKiBgYGBcbiAqIDwvcHJlPlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RyYFxuICogQHBhcmFtIHtTdHJpbmd9IGBsYW5ndWFnZWBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5nZm0gPSAoc3RyLCBsYW5nID0gJycpID0+IHtcbiAgbGV0IGZlbmNlID0gJ2BgYCc7XG4gIHJldHVybiBzdHIgPyBgJHtmZW5jZX0ke2xhbmd9XFxuJHtzdHJ9XFxuJHtmZW5jZX1gIDogJyc7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBtYXJrZG93bi1mb3JtYXR0ZWQgYm9sZCB0ZXh0LlxuICpcbiAqIGBgYGpzXG4gKiB1dGlscy5zdHJvbmcoJ1RoaXMgaXMgYm9sZCcpO1xuICogLy89PiAnKipUaGlzIGlzIGJvbGQqKidcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBzdHJgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuc3Ryb25nID0gc3RyID0+IHN0ciA/IGAqKiR7c3RyfSoqYCA6ICcnO1xuXG4vKipcbiAqIENyZWF0ZSBhIG1hcmtkb3duLWZvcm1hdHRlZCB0b2RvIGl0ZW0uXG4gKlxuICogYGBganNcbiAqIHV0aWxzLnRvZG8oJ3RoaXMgaXMgYSB0b2RvLicpO1xuICogLy89PiAnLSBbIF0gdGhpcyBpcyBhIHRvZG8nXG4gKlxuICogdXRpbHMudG9kbygndGhpcyBpcyBhIGNvbXBsZXRlZCB0b2RvLicsIHRydWUpO1xuICogLy89PiAnLSBbeF0gdGhpcyBpcyBhIHRvZG8nXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RyYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnRvZG8gPSAoc3RyLCBjaGVja2VkKSA9PiB7XG4gIHJldHVybiBzdHIgPyAoKGNoZWNrZWQgPyAnLSBbeF0gJyA6ICctIFsgXSAnKSArIHN0cikgOiAnJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1kdSA9IHJlcXVpcmUoJ21hcmtkb3duLXV0aWxzJyk7XG5jb25zdCBoYXNPd24gPSAob2JqLCBrZXkpID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG5jb25zdCBlc2NhcGVSZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvWy0uPyorXiRbXFxdXFxcXCgpe318XS9nLCAnXFxcXCQmJyk7XG5cbi8qKlxuICogUmVuZGVyZXIgcnVsZXMgY2FjaGVcbiAqL1xuXG5jb25zdCBydWxlcyA9IHtcbiAgbGlzdDoge29yZGVyZWQ6IGZhbHNlLCBudW06IDF9LFxuICBpbnNpZGU6IHt9LFxuICBiYWRnZXM6IFtdLFxuICBsaW5rczogW10sXG4gIGltYWdlczogW10sXG4gIGNvdW50OiB7XG4gICAgYmFkZ2VzOiAwLFxuICAgIGltYWdlczogMCxcbiAgICBsaW5rczogMFxuICB9XG59O1xuXG4vKipcbiAqIEJsb2NrcXVvdGVzXG4gKi9cblxucnVsZXMuYmxvY2txdW90ZV9vcGVuID0gKCkgPT4gJz4gJztcbnJ1bGVzLmJsb2NrcXVvdGVfY2xvc2UgPSAoKSA9PiAnJztcblxuLyoqXG4gKiBDb2RlXG4gKi9cblxucnVsZXMuY29kZSA9IGZ1bmN0aW9uKHRva2VucywgaWR4KSB7XG4gIGlmICh0b2tlbnNbaWR4XS5ibG9jaykge1xuICAgIHJldHVybiAnYGBgJyArIHRva2Vuc1tpZHhdLmNvbnRlbnQgKyAnYGBgJyArIGdldEJyZWFrKHRva2VucywgaWR4KTtcbiAgfVxuICByZXR1cm4gYFxcYCR7dG9rZW5zW2lkeF0uY29udGVudH1cXGBgO1xufTtcblxuLyoqXG4gKiBGZW5jZWQgY29kZSBibG9ja3NcbiAqL1xuXG5ydWxlcy5mZW5jZSA9IGZ1bmN0aW9uKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNlbGYpIHtcbiAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgbGV0IGxhbmd1YWdlO1xuXG4gIGlmICh0b2tlbi5wYXJhbXMpIHtcbiAgICBsZXQgaSA9IHRva2VuLnBhcmFtcy5pbmRleE9mKCcgJyk7XG4gICAgaWYgKGkgPT09IC0xKSBpID0gdG9rZW4ucGFyYW1zLmxlbmd0aDtcbiAgICBsYW5ndWFnZSA9IHRva2VuLnBhcmFtcy5zbGljZSgwLCBpKTtcblxuICAgIGlmIChoYXNPd24oc2VsZi5ydWxlcy5mZW5jZV9jdXN0b20sIGxhbmd1YWdlKSkge1xuICAgICAgcmV0dXJuIHNlbGYucnVsZXMuZmVuY2VfY3VzdG9tW2xhbmd1YWdlXSh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzZWxmKTtcbiAgICB9XG4gIH1cblxuICB0b2tlbi5jb250ZW50ID0gdG9rZW4uY29udGVudC5yZXBsYWNlKC9eXFxuKy8sICcnKTtcbiAgdG9rZW4uY29udGVudCA9IHRva2VuLmNvbnRlbnQucmVwbGFjZSgvXFxuKyQvLCAnJyk7XG5cbiAgbGV0IHJlcyA9ICdcXG4nO1xuICByZXMgKz0gJ2BgYCcgKyAobGFuZ3VhZ2UgfHwgJycpICsgJ1xcbic7XG4gIHJlcyArPSB0b2tlbi5jb250ZW50ICsgJ1xcbic7XG4gIHJlcyArPSAnYGBgXFxuJztcbiAgcmVzICs9IGdldEJyZWFrKHRva2VucywgaWR4KTtcbiAgcmV0dXJuIHJlcztcbn07XG5ydWxlcy5mZW5jZV9jdXN0b20gPSB7fTtcblxuLyoqXG4gKiBIZWFkaW5nc1xuICovXG5cbnJ1bGVzLmhlYWRpbmdfb3BlbiA9ICh0b2tlbnMsIGlkeCkgPT4gJyMnLnJlcGVhdCh0b2tlbnNbaWR4XS5oTGV2ZWwpICsgJyAnO1xucnVsZXMuaGVhZGluZ19jbG9zZSA9ICh0b2tlbnMsIGlkeCkgPT4gJ1xcbicgKyBnZXRCcmVhayh0b2tlbnMsIGlkeCk7XG5cbi8qKlxuICogSG9yaXpvbnRhbCBydWxlc1xuICovXG5cbnJ1bGVzLmhyID0gKHRva2VucywgaWR4KSA9PiAnKioqXFxuJyArIGdldEJyZWFrKHRva2VucywgaWR4KTtcblxuLyoqXG4gKiBCdWxsZXRzXG4gKi9cblxucnVsZXMuYnVsbGV0X2xpc3Rfb3BlbiA9IGZ1bmN0aW9uKHRva2VucywgaWR4LyosIG9wdGlvbnMsIGVudiAqLykge1xuICBydWxlcy5saXN0Lm9yZGVyZWQgPSBmYWxzZTtcbiAgcmV0dXJuICdcXG4nO1xufTtcbnJ1bGVzLmJ1bGxldF9saXN0X2Nsb3NlID0gKHRva2VucywgaWR4KSA9PiBnZXRCcmVhayh0b2tlbnMsIGlkeCk7XG5cbi8qKlxuICogT3JkZXJlZCBsaXN0IGl0ZW1zXG4gKi9cblxucnVsZXMub3JkZXJlZF9saXN0X29wZW4gPSBmdW5jdGlvbih0b2tlbnMsIGlkeC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcnVsZXMubGlzdC5vcmRlcmVkID0gdHJ1ZTtcbiAgcmV0dXJuICdcXG4nO1xufTtcbnJ1bGVzLm9yZGVyZWRfbGlzdF9jbG9zZSA9IGZ1bmN0aW9uKHRva2VucywgaWR4KSB7XG4gIHJ1bGVzLmxpc3Qub3JkZXJlZCA9IGZhbHNlO1xuICBydWxlcy5saXN0Lm51bSA9IDE7XG4gIHJldHVybiBnZXRCcmVhayh0b2tlbnMsIGlkeCk7XG59O1xuXG4vKipcbiAqIExpc3QgaXRlbXNcbiAqL1xuXG5ydWxlcy5saXN0X2l0ZW1fb3BlbiA9IGZ1bmN0aW9uKHRva2VucywgaWR4LCBvcHRpb25zID0ge30vKiwgZW52ICovKSB7XG4gIGxldCB0b2tlbiA9IHRva2Vuc1tpZHhdO1xuICBsZXQgbmV4dCA9IHRva2Vuc1tpZHggKyAyXSB8fCB7fTtcbiAgbGV0IGxldmVsID0gbHZsKHRva2VuLmxldmVsKTtcblxuICBpZiAobmV4dC5jaGlsZHJlbiAmJiBuZXh0LmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5leHQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IG5leHQuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQuY29udGVudCAmJiAvXlstXFx3XXsxLDJ9Wy5dXFxzLy50ZXN0KGNoaWxkLmNvbnRlbnQpKSB7XG4gICAgICAgIGxldCBwcmVmaXggPSAnICcucmVwZWF0KGxldmVsICsgMik7XG4gICAgICAgIG5leHQuY2hpbGRyZW5baV0uY29udGVudCA9IChwcmVmaXggKyBjaGlsZC5jb250ZW50KTtcbiAgICAgICAgbmV4dC5jaGlsZHJlbltpXS5sZXZlbCA9IGxldmVsICsgMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBsaXN0IGluZm9cbiAgb3B0aW9ucy5jaGFycyA9IFsnKicsICctJywgJysnXTtcbiAgaWYgKHJ1bGVzLmxpc3Qub3JkZXJlZCkge1xuICAgIG9wdGlvbnMuY2hhcnMgPSBbKHJ1bGVzLmxpc3QubnVtKyspICsgJy4nXTtcbiAgfVxuXG4gIHJldHVybiBtZHUubGkoJycsIGxldmVsLCBvcHRpb25zLCAoaW5kZW50LCBjaCwgbHZsKSA9PiB7XG4gICAgcmV0dXJuIGluZGVudCArIGNoICsgJyAnO1xuICB9KTtcbn07XG5cbnJ1bGVzLmxpc3RfaXRlbV9jbG9zZSA9IGZ1bmN0aW9uKHRva2VucywgaWR4Lyosb3B0aW9ucywgZW52ICovKSB7XG4gIGxldCBwcmV2ID0gdG9rZW5zW2lkeCAtIDFdO1xuICBsZXQgYnIgPSBnZXRCcmVhayh0b2tlbnMsIGlkeCk7XG4gIGlmIChwcmV2ICYmIHByZXYudGlnaHQpIHtcbiAgICByZXR1cm4gYnI7XG4gIH1cbiAgcmV0dXJuICcnO1xufTtcblxuLyoqXG4gKiBQYXJhZ3JhcGhzXG4gKi9cblxucnVsZXMucGFyYWdyYXBoX29wZW4gPSBmdW5jdGlvbih0b2tlbnMsIGlkeCkge1xuICBsZXQgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgbGV0IHByZXYgPSB0b2tlbnNbaWR4IC0gMV07XG4gIGxldCBuZXh0ID0gdG9rZW5zW2lkeCArIDFdO1xuICBpZiAocHJldiAmJiBwcmV2LnR5cGUgPT09ICdibG9ja3F1b3RlX29wZW4nKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmIChuZXh0ICYmIG5leHQudHlwZSA9PT0gJ2lubGluZScpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHRva2VuLnRpZ2h0ID8gJycgOiAnXFxuJztcbn07XG5ydWxlcy5wYXJhZ3JhcGhfY2xvc2UgPSBmdW5jdGlvbih0b2tlbnMsIGlkeCkge1xuICBsZXQgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgbGV0IG5leHQgPSB0b2tlbnNbaWR4ICsgMV07XG4gIGxldCBwcmV2ID0gdG9rZW5zW2lkeCAtIDFdO1xuXG4gIGlmIChuZXh0ICYmIG5leHQudHlwZSAmJiBuZXh0LnR5cGUuaW5kZXhPZigncGFyYWdyYXBoJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHRva2VuLnRpZ2h0ID8gJycgOiAnXFxuJyArIGdldEJyZWFrKHRva2VucywgaWR4KTtcbiAgfVxuXG4gIGxldCBhZGRCcmVhayA9ICEodG9rZW4udGlnaHQgJiYgaWR4ICYmIHByZXYudHlwZSA9PT0gJ2lubGluZScgJiYgIXByZXYuY29udGVudCk7XG4gIHJldHVybiAodG9rZW4udGlnaHQgPyAnJyA6ICdcXG4nKSArIChhZGRCcmVhayA/IGdldEJyZWFrKHRva2VucywgaWR4KSA6ICcnKTtcbn07XG5cbi8qKlxuICogTGlua3NcbiAqL1xuXG5ydWxlcy5saW5rX29wZW4gPSBmdW5jdGlvbih0b2tlbnMsIGlkeCkge1xuICBsZXQgcHJldiA9IHRva2Vuc1tpZHggLSAxXTtcbiAgbGV0IHRva2VuID0gdG9rZW5zW2lkeF07XG4gIGxldCBuZXh0ID0gdG9rZW5zW2lkeCArIDFdIHx8IHt9O1xuICBsZXQgY2xvc2UgPSB0b2tlbnNbaWR4ICsgMl0gfHwge307XG4gIGxldCBhZnRlciA9IHRva2Vuc1tpZHggKyAzXSB8fCB7fTtcblxuICBpZiAodG9rZW4gJiYgdG9rZW4uaHJlZiA9PT0gJycgJiYgbmV4dCAmJiBuZXh0LmNvbnRlbnQpIHtcbiAgICB0b2tlbi5ocmVmID0gJyMnICsgbmV4dC5jb250ZW50O1xuICB9XG5cbiAgLy8gW2Zvb10oYmFyKXsjYmF6fSA9PiBbZm9vXShiYXIjYmF6KSB0byBhbGxvdyBgYmFyYCB0byBleHBhbmQgdG8gYSBmdWxsIFVSTFxuICBpZiAoY2xvc2UudHlwZSA9PT0gJ2xpbmtfY2xvc2UnICYmIGFmdGVyICYmIGFmdGVyLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIGxldCBzdHIgPSBhZnRlci5jb250ZW50O1xuICAgIGxldCBoYXNCcmFjZSA9IHN0ci5jaGFyQXQoMCkgPT09ICd7JztcbiAgICBpZiAoc3RyICYmIGhhc0JyYWNlKSB7XG4gICAgICBsZXQgZW5kID0gc3RyLmluZGV4T2YoJ30nKTtcbiAgICAgIGxldCBocmVmID0gc3RyLnNsaWNlKDEsIGVuZCk7XG4gICAgICBpZiAocHJldiAmJiBwcmV2LmNvbnRlbnQgJiYgL1xcdyQvLnRlc3QocHJldi5jb250ZW50KSkge1xuICAgICAgICBwcmV2LmNvbnRlbnQgKz0gJyAnO1xuICAgICAgfVxuICAgICAgYWZ0ZXIuY29udGVudCA9IHN0ci5zbGljZShlbmQgKyAxKTtcbiAgICAgIGlmIChhZnRlci5jb250ZW50ICYmIC9eXFx3Ly50ZXN0KGFmdGVyLmNvbnRlbnQpKSB7XG4gICAgICAgIGFmdGVyLmNvbnRlbnQgPSAnICcgKyBhZnRlci5jb250ZW50O1xuICAgICAgfVxuICAgICAgdG9rZW4uaHJlZiArPSBocmVmO1xuICAgIH1cbiAgfVxuXG4gIGxldCBhbmNob3IgPSAvXFx7KFtefV0rKVxcfS8uZXhlYyh0b2tlbi5ocmVmKTtcbiAgaWYgKGFuY2hvciAmJiBhbmNob3JbMV0pIHtcbiAgICB0b2tlbi5ocmVmID0gdG9rZW4uaHJlZi5yZXBsYWNlKGFuY2hvclswXSwgYW5jaG9yWzFdKTtcbiAgfSBlbHNlIHtcblxuICAgIGFuY2hvciA9IC9cXHsoW159XSspXFx9Ly5leGVjKGFmdGVyLmNvbnRlbnQpO1xuICAgIGlmIChhbmNob3IgJiYgYW5jaG9yWzFdKSB7XG4gICAgICB0b2tlbi5ocmVmICs9IGFuY2hvclsxXTtcbiAgICAgIGFmdGVyLmNvbnRlbnQgPSBhZnRlci5jb250ZW50LnJlcGxhY2UoYW5jaG9yWzBdLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG5leHQudHlwZSAhPT0gJ2ltYWdlJykge1xuICAgIHJldHVybiBtZHUubGluayhuZXh0LmNvbnRlbnQsIHRva2VuLmhyZWYsIHRva2VuLnRpdGxlKTtcbiAgfVxuICByZXR1cm4gJyc7XG59O1xucnVsZXMubGlua19jbG9zZSA9ICgpID0+ICcnO1xuXG4vKipcbiAqIEltYWdlc1xuICovXG5cbnJ1bGVzLmltYWdlID0gZnVuY3Rpb24odG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudikge1xuICBsZXQgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgbGV0IHByZXYgPSB0b2tlbnNbaWR4IC0gMV0gfHwge307XG4gIGxldCBuZXh0ID0gdG9rZW5zW2lkeCArIDFdIHx8IHt9O1xuICBsZXQgYWZ0ZXIgPSB0b2tlbnNbaWR4ICsgMl0gfHwge307XG5cbiAgaWYgKG5leHQudHlwZSA9PT0gJ3RleHQnICYmIG5leHQuY29udGVudCkge1xuICAgIGFkZEFuY2hvcnMobmV4dCwgb3B0aW9ucy5jb250ZXh0IHx8IHt9KTtcbiAgfVxuXG4gIG5vcm1hbGl6ZUFuY2hvcnMocHJldiwgdG9rZW4sIG5leHQsIGFmdGVyLCBvcHRpb25zLmNvbnRleHQgfHwge30pO1xuICBpZiAocHJldi50eXBlICE9PSAnbGlua19vcGVuJykge1xuICAgIHJldHVybiBtZHUuaW1hZ2UodG9rZW4uYWx0LCB0b2tlbi5zcmMsIHRva2VuLnRpdGxlKTtcbiAgfVxuICByZXR1cm4gbWR1LmJhZGdlKHRva2VuLmFsdCwgdG9rZW4uc3JjLCBwcmV2LmhyZWYgfHwgdG9rZW4uc3JjLCB0b2tlbi50aXRsZSk7XG59O1xuXG4vKipcbiAqIFRhYmxlc1xuICovXG5cbnJ1bGVzLnRhYmxlX29wZW4gPSBmdW5jdGlvbigvKnRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcnVsZXMuYWxpZ24gPSBbXTtcbiAgcnVsZXMuaW5zaWRlLnRhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuICcnO1xufTtcbnJ1bGVzLnRhYmxlX2Nsb3NlID0gZnVuY3Rpb24oLyp0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJ1bGVzLmluc2lkZS50YWJsZSA9IGZhbHNlO1xuICByZXR1cm4gJ1xcbic7XG59O1xuXG5ydWxlcy50aGVhZF9vcGVuID0gZnVuY3Rpb24odG9rZW5zLCBpZHgvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJ1bGVzLmluc2lkZS50aGVhZCA9IHRydWU7XG4gIHJldHVybiAnfCAnO1xufTtcbnJ1bGVzLnRoZWFkX2Nsb3NlID0gZnVuY3Rpb24odG9rZW5zLCBpZHgvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJ1bGVzLmluc2lkZS50aGVhZCA9IGZhbHNlO1xuICByZXR1cm4gJyc7XG59O1xuXG5ydWxlcy50aF9vcGVuID0gZnVuY3Rpb24odG9rZW5zLCBpZHgpIHtcbiAgc3dpdGNoICh0b2tlbnNbaWR4XS5hbGlnbikge1xuICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICBydWxlcy5hbGlnbi5wdXNoKCc6LS0tOicpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICBydWxlcy5hbGlnbi5wdXNoKCc6LS0tJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICBydWxlcy5hbGlnbi5wdXNoKCctLS06Jyk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcnVsZXMuYWxpZ24ucHVzaCgnLS0tJyk7XG4gICAgICBicmVhaztcbiAgfVxuICBydWxlcy5pbnNpZGUudGggPSB0cnVlO1xuICByZXR1cm4gJyc7XG59O1xucnVsZXMudGhfY2xvc2UgPSBmdW5jdGlvbigvKnRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcnVsZXMuaW5zaWRlLnRoID0gZmFsc2U7XG4gIHJldHVybiAnIHwgJztcbn07XG5cbnJ1bGVzLnRib2R5X29wZW4gPSBmdW5jdGlvbih0b2tlbnMsIGlkeC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcnVsZXMuaW5zaWRlLnRib2R5ID0gdHJ1ZTtcbiAgcmV0dXJuICd8ICcgKyBydWxlcy5hbGlnbi5qb2luKCcgfCAnKSArICcgfCcgKyAnXFxuJztcbn07XG5ydWxlcy50Ym9keV9jbG9zZSA9IGZ1bmN0aW9uKC8qdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJyc7XG59O1xuXG5ydWxlcy50cl9vcGVuID0gZnVuY3Rpb24odG9rZW5zLCBpZHgvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJ1bGVzLmluc2lkZS50ciA9IHRydWU7XG4gIHJldHVybiAnJztcbn07XG5ydWxlcy50cl9jbG9zZSA9IGZ1bmN0aW9uKC8qdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICBydWxlcy5pbnNpZGUudHIgPSBmYWxzZTtcbiAgcmV0dXJuICdcXG4nO1xufTtcblxucnVsZXMudGRfb3BlbiA9IGZ1bmN0aW9uKHRva2VucywgaWR4LyosIG9wdGlvbnMsIGVudiAqLykge1xuICBsZXQgcHJldiA9IHRva2Vuc1tpZHggLSAxXTtcbiAgaWYgKHByZXYgJiYgcHJldi50eXBlID09PSAndHJfb3BlbicpIHtcbiAgICByZXR1cm4gJ3wgJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyB8ICc7XG4gIH1cbn07XG5ydWxlcy50ZF9jbG9zZSA9IGZ1bmN0aW9uKHRva2VucywgaWR4LyogLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgbGV0IG5leHQgPSB0b2tlbnNbaWR4ICsgMV07XG4gIGlmIChuZXh0ICYmIG5leHQudHlwZSA9PT0gJ3RyX2Nsb3NlJykge1xuICAgIHJldHVybiAnIHwnO1xuICB9XG4gIHJldHVybiAnJztcbn07XG5cbi8qKlxuICogQm9sZFxuICovXG5cbnJ1bGVzLnN0cm9uZ19vcGVuID0gZnVuY3Rpb24odG9rZW5zLCBpZHgvKiAsIG9wdGlvbnMsIGVudiAqLykge1xuICBydWxlcy5pbnNpZGUuc3Ryb25nID0ge307XG4gIGxldCBwcmV2ID0gdG9rZW5zW2lkeCAtIDFdO1xuICBsZXQgcmVzID0gJyc7XG5cbiAgaWYgKHByZXYgJiYgcHJldi50eXBlID09PSAnc29mdGJyZWFrJykge1xuICAgIHJlcyArPSAnXFxuJztcbiAgfVxuXG4gIHJ1bGVzLmluc2lkZS5zdHJvbmcucHJldiA9IHByZXY7XG4gIHJlcyArPSAnKionO1xuICByZXR1cm4gcmVzO1xufTtcbnJ1bGVzLnN0cm9uZ19jbG9zZSA9IGZ1bmN0aW9uKHRva2VucywgaWR4LyogLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgbGV0IHByZXYgPSBydWxlcy5pbnNpZGUuc3Ryb25nLnByZXY7XG4gIC8vIGlmIGl0J3Mgbm90IGEgXCJoZWFkaW5nXCIsIG9yIGl0J3MgaW5zaWRlIGEgdGFibGUgaGVhZGluZ1xuICBpZiAocHJldiAmJiBwcmV2LnR5cGUgPT09ICd0ZXh0JyB8fCBydWxlcy5pbnNpZGUudGgpIHtcbiAgICByZXR1cm4gJyoqJztcbiAgfVxuICBsZXQgcmVzID0gZGV0ZWN0QnJlYWsodG9rZW5zLCBpZHgsICcqKicpO1xuICBydWxlcy5pbnNpZGUuc3Ryb25nID0gbnVsbDtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogSXRhbGljaXplXG4gKi9cblxucnVsZXMuZW1fb3BlbiA9ICgpID0+ICdfJztcbnJ1bGVzLmVtX2Nsb3NlID0gKHRva2VucywgaWR4KSA9PiBkZXRlY3RCcmVhayh0b2tlbnMsIGlkeCwgJ18nKTtcblxuLyoqXG4gKiBTdHJpa2V0aHJvdWdoXG4gKi9cblxucnVsZXMuZGVsX29wZW4gPSAoKSA9PiAnfn4nO1xucnVsZXMuZGVsX2Nsb3NlID0gKHRva2VucywgaWR4KSA9PiBkZXRlY3RCcmVhayh0b2tlbnMsIGlkeCwgJ35+Jyk7XG5cbi8qKlxuICogSW5zZXJ0XG4gKi9cblxucnVsZXMuaW5zX29wZW4gPSAoKSA9PiAnPGlucz4nO1xucnVsZXMuaW5zX2Nsb3NlID0gKCkgPT4gJzwvaW5zPic7XG5cbi8qKlxuICogSGlnaGxpZ2h0XG4gKi9cblxucnVsZXMubWFya19vcGVuID0gKCkgPT4gJzxtYXJrPic7XG5ydWxlcy5tYXJrX2Nsb3NlID0gKCkgPT4gJzwvbWFyaz4nO1xuXG4vKipcbiAqIFN1cGVyLSBhbmQgc3ViLXNjcmlwdFxuICovXG5cbnJ1bGVzLnN1YiA9ICh0b2tlbnMsIGlkeCkgPT4gYDxzdWI+JHt0b2tlbnNbaWR4XS5jb250ZW50fTwvc3ViPmA7XG5ydWxlcy5zdXAgPSAodG9rZW5zLCBpZHgpID0+IGA8c3VwPiR7dG9rZW5zW2lkeF0uY29udGVudH08L3N1cD5gO1xuXG4vKipcbiAqIEJyZWFrc1xuICovXG5cbnJ1bGVzLmhhcmRicmVhayA9ICgpID0+ICdcXG5cXG4nO1xucnVsZXMuc29mdGJyZWFrID0gKCkgPT4gJ1xcbic7XG5cbi8qKlxuICogVGV4dFxuICovXG5cbnJ1bGVzLnRleHQgPSBmdW5jdGlvbih0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52KSB7XG4gIGxldCBjdHggPSBvcHRpb25zLmNvbnRleHQgfHwge307XG4gIGxldCB0b2tlbiA9IHRva2Vuc1tpZHhdO1xuICBhZGRBbmNob3JzKHRva2VuLCBjdHgpO1xuXG4gIGxldCBwcmV2ID0gdG9rZW5zW2lkeCAtIDFdO1xuICBpZiAocHJldiAmJiBwcmV2LnR5cGUgPT09ICdsaW5rX29wZW4nKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiB0b2tlbi5jb250ZW50O1xufTtcblxuLyoqXG4gKiBDb250ZW50XG4gKi9cblxucnVsZXMuaHRtbGJsb2NrID0gKHRva2VucywgaWR4KSA9PiB0b2tlbnNbaWR4XS5jb250ZW50O1xucnVsZXMuaHRtbHRhZyA9ICh0b2tlbnMsIGlkeCkgPT4gdG9rZW5zW2lkeF0uY29udGVudDtcblxuLyoqXG4gKiBBYmJyZXZpYXRpb25zLCBpbml0aWFsaXNtXG4gKi9cblxucnVsZXMuYWJicl9vcGVuID0gZnVuY3Rpb24odG9rZW5zLCBpZHgpIHtcbiAgcmV0dXJuICc8YWJiciB0aXRsZT1cIicgKyB0b2tlbnNbaWR4XS50aXRsZSArICdcIj4nO1xufTtcbnJ1bGVzLmFiYnJfY2xvc2UgPSBmdW5jdGlvbigvKnRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L2FiYnI+Jztcbn07XG5cbi8qKlxuICogRm9vdG5vdGVzXG4gKi9cblxucnVsZXMuZm9vdG5vdGVfcmVmID0gZnVuY3Rpb24odG9rZW5zLCBpZHgpIHtcbiAgbGV0IG4gPSBOdW1iZXIodG9rZW5zW2lkeF0uaWQgKyAxKS50b1N0cmluZygpO1xuICBsZXQgaWQgPSAnZm5yZWYnICsgbjtcbiAgaWYgKHRva2Vuc1tpZHhdLnN1YklkID4gMCkge1xuICAgIGlkICs9ICc6JyArIHRva2Vuc1tpZHhdLnN1YklkO1xuICB9XG4gIHJldHVybiAnPHN1cCBjbGFzcz1cImZvb3Rub3RlLXJlZlwiPjxhIGhyZWY9XCIjZm4nICsgbiArICdcIiBpZD1cIicgKyBpZCArICdcIj5bJyArIG4gKyAnXTwvYT48L3N1cD4nO1xufTtcbnJ1bGVzLmZvb3Rub3RlX2Jsb2NrX29wZW4gPSBmdW5jdGlvbih0b2tlbnMsIGlkeCwgb3B0aW9ucykge1xuICBsZXQgaHIgPSBvcHRpb25zLnhodG1sT3V0XG4gICAgPyAnPGhyIGNsYXNzPVwiZm9vdG5vdGVzLXNlcFwiIC8+XFxuJ1xuICAgIDogJzxociBjbGFzcz1cImZvb3Rub3Rlcy1zZXBcIj5cXG4nO1xuICByZXR1cm4gaHIgKyAnPHNlY3Rpb24gY2xhc3M9XCJmb290bm90ZXNcIj5cXG48b2wgY2xhc3M9XCJmb290bm90ZXMtbGlzdFwiPlxcbic7XG59O1xucnVsZXMuZm9vdG5vdGVfYmxvY2tfY2xvc2UgPSAoKSA9PiAnPC9vbD5cXG48L3NlY3Rpb24+XFxuJztcbnJ1bGVzLmZvb3Rub3RlX29wZW4gPSBmdW5jdGlvbih0b2tlbnMsIGlkeCkge1xuICBsZXQgaWQgPSBOdW1iZXIodG9rZW5zW2lkeF0uaWQgKyAxKS50b1N0cmluZygpO1xuICByZXR1cm4gJzxsaSBpZD1cImZuJyArIGlkICsgJ1wiICBjbGFzcz1cImZvb3Rub3RlLWl0ZW1cIj4nO1xufTtcbnJ1bGVzLmZvb3Rub3RlX2Nsb3NlID0gKCkgPT4gJzwvbGk+XFxuJztcbnJ1bGVzLmZvb3Rub3RlX2FuY2hvciA9IGZ1bmN0aW9uKHRva2VucywgaWR4KSB7XG4gIGxldCBuID0gTnVtYmVyKHRva2Vuc1tpZHhdLmlkICsgMSkudG9TdHJpbmcoKTtcbiAgbGV0IGlkID0gJ2ZucmVmJyArIG47XG4gIGlmICh0b2tlbnNbaWR4XS5zdWJJZCA+IDApIHtcbiAgICBpZCArPSAnOicgKyB0b2tlbnNbaWR4XS5zdWJJZDtcbiAgfVxuICByZXR1cm4gJyA8YSBocmVmPVwiIycgKyBpZCArICdcIiBjbGFzcz1cImZvb3Rub3RlLWJhY2tyZWZcIj7ihqk8L2E+Jztcbn07XG5cbi8qKlxuICogRGVmaW5pdGlvbiBsaXN0c1xuICovXG5cbnJ1bGVzLmRsX29wZW4gPSAoKSA9PiAnPGRsPlxcbic7XG5ydWxlcy5kdF9vcGVuID0gKCkgPT4gJzxkdD4nO1xucnVsZXMuZGRfb3BlbiA9ICgpID0+ICc8ZGQ+JztcbnJ1bGVzLmRsX2Nsb3NlID0gKCkgPT4gJzwvZGw+XFxuJztcbnJ1bGVzLmR0X2Nsb3NlID0gKCkgPT4gJzwvZHQ+XFxuJztcbnJ1bGVzLmRkX2Nsb3NlID0gKCkgPT4gJzwvZGQ+XFxuJztcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb25zXG4gKi9cblxuZnVuY3Rpb24gbmV4dFRva2VuKHRva2VucywgaWR4KSB7XG4gIGlmICgrK2lkeCA+PSB0b2tlbnMubGVuZ3RoIC0gMikge1xuICAgIHJldHVybiBpZHg7XG4gIH1cbiAgaWYgKCh0b2tlbnNbaWR4XS50eXBlID09PSAncGFyYWdyYXBoX29wZW4nICYmIHRva2Vuc1tpZHhdLnRpZ2h0KSAmJlxuICAgICAgKHRva2Vuc1tpZHggKyAxXS50eXBlID09PSAnaW5saW5lJyAmJiB0b2tlbnNbaWR4ICsgMV0uY29udGVudC5sZW5ndGggPT09IDApICYmXG4gICAgICAodG9rZW5zW2lkeCArIDJdLnR5cGUgPT09ICdwYXJhZ3JhcGhfY2xvc2UnICYmIHRva2Vuc1tpZHggKyAyXS50aWdodCkpIHtcbiAgICByZXR1cm4gbmV4dFRva2VuKHRva2VucywgaWR4ICsgMik7XG4gIH1cbiAgcmV0dXJuIGlkeDtcbn1cblxuLyoqXG4gKiBDaGVjayB0byBzZWUgaWYgYFxcbmAgaXMgbmVlZGVkIGJlZm9yZSB0aGUgbmV4dCB0b2tlbi5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gYHRva2Vuc2BcbiAqIEBwYXJhbSAge051bWJlcn0gYGlkeGBcbiAqIEByZXR1cm4ge1N0cmluZ30gRW1wdHkgc3RyaW5nIG9yIG5ld2xpbmVcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IGdldEJyZWFrID0gcnVsZXMuZ2V0QnJlYWsgPSAodG9rZW5zLCBpZHgpID0+IHtcbiAgaWR4ID0gbmV4dFRva2VuKHRva2VucywgaWR4KTtcbiAgaWYgKGlkeCA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2lkeF0udHlwZSA9PT0gJ2xpc3RfaXRlbV9jbG9zZScpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuICdcXG4nO1xufTtcblxuZnVuY3Rpb24gYWRkQW5jaG9ycyh0b2tlbiwgY3R4KSB7XG4gIGNvbnN0IHJlID0gLyghP1xcWyhbXlxcXV0rKVxcXSkoXFxbKFteXFxdXSspXFxdfCg/OlxcW1xcXSkpPyhcXHsoI1tefV0rKVxcfSkqL2c7XG4gIGxldCBtYXRjaDtcbiAgbGV0IHN0ciA9IHRva2VuLmNvbnRlbnQ7XG5cbiAgd2hpbGUgKChtYXRjaCA9IHJlLmV4ZWMoc3RyKSkpIHtcbiAgICBsZXQgcmVmbGluayA9IG1hdGNoWzFdO1xuICAgIGxldCB0ZXh0ID0gbWF0Y2hbMl0gfHwgJyc7XG4gICAgbGV0IGNvbElubmVyID0gbWF0Y2hbNF0gfHwgJyc7XG4gICAgbGV0IGFuY2hvciA9IG1hdGNoWzVdIHx8ICcnO1xuICAgIGxldCBpbm5lciA9IG1hdGNoWzZdIHx8ICcnO1xuXG4gICAgbGV0IGJlZm9yZSA9IHN0cjtcbiAgICBpZiAoY3R4LnJlZmxpbmtzICYmIGN0eC5yZWZsaW5rcy5oYXNPd25Qcm9wZXJ0eSh0ZXh0KSkge1xuICAgICAgbGV0IHJlc29sdmVkID0gcmVmbGluayArICcoJyArIGN0eC5yZWZsaW5rc1t0ZXh0XS50cmltKCkgKyBpbm5lciArICcpJztcblxuICAgICAgbGV0IHJlU3RyID0gJyhefFteXFxcXFtdKz8pXFxcXCE/JyArIGVzY2FwZVJlKHJlZmxpbmspXG4gICAgICAgICsgJyg/Oig/OlxcXFxbJyArIHRleHQgKyAnXFxcXF0pfFxcXFxbXFxcXF18KD86XFxcXFsnICsgY29sSW5uZXIgKyAnXFxcXF0pKSonXG4gICAgICAgICsgKGFuY2hvciA/IGVzY2FwZVJlKGFuY2hvcikgOiAnJykgKyAnKFtcXFxcc1xcXFxTXSs/fCQpJztcblxuICAgICAgdG9rZW4uY29udGVudCA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAocmVTdHIpLCBmdW5jdGlvbihtLCAkMSwgJDIpIHtcbiAgICAgICAgcmV0dXJuICQxICsgcmVzb2x2ZWQgKyAkMjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdHIgPT09IGJlZm9yZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUFuY2hvcnMocHJldiwgdG9rZW4sIG5leHQsIGFmdGVyLCBjdHgpIHtcbiAgaWYgKCF0b2tlbi5zcmMpIHJldHVybjtcbiAgY29uc3QgcmUgPSAvKD86KFtee10rKSk/KFxceyhbIy9dW159XSspXFx9KS87XG4gIGxldCBiZWZvcmU7XG4gIGxldCBtYXRjaDtcblxuICBsZXQgbmV4dFRvayA9IG5leHQuY29udGVudCA/IG5leHQgOiBhZnRlcjtcblxuICB3aGlsZSAoKG1hdGNoID0gcmUuZXhlYyhuZXh0VG9rLmNvbnRlbnQpKSkge1xuICAgIGJlZm9yZSA9IG5leHRUb2suY29udGVudDtcbiAgICBuZXh0VG9rLmNvbnRlbnQgPSBuZXh0VG9rLmNvbnRlbnQuc3BsaXQobWF0Y2hbMF0pLmpvaW4oJycpO1xuICAgIGlmIChiZWZvcmUgPT09IG5leHRUb2suY29udGVudCkgYnJlYWs7XG5cbiAgICBpZiAocHJldi5ocmVmKSB7XG4gICAgICBwcmV2LmhyZWYgKz0gbWF0Y2hbM107XG4gICAgfSBlbHNlIGlmICh0b2tlbi5zcmMpIHtcbiAgICAgIHRva2VuLnNyYyArPSBtYXRjaFszXTtcbiAgICB9XG4gIH1cblxuICB3aGlsZSAoKG1hdGNoID0gcmUuZXhlYyh0b2tlbi5zcmMpKSkge1xuICAgIGJlZm9yZSA9IHRva2VuLnNyYztcbiAgICB0b2tlbi5zcmMgPSBtYXRjaFsxXSArIG1hdGNoWzNdIHx8ICcnO1xuICAgIGlmIChiZWZvcmUgPT09IHRva2VuLnNyYykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRldGVjdEJyZWFrKHRva2VucywgaWR4LCBjaCkge1xuICBsZXQgbmV4dCA9IHRva2Vuc1tpZHggKyAxXTtcbiAgbGV0IHJlcyA9IGNoO1xuICBpZiAoIW5leHQgfHwgbmV4dC50eXBlID09PSAnc29mdGJyZWFrJykge1xuICAgIHJlcyArPSAnXFxuJztcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBsdmwobGV2ZWwpIHtcbiAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsO1xuICBsZXZlbCA9IGxldmVsIC0gMTtcbiAgcmV0dXJuIGxldmVsID4gMCA/IChsZXZlbCAvIDIpIDogMDtcbn1cblxuLyoqXG4gKiBFeHBvc2UgYHJ1bGVzYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcnVsZXM7XG4iLCIvKiFcbiAqIHByZXR0eS1yZW1hcmthYmxlIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9wcmV0dHktcmVtYXJrYWJsZT5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxOCwgcHJlc2VudCwgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBydWxlcyA9IHJlcXVpcmUoJy4vbGliL3J1bGVzJyk7XG5cbi8qKlxuICogUmVnaXN0ZXIgYXMgYSBwbHVnaW4gYnkgcGFzc2luZyBgcHJldHRpZnlgIHRvIHJlbWFya2FibGUnc1xuICogYC51c2UoKWAgbWV0aG9kLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtZCA9IG5ldyBSZW1hcmthYmxlKCk7XG4gKiBtZC51c2UocHJldHRpZnkpO1xuICogY29uc3QgcmVzdWx0ID0gbWQucmVuZGVyKHN0cik7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gcHJldHRpZnkobWQpIHtcbiAgYXN0KG1kKTtcbiAgY29uc3QgcmVuZGVyID0gbWQucmVuZGVyO1xuXG4gIG1kLnJlbmRlciA9IGZ1bmN0aW9uKHN0ciwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgICB9XG4gICAgc3RyID0gc3RyLnNwbGl0KC9cXF1cXFtcXF1cXHMqXFxuXFxzKlxcWy8pLmpvaW4oJ11bXVxcblxcblsnKTtcbiAgICByZXR1cm4gcmVuZGVyLmNhbGwobWQsIHN0ciwgb3B0aW9ucyk7XG4gIH07XG5cbiAgbWQucmVuZGVyZXIucmVuZGVySW5saW5lID0gZnVuY3Rpb24odG9rZW5zLCBvcHRpb25zLCBlbnYpIHtcbiAgICBjb25zdCBfcnVsZXMgPSBydWxlcztcbiAgICBsZXQgbGVuID0gdG9rZW5zLmxlbmd0aCwgaSA9IDA7XG4gICAgbGV0IHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICBzdHIgKz0gX3J1bGVzW3Rva2Vuc1tpXS50eXBlXSh0b2tlbnMsIGkrKywgb3B0aW9ucywgZW52LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfTtcblxuICBtZC5yZW5kZXJlci5yZW5kZXIgPSBmdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMsIGVudikge1xuICAgIGxldCBfcnVsZXMgPSBydWxlcztcbiAgICBsZXQgbGVuID0gdG9rZW5zLmxlbmd0aCwgaSA9IC0xO1xuICAgIGxldCBzdHIgPSAnJztcblxuICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgIGxldCB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgIGlmICh0b2tlbi50eXBlID09PSAnaW5saW5lJykge1xuICAgICAgICBzdHIgKz0gdGhpcy5yZW5kZXJJbmxpbmUodG9rZW4uY2hpbGRyZW4sIG9wdGlvbnMsIGVudik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgKz0gX3J1bGVzW3Rva2VuLnR5cGVdKHRva2VucywgaSwgb3B0aW9ucywgZW52LCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jb25kZW5zZSAhPT0gZmFsc2UpIHtcbiAgICAgIHN0ciA9IHN0ci5zcGxpdCgvKD86XFxyXFxufFxcbil7Mix9Lykuam9pbignXFxuXFxuJyk7XG4gICAgfVxuXG4gICAgbGV0IG5ld2xpbmUgPSAnXFxuJztcbiAgICBpZiAob3B0aW9ucy5uZXdsaW5lID09PSBmYWxzZSkge1xuICAgICAgbmV3bGluZSA9ICcnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubmV3bGluZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5ld2xpbmUgPSBvcHRpb25zLm5ld2xpbmU7XG4gICAgfVxuICAgIHN0ciA9IHN0ci50cmltKCkgKyBuZXdsaW5lO1xuICAgIHJldHVybiBzdHI7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGFzdChtZCkge1xuICBsZXQgcGFyc2UgPSBtZC5wYXJzZTtcblxuICBtZC5wYXJzZSA9IGZ1bmN0aW9uKHN0ciwgb3B0aW9ucykge1xuICAgIGxldCB0b2tlbnMgPSBwYXJzZS5hcHBseShtZCwgYXJndW1lbnRzKTtcbiAgICBsZXQgYXN0ID0ge3R5cGU6ICdyb290Jywgbm9kZXM6IFtdfTtcbiAgICBsZXQgbm9kZXMgPSBbYXN0XTtcbiAgICBsZXQgc3RhY2sgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGxhc3QoKSB7XG4gICAgICByZXR1cm4gc3RhY2subGVuZ3RoID8gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gOiBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICB2aXNpdCh7bm9kZXM6IHRva2Vuc30sIGZ1bmN0aW9uKHRvaykge1xuICAgICAgaWYgKHRvay5jaGlsZHJlbikge1xuICAgICAgICBkZWZpbmUodG9rLCAnY2hpbGRyZW4nLCB0b2suY2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJldiA9IGxhc3QoKTtcbiAgICAgIGxldCBtYXRjaCA9IHBhcnNlVHlwZSh0b2spO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGlmIChtYXRjaFsyXSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgbGV0IG5vZGUgPSB7dHlwZTogbWF0Y2hbMV0sIG5vZGVzOiBbdG9rXX07XG4gICAgICAgICAgZGVmaW5lKHRvaywgJ3BhcmVudCcsIG5vZGUpO1xuICAgICAgICAgIGRlZmluZShub2RlLCAncGFyZW50JywgcHJldik7XG4gICAgICAgICAgcHJldi5ub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHBhcmVudCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgIGRlZmluZSh0b2ssICdwYXJlbnQnLCBwYXJlbnQpO1xuICAgICAgICAgIHBhcmVudC5ub2Rlcy5wdXNoKHRvayk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmluZSh0b2ssICdwYXJlbnQnLCBwcmV2KTtcbiAgICAgICAgaWYgKHRvay50eXBlICE9PSAnaW5saW5lJykge1xuICAgICAgICAgIHByZXYubm9kZXMucHVzaCh0b2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0b2tlbnMuYXN0ID0gYXN0O1xuICAgIHJldHVybiB0b2tlbnM7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZSh0b2spIHtcbiAgcmV0dXJuIC8oLio/KV8ob3BlbnxjbG9zZSkkLy5leGVjKHRvay50eXBlKTtcbn1cblxuZnVuY3Rpb24gdmlzaXQobm9kZSwgZm4pIHtcbiAgZm4obm9kZSk7XG4gIGlmIChub2RlLm5vZGVzIHx8IG5vZGUuY2hpbGRyZW4pIHtcbiAgICBtYXBWaXNpdChub2RlLCBmbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwVmlzaXQobm9kZSwgZm4pIHtcbiAgdmFyIG5vZGVzID0gbm9kZS5ub2RlcyB8fCBub2RlLmNoaWxkcmVuO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmlzaXQobm9kZXNbaV0sIGZuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWUgfSk7XG59XG5cbi8qKlxuICogZXhwb3NlIGBwcmV0dGlmeWBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByZXR0aWZ5O1xuIiwiaW1wb3J0IHtBcHAsIE1hcmtkb3duVmlldywgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFifSBmcm9tIFwib2JzaWRpYW5cIjtcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7UmVtYXJrYWJsZX0gZnJvbSBcInJlbWFya2FibGVcIjtcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBwcmV0dGlmeSBmcm9tIFwicHJldHR5LXJlbWFya2FibGVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blByZXR0aWZpZXIgZXh0ZW5kcyBQbHVnaW4ge1xuICAgIHNldHRpbmc6IE1hcmtkb3duUHJldHRpZmllclNldHRpbmdzO1xuXG4gICAgb25Jbml0KCkge1xuICAgIH1cblxuICAgIGFzeW5jIG9ubG9hZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIE1hcmtkb3duLVByZXR0aWZpZXJcIik7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5nID0gKGF3YWl0IHRoaXMubG9hZERhdGEoKSkgfHwgbmV3IE1hcmtkb3duUHJldHRpZmllclNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgTWFya2Rvd25QcmV0dGlmaWVyU2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICAgICAgaWQ6IFwibWFya2Rvd24tcHJldHRpZmllclwiLFxuICAgICAgICAgICAgbmFtZTogXCJSdW5cIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnJ1blByZXR0aWZpZXIoKSxcbiAgICAgICAgICAgIGhvdGtleXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogW1wiTW9kXCIsIFwiQWx0XCJdLFxuICAgICAgICAgICAgICAgICAgICBrZXk6IFwibFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbnVubG9hZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJVbmxvYWQgTWFya2Rvd24tUHJldHRpZmllclwiKTtcbiAgICB9XG5cbiAgICBydW5QcmV0dGlmaWVyKCkge1xuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWYudmlldztcbiAgICAgICAgaWYgKHZpZXcgaW5zdGFuY2VvZiBNYXJrZG93blZpZXcpIHtcbiAgICAgICAgICAgIC8vIERvIHdvcmsgaGVyZVxuICAgICAgICAgICAgY29uc3QgZWRpdG9yID0gdmlldy5zb3VyY2VNb2RlLmNtRWRpdG9yO1xuXG4gICAgICAgICAgICBsZXQgdGV4dCA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxuXG4gICAgICAgICAgICAvLyBOb3RoaW5nIHNlbGVjdGVkLCBmYWxsIGJhY2sgdG8gc2VsZWN0IGFsbC5cbiAgICAgICAgICAgIGlmICh0ZXh0PT0nJyl7XG4gICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdzZWxlY3RBbGwnKVxuICAgICAgICAgICAgICAgIHRleHQgPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmV3U3RyaW5nID0gdGhpcy5wcmV0dGlmeSh0ZXh0KTtcbiAgICAgICAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKG5ld1N0cmluZywgXCJzdGFydFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByZXR0aWZ5KHRleHQ6IFN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBuZXcgUmVtYXJrYWJsZSgpXG4gICAgICAgICAgICAudXNlKHByZXR0aWZ5KVxuICAgICAgICAgICAgLnJlbmRlcih0ZXh0KTtcbiAgICB9XG59XG5cbmNsYXNzIE1hcmtkb3duUHJldHRpZmllclNldHRpbmdzIHtcbiAgICAvLyBmaXJzdE51bWJlciA9IDA7XG4gICAgLy8gc2Vjb25kTnVtYmVyID0gNTtcbn1cblxuY2xhc3MgTWFya2Rvd25QcmV0dGlmaWVyU2V0dGluZ3NUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgICBwbHVnaW46IE1hcmtkb3duUHJldHRpZmllcjtcblxuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IE1hcmtkb3duUHJldHRpZmllcikge1xuICAgICAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIH1cblxuICAgIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHtjb250YWluZXJFbH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMucGx1Z2luLnNldHRpbmc7XG4gICAgICAgIC8vIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAvLyAgICAgLnNldE5hbWUoXCJGaXJzdCBzZXR0aW5nXCIpXG4gICAgICAgIC8vICAgICAuc2V0RGVzYyhcbiAgICAgICAgLy8gICAgICAgICBcIkV4cGxhbmF0aW9uIGZvciB0aGUgZmlyc3Qgc2V0dGluZy5cIlxuICAgICAgICAvLyAgICAgKVxuICAgICAgICAvLyAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIC8vICAgICAgICAgdGV4dC5zZXRWYWx1ZShTdHJpbmcoc2V0dGluZ3MuZmlyc3ROdW1iZXIpKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKCFpc05hTihOdW1iZXIodmFsdWUpKSkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2V0dGluZ3MuZmlyc3ROdW1iZXIgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEoc2V0dGluZ3MpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgICk7XG4gICAgICAgIC8vIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAvLyAgICAgLnNldE5hbWUoXCJTZWNvbmQgbnVtYmVyXCIpXG4gICAgICAgIC8vICAgICAuc2V0RGVzYyhcIkkgZG9uJ3Qga25vdyB5ZXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBzZWNvbmQgbnVtYmVyLlwiKVxuICAgICAgICAvLyAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIC8vICAgICAgICAgdGV4dC5zZXRWYWx1ZShTdHJpbmcoc2V0dGluZ3MuZmlyc3ROdW1iZXIpKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKCFpc05hTihOdW1iZXIodmFsdWUpKSkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2V0dGluZ3Muc2Vjb25kTnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHNldHRpbmdzKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgIC8vICAgICApO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJ1dGlsIiwidG9SZWdleCIsImZpbGwiLCJsaXN0aXRlbSIsIm1kdSIsInJ1bGVzIiwiTWFya2Rvd25WaWV3IiwiUmVtYXJrYWJsZSIsInByZXR0aWZ5IiwiUGx1Z2luIiwiUGx1Z2luU2V0dGluZ1RhYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxF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TyxDQUFDLFFBQVE7QUFDbEIsRUFBRSxPQUFPLENBQUMsUUFBUTtBQUNsQixFQUFFLE9BQU8sQ0FBQyxRQUFRO0FBQ2xCLEVBQUUsT0FBTyxDQUFDLFFBQVE7QUFDbEIsRUFBRSxPQUFPLENBQUMsUUFBUTtBQUNsQixFQUFFLFVBQVUsQ0FBQyxRQUFRO0FBQ3JCLEVBQUUsU0FBUyxDQUFDLFFBQVE7QUFDcEIsRUFBRSxVQUFVLENBQUMsUUFBUTtBQUNyQixFQUFFLE9BQU8sQ0FBQyxRQUFRO0FBQ2xCLEVBQUUsT0FBTyxDQUFDLFFBQVE7QUFDbEIsRUFBRSxPQUFPLENBQUMsUUFBUTtBQUNsQixFQUFFLE9BQU8sQ0FBQyxRQUFRO0FBQ2xCLEVBQUUsT0FBTyxDQUFDLFFBQVE7QUFDbEIsRUFBRSxPQUFPLENBQUMsUUFBUTtBQUNsQixFQUFFLE9BQU8sQ0FBQyxRQUFRO0FBQ2xCLEVBQUUsT0FBTyxDQUFDLFFBQVE7QUFDbEIsRUFBRSxNQUFNLENBQUMsUUFBUTtBQUNqQixFQUFFLE1BQU0sQ0FBQyxRQUFRO0FBQ2pCLEVBQUUsT0FBTyxDQUFDLFFBQVE7QUFDbEIsRUFBRSxPQUFPLENBQUMsUUFBUTtBQUNsQixFQUFFLE9BQU8sQ0FBQyxRQUFRO0FBQ2xCLEVBQUUsT0FBTyxDQUFDLFFBQVE7QUFDbEIsRUFBRSxPQUFPLENBQUMsUUFBUTtBQUNsQixFQUFFLE9BQU8sQ0FBQyxRQUFRO0FBQ2xCLEVBQUUsT0FBTyxDQUFDLFFBQVE7QUFDbEIsRUFBRSxPQUFPLENBQUMsUUFBUTtBQUNsQixFQUFFLE9BQU8sQ0FBQyxRQUFRO0FBQ2xCLEVBQUUsT0FBTyxDQUFDLFFBQVE7QUFDbEIsRUFBRSxPQUFPLENBQUMsUUFBUTtBQUNsQixFQUFFLE9BQU8sQ0FBQyxRQUFRO0FBQ2xCLEVBQUUsUUFBUSxDQUFDLFFBQVE7QUFDbkIsRUFBRSxPQUFPLENBQUMsUUFBUTtBQUNsQixFQUFFLE9BQU8sQ0FBQyxRQUFRO0FBQ2xCLEVBQUUsUUFBUSxDQUFDLFFBQVE7QUFDbkIsRUFBRSxNQUFNLENBQUMsUUFBUTtBQUNq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Q3RDO0FBQ0EsRUFBRSxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ2xGO0FBQ0EsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQUssR0FBRyxHQUFHLFFBQVEsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUM3QyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFO0FBQ2xELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDdkQsRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztBQUMzQixFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNkLEVBQUUsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ3hDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUU7QUFDbEQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFB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QUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUNyRCxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFDRDtBQUNBO0FBQ0EsU0FBUyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7QUFDbkMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFNBQVMsV0FBVyxDQUFDLEtBQUssRUFBRTtBQUM1QjtBQUNBLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJO0FBQ3hFLE1BQU0sT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNO0FBQ3BELE1BQU0sS0FBSyxDQUFDO0FBQ1o7QUFDQSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRTtBQUM3QztBQUNBLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNiO0FBQ0EsRUFBRSxLQUFLLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRTtBQUNoRTtBQUNBLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUUsRUFBRSxTQUFTLEVBQUU7QUFDN0Q7QUFDQSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxD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S0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3BFLElBQUksSUFBSSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xFLElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdkMsR0FBRztBQUNIO0FBQ0EsRUFBRSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2pDO0FBQ0EsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLElBQUksSUFBSSxLQUFLLEdBQUcsTUFBTSxFQUFFLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFO0FBQzNDLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ2pDO0FBQ0EsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDdEM7QUFDQSxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxFQUFFO0FBQ3RDO0FBQ0EsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsS0FBSyxNQUFNO0FBQ1gsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFD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LEVBQUUsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDOUIsRUFBRSxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUN0QjtBQUNBLEVBQUUsU0FBUyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO0FBQzFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDaEM7QUFDQTtBQUNBLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDaEQsRUFBRSxhQUFhLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztBQUM3QjtBQUNBLEVBQUUsU0FBUyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO0FBQzFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxRDtBQUNBLEVBQUUsZUFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBSyxRQUFRLEdBQUcsU0FBUyxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO0FBQ2pFLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FB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QUFTLEVBQUU7QUFDaEQsRUFBRSxJQUFJLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQ3ZCO0FBQ0EsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFELEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDaEM7QUFDQSxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNoQztBQUNBLEVBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDdkM7QUFDQSxFQUFFLElBQUksTUFBTSxLQUFLLElBQUk7QUFDckIsTUFBTSxNQUFNLEtBQUssSUFBSTtBQUNyQixNQUFNLE1BQU0sS0FBSyxJQUFJLFNBQVM7QUFDOUIsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2QsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFO0FBQ3ZEO0FBQ0EsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2QsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxTQUFTLHFCQUFxQixDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUU7QUFDakQsRUFBRSxJQUFJLEVBQUU7QUFDUixNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQzdELE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEM7QUFDQSxFQUFFLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDcEM7QUFDQSxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ25DO0FBQ0EsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLFdBQVcsRUFBRSxHQUFHLElBQUksU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUMxRDtBQUNBLEVBQUUsU0FBUztBQUNYO0FBQ0EsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDbEM7QUFDQSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDO0FBQ0EsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLFdBQVcsRUFBRSxJQUFJLElBQUksU0FBUztBQUNoRCxNQUFNLFNBQVM7QUFDZixLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksSUFBSSxFQUFFLEtBQUssSUFBSSxXQUFXLEVBQUUsS0FBSyxJQUFJLFNBQVM7QUFDbEQsTUFBTSxNQUFNO0FBQ1osS0FBSztBQUNMO0FBQ0EsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2QsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLGFBQWE7QUFDbEU7QUFDQSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDZCxHQUFHO0FBQ0gsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFDRDtBQUNBLFNBQVMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDVixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUM5QjtBQUNBLEVBQUUsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0QsSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsRUFBRTtBQUN0RixNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDdkMsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2IsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFNBQVMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUNqRCxFQUFFLElBQUksUUFBUTtBQUNkLE1BQU0sTUFBTTtBQUNaLE1BQU0sU0FBUztBQUNmLE1BQU0sU0FBUztBQUNmLE1BQU0sUUFBUTtBQUNkLE1BQU0sYUFBYTtBQUNuQixNQUFNLEtBQUs7QUFDWCxNQUFNLGNBQWM7QUFDcEIsTUFBTSxHQUFHO0FBQ1QsTUFBTSxpQkFBaUI7QUFDdkIsTUFBTSxXQUFXO0FBQ2pCLE1BQU0sY0FBYztBQUNwQixNQUFNLFNBQVM7QUFDZixNQUFNLFlBQVk7QUFDbEIsTUFBTSxVQUFVO0FBQ2hCLE1BQU0sWUFBWTtBQUNsQixNQUFNLFNBQVM7QUFDZixNQUFNLFNBQVM7QUFDZixNQUFNLEtBQUssR0FBRyxJQUFJO0FBQ2xCLE1BQU0sZUFBZTtBQUNyQixNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDO0FBQ3RCO0FBQ0E7QUFDQSxFQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN2RSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDckIsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUM3RSxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFDdEIsR0FBRyxNQUFNO0FBQ1QsSUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDaEU7QUFDQTtBQUNBLEVBQUUsY0FBYyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1RDtBQUNBO0FBQ0EsRUFBRSxJQUFJLE1BQU0sRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUU7QUFDOUI7QUFDQTtBQUNBLEVBQUUsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ25DO0FBQ0EsRUFBRSxJQUFJLFNBQVMsRUFBRTtBQUNqQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUQsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxjQUFjLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUU7QUFDQSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3RCLE1BQU0sSUFBSSxFQUFFLG1CQUFtQjtBQUMvQixNQUFNLEtBQUssRUFBRSxXQUFXO0FBQ3hCLE1BQU0sS0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUU7QUFDekMsTUFBTSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRTtBQUMxQixLQUFLLENBQUMsQ0FBQztBQUNQO0FBQ0EsR0FBRyxNQUFNO0FBQ1QsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUN0QixNQUFNLElBQUksRUFBRSxrQkFBa0I7QUFDOUIsTUFBTSxLQUFLLEVBQUUsU0FBUyxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRTtBQUN6QyxNQUFNLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQzFCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFFBQVEsR0FBRyxTQUFTLENBQUM7QUFDdkIsRUFBRSxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLEVBQUUsZUFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4RDtBQUNBLEVBQUUsT0FBTyxRQUFRLEdBQUcsT0FBTyxFQUFFO0FBQzdCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDcEQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQztBQUNBLElBQUksSUFBSSxZQUFZLElBQUksR0FBRyxFQUFFO0FBQzdCO0FBQ0EsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDNUIsS0FBSyxNQUFNO0FBQ1gsTUFBTSxpQkFBaUIsR0FBRyxZQUFZLEdBQUcsY0FBYyxDQUFDO0FBQ3hELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksaUJBQWlCLEdBQUcsQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLGlCQUFpQixHQUFHLENBQUMsRUFBRSxFQUFFLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLElBQUksTUFBTSxHQUFHLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUM7QUFDM0U7QUFDQTtBQUNBLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdEIsTUFBTSxJQUFJLEVBQUUsZ0JBQWdCO0FBQzVCLE1BQU0sS0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUU7QUFDekMsTUFBTSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRTtBQUMxQixLQUFLLENBQUMsQ0FBQztBQUNQO0FBQ0EsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztBQUNoQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQzNCLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDeEMsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztBQUNyQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckUsSUFBSSxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUM3QixJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLElBQUksS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7QUFDOUI7QUFDQSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNEO0FBQ0E7QUFDQSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLFlBQVksRUFBRTtBQUN0QyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLFlBQVksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsU0FBUyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakY7QUFDQSxJQUFJLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ2hDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7QUFDeEMsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztBQUMzQixJQUFJLEtBQUssQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO0FBQ3JDO0FBQ0EsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUN0QixNQUFNLElBQUksRUFBRSxpQkFBaUI7QUFDN0IsTUFBTSxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSztBQUMxQixLQUFLLENBQUMsQ0FBQztBQUNQO0FBQ0EsSUFBSSxRQUFRLEdBQUcsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDdEMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBQzVCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDM0M7QUFDQSxJQUFJLElBQUksUUFBUSxJQUFJLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRTtBQUN2QztBQUNBLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ2pDLE1BQU0sTUFBTTtBQUNaLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUU7QUFDNUQ7QUFDQTtBQUNBLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN0QixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3hELE1BQU0sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUU7QUFDOUQsUUFBUSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFFBQVEsTUFBTTtBQUNkLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSxJQUFJLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRTtBQUM3QjtBQUNBO0FBQ0EsSUFBSSxJQUFJLFNBQVMsRUFBRTtBQUNuQixNQUFNLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDOUQsTUFBTSxJQUFJLGNBQWMsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUU7QUFDeEMsS0FBSyxNQUFNO0FBQ1gsTUFBTSxjQUFjLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzdELE1BQU0sSUFBSSxjQUFjLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFO0FBQ3hDLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxjQUFjLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFO0FBQy9FLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNwQixJQUFJLElBQUksRUFBRSxTQUFTLEdBQUcsb0JBQW9CLEdBQUcsbUJBQW1CO0FBQ2hFLElBQUksS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUs7QUFDeEIsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDMUI7QUFDQSxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQ3hCO0FBQ0E7QUFDQSxFQUFFLElBQUksS0FBSyxFQUFFO0FBQ2IsSUFBSSxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDM0MsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDckQsRUFBRSxJQUFJLFFBQVEsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxLQUFLO0FBQ3BELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDL0QsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwQztBQUNBO0FBQ0EsRUFBRSxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUN4QztBQUNBLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQ3BFLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUN4RSxFQUFFLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDaEU7QUFDQSxFQUFFLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUMxQyxJQUFJLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUM3RCxJQUFJLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxVQUFVO0FBQ3BELE1BQU0sTUFBTTtBQUNaLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksR0FBRyxLQUFLLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQzFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLElBQUksVUFBVSxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDdkYsRUFBRSxJQUFJLE1BQU0sRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUU7QUFDOUIsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNSO0FBQ0EsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRTtBQUN6RCxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUU7QUFDbkUsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsRUFB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QyxFQUFFLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDakU7QUFDQSxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEQsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQjtBQUNBLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUNuQztBQUNBLEVBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDO0FBQ0EsRUFBRSxJQUFJLE1BQU0sS0FBSyxJQUFJLFdBQVcsTUFBTSxLQUFLLElBQUksU0FBUyxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDekU7QUFDQSxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNyQztBQUNBLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUI7QUFDQSxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDbEM7QUFDQSxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDMUQ7QUFDQSxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUN4QixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3BCLElBQUksSUFBSSxFQUFFLGNBQWM7QUFDeEIsSUFBSSxNQUFNLEVBQUUsTUFBTSxLQUFLLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQztBQUMxQyxJQUFJLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQ3BDLElBQUksS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO0FBQ3RCLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNwQixJQUFJLElBQUksRUFBRSxRQUFRO0FBQ2xCLElBQUksT0FBTyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO0FBQ2pFLElBQUksS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQztBQUMxQixJQUFJLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtBQUN4QyxJQUFJLFFBQVEsRUFBRSxFQUFFO0FBQ2hCLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNwQixJQUFJLElBQUksRUFBRSxlQUFlO0FBQ3pCLElBQUksTUFBTSxFQUFFLE1BQU0sS0FBSyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUM7QUFDMUMsSUFBSSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7QUFDdEIsR0FBRyxDQUFDLENBQUM7QUFDTDtBQUNBLEVBQUUsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDckI7QUFDQTtBQUNBLEVBQUUsU0FBUztBQUNYLEVBQUUsT0FBTztBQUNULEVBQUUsUUFBUTtBQUNWLEVBQUUsWUFBWTtBQUNkLEVBQUUsTUFBTTtBQUNSLEVBQUUsUUFBUTtBQUNWLEVBQUUsU0FBUztBQUNYLEVBQUUsS0FBSztBQUNQLEVBQUUsVUFBVTtBQUNaLEVBQUUsSUFBSTtBQUNOLEVBQUUsS0FBSztBQUNQLEVBQUUsSUFBSTtBQUNOLEVBQUUsSUFBSTtBQUNOLEVBQUUsT0FBTztBQUNULEVBQUUsVUFBVTtBQUNaLEVBQUUsWUFBWTtBQUNkLEVBQUUsUUFBUTtBQUNWLEVBQUUsUUFBUTtBQUNWLEVBQUUsTUFBTTtBQUNSLEVBQUUsSUFBSTtBQUNOLEVBQUUsSUFBSTtBQUNOLEVBQUUsSUFBSTtBQUNOLEVBQUUsSUFBSTtBQUNOLEVBQUUsSUFBSTtBQUNOLEVBQUUsSUFBSTtBQUNOLEVBQUUsUUFBUTtBQUNWLEVBQUUsUUFBUTtBQUNWLEVBQUUsSUFBSTtBQUNOLEVBQUUsUUFBUTtBQUNWLEVBQUUsSUFBSTtBQUNOLEVBQUUsS0FBSztBQUNQLEVBQUUsUUFBUTtBQUNWLEVBQUUsSUFBSTtBQUNOLEVBQUUsUUFBUTtBQUNWLEVBQUUsR0FBRztBQUNMLEVBQUUsS0FBSztBQUNQLEVBQUUsVUFBVTtBQUNaLEVBQUUsUUFBUTtBQUNWLEVBQUUsU0FBUztBQUNYLEVBQUUsT0FBTztBQUNULEVBQUUsT0FBTztBQUNULEVBQUUsT0FBTztBQUNULEVBQUUsSUFBSTtBQUNOLEVBQUUsVUFBVTtBQUNaLEVBQUUsT0FBTztBQUNULEVBQUUsSUFBSTtBQUNOLEVBQUUsSUFBSTtBQUNOLEVBQUUsT0FBTztBQUNULEVBQUUsSUFBSTtBQUNOLEVBQUUsT0FBTztBQUNULENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnQkFBZ0IsR0FBRywyQkFBMkIsQ0FBQztBQUNuRCxJQUFJ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QUFFLFVBQVUsR0FBRyxFQUFFLFNBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzVDLElBQUksS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDeEIsR0FBRyxDQUFDLENBQUM7QUFDTDtBQUNBLEVBQUUsS0FBSyxRQUFRLEdBQUcsU0FBUyxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO0FBQ2pFLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUU7QUFDNUQ7QUFDQSxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQy9DLElBQUksSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFO0FBQ2hELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2RDtBQUNBLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2pFLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3RDLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDckY7QUFDQSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUM5QixVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQ2hELFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtBQUMvRixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDZixNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFFBQVEsSUFBSSxFQUFFLFFBQVE7QUFDdEIsUUFBUSxPQUFPLEVBQUUsSUFBSTtBQUNyQixRQUFRLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztBQUMxQixRQUFRLFFBQVEsRUFBRSxFQUFFO0FBQ3BCLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDcEUsS0FBSztBQUNMLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ2xFLEdBQUc7QUFDSCxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNuRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNuRTtBQUNBLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDM0MsRUFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUN4QixFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQ2pDLEVBQUUsSUFBSSxHQUFHLEVBQUUsTUFBTTtBQUNqQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3JELE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0I7QUFDQSxFQUFFLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNsQztBQUNBO0FBQ0EsRUFBRSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUN6QyxFQUFFLElBQUksTUFBTSxLQUFLLElBQUksV0FBVyxNQUFNLEtBQUssSUFBSSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3RFO0FBQ0EsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQztBQUNBO0FBQ0EsRUFBRSxJQUFJLEtBQUssS0FBSyxHQUFHLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDbkM7QUFDQTtBQUNBLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ2hDO0FBQ0EsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFDRDtBQUNBLFNBQVMscUJBQXFCLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDVixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUM5QjtBQUNBLEVBQUUsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0QsSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsRUFBRTtBQUN0RixNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDdkMsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2IsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDcEQsRUFBRSxJQUFJLFlBQVk7QUFDbEIsTUFBTSxNQUFNO0FBQ1osTUFBTSxNQUFNO0FBQ1osTUFBTSxTQUFTO0FBQ2YsTUFBTSxTQUFTO0FBQ2YsTUFBTSxVQUFVO0FBQ2hCLE1BQU0sUUFBUTtBQUNkLE1BQU0sU0FBUztBQUNmLE1BQU0sV0FBVztBQUNqQixNQUFNLGFBQWE7QUFDbkIsTUFBTSxTQUFTO0FBQ2YsTUFBTSxRQUFRO0FBQ2QsTUFBTSxZQUFZO0FBQ2xCLE1BQU0sS0FBSyxDQUFDO0FBQ1o7QUFDQSxFQUFFLElBQUksTUFBTSxFQUFFO0FBQ2Q7QUFDQSxJQUFJLElBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQzdDLElBQUksT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QyxHQUFHO0FBQ0g7QUFDQSxFQUFFLFFBQVEsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQy9CLElBQUksSUFBSSxFQUFFLFFBQVEsR0FBRyxPQUFPLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQy9DLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQ2pFLEVBQUUsWUFBWSxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0MsRUFBRSxJQUFJLFlBQVksR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQ3pDO0FBQ0EsRUFBRSxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQ2hFO0FBQ0E7QUFDQSxFQUFFLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNuQztBQUNBLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDcEIsSUFBSSxJQUFJLEVBQUUsU0FBUztBQUNuQixJQUFJLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFO0FBQ3ZDLElBQUksS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDeEIsR0FBRyxDQUFDLENBQUM7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxNQUFNLEdBQUcsU0FBUyxDQUFDO0FBQ3JCLEVBQUUsTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUFLO0FBQ1AsRUFBRSxTQUFTO0FBQ1gsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQztBQUN6QjtBQUNBLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdEIsTUFBTSxJQUFJLEVBQUUsU0FBUztBQUNyQixNQUFNLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDL0IsTUFBTSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRTtBQUMxQixLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdEIsTUFBTSxJQUFJLEVBQUUsUUFBUTtBQUNwQixNQUFNLE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFO0FBQ2hGLE1BQU0sS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQztBQUM1QixNQUFNLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDL0IsTUFBTSxRQUFRLEVBQUUsRUFBRTtBQUNsQixLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdEIsTUFBTSxJQUFJLEVBQUUsVUFBVTtBQUN0QixNQUFNLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLO0FBQzFCLEtBQUssQ0FBQyxDQUFDO0FBQ1A7QUFDQSxJQUFJLFNBQVM7QUFDYixNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFFBQVEsSUFBSSxFQUFFLFNBQVM7QUFDdkIsUUFBUSxLQUFLLEVBQUUsU0FBUyxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtBQUMxQyxRQUFRLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQzVCLE9BQU8sQ0FBQyxDQUFDO0FBQ1Q7QUFDQSxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQzdCLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7QUFDbkMsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztBQUNsQyxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7QUFDdkMsTUFBTSxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEUsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pFLE1BQU0sS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsTUFBTSxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztBQUNuQztBQUNBLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUQ7QUFDQTtBQUNBLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksWUFBWSxFQUFFO0FBQ3hDLFFBQVEsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUN0QixPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU0sWUFBWSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRjtBQUNBLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7QUFDdkMsTUFBTSxLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztBQUM3QixNQUFNLEtBQUssQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO0FBQ3ZDLE1BQU0sS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDbEMsTUFBTSxLQUFLLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztBQUNuQztBQUNBLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDeEIsUUFBUSxJQUFJLEVBQUUsVUFBVTtBQUN4QixRQUFRLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLO0FBQzVCLE9BQU8sQ0FBQyxDQUFDO0FBQ1Q7QUFDQSxNQUFNLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztBQUMzQztBQUNBLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFLEVBQUUsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQztBQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQ3BFLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDakQsTUFBTSxJQUFJLFlBQVksR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUU7QUFDdEM7QUFDQSxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUU7QUFDdkMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ3RCO0FBQ0EsSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUU7QUFDekMsSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRTtBQUMxRDtBQUNBLElBQUksTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDeEIsSUFBSSxJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUU7QUFDckMsSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO0FBQzVDLElBQUksSUFBSSxNQUFNLElBQUksT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFO0FBQ3JDO0FBQ0EsSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRTtBQUMxRCxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLElBQUksSUFBSSxZQUFZLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNwQixJQUFJLElBQUksRUFBRSxVQUFVO0FBQ3BCLElBQUksS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUs7QUFDeEIsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDMUI7QUFDQSxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFD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LENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO0FBQ3hFO0FBQ0EsTUFBTSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN0QixNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxFQUFFO0FBQ3pDLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2QsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ2xDLEVBQUUsSUFBSSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUTtBQUM5QyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRztBQUNyQixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQztBQUNBLEVBQUUsSUFBSSxFQUFFLEtBQUssSUFBSSxTQUFTLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUMzQztBQUNBLEVBQUUsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNkLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDUixFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3JCO0FBQ0EsRUFBRSxPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtBQUMzRTtBQUNBLEVBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2QztBQUNBLEVBQUUsVUFBVSxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDOUI7QUFDQSxFQUFFLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO0FBQ2pFLElBQUksUUFBUSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDOUI7QUFDQSxJQUFJLE9BQU8sUUFBUSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO0FBQzVGO0FBQ0EsSUFBSSxJQUFJLFFBQVEsR0FBRyxVQUFVLEtBQUssTUFBTSxDQUFDLE1BQU0sRUFBRTtBQUNqRCxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDbkIsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQ25CLFVBQVUsSUFBSSxFQUFFLE1BQU07QUFDdEIsVUFBVSxPQUFPLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQztBQUNuRCwrQkFBK0IsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUM7QUFDdEQsK0JBQStCLElBQUksRUFBRTtBQUNyQyxVQUFVLEtBQUssRUFBRSxLQUFLO0FBQ3RCLFVBQVUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO0FBQzVCLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsT0FBTztBQUNQLE1BQU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7QUFDM0IsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsRUFBRTtBQUMzQyxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUM3QixFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDNUIsRUFBRSxJQUFJLEtBQUs7QUFDWCxNQUFNLEdBQUc7QUFDVCxNQUFNLEtBQUs7QUFDWCxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTTtBQUN4QixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRztBQUN2QixNQUFNLFFBQVE7QUFDZCxNQUFNLFFBQVEsQ0FBQztBQUNmO0FBQ0EsRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksU0FBUyxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDcEUsRUFBRSxJQUFJLE1BQU0sRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDL0IsRUFBRSxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUN6QyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksU0FBUyxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDeEUsRUFBRSxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQ2hFO0FBQ0EsRUFBRSxRQUFRLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUQsRUFBRSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzdDO0FBQ0EsRUFBRSxJQUFJLFFBQVEsS0FBSyxJQUFJLFNBQVMsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQ2pELEVBQUUsSUFBSSxRQUFRLEtBQUssSUFBSSxTQUFTLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUNqRCxFQUFFLElBQUksUUFBUSxLQUFLLElBQUksSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUMvRDtBQUNBLEVBQUUsR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDbEIsRUFBRSxPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtBQUMzRSxFQUFFLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUU7QUFDdkI7QUFDQSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztBQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ2xFLElBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsR0FBRztBQUNIO0FBQ0EsRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDeEIsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ1o7QUFDQSxFQUFFLE9BQU8sS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFO0FBQzlCLElBQUksSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTO0FBQ3pELE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksU0FBUztBQUMvRCxRQUFRLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELFFBQVEsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLFFBQVEsSUFBSSxRQUFRLEtBQUssSUFBSSxXQUFXLFFBQVEsS0FBSyxJQUFJLFNBQVM7QUFDbEUsVUFBVSxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtBQUN0RDtBQUNBLFlBQVksS0FBSyxFQUFFLENBQUM7QUFDcEIsV0FBVyxNQUFNLElBQUksUUFBUSxLQUFLLElBQUksSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQzdEO0FBQ0EsWUFBWSxLQUFLLEVBQUUsQ0FBQztBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQzFCLFlBQVksS0FBSyxHQUFHLElBQUksQ0FBQztBQUN6QixZQUFZLE1BQU07QUFDbEIsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQyxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDZDtBQUNBLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDdEIsSUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQzNCLEVBQUUsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCO0FBQ0EsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2YsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMzRCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDNUQsR0FBRztBQUNIO0FBQ0EsRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDckIsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQzVCLEVBQUUsSUFBSSxLQUFLO0FBQ1gsTUFBTSxHQUFHO0FBQ1QsTUFBTSxLQUFLO0FBQ1gsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU07QUFDeEIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUc7QUFDdkIsTUFBTSxRQUFRO0FBQ2QsTUFBTSxRQUFRLENBQUM7QUFDZjtBQUNBLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQ3BFLEVBQUUsSUFBSSxNQUFNLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQy9CLEVBQUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDekMsRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQ3hFLEVBQUUsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUNoRTtBQUNBLEVBQUUsUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlELEVBQUUsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM3QztBQUNBLEVBQUUsSUFBSSxRQUFRLEtBQUssSUFBSSxTQUFTLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUNqRCxFQUFFLElBQUksUUFBUSxLQUFLLElBQUksU0FBUyxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDakQsRUFBRSxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLElBQUksRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDL0Q7QUFDQSxFQUFFLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLEVBQUUsT0FBTyxHQUFHLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7QUFDM0UsRUFBRSxJQUFJLEdBQUcsS0FBSyxLQUFLLEdBQUcsQ0FBQyxFQUFFO0FBQ3pCO0FBQ0EsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNsRSxJQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLEdBQUc7QUFDSDtBQUNBLEVBQUUsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNaO0FBQ0EsRUFBRSxPQUFPLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtBQUM5QixJQUFJLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksU0FBUztBQUN6RCxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLFNBQVM7QUFDL0QsUUFBUSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RCxRQUFRLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsRixRQUFRLElBQUksUUFBUSxLQUFLLElBQUksV0FBVyxRQUFRLEtBQUssSUFBSSxTQUFTO0FBQ2xFLFVBQVUsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7QUFDdEQ7QUFDQSxZQUFZLEtBQUssRUFBRSxDQUFDO0FBQ3BCLFdBQVcsTUFBTSxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtBQUM3RDtBQUNBLFlBQVksS0FBSyxFQUFFLENBQUM7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQSxVQUFVLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtBQUMxQixZQUFZLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsWUFBWSxNQUFNO0FBQ2xCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2Q7QUFDQSxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLElBQUksT0FBTyxLQUFLLENBQUM7QUFDakIsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUMzQixFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUN4QjtBQUNBLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNmLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDM0QsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzVELEdBQUc7QUFDSDtBQUNBLEVBQUUsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUMvQixFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ3JCLEVBQUUsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUM3QixFQUFFLElBQUksS0FBSztBQUNYLE1BQU0sR0FBRztBQUNULE1BQU0sS0FBSztBQUNYLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNO0FBQ3hCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHO0FBQ3ZCLE1BQU0sUUFBUTtBQUNkLE1BQU0sUUFBUSxDQUFDO0FBQ2Y7QUFDQSxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUNwRSxFQUFFLElBQUksTUFBTSxFQUFFLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUMvQixFQUFFLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQ3pDLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUN4RSxFQUFFLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDaEU7QUFDQSxFQUFFLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5RCxFQUFFLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDN0M7QUFDQSxFQUFFLElBQUksUUFBUSxLQUFLLElBQUksU0FBUyxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDakQsRUFBRSxJQUFJLFFBQVEsS0FBSyxJQUFJLFNBQVMsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQ2pELEVBQUUsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQy9EO0FBQ0EsRUFBRSxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNsQixFQUFFLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO0FBQzNFLEVBQUUsSUFBSSxHQUFHLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRTtBQUN6QjtBQUNBLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQzdCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDbEUsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0g7QUFDQSxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUN4QixFQUFFLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDWjtBQUNBLEVBQUUsT0FBTyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUU7QUFDOUIsSUFBSSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLFNBQVM7QUFDekQsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxTQUFTO0FBQy9ELFFBQVEsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkQsUUFBUSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbEYsUUFBUSxJQUFJLFFBQVEsS0FBSyxJQUFJLFdBQVcsUUFBUSxLQUFLLElBQUksU0FBUztBQUNsRSxVQUFVLElBQUksUUFBUSxLQUFLLElBQUksSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ3REO0FBQ0EsWUFBWSxLQUFLLEVBQUUsQ0FBQztBQUNwQixXQUFXLE1BQU0sSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7QUFDN0Q7QUFDQSxZQUFZLEtBQUssRUFBRSxDQUFDO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0EsVUFBVSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7QUFDMUIsWUFBWSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFlBQVksTUFBTTtBQUNsQixXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNkO0FBQ0EsSUFBSSxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUN0QixJQUFJLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDM0IsRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDeEI7QUFDQSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDZixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzVELElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUM3RCxHQUFHO0FBQ0g7QUFDQSxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDL0IsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNyQixFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxDQUFDLElBQUksRUFBRTtBQUMxQixFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxZQUFZLElBQUksSUFBSSxJQUFJO0FBQzlDLFVBQVUsSUFBSSxJQUFJLElBQUksWUFBWSxJQUFJLElBQUksSUFBSSxTQUFTO0FBQ3ZELFVBQVUsSUFBSSxJQUFJLElBQUksWUFBWSxJQUFJLElBQUksSUFBSSxTQUFTLENBQUM7QUFDeEQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDbEMsRUFBRSxJQUFJLEdBQUcsR0FBRyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLO0FBQzVDLE1BQU0sUUFBUSxHQUFHLElBQUk7QUFDckIsTUFBTSxTQUFTLEdBQUcsSUFBSTtBQUN0QixNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTTtBQUN4QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQztBQUNBLEVBQUUsUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlEO0FBQ0EsRUFBRSxPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtBQUN0RSxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxFQUFFLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRTtBQUN2QyxFQUFFLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ3RCO0FBQ0EsRUFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7QUFDbEI7QUFDQSxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ2pDLEdBQUcsTUFBTTtBQUNULElBQUksUUFBUSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUQ7QUFDQTtBQUNBLElBQUksSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUUsRUFBRSxRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUU7QUFDckUsSUFBSSxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLElBQUksRUFBRSxFQUFFLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRTtBQUN0RTtBQUNBLElBQUksSUFBSSxNQUFNLEtBQUssSUFBSSxVQUFVO0FBQ2pDO0FBQ0EsTUFBTSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRTtBQUNyRCxNQUFNLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsU0FBUyxHQUFHLEtBQUssQ0FBQyxF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O0FBQ1AsR0FBRztBQUNILEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQy9CLEVBQUUsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFVBQVUsR0FBRyxzQ0FBc0MsQ0FBQztBQUN4RCxJQUFJLFFBQVEsS0FBSywyQkFBMkIsQ0FBQztBQUM3QztBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUMvQixFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDM0Q7QUFDQSxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUNsRTtBQUNBLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtBQUNyQixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkM7QUFDQSxJQUFJLElBQUksRUFBRSxLQUFLLElBQUksVUFBVTtBQUM3QixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckQsTUFBTSxJQUFJLEtBQUssRUFBRTtBQUNqQixRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDckIsVUFBVSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FB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QUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsS0FBSyxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssS0FBSyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLEtBQUssR0FBRyxDQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssS0FBSztBQUN4QyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLO0FBQy9DLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQztBQUNGO0FBQ0EsU0FBUyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDbkMsRUFBRSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLEVBQUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLEVBQUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckMsRUFBRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUN4QixJQUFJLElBQUksR0FBRyxNQUFNLENBQUM7QUFDbEIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ3RCLEdBQUc7QUFDSCxFQUFFLElBQUksR0FBRyxHQUFHLHFCQUFxQixDQUFDO0FBQ2xDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMxQyxFQUFFLEdBQUcsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDakMsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssS0FBSztBQUN4QyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxLQUFLLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssS0FBSztBQUM5QyxFQUFFLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0QsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUtDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUs7QUFDbEMsRUFBRSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDcEIsRUFBRSxPQUFPLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3hELENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sS0FBSztBQUNqQyxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFH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QUFJLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM3QjtBQUNBLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUNsRSxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDM0QsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLFFBQVEsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xGLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUksS0FBSyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUM3RSxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLE1BQU0sRUFBRSxHQUFHLEVBQUU7QUFDeEMsRUFBRSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLEVBQUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbkMsRUFBRSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJ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
