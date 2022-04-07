package com.fmi.aop.mapper;

import com.fmi.aop.dto.InterviewDTO;
import com.fmi.aop.entity.Candidate;
import com.fmi.aop.entity.Interview;
import com.fmi.aop.entity.Interviewer;
import java.util.HashSet;
import java.util.Set;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-25T23:31:39+0100",
    comments = "version: 1.3.0.Final, compiler: javac, environment: Java 11.0.14 (Ubuntu)"
)
@Component
public class InterviewMapperImpl implements InterviewMapper {

    @Override
    public Interview convertInterviewDTOToInterview(InterviewDTO interviewDTO) {
        if ( interviewDTO == null ) {
            return null;
        }

        Interview interview = new Interview();

        interview.setCandidate( interviewDTOToCandidate( interviewDTO ) );
        interview.setInterviewer( interviewDTOToInterviewer( interviewDTO ) );
        interview.setId( interviewDTO.getId() );
        interview.setReservedRoom( interviewDTO.getReservedRoom() );
        interview.setType( interviewDTO.getType() );
        interview.setDate( interviewDTO.getDate() );
        interview.setScore( interviewDTO.getScore() );

        return interview;
    }

    @Override
    public InterviewDTO convertInterviewToInterviewDTO(Interview interview) {
        if ( interview == null ) {
            return null;
        }

        InterviewDTO interviewDTO = new InterviewDTO();

        interviewDTO.setCandidateId( interviewCandidateId( interview ) );
        interviewDTO.setInterviewerId( interviewInterviewerId( interview ) );
        interviewDTO.setId( interview.getId() );
        interviewDTO.setReservedRoom( interview.getReservedRoom() );
        interviewDTO.setType( interview.getType() );
        interviewDTO.setDate( interview.getDate() );
        interviewDTO.setScore( interview.getScore() );

        return interviewDTO;
    }

    @Override
    public Set<Interview> convertInterviewDTOToInterviewList(Set<InterviewDTO> interviewDTOSet) {
        if ( interviewDTOSet == null ) {
            return null;
        }

        Set<Interview> set = new HashSet<Interview>( Math.max( (int) ( interviewDTOSet.size() / .75f ) + 1, 16 ) );
        for ( InterviewDTO interviewDTO : interviewDTOSet ) {
            set.add( convertInterviewDTOToInterview( interviewDTO ) );
        }

        return set;
    }

    @Override
    public Set<InterviewDTO> convertInterviewToInterviewDTOList(Set<Interview> interviewSet) {
        if ( interviewSet == null ) {
            return null;
        }

        Set<InterviewDTO> set = new HashSet<InterviewDTO>( Math.max( (int) ( interviewSet.size() / .75f ) + 1, 16 ) );
        for ( Interview interview : interviewSet ) {
            set.add( convertInterviewToInterviewDTO( interview ) );
        }

        return set;
    }

    protected Candidate interviewDTOToCandidate(InterviewDTO interviewDTO) {
        if ( interviewDTO == null ) {
            return null;
        }

        Candidate candidate = new Candidate();

        candidate.setId( interviewDTO.getCandidateId() );

        return candidate;
    }

    protected Interviewer interviewDTOToInterviewer(InterviewDTO interviewDTO) {
        if ( interviewDTO == null ) {
            return null;
        }

        Interviewer interviewer = new Interviewer();

        interviewer.setId( interviewDTO.getInterviewerId() );

        return interviewer;
    }

    private Integer interviewCandidateId(Interview interview) {
        if ( interview == null ) {
            return null;
        }
        Candidate candidate = interview.getCandidate();
        if ( candidate == null ) {
            return null;
        }
        Integer id = candidate.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private Integer interviewInterviewerId(Interview interview) {
        if ( interview == null ) {
            return null;
        }
        Interviewer interviewer = interview.getInterviewer();
        if ( interviewer == null ) {
            return null;
        }
        Integer id = interviewer.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }
}
