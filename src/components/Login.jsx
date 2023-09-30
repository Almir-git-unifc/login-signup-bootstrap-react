function Login () {
  return (
    <div>
      {/* A tela vai ser d-flex, 100%, alinhado na vertical e horizontal, cor de fundo primário */}
      <div className='login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary'>
        {/*   p-5 é padding tamanho 5 */}
        <div className='40-w p-5 rounded'>
          <form>
            <h3>Sign In</h3>
            {/* mb-2 é distância embaixo */}
            <div className='mb-2'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='Enter Email'
                className='form-control'
              />
            </div>

            <div className='mb-2'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                placeholder='Enter Password'
                className='form-control'
              />
            </div>
            <div className='mb-2'>
              {/* custom-control fornece  um rótulo, um ícone de marcação e um ponto de verificação */}
              <input
                type='checkbox'
                className='custom-control custom-check'
                id='check'
              />
              <label htmlFor='password'>Remember password</label>
              <div className='d-grid'>
                <button className='btn btn-primary'>Sign In</button>
              </div>
            </div>
            <p className='text-right'>
              Forgot <a href=''>Password?</a>
              <a href=''>Sign up?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
