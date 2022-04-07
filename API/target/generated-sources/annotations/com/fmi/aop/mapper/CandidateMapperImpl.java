package com.fmi.aop.mapper;

import com.fmi.aop.dto.CandidateDTO;
import com.fmi.aop.dto.InterviewDTO;
import com.fmi.aop.entity.Candidate;
import com.fmi.aop.entity.Interview;
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
public class CandidateMapperImpl implements CandidateMapper {

    @Override
    public Candidate convertCandidateDTOToCandidate(CandidateDTO candidateDTO) {
        if ( candidateDTO == null ) {
            return null;
        }

        Candidate candidate = new Candidate();

        candidate.setId( candidateDTO.getId() );
        candidate.setFirstName( candidateDTO.getFirstName() );
        candidate.setLastName( candidateDTO.getLastName() );
        candidate.setEmail( candidateDTO.getEmail() );
        candidate.setPhone( candidateDTO.getPhone() );
        candidate.setInterviews( interviewDTOSetToInterviewSet( candidateDTO.getInterviews() ) );

        return candidate;
    }

    @Override
    public CandidateDTO convertCandidateToCandidateDTO(Candidate candidate) {
        if ( candidate == null ) {
            return null;
        }

        CandidateDTO candidateDTO = new CandidateDTO();

        candidateDTO.setId( candidate.getId() );
        candidateDTO.setFirstName( candidate.getFirstName() );
        candidateDTO.setLastName( candidate.getLastName() );
        candidateDTO.setEmail( candidate.getEmail() );
        candidateDTO.setPhone( candidate.getPhone() );
        candidateDTO.setInterviews( interviewSetToInterviewDTOSet( candidate.getInterviews() ) );

        return candidateDTO;
    }

    @Override
    public Set<Candidate> convertCandidateDTOToCandidateList(Set<CandidateDTO> candidateDTOSet) {
        if ( candidateDTOSet == null ) {
            return null;
        }

        Set<Candidate> set = new HashSet<Candidate>( Math.max( (int) ( candidateDTOSet.size() / .75f ) + 1, 16 ) );
        for ( CandidateDTO candidateDTO : candidateDTOSet ) {
            set.add( convertCandidateDTOToCandidate( candidateDTO ) );
        }

        return set;
    }

    @Override
    public Set<CandidateDTO> convertCandidateToCandidateDTOList(Set<Candidate> candidateSet) {
        if ( candidateSet == null ) {
            return null;
        }

        Set<CandidateDTO> set = new HashSet<CandidateDTO>( Math.max( (int) ( candidateSet.size() / .75f ) + 1, 16 ) );
        for ( Candidate candidate : candidateSet ) {
            set.add( convertCandidateToCandidateDTO( candidate ) );
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
