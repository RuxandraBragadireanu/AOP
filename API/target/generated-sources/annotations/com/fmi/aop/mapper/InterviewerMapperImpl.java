package com.fmi.aop.mapper;

import com.fmi.aop.dto.InterviewDTO;
import com.fmi.aop.dto.InterviewerDTO;
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
public class InterviewerMapperImpl implements InterviewerMapper {

    @Override
    public Interviewer convertInterviewerDTOToInterviewer(InterviewerDTO interviewerDTO) {
        if ( interviewerDTO == null ) {
            return null;
        }

        Interviewer interviewer = new Interviewer();

        interviewer.setId( interviewerDTO.getId() );
        interviewer.setFirstName( interviewerDTO.getFirstName() );
        interviewer.setLastName( interviewerDTO.getLastName() );
        interviewer.setEmail( interviewerDTO.getEmail() );
        interviewer.setEnabled( interviewerDTO.isEnabled() );
        interviewer.setDepartment( interviewerDTO.getDepartment() );
        interviewer.setPassword( interviewerDTO.getPassword() );
        interviewer.setInterviews( interviewDTOSetToInterviewSet( interviewerDTO.getInterviews() ) );

        return interviewer;
    }

    @Override
    public InterviewerDTO convertInterviewerToInterviewerDTO(Interviewer interviewer) {
        if ( interviewer == null ) {
            return null;
        }

        InterviewerDTO interviewerDTO = new InterviewerDTO();

        interviewerDTO.setId( interviewer.getId() );
        interviewerDTO.setFirstName( interviewer.getFirstName() );
        interviewerDTO.setLastName( interviewer.getLastName() );
        interviewerDTO.setEmail( interviewer.getEmail() );
        interviewerDTO.setEnabled( interviewer.isEnabled() );
        interviewerDTO.setDepartment( interviewer.getDepartment() );
        interviewerDTO.setPassword( interviewer.getPassword() );
        interviewerDTO.setInterviews( interviewSetToInterviewDTOSet( interviewer.getInterviews() ) );

        return interviewerDTO;
    }

    @Override
    public Set<Interviewer> convertInterviewerDTOToInterviewerList(Set<InterviewerDTO> interviewerDTOSet) {
        if ( interviewerDTOSet == null ) {
            return null;
        }

        Set<Interviewer> set = new HashSet<Interviewer>( Math.max( (int) ( interviewerDTOSet.size() / .75f ) + 1, 16 ) );
        for ( InterviewerDTO interviewerDTO : interviewerDTOSet ) {
            set.add( convertInterviewerDTOToInterviewer( interviewerDTO ) );
        }

        return set;
    }

    @Override
    public Set<InterviewerDTO> convertInterviewerToInterviewerDTOList(Set<Interviewer> interviewerSet) {
        if ( interviewerSet == null ) {
            return null;
        }

        Set<InterviewerDTO> set = new HashSet<InterviewerDTO>( Math.max( (int) ( interviewerSet.size() / .75f ) + 1, 16 ) );
        for ( Interviewer interviewer : interviewerSet ) {
            set.add( convertInterviewerToInterviewerDTO( interviewer ) );
        }

        return set;
    }

    protected Interview interviewDTOToInterview(InterviewDTO interviewDTO) {
        if ( interviewDTO == null ) {
            return null;
        }

        Interview interview = new Interview();

        interview.setId( interviewDTO.getId() );
        interview.setReservedRoom( interviewDTO.getReservedRoom() );
        interview.setType( interviewDTO.getType() );
        interview.setDate( interviewDTO.getDate() );
        interview.setScore( interviewDTO.getScore() );

        return interview;
    }

    protected Set<Interview> interviewDTOSetToInterviewSet(Set<InterviewDTO> set) {
        if ( set == null ) {
            return null;
        }

        Set<Interview> set1 = new HashSet<Interview>( Math.max( (int) ( set.size() / .75f ) + 1, 16 ) );
        for ( InterviewDTO interviewDTO : set ) {
            set1.add( interviewDTOToInterview( interviewDTO ) );
        }

        return set1;
    }

    protected InterviewDTO interviewToInterviewDTO(Interview interview) {
        if ( interview == null ) {
            return null;
        }

        InterviewDTO interviewDTO = new InterviewDTO();

        interviewDTO.setId( interview.getId() );
        interviewDTO.setReservedRoom( interview.getReservedRoom() );
        interviewDTO.setType( interview.getType() );
        interviewDTO.setDate( interview.getDate() );
        interviewDTO.setScore( interview.getScore() );

        return interviewDTO;
    }

    protected Set<InterviewDTO> interviewSetToInterviewDTOSet(Set<Interview> set) {
        if ( set == null ) {
            return null;
        }

        Set<InterviewDTO> set1 = new HashSet<InterviewDTO>( Math.max( (int) ( set.size() / .75f ) + 1, 16 ) );
        for ( Interview interview : set ) {
            set1.add( interviewToInterviewDTO( interview ) );
        }

        return set1;
    }
}
