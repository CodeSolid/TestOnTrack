package com.codesolid.testontrack.model.repsitory.cassandra

import com.codesolid.testontrack.CassandraConfig
import com.codesolid.testontrack.TestOnTrackConfiguration
import com.codesolid.testontrack.model.dao.User
import com.codesolid.testontrack.model.respository.dal.UserRepository
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.cassandra.core.CassandraOperations
import org.springframework.data.cassandra.repository.support.BasicMapId
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner
import static org.junit.Assert.*

/**
 * Created by john on 7/3/15.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes= [TestOnTrackConfiguration.class, CassandraConfig.class])
class UserRepositoryImplTest /* extends GroovyTestCase*/ {
    @Autowired
    CassandraConfig config;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private CassandraOperations cassandraOperations;

    @Test
    public void canGetUser() {
       User u  = userRepository.findOne(new BasicMapId().with("email", "elitepropertiesbroker@gmail.com"));
       assertEquals(u.getName(), "John Lockwood");
    }

    @Test
    public void canInsertUser() {
        User u = new User();
        u.setName("Jenniffer Lockwood")
        u.setEmail("JennifferLockwood@gmail.com")
        u.setPassword("Bogus But Updated")
        u.setSessionToken("Bogus Again")
        u.setAccount("ParticleWave")
        userRepository.save(u)

        User u2 = userRepository.findOne(new BasicMapId().with("email", "JennifferLockwood@gmail.com"));
        assertEquals(u2.getName(), u.getName())
    }
}
