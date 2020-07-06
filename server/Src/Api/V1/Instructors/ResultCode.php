<?php
/*
 * Copyright (c) 2020 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

namespace App\Api\V1\Instructors;

class ResultCode {
    
    public const RESPONSE_OK = 0;
    public const FAIL_INVALID_LOGIN = -1;
    private const MSG = [
        "Instructors request handled successfully",
        "Invalid instructor email or password"
    ];
    
    private static function getMsgIndex(int $responseCode): int {
        return -$responseCode;
    }
    
    public static function getMessage(int $responseCode): string {
        if ($responseCode < -1 || $responseCode > 0) {
            return "N/A";
        }
        $index = self::getMsgIndex($responseCode);
        return self::MSG[$index];
    }
    
}