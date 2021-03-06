/*
 * Copyright Red Hat, Inc. and/or its affiliates
 * and other contributors as indicated by the @author tags and
 * the COPYRIGHT.txt file distributed with this work.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.komodo.rest.relational.json.connection;

import static org.komodo.rest.relational.json.KomodoJsonMarshaller.BUILDER;
import java.io.IOException;

import org.komodo.rest.relational.connection.ConnectionSchemaPairProperty;
import org.komodo.rest.relational.connection.ConnectionSchema;
import org.komodo.rest.relational.connection.ConnectionSchemaProperty;

import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * A GSON serializer/deserializer for {@status ConnectionSchemaProperty}.
 */
public class ConnectionSchemaPropertyPairPropertySerializer extends TypeAdapter<ConnectionSchemaPairProperty> {

    @Override
    public ConnectionSchemaPairProperty read(JsonReader in) throws IOException {
        // Not expecting to ever read the json
        throw new UnsupportedOperationException();
    }

    @Override
    public void write(JsonWriter out, ConnectionSchemaPairProperty value) throws IOException {
        out.beginObject();

        out.name(ConnectionSchema.PROPERTIES_LABEL);
        BUILDER.toJson(value.getProperties(), ConnectionSchemaPropertyListSerializer.class, out);

        out.name(ConnectionSchemaProperty.TYPE_LABEL);
        out.value(value.getType());

        out.name(ConnectionSchemaProperty.REQUIRED_LABEL);
        out.value(value.isRequired());

        out.name(ConnectionSchemaProperty.REPEATABLE_LABEL);
        out.value(value.isRepeatable());

        out.name(ConnectionSchemaProperty.LIMIT_LABEL);
        out.value(value.getLimit());

        out.endObject();
    }
}
