import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext()
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Setup Quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              className="form-input"
              min={1}
              max={50}
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
            />
          </div>
          {error && (
            <p className="error">can't generate questions, please try different category</p>
          )}

          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              className="form-input"
              name="category"
              id="category"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">Sports</option>
              <option value="history">History</option>
              <option value="politics">Politics</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="difficulty">Difficulty</label>
            <select
              className="form-input"
              name="difficulty"
              id="difficulty"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button className="submit-btn" type="submit" onClick={handleSubmit}>
            Start
          </button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm
