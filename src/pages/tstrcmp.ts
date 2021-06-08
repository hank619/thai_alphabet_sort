export function tstrcmp(s1: string, s2: string) {
    let  d = 0;
    let c1: number;
    let c2: number;
    let i1 = 0, i2 = 0;
    for (;;) {
        while (s1.charCodeAt(i1) === s2.charCodeAt(i2) &&  s1.charCodeAt(i1) !== 0) {
            i1++;
            i2++;
        }
        c1 = s1.charCodeAt(i1);
        c2 = s2.charCodeAt(i2);
        if (isStone(c1) && isStone(c2)) {
            i1++;
            i2++;
            if (d === 0) {
                d = c1 - c2
            }
        } else if (isStone(c1)) {
            i1++;
            if (d === 0) {
                d = 1;
            }
        } else if (isStone(c2)) {
            i2++;
            if (d === 0) {
                d = -1;
            }
        } else break;
    }
    if (c1 === 0 && c2 === 0) return d;
    if (c1 === 0 || c2 === 0) return c1 - c2;
    if (isVowel(c1) && isVowel(c2)) {
        return s1.charCodeAt(1) !== s2.charCodeAt(1) ? s1.charCodeAt(1) - s2.charCodeAt(1) : c1 - c2;
    } else if (isVowel(c1)) {
        return s1.charCodeAt(1) !== c2 ? s1.charCodeAt(1) - c2 : 1;
    } else if (isVowel(c2)) {
        return c1 !== s2.charCodeAt(1) ? c1 - s2.charCodeAt(1) : -1;
    } else return c1 - c2;
}
  
function isVowel(char: number): boolean {
    return 0xE0 <= char && char <= 0xE4;
}

function isStone(char: number): boolean {
    return 0xE6 <= char && char <= 0xEC;
}