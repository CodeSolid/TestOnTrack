package com.codesolid.testontrack.model.respository.dal

import com.codesolid.testontrack.model.dao.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.cassandra.core.CassandraOperations
import org.springframework.data.cassandra.repository.CassandraRepository
import org.springframework.stereotype.Repository;

/**
 * Created by john on 7/3/15.
 */

//@Repository
interface UserRepository extends CassandraRepository<User> {

}
