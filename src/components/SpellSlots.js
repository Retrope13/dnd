import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import PlayerCharacter from "../Classes/PlayerCharacter";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { addItemsFromImport } from "../app";
import { InfoCircleFill } from "react-bootstrap-icons";

export function SpellSlots() {
  //I might want to make this gray out checkboxes depending on the character's level. This also comes at the risk of restricting homebrew though.
  const [showSSModal, setShowSSModal] = useState(false);
  const FirstLevelCheckboxes = [
    { id: "inline-checkbox-1", disabled: false },
    { id: "inline-checkbox-1", disabled: false },
    { id: "inline-checkbox-1", disabled: false },
    { id: "inline-checkbox-1", disabled: false },
  ];
  const SecondtoFifthLevelCheckboxes = [
    { id: "inline-checkbox-2", disabled: false },
    { id: "inline-checkbox-2", disabled: false },
    { id: "inline-checkbox-2", disabled: false },
  ];
  const SixthAndSeventhLevelCheckboxes = [
    { id: "inline-checkbox-3", disabled: false },
    { id: "inline-checkbox-3", disabled: false },
  ];
  const EigthAndNinthLevelCheckboxes = [
    { id: "inline-checkbox-3", disabled: false },
  ];

  //This is SpellSlot modal not Schutzstaffel modal
  const handleCloseSSModal = () => setShowSSModal(false);
  const handleShowSSModal = () => setShowSSModal(true);

  function handleSSModal() {
    handleShowSSModal();
  }
  return (
    <div id="wrapperDiv">
      <div id="flexContainer">
        <h3>Spell Slots:</h3>
        <button id="spellSlotInfoButton" onClick={handleSSModal}>
          <InfoCircleFill className="infoIcons" />
        </button>
        <Form className="SpellSlotForm">
          <label class="FirstLevelSpellSlotLabel">1st level</label>
          {FirstLevelCheckboxes.map((checkbox) => (
            <div key={`inline-checkbox`} className="cb-3">
              <Form.Check
                key={checkbox.id}
                inline
                name="group1"
                type={"checkbox"}
                id={checkbox.id}
                disabled={checkbox.disabled}
              />
            </div>
          ))}
        </Form>

        <Form className="SpellSlotForm">
          <label class="SecondLevelSpellSlotLabel">2nd level</label>
          {SecondtoFifthLevelCheckboxes.map((checkbox) => (
            <div key={`inline-checkbox`} className="cb-3">
              <Form.Check
                key={checkbox.id}
                inline
                name="group1"
                type={"checkbox"}
                id={checkbox.id}
                disabled={checkbox.disabled}
              />
            </div>
          ))}
        </Form>

        <Form className="SpellSlotForm">
          <label class="SpellSlotLabel">3rd level</label>
          {SecondtoFifthLevelCheckboxes.map((checkbox) => (
            <div key={`inline-checkbox`} className="cb-3">
              <Form.Check
                key={checkbox.id}
                inline
                name="group1"
                type={"checkbox"}
                id={checkbox.id}
                disabled={checkbox.disabled}
              />
            </div>
          ))}
        </Form>

        <Form className="SpellSlotForm">
          <label class="SpellSlotLabel">4th level</label>
          {SecondtoFifthLevelCheckboxes.map((checkbox) => (
            <div key={`inline-checkbox`} className="cb-3">
              <Form.Check
                key={checkbox.id}
                inline
                name="group1"
                type={"checkbox"}
                id={checkbox.id}
                disabled={checkbox.disabled}
              />
            </div>
          ))}
        </Form>

        <Form className="SpellSlotForm">
          <label class="SpellSlotLabel">5th level</label>
          {SecondtoFifthLevelCheckboxes.map((checkbox) => (
            <div key={`inline-checkbox`} className="cb-3">
              <Form.Check
                key={checkbox.id}
                inline
                name="group1"
                type={"checkbox"}
                id={checkbox.id}
                disabled={checkbox.disabled}
              />
            </div>
          ))}
        </Form>

        <Form className="SpellSlotForm">
          <label class="SpellSlotLabel">6th level</label>
          {SixthAndSeventhLevelCheckboxes.map((checkbox) => (
            <div key={`inline-checkbox`} className="cb-3">
              <Form.Check
                key={checkbox.id}
                inline
                name="group1"
                type={"checkbox"}
                id={checkbox.id}
                disabled={checkbox.disabled}
              />
            </div>
          ))}
        </Form>

        <Form className="SpellSlotForm">
          <label class="SpellSlotLabel">7th level</label>
          {SixthAndSeventhLevelCheckboxes.map((checkbox) => (
            <div key={`inline-checkbox`} className="cb-3">
              <Form.Check
                key={checkbox.id}
                inline
                name="group1"
                type={"checkbox"}
                id={checkbox.id}
                disabled={checkbox.disabled}
              />
            </div>
          ))}
        </Form>

        <Form className="SpellSlotForm">
          <label class="SpellSlotLabel">8th level</label>
          {EigthAndNinthLevelCheckboxes.map((checkbox) => (
            <div key={`inline-checkbox`} className="cb-3">
              <Form.Check
                key={checkbox.id}
                inline
                name="group1"
                type={"checkbox"}
                id={checkbox.id}
                disabled={checkbox.disabled}
              />
            </div>
          ))}
        </Form>

        <Form className="SpellSlotForm">
          <label class="SpellSlotLabel">9th level </label>
          {EigthAndNinthLevelCheckboxes.map((checkbox) => (
            <div key={`inline-checkbox`} className="cb-3">
              <Form.Check
                key={checkbox.id}
                inline
                name="group1"
                type={"checkbox"}
                id={checkbox.id}
                disabled={checkbox.disabled}
              />
            </div>
          ))}
        </Form>
      </div>

      <Modal show={showSSModal} onHide={handleCloseSSModal}>
        <Modal.Header closeButton>
          <Modal.Title>What the heck are Spell Slots??</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            "Spell slots" refers to how many spells you can cast, sort of like
            the number of arrows in a quiver. Once you're out of spell slots you
            cannot cast spells from that spell level until you take a long rest.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSSModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
