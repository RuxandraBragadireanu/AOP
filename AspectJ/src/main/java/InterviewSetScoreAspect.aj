import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public aspect InterviewSetScoreAspect {

    private Logger log = LoggerFactory.getLogger(InterviewSetScoreAspect.class);

    pointcut myPointcut(Integer score) :
             call(* com.fmi.aop.entity.Interview.setScore(Integer))
             && args(score) ;

    void around(Integer score) : myPointcut(score) {
        if(score < 0){
            score = 0;
        }
        else if(score > 100){
            score = 100;
        }

        proceed(score);

        log.info("Score was set to {}", score);
    }
}
