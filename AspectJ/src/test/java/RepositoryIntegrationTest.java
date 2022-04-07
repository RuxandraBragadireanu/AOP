import com.fmi.aop.AopApplication;
import com.fmi.aop.entity.Candidate;
import com.fmi.aop.entity.Interview;
import com.fmi.aop.entity.Interviewer;
import com.fmi.aop.repository.CandidateRepository;
import com.fmi.aop.repository.InterviewRepository;
import com.fmi.aop.repository.InterviewerRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest(
        classes = AopApplication.class)
public class RepositoryIntegrationTest {

    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private InterviewerRepository interviewerRepository;

    @Test
    public void TestCandidateRepository() {

        Candidate candidate = new Candidate(null, "candidate", "candidate", "emailCandidate@gmail.com","", null);
        candidateRepository.save(candidate);

        Assert.assertNotNull(candidateRepository.findCandidateByEmail("emailCandidate@gmail.com"));

        candidateRepository.delete(candidate);
        Assert.assertEquals(candidateRepository.findCandidateByEmail("emailCandidate@gmail.com"), Optional.empty());
    }

    @Test
    public void TestInterviewerRepository() {

        Interviewer interviewer = new Interviewer(null, "interviewer", "interviewer", "emailInterviewer@gmail.com", false, "", "", null);
        interviewerRepository.save(interviewer);

        Assert.assertNotNull(interviewerRepository.findInterviewerByEmail("emailInterviewer@gmail.com"));

        interviewerRepository.delete(interviewer);
        Assert.assertEquals(interviewerRepository.findInterviewerByEmail("emailInterviewer@gmail.com"), Optional.empty());
    }



}
