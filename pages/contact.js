import styled from "styled-components";

import Layout from "../components/layout";
import Container from "../components/container";
import PageBanner from "../components/page-banner";
import ContactForm from "../components/contact-form";

import { contactDetails } from "../lib/constants";

export default function Contact() {
  return (
    <>
      <Layout>
        <Container>
          <PageBanner title='Contact' img='./banner--contact.jpg' />
          <StyledSection>
            <div className='content'>
              <div className='row'>
                <div className='col'>
                  <h2>Reach out to us</h2>
                  <p>
                    Fill in this form and we'll get back to you shortly.
                    <br />
                    Alternatively, email us at <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                  </p>
                </div>
                <div className='col'>
                  <h2>{contactDetails.name}</h2>
                  <p>T: {contactDetails.phone}</p>
                  <p>E: {contactDetails.email}</p>
                </div>
              </div>
              <div className='form-wrp'>
                <ContactForm />
              </div>
            </div>
          </StyledSection>
        </Container>
      </Layout>
    </>
  );
}

const StyledSection = styled.section`
	padding: 150px 0;
	
	@media (max-width: 1300px) {
		padding: 100px 0
	}

  .content {
    display: flex;
    flex-direction: column;

    .row {
      display: flex;
			justify-content: space-between;
			
			@media (max-width: 1300px) {
				flex-direction: column;
			}

      .col {

				@media (max-width: 1300px) {
					margin: 0 0 40px 0;
				}


        h2 {
          font-weight: 300;
        }

        p {
					margin: 3px 0;
				}
				
				a {
					text-decoration: none;
					color: ${({ theme }) => theme.color.primary};
				}
      }
    }

    .form-wrp {
      margin-top: 40px;
      width: 66%:	
    }
  }
`;
