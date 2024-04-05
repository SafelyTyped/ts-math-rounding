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

import { describe, it } from "mocha";
import { roundTo } from "@safelytyped/math-rounding";
import { expect } from "chai";

describe("roundTo()", () => {
    it("calls the rounding function provided", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that roundTo() uses whatever transform we
        // pass in as the roundFunc()

        // ----------------------------------------------------------------
        // setup your test

        let roundFuncCalled = false;
        const roundFunc = function(x: number) {
            roundFuncCalled = true;
            return x;
        }

        const inputValue = 3.1415927;

        // ----------------------------------------------------------------
        // perform the change

        // the `precision` value has no effect here, because our `roundFunc()`
        // does no truncating in this test
        const actualValue = roundTo(roundFunc, 2, inputValue);

        // ----------------------------------------------------------------
        // test the results

        expect(roundFuncCalled).to.be.true;
        expect(actualValue).to.eql(inputValue);
    });

    it("passes the original input value into the rounding function when precision == 0", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that roundTo() does not crap out when asked
        // to round a number to zero decimal places

        // ----------------------------------------------------------------
        // setup your test

        let roundFuncInput = NaN;
        const roundFunc = function(x: number) {
            roundFuncInput = x;
            return x;
        }

        const inputValue = 3.1415927;

        // ----------------------------------------------------------------
        // perform the change

        // the `precision` value has no effect here, because our `roundFunc()`
        // does no truncating in this test
        const actualValue = roundTo(roundFunc, 0, inputValue);

        // ----------------------------------------------------------------
        // test the results

        expect(roundFuncInput).to.eql(inputValue);
        expect(actualValue).to.eql(inputValue);
    });
});