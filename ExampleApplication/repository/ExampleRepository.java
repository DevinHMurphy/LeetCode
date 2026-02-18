package ExampleApplication.repository;

//import applicable beans

@Repository
public interface ExampleRepository extends JpaRepository<ExampleEntity, Integer> {
    
    @Query("select NEW path.bean.ExampleBean(ee.id, ee.email" + " from ExampleEntity ee where condition")
}
