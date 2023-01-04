/* ================================================================================================================== *
 * Authors:                                                                                                           *
 *   Unai Martinez-Corral                                                                                             *
 *                                                                                                                    *
 * ================================================================================================================== *
 * Copyright 2021-2022 Unai Martinez-Corral <unai.martinezcorral@ehu.eus>                                             *
 * Copyright 2022 Unai Martinez-Corral <umartinezcorral@antmicro.com>                                                 *
 *                                                                                                                    *
 * Licensed under the Apache License, Version 2.0 (the "License");                                                    *
 * you may not use this file except in compliance with the License.                                                   *
 * You may obtain a copy of the License at                                                                            *
 *                                                                                                                    *
 *     http://www.apache.org/licenses/LICENSE-2.0                                                                     *
 *                                                                                                                    *
 * Unless required by applicable law or agreed to in writing, software                                                *
 * distributed under the License is distributed on an "AS IS" BASIS,                                                  *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                           *
 * See the License for the specific language governing permissions and                                                *
 * limitations under the License.                                                                                     *
 *                                                                                                                    *
 * SPDX-License-Identifier: Apache-2.0                                                                                *
 * ================================================================================================================== *
 *                                                                                                                    *
 * Context:                                                                                                           *
 * * https://github.com/docker/login-action/issues/72                                                                 *
 * * https://github.com/actions/runner/issues/1478                                                                    *
 * ================================================================================================================== */

/* ================================================================================================================== *
 * Authors:                                                                                                           *
 *   Tomasz Lizer                                                                                             *
 *                                                                                                                    *
 * ================================================================================================================== *
 * Copyright 2023 Tomasz Lizer <tomasz.lizer@gmail.com>                                                               *
 *                                                                                                                    *
 * Licensed under the Apache License, Version 2.0 (the "License");                                                    *
 * you may not use this file except in compliance with the License.                                                   *
 * You may obtain a copy of the License at                                                                            *
 *                                                                                                                    *
 *     http://www.apache.org/licenses/LICENSE-2.0                                                                     *
 *                                                                                                                    *
 * Unless required by applicable law or agreed to in writing, software                                                *
 * distributed under the License is distributed on an "AS IS" BASIS,                                                  *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                           *
 * See the License for the specific language governing permissions and                                                *
 * limitations under the License.                                                                                     *
 *                                                                                                                    *
 * SPDX-License-Identifier: Apache-2.0                                                                                *
 * ================================================================================================================== *
 *                                                                                                                    *
 * Context:                                                                                                           *
 * * Refactor code to separate files for main and post action scripts                                                 *
 * * Before modifications:                                                                                            *
 * * https://github.com/pyTooling/Actions/blob/cc576ce25a588e4fd623f3a4ea528f397141e931/with-post-step/main.js        *
 * ================================================================================================================== */

const { spawn } = require("child_process");

function run(cmd) {
  const subprocess = spawn(cmd, { stdio: "inherit", shell: true });
  subprocess.on("exit", (exitCode) => {
    process.exitCode = exitCode;
  });
}

module.exports = run;