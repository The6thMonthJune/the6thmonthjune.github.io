import React, { PropsWithChildren, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { iSideProject } from './iSideProject'
import SideProjectModal from './modal'
import SideProjectRow from './row'

const SideProjectComponent = ({
  payload,
}: PropsWithChildren<{ payload: iSideProject.Payload }>) => {
  // if (payload.disable) return null
  // 훅들은 항상 컴포넌트 최상단에서 먼저 호출되어야 해.
  // 조건문 'if (payload.disable) return null' 보다 위에 위치해야 함!

  const [open, setOpen] = useState(false)
  const [pjt, setPjt] = useState<iSideProject.SideProject>({
    thumbnail: '',
    title: '',
    innerImage: [],
    subTitle: '',
    detail: '',
    contributes: [],
    techStack: [],
    github: '',
    projectDescription: [],
  });

  // 이제 여기서 payload.disable에 따라 렌더링 여부를 결정헤도 됨.
  // 훅들은 이미 호출된 상태니까 규칙 위반 아님!

  if(payload.disable){
    return null;
  }

  const toggle = () => {
    setOpen(!open)
  };

  return (
    <React.Fragment>
      <Row className={'mt-5 mb-2'}>
        <Col>
          <h3>SIDE-PROJECT</h3>
        </Col>
      </Row>
      <Row>
        {payload.list.map((pjt, index) => (
          <Col
            key={index.toString()}
            sm={12}
            md={4}
            className={'d-flex justify-content-center mb-2'}
            onClick={() => {
              setOpen(true)
              setPjt(pjt)
            }}
          >
            <SideProjectRow payload={pjt} />
          </Col>
        ))}
      </Row>
      <SideProjectModal payload={pjt} open={open} toggle={toggle} />
    </React.Fragment>
  )
}

export default SideProjectComponent;
