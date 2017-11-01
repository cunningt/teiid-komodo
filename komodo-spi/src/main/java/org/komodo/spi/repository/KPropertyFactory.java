/*
 * JBoss, Home of Professional Open Source.
 * See the COPYRIGHT.txt file distributed with this work for information
 * regarding copyright ownership.  Some portions may be licensed
 * to Red Hat, Inc. under one or more contributor license agreements.
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA.
 */
package org.komodo.spi.repository;

import java.io.InputStream;
import java.util.Calendar;
import java.util.Date;
import org.komodo.spi.KException;
import org.komodo.spi.constants.StringConstants;
import org.komodo.spi.repository.Repository.UnitOfWork;

public interface KPropertyFactory extends StringConstants, RepositoryConstants {

    String DELIMITER = AT;

    /**
     * Values will be converted to a string if a conversion cannot be done. Only boolean, long, decimal, double, and string are
     * supported. A string conversion is done for all unsupported types.
     *
     * @param value
     *        the value (cannot be <code>null</code>)
     * @param type
     *        the required type of the property
     * @return the value converted to the required type (never <code>null</code>)
     * @throws KException
     *         if an error occurs
     */
    public Object convert(Object value, PropertyValueType type) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the name of the property
     * @throws KException
     */
    String getName(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the parent of the property
     * @throws KException
     */
    KomodoObject getParent(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return the property descriptor
     * @throws KException 
     */
    PropertyDescriptor getPropertyDescriptor(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return the property type
     * @throws KException 
     */
    PropertyValueType getType(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return true if this property contains multiple values
     * @throws KException 
     */
    boolean isMultiple(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return the value of the property according to the property's own type
     * @throws Exception
     */
    Object getValue(UnitOfWork transaction, Property property) throws Exception;

    /**
     * @param transaction
     * @param property
     * @return the values of the property according to the property's own type
     * @throws Exception
     */
    Object[] getValues(UnitOfWork transaction, Property property) throws Exception;

    /**
     * @param transaction
     * @param property
     * @return get the binary value of the property
     * @throws KException 
     */
    InputStream getBinary(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the binary streams of the property
     * @throws KException 
     */
    InputStream[] getBinaryValues(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the boolean value of the property
     * @throws KException 
     */
    Boolean getBoolean(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the boolean values of the property
     * @throws KException 
     */
    Boolean[] getBooleanValues(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the {@link String} value of the property
     * @throws KException 
     */
    String getString(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the {@link String}[] values of the property
     * @throws KException 
     */
    String[] getStringValues(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the {@link Long} value of the property
     * @throws KException 
     */
    Long getLong(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the {@link Long} values of the property
     * @throws KException 
     */
    Long[] getLongValues(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the {@link Integer} value of the property
     * @throws KException 
     */
    Integer getInteger(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the {@link Integer} values of the property
     * @throws KException 
     */
    Integer[] getIntegerValues(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the {@link Double} value of the property
     * @throws KException 
     */
    Double getDouble(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the {@link Double} values of the property
     * @throws KException 
     */
    Double[] getDoubleValues(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the {@link Date} value of the property
     * @throws KException 
     */
    Calendar getDate(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the {@link Date} values of the property
     * @throws KException
     */
    Calendar[] getDateValues(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the reference value of the property
     * @throws KException 
     */
    String getReference(UnitOfWork transaction, Property property) throws KException;

    /**
     * @param transaction
     * @param property
     * @return get the reference values of the property
     * @throws KException 
     */
    String[] getReferenceValues(UnitOfWork transaction, Property property) throws KException;

    /**
     * Set the value of the property
     *
     * @param transaction
     * @param property
     * @param values
     * @throws KException 
     */
    void setValue(UnitOfWork transaction, Property property, Object... values) throws KException;

}
