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
package org.komodo.datasources;

import java.util.Map;
import java.util.Properties;

import org.komodo.spi.constants.StringConstants;
import org.komodo.spi.runtime.SyndesisDataSource;

public class DefaultSyndesisDataSource implements SyndesisDataSource {
    private String name;
    private boolean bound;
    private String translator;
    private Map<String, String> properties;
    private DataSourceDefinition definition;

    @Override
    public String getName() {
        return name;
    }

    @Override
    public String getType() {
        return definition.getType();
    }

    @Override
    public boolean isBound() {
        return bound;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setBound(boolean bound) {
        this.bound = bound;
    }

    @Override
    public String getTranslatorName() {
        return translator;
    }

    public void setTranslatorName(String translator) {
        this.translator = translator;
    }

    public DataSourceDefinition getDefinition() {
        return definition;
    }

    public void setDefinition(DataSourceDefinition definition) {
        this.definition = definition;
    }
    
    public Map<String, String> getProperties() {
        return properties;
    }

    public void setProperties(Map<String, String> properties) {
        this.properties = properties;
    }
    
    public String getProperty(String key) {
        return this.properties.get(key);
    }

    public String canonicalKey(String key) {
        return this.name.replace(StringConstants.HYPHEN, StringConstants.UNDERSCORE).toUpperCase()
                + StringConstants.UNDERSCORE
                + key.replace(StringConstants.HYPHEN, StringConstants.UNDERSCORE).toUpperCase();
    }    
    
    protected String canonicalEnvKey(String key) {
        return "$(" + canonicalKey(key) + ")";
    }

    public Properties convertToDataSourceProperties() {
        return this.definition.getDataSourceProperties(this);
    }
}