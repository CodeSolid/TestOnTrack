package com.codesolid.testontrack.services

import com.codesolid.testontrack.model.dao.User
import org.junit.Test

/**
 * Created by john on 7/3/15.
 */
class UserTest extends GroovyTestCase {
    @Test
    public void testCanCreateUser() {
        def u = new User();
        u.setName("John Lockwood");
        assertEquals(u.getName(), "John Lockwood");
    }
}
