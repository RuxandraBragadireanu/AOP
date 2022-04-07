import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public aspect RepositoryAspect {

    private Logger log = LoggerFactory.getLogger(RepositoryAspect.class);

    pointcut myPointcut() : call(* com.fmi.aop.repository.*.*(..));

    before() : myPointcut() {
        String methodName = thisJoinPoint.getSignature().getName();
        String className = thisJoinPoint.getTarget().getClass().toString();
        Object[] array = thisJoinPoint.getArgs();
        log.info("Executing method {} of class {} with the following parameters",methodName, className);
        for(Object parameter : array) {
            log.info("{} = {} ", parameter.getClass().getName(), parameter);
        }
    }
}