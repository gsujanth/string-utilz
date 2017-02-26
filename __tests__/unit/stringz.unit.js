/**
 * Copyright 2017 MaddHacker
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

require('../../lib/stringz');

describe('Strings (Unit)', function () {
    /**
     * Check string#startsWith(val);
     */
    describe('#startsWith(str)', function () {
        it('should return true when the string starts with the given value', function () {
            expect('Bob'.startsWith('B')).toBe(true);
        });
        it('should be case sensitive', function () {
            expect('Bob'.startsWith('b')).toBe(false);
        });
        it('should respect many characters', function () {
            expect('Franklin'.startsWith('Frank')).toBe(true);
        });
        it('should be able to handle spaces', function () {
            expect('The quick brown fox'.startsWith('The quick')).toBe(true);
        });
    });

    /**
     * Check string#endsWith(val);
     */
    describe('#endsWith(str)', function () {
        it('should return true when the string ends with the given value', function () {
            expect('Bob'.endsWith('b')).toBe(true);
        });
        it('should be case sensitive', function () {
            expect('Bob'.endsWith('B')).toBe(false);
        });
        it('should respect many characters', function () {
            expect('Franklin'.endsWith('lin')).toBe(true);
        });
        it('should be able to handle spaces', function () {
            expect('The quick brown fox'.endsWith('brown fox')).toBe(true);
        });
    });

    /**
     * Check string#containsIgnoreCase(val);
     */
    describe('#containsIgnoreCase(str)', function () {
        it('should return true when the string contains the given value', function () {
            expect('Bob'.containsIgnoreCase('b')).toBe(true);
        });
        it('should be case insensitive', function () {
            expect('BOB'.containsIgnoreCase('b')).toBe(true);
        });
        it('should have no false positives', function () {
            expect('The quick brown'.containsIgnoreCase('x')).toBe(false);
        });
        it('should respect many characters', function () {
            expect('Franklin'.containsIgnoreCase('ankl')).toBe(true);
        });
        it('should be able to handle spaces', function () {
            expect('The quick brown fox'.containsIgnoreCase('ck bro')).toBe(true);
        });
    });

    /**
     * Check string#replaceAll(oldStr,newStr);
     */
    describe('#replaceAll(oldStr,newStr)', function () {
        it('should return the same string when the replace value does not match anything', function () {
            expect('The quick brown fox'.replaceAll('bob', 'frank')).toBe('The quick brown fox');
        });
        it('should replace one character', function () {
            expect('Bob'.replaceAll('o', 'i')).toBe('Bib');
        });
        it('should replace all instances of a character', function () {
            expect('Bobby'.replaceAll('b', 'd')).toBe('Boddy');
        });
        it('should be case sensitive', function () {
            expect('Box'.replaceAll('b', 'd')).toBe('Box');
        });
        it('should respect spaces', function () {
            expect('Thequickbrownfox', 'The quick brown fox'.replaceAll(' ', '')).toBe('Thequickbrownfox');
        });
        it('should be able to change the first character', function () {
            expect('mitten'.replaceAll('m', 'k')).toBe('kitten');
        });
        it('should respect words', function () {
            expect('baa baa black sheep'.replaceAll('baa', 'meow')).toBe('meow meow black sheep');
        });
    });

    /**
     * Check string#replaceAllIgnoreCase(oldStr,newStr);
     */
    describe('#replaceAll(oldStr,newStr)', function () {
        it('should return the same string when the replace value does not match anything', function () {
            expect('The quick brown fox'.replaceAllIgnoreCase('bob', 'frank')).toBe('The quick brown fox');
        });
        it('should replace one character', function () {
            expect('Bob'.replaceAllIgnoreCase('o', 'i')).toBe('Bib');
        });
        it('should replace all instances of a character', function () {
            expect('Bobby'.replaceAllIgnoreCase('b', 'd')).toBe('doddy');
        });
        it('should be case sensitive', function () {
            expect('Box'.replaceAllIgnoreCase('b', 'd')).toBe('dox');
        });
        it('should respect spaces', function () {
            expect('Thequickbrownfox', 'The quick brown fox'.replaceAllIgnoreCase(' ', '')).toBe('Thequickbrownfox');
        });
        it('should be able to change the first character', function () {
            expect('mitten'.replaceAllIgnoreCase('m', 'k')).toBe('kitten');
        });
        it('should respect words', function () {
            expect('Baa baa black sheep'.replaceAllIgnoreCase('baa', 'meow')).toBe('meow meow black sheep');
        });
    });

    /**
     * Check string#escapeRegEx()
     */
    describe('#escapeRegEx() using indicies', function () {
        it('should escape -', function () {
            expect('-'.escapeRegEx()).toBe('\\-');
        });
        it('should escape [', function () {
            expect('['.escapeRegEx()).toBe('\\[');
        });
        it('should escape ]', function () {
            expect(']'.escapeRegEx()).toBe('\\]');
        });
        it('should escape /', function () {
            expect('/'.escapeRegEx()).toBe('\\/');
        });
        it('should escape {', function () {
            expect('{'.escapeRegEx()).toBe('\\{');
        });
        it('should escape }', function () {
            expect('}'.escapeRegEx()).toBe('\\}');
        });
        it('should escape (', function () {
            expect('('.escapeRegEx()).toBe('\\(');
        });
        it('should escape )', function () {
            expect(')'.escapeRegEx()).toBe('\\)');
        });
        it('should escape *', function () {
            expect('*'.escapeRegEx()).toBe('\\*');
        });
        it('should escape +', function () {
            expect('+'.escapeRegEx()).toBe('\\+');
        });
        it('should escape ?', function () {
            expect('?'.escapeRegEx()).toBe('\\?');
        });
        it('should escape .', function () {
            expect('.'.escapeRegEx()).toBe('\\.');
        });
        it('should escape \\ ', function () {
            expect('\ '.escapeRegEx()).toBe(' ');
        });
        it('should escape ^', function () {
            expect('^'.escapeRegEx()).toBe('\\^');
        });
        it('should escape $', function () {
            expect('$'.escapeRegEx()).toBe('\\$');
        });
        it('should escape |', function () {
            expect('|'.escapeRegEx()).toBe('\\|');
        });
    });

    /**
     * Check string#fmt(args...) with indicies;
     */
    describe('#fmt(args...) using indicies', function () {
        it('should return the same string when there are no fmt args', function () {
            expect('The quick brown fox'.fmt('bob', 'frank')).toBe('The quick brown fox');
        });
        it('should not replace open "{" at the beginning', function () {
            expect('The %{s %{s} %{2}'.fmt('quick', 'brown', 'fox')).toBe('The %{s quick fox');
        });
        it('should not replace open "{" all over the place', function () {
            expect('The %{s %{0} %{1 %{s} %{2} %{1'.fmt('quick', 'brown', 'fox')).toBe('The %{s quick %{1 quick fox %{1');
        });
        it('should support indicies in the "{}"', function () {
            expect('The %{0} %{1} %{2}'.fmt('quick', 'brown', 'fox')).toBe('The quick brown fox');
        });
        it('should support indicies out of order in the "{}"', function () {
            expect('The %{2} %{0} %{1}'.fmt('quick', 'brown', 'fox')).toBe('The fox quick brown');
        });
        it('should support indicies and the "s" mixed in the "{}"', function () {
            expect('The %{0} %{s} %{2}'.fmt('quick', 'brown', 'fox')).toBe('The quick quick fox');
        });
        it('should support indicies out of order and the "s" mixed in the "{}"', function () {
            expect('The %{2} %{s} %{0}'.fmt('quick', 'brown', 'fox')).toBe('The fox quick quick');
        });
        it('should support repeated indicies', function () {
            expect('The %{0} %{0} %{0}'.fmt('quick', 'brown', 'fox')).toBe('The quick quick quick');
        });
    });

    /**
     * Check string#fmt(args...) with simple string replacement;
     */
    describe('#fmt(args...) using indicies', function () {
        it('should return the same string when there are no fmt args', function () {
            expect('The quick brown fox'.fmt('bob', 'frank')).toBe('The quick brown fox');
        });
        it('should replace strings in order', function () {
            expect('The %{s} %{s} %{s}'.fmt('quick', 'brown', 'fox')).toBe('The quick brown fox');
        });
        it('should respect the "%%" as an escape strings in order', function () {
            expect('The %%{s} %%{s} %%{s}'.fmt('quick', 'brown', 'fox')).toBe('The %%{s} %%{s} %%{s}');
        });
        it('should respect the "%%" as an escape string, mixed with replacements', function () {
            expect('The %{s} %{s} %%{s}'.fmt('quick', 'brown', 'fox')).toBe('The quick brown %%{s}');
        });
        it('should not replace open "{" at the end', function () {
            expect('The %{s} %{s} %{2'.fmt('quick', 'brown', 'fox')).toBe('The quick brown %{2');
        });
        it('should not replace open "{" at the beginning', function () {
            expect('The %{s %{s} %{2}'.fmt('quick', 'brown', 'fox')).toBe('The %{s quick fox');
        });
        it('should not replace open "{" all over the place', function () {
            expect('The %{s %{0} %{1 %{s} %{2} %{1'.fmt('quick', 'brown', 'fox')).toBe('The %{s quick %{1 quick fox %{1');
        });
        it('should support indicies and the "s" mixed in the "{}"', function () {
            expect('The %{0} %{s} %{2}'.fmt('quick', 'brown', 'fox')).toBe('The quick quick fox');
        });
        it('should support indicies out of order and the "s" mixed in the "{}"', function () {
            expect('The %{2} %{s} %{0}'.fmt('quick', 'brown', 'fox')).toBe('The fox quick quick');
        });
    });
});
