/**
 * @license
 * Copyright 2017 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ViewEditorI18n } from "../../../../dataservices/virtualization/view-editor/view-editor-i18n";
import { Command } from "../../../../dataservices/virtualization/view-editor/command/command";
import { Composition } from "../../../../dataservices/shared/composition.model";
import { CommandType } from "../../../../dataservices/virtualization/view-editor/command/command-type.enum";

export class AddCompositionCommand extends Command {

  /**
   * The command identifier.
   */
  public static readonly id = CommandType.ADD_COMPOSITION_COMMAND;

  /**
   * The name of the command argument whose value is the stringified composition
   */
  public static readonly addedComposition = "addedComposition";

  /**
   * Constructor
   * 'addedComposition' must be Composition object -OR- stringified composition
   *
   * @param  addedComposition the Composition object, or the stringified composition being
   *                               added (cannot be `null` or empty)
   * @param  id the command id.  If not supplied, an id is generated.
   */
  public constructor( addedComposition: string | Composition, id?: string ) {
    super( AddCompositionCommand.id, ViewEditorI18n.addCompositionCommandName );

    let arg: string;

    if ( typeof addedComposition === "string" ) {
      arg = addedComposition as string;
    } else {
      arg = JSON.stringify(addedComposition);
    }

    this._args.set( AddCompositionCommand.addedComposition, arg );

    if (!id) {
      //
      // Generate new id for this source
      //
      id = AddCompositionCommand.id + this.idGen;
    }

    this._args.set( Command.identArg, id);
  }

  public getComposition(): Composition {
    const compStr = this.getArg( AddCompositionCommand.addedComposition ) as string;
    const comp = Composition.create(JSON.parse(compStr));
    return comp;
  }

  public getPayload( ): string {
    return this.getArg( AddCompositionCommand.addedComposition ) as string;
  }

  public getId( ): string {
    return this.getArg( Command.identArg ) as string;
  }

}