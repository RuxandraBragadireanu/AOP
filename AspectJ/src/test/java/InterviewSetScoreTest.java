import com.fmi.aop.AopApplication;
import com.fmi.aop.entity.Interview;
import com.fmi.aop.service.impl.JwtUserDetailsService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(
        classes = AopApplication.class)
public class InterviewSetScoreTest {

    @Test
    public void SetScoreTest() {
        Interview interview = new Interview();

        interview.setScore(-5);
        Assert.assertEquals(interview.getScore(), (Integer)0);

        interview.setScore(50);
        Assert.assertEquals(interview.getScore(), (Integer)50);

        interview.setScore(245);
        Assert.assertEquals(interview.getScore(), (Integer)100);

    }

}

