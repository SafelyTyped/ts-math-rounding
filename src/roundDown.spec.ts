//
// Copyright (c) 2024-present Ganbaro Digital Ltd
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//
//   * Re-distributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//
//   * Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in
//     the documentation and/or other materials provided with the
//     distribution.
//
//   * Neither the names of the copyright holders nor the names of his
//     contributors may be used to endorse or promote products derived
//     from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
// ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//

import { describe } from "mocha";
import { roundDown } from "@safelytyped/math-rounding";
import { expect } from "chai";

const TEST_DATA = [
    {
        precision: 1,
        inputValue: 1.12,
        expectedValue: 1.1,
    },
    {
        precision: 2,
        inputValue: 3.1415927,
        expectedValue: 3.14,
    },
    {
        precision: 1,
        inputValue: 1.56,
        expectedValue: 1.5,
    },
    {
        precision: 1,
        inputValue: 1.59,
        expectedValue: 1.5,
    },
    {
        precision: 0,
        inputValue: 1.99,
        expectedValue: 1,
    },
];

describe("roundDown()", () => {
    TEST_DATA.forEach(({precision, inputValue, expectedValue}) => {
        it("correctly rounds down " + inputValue + " to " + precision + " decimal place(s): " + expectedValue, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that roundDown() is working as expected

            // ----------------------------------------------------------------
            // setup your test

            // no setup required

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = roundDown(precision, inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eql(expectedValue);
        });
    });
});